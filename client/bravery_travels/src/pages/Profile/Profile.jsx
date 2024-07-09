import { useState } from "react";
import "./Profile.css";

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    avatar: "https://via.placeholder.com/150",
    firstName: "Lennox",
    lastName: "Githinji",
    email: "lennoxgithinji@example.com",
    password: "********",
  });

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleDelete = () => {
    alert("Profile deleted");
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <img src={profile.avatar} alt="Profile_Image" className="profile_img" />
        {isEditing ? (
          <input
            type="text"
            value={profile.firstName}
            onChange={(e) =>
              setProfile({ profile, firstName: e.target.value })
            }
          />
        ) : (
          <h2>{profile.firstName}</h2>
        )}
        {isEditing ? (
          <input
            type="text"
            value={profile.lastName}
            onChange={(e) =>
              setProfile({ ...profile, lastName: e.target.value })
            }
          />
        ) : (
          <h3>{profile.lastName}</h3>
        )}
        {isEditing ? (
          <input
            type="emailAddress"
            value={profile.emailAddress}
            onChange={(e) => setProfile({ ...profile, emailAddress: e.target.value })}
          />
        ) : (
          <p>Email: {profile.email}</p>
        )}
        {isEditing ? (
          <input
            type="password"
            value={profile.password}
            onChange={(e) =>
              setProfile({ ...profile, password: e.target.value })
            }
          />
        ) : (
          <p>Password: {profile.password}</p>
        )}
        {isEditing ? (
          <button onClick={handleSave}>Save</button>
        ) : (
          <button onClick={handleEdit}>Edit</button>
        )}
        <button onClick={handleDelete} className="delete-button">
          Delete
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
