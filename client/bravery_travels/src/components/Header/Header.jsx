import { FaFacebook } from "react-icons/fa";
import { FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import logo from "../../assets/logo.png";
import "./Header.css";

function TopHeader() {
  return (
    <section className="top_header_container">
      <div className="contact_wrapper">
        <FaFacebook />
        <p>Bravery Travel</p>
      </div>
      <div className="contact_wrapper">
        <FaXTwitter />
        <p>Bravery Travel</p>
      </div>
      <div className="contact_wrapper">
        <FaLinkedin />
        <p>Bravery Travel</p>
      </div>
      <div className="contact_wrapper">
        <FaPhoneAlt />
        <p>+2547123456789</p>
      </div>
    </section>
  );
}

function BottomHeader() {
  return (
    <section className="bottom_container">
      <div className="header_nav_links">
        <ol className="nav_links">
          <li>
            <nav>Home</nav>
          </li>
          <li>
            <nav>Car Hire</nav>
          </li>
          <li>
            <nav>Pricing</nav>
          </li>
          <li>
            <nav>About Us</nav>
          </li>
          <li>
            <nav>Contact Us</nav>
          </li>
        </ol>
      </div>
      <div className="start_container">
        <button className="start_btn">Log In</button>
        <button className="start_btn">Sign Up</button>
      </div>
    </section>
  );
}

function Header() {
  return (
    <>
      <div className="header_wrapper">
        <img src={logo} alt="Company Logo" className="header_logo" />
        <div className="header_right">
          <TopHeader />
          <BottomHeader />
        </div>
      </div>
    </>
  );
}

export default Header;
