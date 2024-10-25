import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/pages/_home.scss';
import About from './About';
import FastFood from './fastfood';
import Discover from './Discover';
import Pizzahub from './Pizzahub';
import FoodWastePrevention from './FoodWastePrevention';
import FoodSuggestions from './FoodSuggestions';
import ScrollingCards from '../components/ScrollingCards';
// import InstantFoodGifting from './InstantFoodGifting';
// import BookCook from './BookCooks'
//import Meat from './Meat';
//import FastFood from './FastFoodSection';
//import Nkemeat from './Nkemeat';
import CuratedLists from './CuratedLists'; // Import the new CuratedLists component
import HotelList from '../pages/hotel'; // Correct the import here

function Home() {
  const navigate = useNavigate();

  const handleOrderNowClick = () => {
    navigate('/menu');
  };

  return (
    <div className="home">
      <header className="home__header">
        <div className="home__header-container">
          <div className="background-image">
            
            <button className="handleOrderNowClick" onClick={handleOrderNowClick}>
              <span><b>Order Now</b></span>
            </button>
          </div>
        </div>
      </header>

      {/* scrolling card  Section */}
      <ScrollingCards />
       
{/* Hotel Section */}
<HotelList /> {/* Corrected the name here to HotelList */}



{/* Discover Our Food Section */}
<Discover />


{/* pizzahub section */}
<Pizzahub />

{/* Fast Food Section */}
<FastFood />


      {/* <InstantFoodGifting/> */}
      <FoodWastePrevention/>

      {/* Curated Lists Section */}

{/* FoodSuggestions section */}
<FoodSuggestions />


      <CuratedLists /> {/* Use the new component here */}

      
       

      
       {/* Book Cook Section */}
       {/* <BookCook /> */}

       
       
      
      
     
      {/* About Section */}
      <About />

     
    </div>
  );
}

export default Home;
