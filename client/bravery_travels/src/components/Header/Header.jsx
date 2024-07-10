import { FaFacebook } from "react-icons/fa";
import { FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import logo from "../../assets/logo.png";
import "./Header.css";
import { Link } from "react-router-dom";
import AuthProfile from "./AuthProfile";

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
    <section className="bottom_header">
      <div className="header_logo">
        <img src={logo} alt="Logo Company" />
      </div>
      <div>
        <ol className="nav_links">
          <li className="nav_links_wrap">
            <Link to="/">Home</Link>
          </li>
          <li className="nav_links_wrap">
            <Link to="/carhires">Car Hire</Link>
          </li>
          <li className="nav_links_wrap">
            <Link to="/price">Pricing</Link>
          </li>
          <li className="nav_links_wrap">
            <Link to="/about">About Us</Link>
          </li>
          <li className="nav_links_wrap">
            <Link to="/contact">Contacts</Link>
          </li>
        </ol>
      </div>
      <div className="login_signup">
        <AuthProfile />
      </div> 

    </section>
  );
}

function Header() {
  return (
    <>
      <section className="header_wrapper">
        <TopHeader />
        <BottomHeader />
      </section>
    </>
  );
}

export default Header;
