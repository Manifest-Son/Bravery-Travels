import "./start.css";
// import { Formik } from "formik";

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
            <form className="login-form">
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
                name="emailAddress"
                id="emailAddress"
                placeholder="--password--"
                className="form-input"
              />
              <div className="remember">
                <input type="checkbox" name="rememberMe" id="remmberMe" />
                <p>Remember Me</p>
              </div>
              <button className="submit-btn">Log In</button>
            </form>
            <div className="invite">
              <p>
                Would want to have an account with us?{" "}
                <a href="/signin">Sign In</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Logingin;
