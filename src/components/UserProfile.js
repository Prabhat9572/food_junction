// src/components/UserProfile.js
import React, { useState } from 'react';
import '../styles/components/UserProfile.scss'; // Ensure the path and casing are correct
import { FaUserCircle, FaClipboardList, FaCog, FaHistory } from 'react-icons/fa';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register the necessary components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const UserProfile = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState('');

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
        setImageUrl(reader.result); // Update image URL for display
      };
      reader.readAsDataURL(file);
      setModalOpen(false); // Close the modal after uploading
    }
  };

  const handleDeleteImage = () => {
    setProfileImage(null);
    setImageUrl('');
    setModalOpen(false); // Close the modal after deleting
  };

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  // Sample data for the user activity chart
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Orders Placed',
        data: [3, 2, 5, 4, 6],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  return (
    <div className="user-profile">
      <div className="user-profile__content">
        <div className="user-profile__header" onClick={toggleModal}>
          {profileImage ? (
            <img src={profileImage} alt="Profile" className="user-profile__avatar" />
          ) : (
            <FaUserCircle className="user-profile__avatar" />
          )}
          <div className="user-profile__info">
            <h2 className="user-profile__name">John Doe</h2>
            <p className="user-profile__email">johndoe@example.com</p>
          </div>
        </div>

        <div className="user-profile__details">
          <div className="user-profile__orders">
            <h3 className="user-profile__section-title">Order History</h3>
            <ul className="user-profile__orders-list">
              <li className="user-profile__order">Order #12345 - Delivered</li>
              <li className="user-profile__order">Order #12346 - In Progress</li>
              <li className="user-profile__order">Order #12347 - Delivered</li>
              <li className="user-profile__order">Order #12348 - Canceled</li>
            </ul>
          </div>

          <div className="user-profile__activity">
            <h3 className="user-profile__section-title">User Activity</h3>
            <Bar data={data} options={options} />
          </div>
        </div>

        <div className="user-profile__section">
          <h3 className="user-profile__section-title">Settings</h3>
          <div className="user-profile__actions">
            <button className="user-profile__button"><FaClipboardList /> View Orders</button>
            <button className="user-profile__button"><FaCog /> Account Settings</button>
          </div>
        </div>
      </div>

      {/* Modal for image options */}
      {modalOpen && (
        <div className="modal-overlay">
          <div className="profile-image-modal">
            <h3>Profile Image Options</h3>
            <button onClick={() => document.getElementById('file-input').click()}>Change Image</button>
            <input
              type="file"
              id="file-input"
              accept="image/*"
              style={{ display: 'none' }}
              onChange={handleImageUpload}
            />
            {profileImage && (
              <>
                <button onClick={handleDeleteImage}>Delete Image</button>
                <button onClick={() => { setModalOpen(false); setImageUrl(profileImage); }}>View Image</button>
              </>
            )}
            <button onClick={toggleModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
