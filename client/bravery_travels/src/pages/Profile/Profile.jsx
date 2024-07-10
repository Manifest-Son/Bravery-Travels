import { useState, useEffect } from 'react';
import axios from 'axios';
import { apiURL } from '../../utils/config';
import './Profile.css';

const Profile = () => {
  const [user, setUser] = useState("User");
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    emailAddress: '',
    password: ''
  });

  useEffect(() => {
    axios.get(`${apiURL}/api/users`)
      .then(response => {
        const { firstName, lastName, emailAddress } = response.data;
        setFormData({ firstName, lastName, emailAddress, password: '' });
        setUser(response.data.firstname); 
      })
      .catch(error => {
        console.error('There was an error fetching the user data!', error);
      });
  }, []);

  const [imageInput, setImageInput] = useState()
    const cloudname = 'difce7p4s';
    const preset = 'bravery_travels' ;

  const handleUpload = async () => {
    const payload = new FormData();
    payload.append("file", imageInput)
        payload.append("upload_preset", preset)
        try{
        console.log(imageInput)
        const response = await axios.post(`https://api.cloudinary.com/v1_1/${cloudname}/image/upload`, payload)
        const secure_url = response.data.secure_url
        const imageUrl = secure_url.replace("/upload","/upload/w_300/f_auto/")
        console.log(imageUrl)
        } catch (error) {
            console.log(error)
        }
  };
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSave = () => {
    axios.put(`${apiURL}/api/users`, formData)
      .then(response => {
        console.log('User data saved successfully:', response.data);
      })
      .catch(error => {
        console.error('There was an error saving the user data!', error);
      });
  };

  const handleDelete = () => { 
    axios.delete(`${apiURL}/api/users`)
      .then(response => {
        console.log('User data deleted successfully:', response.data);
      })
      .catch(error => {
        console.error('There was an error deleting the user data!', error);
      });
  };

  return (
    <section className='profile_container'>
      <h1>Welcome {user} to your profile</h1>
      <div className="profile_wrap">
      <div className='image_section'>
       <div className='image_hold'><img src={imageInput ? URL.createObjectURL(imageInput) : ''} alt="Insert your image below" /></div>
      <input
        type="file"
        name='image'
        id='image'
        onChange={(e) => setImageInput(e.target.files[0])}
      />
      <button onClick={handleUpload}>Upload Photo</button>
      </div>
      <div className="user_details">
        <div className="content">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            name='firstName'
            id='firstName'
            value={formData.firstName}
            onChange={handleInputChange}
          />
        </div>
        <div className="content">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            name='lastName'
            id='lastName'
            value={formData.lastName}
            onChange={handleInputChange}
          />
        </div>
        <div className="content">
          <label htmlFor="emailAddress">Email:</label>
          <input
            type="email"
            name='emailAddress'
            id='emailAddress'
            value={formData.emailAddress}
            onChange={handleInputChange}
          />
        </div>
        <div className="content">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name='password'
            id='password'
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
      </div>
    </div>
    <div className="update_btns">
          <button onClick={handleSave}>Save</button>
          <button onClick={handleDelete}>Delete</button>
        </div>

    </section>
  );
};

export default Profile;
