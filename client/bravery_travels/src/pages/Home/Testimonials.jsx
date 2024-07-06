import { FaStar } from "react-icons/fa6";
import carImg from "../../assets/car.png";

function Testimonials() {
  return (
    <div className="testimonial_wrapper">
      <p>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </p>
      <div className="testimonial_body">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
          nulla debitis sint est quis neque!
        </p>
        <img src={carImg} alt="" />
      </div>
      <div className="testimonial-person">
        <p>Customer</p>
      </div>
    </div>
  );
}

export default Testimonials;
