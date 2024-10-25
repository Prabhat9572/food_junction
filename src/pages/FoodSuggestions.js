import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/pages/FoodSuggestions.scss';

const SuggestionImage = 'https://foodexiran.com/wp-content/uploads/2022/08/ai-food-production.jpeg'; // Replace with actual image URL

const FoodSuggestions = () => {
  const navigate = useNavigate();

  const handleGetSuggestions = () => {
    // Redirect to the health food items page
    navigate('/healthy-food');
  };

  return (
    <div className="food-suggestions">
      <div className="text-content">
        <h2 className="section-title">Discover Your Perfect Dish with AI!</h2>
        <p className="section-description">
          Feeling indecisive about your next meal? No worries! Our smart AI is here to help. With a personalized recommendation 
          system, we consider everything—your food habits, current weather, and even the time of day to suggest the perfect dish 
          for you. Let the AI handle the guesswork, so you can focus on enjoying the best meals tailored to your mood and cravings.
        </p>

        <div className="features-list">
          <ul>
            <li>Tailored recommendations based on your taste preferences.</li>
            <li>Weather-based suggestions to match the perfect meal with the day.</li>
            <li>Real-time AI decisions to keep you updated on the best options for the moment.</li>
          </ul>
        </div>

        <button className="suggestion-button" onClick={handleGetSuggestions}>
          Get Your AI Food Suggestion Now!
        </button>
      </div>

      <div className="image-content">
        <img src={SuggestionImage} alt="AI suggesting food" className="ai-suggestion-image" />
      </div>
    </div>
  );
};

export default FoodSuggestions;
