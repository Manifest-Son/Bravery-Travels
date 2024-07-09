import "./start.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import { apiURL } from "../../utils/config";
import axios from "axios";


function Signup() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    firstname: Yup.string().required("First Name is required"),
    lastname: Yup.string().required("Last Name is required"),
    emailAddress: Yup.string()
      .required("Email is required")
      .email("Invalid email format"),
    password: Yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      emailAddress: "",
      password: ""
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        setLoading(true);
        setError('');
        const response = await axios.post(`${apiURL}/api/auth/signup`, values)
        // fetch(`${apiURL}/api/auth/signup`, {
          // localhost:3000/api/auth/signup
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify(values)
        // });
        console.log(response)
        const data = response.data;
        if (data.success === true) {
          navigate("/login");
        } else {
          setError(data.message);
        }
        console.log(data)
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <>
      <div className="start_container">
        <div className="start-form-wrapper">
          <div className="signup-contents">
            <h1>Sign Up</h1>
            <form onSubmit={formik.handleSubmit} className="signup-form">
              <label htmlFor="firstname" className="form-lbl">
                First Name:
              </label>
              <input
                type="text"
                name="firstname"
                id="firstname"
                value={formik.values.firstname}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="form-input"
              />
              {formik.errors.firstname && <p>{formik.errors.firstname}</p>}
              
              <label htmlFor="lastname" className="form-lbl">
                Last Name:
              </label>
              <input
                type="text"
                name="lastname"
                id="lastname"
                value={formik.values.lastname}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="form-input"
              />
              {formik.errors.lastname && <p>{formik.errors.lastname}</p>}

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
              {formik.errors.emailAddress && (
                <p>{formik.errors.emailAddress}</p>
              )}

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

              {error && <p>{error}</p>}

              <div className="remember">
                <input
                  type="checkbox"
                  name="rememberMe"
                  id="rememberMe"
                />
                <p>
                  Agree to <a href="/">Terms and Conditions</a>
                </p>
              </div>

              <button type="submit" className="submit-btn">
                {loading ? "Signing up..." : "Sign Up"}
              </button>
            </form>
            <div className="invite">
              <p>
                Do you have an account? <Link to="/login">Log In</Link>
              </p>
            </div>
          </div>
        </div>
        <div className="welcome-wrapper">
          <h1>We are glad that you are back.</h1>
          <p>We are here to serve you.</p>
        </div>
      </div>
    </>
  );
}

export default Signup;
