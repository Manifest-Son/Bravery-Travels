import vehicle from "../../data/vehicle";

// eslint-disable-next-line react/prop-types
function VehicleSruct({ img, brand, category, transmission, seats, fuel }) {
  return (
    <section>
      <div className="vehicle_container">
        <div className="vehicle_wrap">
          <img src={img} alt="" />
        </div>
        <h1>{brand}</h1>
        <p>Vehicle Category: {category} </p>
        <p>Transmission Type: {transmission} </p>
        <p>No. of Seats: {seats} seats</p>
        <p>Fuel Type: {fuel} </p>
      </div>
    </section>
  );
}

function Vehicle() {
  return (
    <section className="vehicle_wrapper">
      {vehicle.map((currentVehicle, i) => (
        <VehicleSruct
          key={i}
          img={currentVehicle.img}
          brand={currentVehicle.brand}
          category={currentVehicle.category}
          transmission={currentVehicle.transmission}
          seats={currentVehicle.seats}
          fuel={currentVehicle.fuel}
        />
      ))}
    </section>
  );
}
export default Vehicle;
