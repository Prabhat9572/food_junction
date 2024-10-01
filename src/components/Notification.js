// src/components/Notification.js

import React from 'react';
import '../styles/components/notification.scss'; // You can add styles for the notification here

const Notification = ({ message, onClose }) => {
  return (
    <div className="notification">
      <p>{message}</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default Notification;
