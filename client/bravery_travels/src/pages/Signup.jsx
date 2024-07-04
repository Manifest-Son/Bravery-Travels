import "./start.css";
// import { Formik } from "formik";

function Signup() {
  return (
    <>
      <div className="start_container">
        <div className="start-form-wrapper">
          <div className="signup-contents">
            <h1>Sign Up</h1>
            <form className="signup-form">
              <label htmlFor="firstname" className="form-lbl">
                First Name:
              </label>
              <input
                type="text"
                name="firstname"
                id="firstname"
                placeholder="--enter your fisrt name--"
                className="form-input"
              />
              <label htmlFor="lastname" className="form-lbl">
                Email Address:
              </label>
              <input
                type="text"
                name="lastname"
                id="lastname"
                placeholder="--enter your last name--"
                className="form-input"
              />
              <label htmlFor="emailAddress" className="form-lbl">
                Email Address:
              </label>
              <input
                type="email"
                name="emailAddress"
                id="emailAddress"
                placeholder="--enter email address--"
                className="form-input"
              />
              <label htmlFor="password" className="form-lbl">
                Password:{" "}
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="--password--"
                className="form-input"
              />
              <div className="remember">
                <input type="checkbox" name="rememberMe" id="remmberMe" />
                <p>
                  Agree to <a href="/">Terms and Conditions</a>
                </p>
              </div>
              <button className="submit-btn">Sign in</button>
            </form>
            <div className="invite">
              <p>
                Do you have an account? <a href="/signin">Log In</a>
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
