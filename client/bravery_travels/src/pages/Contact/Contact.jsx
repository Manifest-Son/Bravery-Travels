import { IoMdMail } from "react-icons/io";
import { FaWhatsapp, FaXTwitter, FaLocationDot } from "react-icons/fa6";
import { FaLinkedin, FaFacebook, FaPhoneAlt } from "react-icons/fa";
import {} from "react-icons/fa6";
import "./Contact.css";

function WhereToFind() {
  return (
    <section className="contact_where_find">
      <h1 className="contact_head">Where to Find Us?</h1>
      <div className="contact_info">
        <p>
          <FaLocationDot /> Waiyaki Way, Urban Plaza Streets
        </p>
        <p>
          <FaPhoneAlt /> +254123456789
        </p>
        <p>
          <IoMdMail /> info@braverytravels.com
        </p>
      </div>
      <h1 className="contact_head">Socials</h1>
      <div className="contact_socials">
        <p>
          <FaWhatsapp /> +2547123456789
        </p>
        <p>
          <FaLinkedin /> Bravery Travels
        </p>
        <p>
          <FaFacebook /> Bravery Travels
        </p>
        <p>
          <FaXTwitter /> Bravery Travels
        </p>
      </div>
    </section>
  );
}

function ReachOut() {
  return (
    <section>
      <form className="form_wrapper">
        <h1 className="cont_form_head">Reach out to us</h1>
        <div className="form_join">
          <label htmlFor="fname" className="cont_form_lbl">
            First Name:
          </label>
          <input
            type="text"
            name="fname"
            id="fname"
            placeholder="John"
            className="cont_form_input"
          />
        </div>
        <div className="form_join">
          <label htmlFor="lname" className="cont_form_lbl">
            Last Name:
          </label>
          <input
            type="text"
            name="lname"
            id="lname"
            placeholder="Doe"
            className="cont_form_input"
          />
        </div>
        <div className="form_join">
          <label htmlFor="email" className="cont_form_lbl">
            Email:
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="johndoe@example.com"
            className="cont_form_input"
          />
        </div>
        <div className="form_join">
          <label htmlFor="fname" className="cont_form_lbl">
            Message:
          </label>
          <input
            type="textarea"
            name="message"
            id="message"
            placeholder="Write your message here."
            className="cont_form_input"
          />
        </div>
        <button className="submit_btn">submit</button>
      </form>
    </section>
  );
}

function Contact() {
  return (
    <section>
      <h1 className="contact_hero">Where to find us?</h1>
      <div className="contact_info_container">
        <WhereToFind />
        <div className="vl"></div>
        <ReachOut />
      </div>
    </section>
  );
}

export default Contact;
