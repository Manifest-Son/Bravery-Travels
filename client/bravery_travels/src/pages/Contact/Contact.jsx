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
    <section className="form_wrapper">
      <form>
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
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.868963124735!2d36.820089800000005!3d-1.2499265999999984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f16ef7ff9f5ef%3A0x25e656f02e241de1!2sMuthaiga%20Travel!5e0!3m2!1sen!2ske!4v1720198740486!5m2!1sen!2ske"
        allowfullscreen=""
      ></iframe>
    </section>
  );
}

export default Contact;
