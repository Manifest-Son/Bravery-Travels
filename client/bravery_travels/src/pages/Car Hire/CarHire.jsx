// import carImage from '../../assets/car.png'
import "./CarHire.css";

// eslint-disable-next-line react/prop-types
function CarHire({ img, brand, condition, category, price }) {
  return (
    <div className="car_container">
      <div className="car_img">
        <img src={img} alt="" />
      </div>
      <div className="car_body">
        <h1>{brand}</h1>
        <p>Condition: {condition}</p>
        <p>Class: {category}</p>
        <p>Price: Kshs: {price} </p>
      </div>
      <div className="car_button">
        <button>Book Now</button>
      </div>
    </div>
  );
}

export default CarHire;
