import { useState, useEffect } from 'react';
import axios from 'axios';

const BookingPage = () => {
  const [formData, setFormData] = useState({
    bookVehicle: '',
    bookPrice: '',
    bookUser: '',
    bookGive: '',
    bookBring: ''
  });

  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    // Fetch available vehicles when the component mounts
    const fetchVehicles = async () => {
      try {
        const response = await axios.get('/api/vehicles'); // replace with your API endpoint
        setVehicles(response.data);
      } catch (error) {
        console.error('Error fetching vehicles:', error);
      }
    };

    fetchVehicles();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleBooking = async () => {
    try {
      const response = await axios.post('/api/bookings', formData); // replace with your API endpoint
      console.log("Booking successful:", response.data);
    } catch (error) {
      console.error('Error making booking:', error);
    }
  };

  return (
    <div className="booking_wrap">
      <h1>Book a Vehicle</h1>
      <div className="booking_form">
        <div className="content">
          <label htmlFor="bookVehicle">Vehicle:</label>
          <select
            name='bookVehicle'
            id='bookVehicle'
            value={formData.bookVehicle}
            onChange={handleInputChange}
          >
            <option value="">Select a vehicle</option>
            {vehicles.map((vehicle) => (
              <option key={vehicle.id} value={vehicle.id}>
                {vehicle.name}
              </option>
            ))}
          </select>
        </div>
        <div className="content">
          <label htmlFor="bookPrice">Price:</label>
          <input
            type="text"
            name='bookPrice'
            id='bookPrice'
            value={formData.bookPrice}
            onChange={handleInputChange}
          />
        </div>
        <div className="content">
          <label htmlFor="bookUser">User:</label>
          <input
            type="text"
            name='bookUser'
            id='bookUser'
            value={formData.bookUser}
            onChange={handleInputChange}
          />
        </div>
        <div className="content">
          <label htmlFor="bookGive">Pick-up Date:</label>
          <input
            type="date"
            name='bookGive'
            id='bookGive'
            value={formData.bookGive}
            onChange={handleInputChange}
          />
        </div>
        <div className="content">
          <label htmlFor="bookBring">Drop-off Date:</label>
          <input
            type="date"
            name='bookBring'
            id='bookBring'
            value={formData.bookBring}
            onChange={handleInputChange}
          />
        </div>
        <div className="booking_btn">
          <button onClick={handleBooking}>Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
