import React, { useState } from 'react';
import { auth, googleAuthProvider } from '../firebase/firebase'; // Correct import
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import '../styles/components/Login.scss';

const Login = () => {
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

    signInWithEmailAndPassword(auth, formData.email, formData.password)
      .then((userCredential) => {
        setSuccessMessage('Login successful!');
        setError('');
        setFormData({
          email: '',
          password: ''
        });
        //addNotification('Login successful! Redirecting to dashboard.');
        navigate('/home'); 
      })
      .catch((error) => {
        setError(error.message);
        setSuccessMessage('');
      });
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleAuthProvider); // Use googleAuthProvider
      const user = result.user;

      if (user) {
        setSuccessMessage('Google login successful!');
        setError('');
        //addNotification('Google login successful! Redirecting to dashboard.');
        navigate('/home');
      }
    } catch (error) {
      console.error('Error during Google sign-in:', error);
      setError(error.message);
      setSuccessMessage('');
    }
  };

  return (
    <div className="login-container">
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
    </div>
  );
};

export default Login;
