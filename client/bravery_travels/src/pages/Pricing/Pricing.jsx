import { AiFillTags } from "react-icons/ai";
// import logo2 from '../../assets/logo2.jpeg'
import "./Pricing.css";

// eslint-disable-next-line react/prop-types
function Pricing({ img, category, description, price }) {
  return (
    <section className="pricing_container">
      <div className="pricing_package">
        <div className="package_container">
          <img src={img} alt="car category" />
          <div className="pricing_body">
            <div>
              <h1 className="pricing_category">Category:</h1>
              <h1 className="pricing_type">{category}</h1>
            </div>
            <p className="description">{description}</p>
            <p className="pricing_price">
              <AiFillTags /> Price: {price}
            </p>
          </div>
          <button className="pricing_btn">Book Now!</button>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
