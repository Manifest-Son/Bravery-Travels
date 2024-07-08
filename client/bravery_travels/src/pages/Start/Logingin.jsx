import "./start.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import {useState} from 'react'
import { apiURL } from "../../utils/config";


function Form() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [navigate, setNavigate] = useState(false)

  const validationSchema = Yup.object({
    emailAddress: Yup.string()
      .required("Email Addres is required")
      .email("invalid email format"),
    password: Yup.string().required("Password is required"),
  });
  const formik = useFormik({
    initialValues: {
      emailAddress: "",
      password: "",
    },
    onSubmit: (formState) => {
      console.log(formState);
    },
    validationSchema: validationSchema,
  });

  const handleSubmit = async (formValues) => {
    try{
      setLoading(true)
      setError(false)
      const response = await axios.post(`${apiURL}/api/auth/login`, formValues)
      const data = await response.json()
      if(data.success === true){
        navigate("/login")
      } else {
        setError(data.message)
      }
    } catch (error){
      setError(error.message)
    } finally{
      setLoading(false)
    }
    handleSubmit();
  }
  return (
    <form onSubmit={formik.handleSubmit} className="login-form">
      <div>
        <label htmlFor="emailAddress" className="form-lbl">
          Email Address:
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
        {formik.errors.emailAddress && <p>{formik.errors.emailAddress}</p>}
      </div>

      <div>
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
        {formik.errors.password && <p>{formik.errors.password}</p>}
      </div>
      <div className="remember">
        <input type="checkbox" name="rememberMe" id="remmberMe" />
        <p>Remember Me</p>
      </div>
      <button className="submit-btn" onClick={() => navigate("/signup")}>Log In</button>
    </form>
  );
}

function Logingin() {
  return (
    <>
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
                Would want to have an account with us?{" "}
                <Link to="/signup">Sign Up</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Logingin;
