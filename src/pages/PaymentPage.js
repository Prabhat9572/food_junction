import React, { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext'; 
import './PaymentPage.scss';
import Scanner from '../assets/images/Scanner.jpeg';

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { clearCart } = useContext(CartContext); 
  const initialCart = location.state?.cart || []; 
  const totalPrice = location.state?.totalPrice || 0;

  const deliveryCharge = 0;

  const [cart, setCart] = useState(initialCart.map(item => ({ ...item, quantity: 1 })));
  const [recipientName, setRecipientName] = useState(''); 
  const [personalMessage, setPersonalMessage] = useState(''); 
  const [includeMessage, setIncludeMessage] = useState(false); 
  const [messageCharge, setMessageCharge] = useState(0); 

  const [deliveryAddress, setDeliveryAddress] = useState({
    address: '',
    city: '',
    state: '',
    pincode: ''
  });
  const [isAddressAdded, setIsAddressAdded] = useState(false); // Track if address is added
  const [isEditingAddress, setIsEditingAddress] = useState(false); // Toggle between adding and editing

  const totalWithDelivery = cart.reduce((total, item) => total + item.price * item.quantity, 0) + deliveryCharge + messageCharge; 

  const handleConfirmOrder = () => {
    const googleFormUrl = "https://forms.gle/fhnaY3VqdwYbwcQf7";
    window.open(googleFormUrl, "_blank");
    clearCart(); 
    navigate('/'); 
  };

  const handleSendLetterClick = () => {
    if (!includeMessage) {
      setIncludeMessage(true);
      setMessageCharge(50); 
    } else {
      setRecipientName('');
      setPersonalMessage('');
      setIncludeMessage(false);
      setMessageCharge(0); 
    }
  };

  const increaseQuantity = (index) => {
    setCart(prevCart => {
      const newCart = [...prevCart];
      newCart[index].quantity += 1; 
      return newCart;
    });
  };

  const decreaseQuantity = (index) => {
    setCart(prevCart => {
      const newCart = [...prevCart];
      if (newCart[index].quantity > 1) {
        newCart[index].quantity -= 1;
      }
      return newCart;
    });
  };

  const handleMessageChange = (e) => {
    setPersonalMessage(e.target.value);
  };

  const handleRecipientChange = (e) => {
    setRecipientName(e.target.value);
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setDeliveryAddress(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const toggleAddressInput = () => {
    setIsEditingAddress(true); // Show address form for input
    setIsAddressAdded(false);  // Reset the state of added address
  };

  const saveAddress = () => {
    setIsAddressAdded(true);  // Mark the address as added
    setIsEditingAddress(false);  // Hide the form
  };

  return (
    <div className="payment-container">
      <div className="order-summary">
        <h1>Order Summary</h1>
        <h3>Please Take a Screenshot of Order Summary Before Order Confirmation.</h3>
        <ul>
          {cart.map((item, index) => (
            <li key={index} className="cart-item">
              <div>
                {item.name} - ₹{item.price} x {item.quantity}
              </div>
              <div className="quantity-controls">
                <button onClick={() => decreaseQuantity(index)}>-</button>
                <span>{item.quantity}</span> 
                <button onClick={() => increaseQuantity(index)}>+</button>
              </div>
            </li>
          ))}
        </ul>

        <div className="personal-message-container">
          <button onClick={handleSendLetterClick} className="send-letter-button">
            {includeMessage ? 'Cancel Letter' : 'Send a Letter with Personal Message (₹50 Extra)'}
          </button>

          {includeMessage && (
            <>
              <p>
                <strong>Recipient Name:</strong>
                <input 
                  type="text" 
                  value={recipientName} 
                  onChange={handleRecipientChange} 
                  placeholder="Enter recipient's name" 
                  className="recipient-input" 
                />
              </p>
              <p className="personal-message">
                <strong>Personal Message (₹50): </strong>
              </p>
              <textarea 
                value={personalMessage} 
                onChange={handleMessageChange} 
                placeholder="Write your personal message here..."
                rows={4} 
                className="message-textarea"
              />
            </>
          )}
        </div>

        {/* Delivery Address Section */}
        <div className="delivery-address-container">
          <h2>Delivery Address</h2>
          {!isAddressAdded && !isEditingAddress && (
            <button className="add-address-button" onClick={toggleAddressInput}>
              Add Address
            </button>
          )}
          {isAddressAdded && (
            <>
              <p>
                <strong>Address:</strong> {deliveryAddress.address}, {deliveryAddress.city}, {deliveryAddress.state}, {deliveryAddress.pincode}
              </p>
              <button className="change-address-button" onClick={toggleAddressInput}>
                Change Address
              </button>
            </>
          )}
          {isEditingAddress && (
            <>
              <input 
                type="text" 
                name="address" 
                value={deliveryAddress.address} 
                onChange={handleAddressChange} 
                placeholder="Enter your address" 
                className="address-input"
              />
              <input 
                type="text" 
                name="city" 
                value={deliveryAddress.city} 
                onChange={handleAddressChange} 
                placeholder="Enter your city" 
                className="city-input"
              />
              <input 
                type="text" 
                name="state" 
                value={deliveryAddress.state} 
                onChange={handleAddressChange} 
                placeholder="Enter your state" 
                className="state-input"
              />
              <input 
                type="text" 
                name="pincode" 
                value={deliveryAddress.pincode} 
                onChange={handleAddressChange} 
                placeholder="Enter your pincode" 
                className="pincode-input"
              />
              <button className="save-address-button" onClick={saveAddress}>
                Save Address
              </button>
            </>
          )}
        </div>

        <p className="delivery-charge">
          <strong>Delivery Charge: ₹{deliveryCharge === 0 ? 'Free Delivery' : deliveryCharge}</strong>
        </p>
        <p className="total-price"><strong>Total to Pay: ₹{totalWithDelivery}</strong></p>
      </div>

      <div className="scanner-container">
        <img src={Scanner} alt="Payment Scanner" className="scanner-image" />
      </div>

      <button onClick={handleConfirmOrder} className="confirm-order-button">
        Confirm Order
      </button>
    </div>
  );
};

export default PaymentPage;
