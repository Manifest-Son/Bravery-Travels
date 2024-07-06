// import { MdDateRange } from "react-icons/md";

function InquiryForm() {
  return (
    <section className="form_inquiry">
      <form action="">
        <h1>Fill this form for any inquiry.</h1>
        <div className="form_split">
          <div className="input_wrapper">
            <label htmlFor="fname">First Name: </label>
            <input
              type="text"
              name="fname"
              placeholder="--Enter first name--"
            />
          </div>
          <div className="input_wrapper">
            <label htmlFor="lname">Last Name: </label>
            <input type="text" name="lname" placeholder="--Enter last name--" />
          </div>
          <div className="input_wrapper">
            <label htmlFor="email">Email: </label>
            <input type="text" name="email" placeholder="--Enter email--" />
          </div>
          <div className="input_wrapper">
            <label htmlFor="phoneno">Phone No: </label>
            <input
              type="text"
              name="phone"
              placeholder="--Enter phone number--"
            />
          </div>
          <div className="input_wrapper">
            <label htmlFor="hire">Hire Option: </label>
            <select name="hire" id="hire">
              <option value="val1">--Hire Options--</option>
              <option value="val1">Self Drive</option>
              <option value="val1">Driver Ready</option>
            </select>
          </div>
          <div className="input_wrapper">
            <label htmlFor="date">Date: </label>
            <input type="date" name="date" placeholder="--Enter first name--" />
          </div>
        </div>
        <div className="input_wrapper_message">
          <label htmlFor="message">Message: </label> <br />
          <textarea
            name="message"
            id="message"
            placeholder="Write your message here"
          ></textarea>
        </div>
        <div className="submit_btn">
          <button className="form_btn">Submit</button>
        </div>
      </form>
    </section>
  );
}

export default InquiryForm;
