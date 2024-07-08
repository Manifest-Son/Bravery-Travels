import "./start.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

function Signup() {

  const validationSchema = Yup.object({
    firstname: Yup.string().required("First Name is required"),
    lastname: Yup.string().required("Last Name is required."),
    emailAddress: Yup.string()
      .required("Email is required.")
      .email("invalid email format"),
    password: Yup.string().required("Password is required."),
  });
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      emailAddress: "",
      password: "",
      checkbox: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
    validationSchema: validationSchema,
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
              {formik.errors.password && <p>{formik.errors.password} </p>}
              <div className="remember">
                <input
                  type="checkbox"
                  name="rememberMe"
                  id="remmberMe"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <p>
                  Agree to <a href="/">Terms and Conditions</a>
                </p>
              </div>
              <button className="submit-btn">Sign in</button>
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
          <p>We are her to serve you.</p>
        </div>
      </div>
    </>
  );
}

export default Signup;
