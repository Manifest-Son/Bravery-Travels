import "./start.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import { apiURL } from "../../utils/config";
import axios from "axios";
import useStore from '../../store/Store';

function Form() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { login } = useStore();

  const validationSchema = Yup.object({
    emailAddress: Yup.string()
      .required("Email Address is required")
      .email("Invalid email format"),
    password: Yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      emailAddress: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (formValues) => {
      try {
        setLoading(true);
        setError(null);
        console.log(formValues)
        const response = await axios.post(`${apiURL}/api/auth/login`, formValues);
        const data = response.data;
        console.log(response)
        console.log(data)
        if (data) {
          navigate("/profile"), login ;
        } else {
          setError(data.message);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="login-form">
      <div className="form_section">
        <label htmlFor="emailAddress" className="form-lbl">
          Email Address:
          {formik.errors.emailAddress && <p>{formik.errors.emailAddress}</p>}
        </label>
        <input
          type="email"
          name="emailAddress"
          id="emailAddress"
          value={formik.values.emailAddress}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="form-input"
        />
      </div>

      <div className="form_section">
      {formik.errors.password && <p>{formik.errors.password}</p>}
        <label htmlFor="password" className="form-lbl">
          Password:
        </label>
        <input
          type="password"
          name="password"
          id="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="form-input"
        />
      </div>
      {error && error}
      
      
      <div className="remember">
        <input type="checkbox" name="rememberMe" id="rememberMe" />
        <p>Remember Me</p>
      </div>

      <button type="submit" className="submit-btn">
        {loading ? "Logging in..." : "Log In"}
      </button>
    </form>
  );
}

function Logingin() {
  return (
    <div className="start_container">
      <div className="welcome-wrapper">
        <h1>Welcome to Bravery Travels.</h1>
        <p>Where the car is near you.</p>
      </div>
      <div className="start-form-wrapper">
        <div className="login-contents">
          <h1>Login In</h1>
          <Form />
          <div className="invite">
            <p>
              Want to have an account with us?{" "}
              <Link to="/signup">Sign Up</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Logingin;
