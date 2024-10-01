import React, { useState } from 'react';
import { auth, googleAuthProvider } from '../firebase/firebase'; // Correct import
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import '../styles/components/Signup.scss';

const Signup = () => {
  const navigate = useNavigate();
   
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, formData.email, formData.password)
      .then((userCredential) => {
        setSuccessMessage('Signup successful! Welcome to your dashboard.');
        setError('');
        setFormData({
          email: '',
          password: ''
        });
        // Uncomment the line below if you want to add a notification system
        // addNotification('Signup successful! Welcome to your dashboard.');
        navigate('/Home'); 
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          setError('This email is already in use. Please log in instead.');
          // addNotification('Error: Email already in use.');
        } else {
          setError(error.message);
          // addNotification(`Error: ${error.message}`); // Uncomment if you have a notification system
        }
        setSuccessMessage('');
      });
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleAuthProvider); // Use googleAuthProvider
      const user = result.user;
      setSuccessMessage('Google signup successful! Welcome to your profile.');
      setError('');
      // Uncomment the line below if you want to add a notification system
      // addNotification('Google signup successful! Welcome to your dashboard.');
      navigate('/Home');
    } catch (error) {
      console.error('Error during Google sign-in:', error);
      setError(error.message);
      // addNotification(`Error: ${error.message}`); // Uncomment if you have a notification system
      setSuccessMessage('');
    }
  };

  return (
    <div className="signup-container">
      <h2>Signup</h2>
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

        <button type="submit" className="signup-button">Signup</button>
      </form>
      <button onClick={handleGoogleSignIn} className="google-signup-button">
        Sign up with Google
      </button>
    </div>
  );
};

export default Signup;
