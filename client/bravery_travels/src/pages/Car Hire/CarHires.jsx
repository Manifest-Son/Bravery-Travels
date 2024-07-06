import "./CarHire.css";
import CarHire from "./CarHire";
import carImage from "../../assets/car.png";

function CarHeader() {
  return (
    <section className="car_header">
      <h1 className="car_header_txt">Car Hire Page</h1>
      <h1 className="car_open_txt">
        Feel free to choose the variety of vehicles
      </h1>
    </section>
  );
}

function CarHires() {
  const carhire = [
    {
      img: carImage,
      brand: "Toyota Voxy",
      condition: "Ready to Hire",
      category: "Luxury",
      price: 3400,
    },
    {
      img: carImage,
      brand: "Toyota Voxy",
      condition: "Ready to Hire",
      category: "Luxury",
      price: 3400,
    },
    {
      img: carImage,
      brand: "Toyota Voxy",
      condition: "Ready to Hire",
      category: "Luxury",
      price: 3400,
    },
    {
      img: carImage,
      brand: "Toyota Voxy",
      condition: "Ready to Hire",
      category: "Luxury",
      price: 3400,
    },
    {
      img: carImage,
      brand: "Toyota Voxy",
      condition: "Ready to Hire",
      category: "Luxury",
      price: 3400,
    },
    {
      img: carImage,
      brand: "Toyota Voxy",
      condition: "Ready to Hire",
      category: "Luxury",
      price: 3400,
    },
    {
      img: carImage,
      brand: "Toyota Voxy",
      condition: "Ready to Hire",
      category: "Luxury",
      price: 3400,
    },
  ];
  return (
    <>
      <CarHeader />
      <div className="car_hire_contents">
        {carhire.map((currentCarhire, i) => (
          <CarHire
            key={i}
            img={currentCarhire.img}
            brand={currentCarhire.brand}
            condition={currentCarhire.condition}
            category={currentCarhire.category}
            price={currentCarhire.price}
          />
        ))}
      </div>
    </>
  );
}

export default CarHires;
