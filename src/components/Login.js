// Login.js
import React, { useState } from 'react';
import { auth, googleAuthProvider } from '../firebase/firebase'; // Correct import
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import '../styles/components/Login.scss'; // Ensure this file exists

function Login({ isOpen, onClose }) {
  // Ensure the hooks are called at the top level of the component
  const navigate = useNavigate(); // Use the navigate hook unconditionally
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // If the modal is not open, do not render anything
  if (!isOpen) return null; 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, formData.email, formData.password)
      .then((userCredential) => {
        setSuccessMessage('Login successful!');
        setError('');
        setFormData({
          email: '',
          password: ''
        });
        navigate('/home'); 
        onClose(); // Close modal after login
      })
      .catch((error) => {
        setError(error.message);
        setSuccessMessage('');
      });
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleAuthProvider);
      const user = result.user;

      if (user) {
        setSuccessMessage('Google login successful!');
        setError('');
        navigate('/home');
        onClose(); // Close modal after login
      }
    } catch (error) {
      console.error('Error during Google sign-in:', error);
      setError(error.message);
      setSuccessMessage('');
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Login</h2>
        {successMessage && <p className="success-message">{successMessage}</p>}
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="login-button">Login</button>
        </form>
        <button onClick={handleGoogleSignIn} className="google-login-button">Sign in with Google</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default Login; // Ensure this matches the filename
