import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import logo from '../../assets/logo.png'
import './Footer.css'

function FooterContents() {
    return(
        <section className="footer_wrapper">
            <div className="footer_logo_txt">
                <img src={logo} alt=""  className="footer_logo"/>
                <h3>Bravery Travels</h3> 
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.<br /> Nostrum facere maiores, dolor provident est odio!</p>
            </div>
            <div className="site_navigation">
                <h1>Site Navigation</h1>
                <ol className="footer_links">
                    <li><nav>Home</nav></li>
                    <li><nav>Car Hire</nav></li>
                    <li><nav>Pricing</nav></li>
                    <li><nav>About Us</nav></li>
                    <li><nav>Contact Us</nav></li>
                </ol>
            </div>
            <div className="other_links">
                <h1>Other Links</h1>
                <ol className="footer_links">
                    <li><nav>Terms and Conditions</nav></li>
                    <li><nav>Refund Policy</nav></li>
                    <li><nav>Privacy Policy</nav></li>
                    <li><nav>About Us</nav></li>
                </ol>
            </div>
            <div className="contact_us">
                <h1>Contact Us</h1>
                <p><FaLocationDot /> Waiyaki Way, Urban Plaza Streets</p>
                <p><FaPhoneAlt /> +2547123456789</p>
                <p><IoMdMail /> info@braverytravels.com</p>
            </div>
        </section> 
    )
}

function FooterCopyright() {
    return(
        <p className="footer_copyright">&copy; Copyrights 2024. Made with love by Manifest-Son </p>
    )
}

function Footer() {
    return(
        <section>
            <FooterContents />
            <FooterCopyright />
        </section>
    )
}

export default Footer;