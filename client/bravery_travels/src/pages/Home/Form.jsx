// import { MdDateRange } from "react-icons/md";
import { useFormik } from "formik";
import * as Yup from "yup";

function InquiryForm() {
  const validationSchema = Yup.object({
    firstname: Yup.string().required("First Name is required"),
    lastname: Yup.string().required("Last Name is required"),
    phoneno: Yup.string().required("Phone Number is required"),
    email: Yup.string().required("Email is required"),
    date: Yup.string().required("Date is required"),
  });

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      phoneno: "",
      email: "",
      hire: "",
      date: "",
      message: "",
    },
    onSubmit: (formState) => {
      console.log(formState);
    },
    validationSchema: validationSchema,
  });
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
              value={formik.values.firstname}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.firstname && <p>{formik.errors.firstname}</p>}
          </div>
          <div className="input_wrapper">
            <label htmlFor="lname">Last Name: </label>
            <input
              type="text"
              name="lname"
              value={formik.values.lastname}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.lastname && <p>{formik.errors.lastname}</p>}
          </div>
          <div className="input_wrapper">
            <label htmlFor="email">Email: </label>
            <input
              type="text"
              name="email"
              value={formik.values.lastname}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          <div className="input_wrapper">
            <label htmlFor="phoneno">Phone No: </label>
            <input
              type="text"
              name="phoneno"
              value={formik.values.phoneno}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.phoneno && <p>{formik.errors.phoneno}</p>}
          </div>
          <div className="input_wrapper">
            <label htmlFor="hire">Hire Option: </label>
            <select
              name="hire"
              id="hire"
              value={formik.values.hire}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <option value="val1">--Hire Options--</option>
              <option value="self_drive">Self Drive</option>
              <option value="driver_ready">Driver Ready</option>
            </select>
            {formik.errors.hire && <p>{formik.errors.hire}</p>}
          </div>
          <div className="input_wrapper">
            <label htmlFor="date">Date: </label>
            <input
              type="date"
              name="date"
              value={formik.values.date}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.date && <p>{formik.errors.date}</p>}
          </div>
        </div>
        <div className="input_wrapper_message">
          <label htmlFor="message">Message: </label> <br />
          <textarea
            name="message"
            id="message"
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          ></textarea>
          {formik.errors.message && <p>{formik.errors.message}</p>}
        </div>
        <div className="submit_btn">
          <button className="form_btn">Submit</button>
        </div>
      </form>
    </section>
  );
}

export default InquiryForm;
