import React from 'react';
import '../styles/pages/PubsAndBars.scss'; // Import SCSS file
import irishPubImage from '../assets/images/irish_pub.jpg'; // Ensure the image paths are correct
import skyLoungeImage from '../assets/images/sky_lounge.jpg';
import cheersBarImage from '../assets/images/cheers_bar.jpg';
import breweryImage from '../assets/images/brewery.jpg';

const pubsAndBars = [
  {
    id: 1,
    name: 'FOOD GALLERY',
    location: 'Paralakhemundi',
    description: ' Medical Rd, Paralakhemundi',
    image: irishPubImage,
    formLink: 'https://forms.gle/DZiXX6HURnv2yVF9A', // Add Google Form link here
  },
  {
    id: 2,
    name: 'MO BIRYANI ',
    location: 'Paralakhemundi',
    description: ' Palace St, Paralakhemundi',
    image: skyLoungeImage,
    formLink: 'https://forms.gle/DZiXX6HURnv2yVF9A', // Add Google Form link here
  },
  {
    id: 3,
    name: 'Sreekunj Restaurant',
    location: 'Paralakhemundi',
    description: 'palace St, Paralakhemundi',
    image: cheersBarImage,
    formLink: 'https://forms.gle/DZiXX6HURnv2yVF9A', // Add Google Form link here
  },
  {
    id: 4,
    name: 'MK Restaurant',
    location: 'Paralakhemundi',
    description: 'Venkatapur,Paralakhemundi',
    image: breweryImage,
    formLink: 'https://forms.gle/DZiXX6HURnv2yVF9A', // Add Google Form link here
  },
];

const PubsAndBars = () => {
  return (
    <div className="pubs-and-bars">
      <h2 className="pubs-and-bars__title">Top Restaurant</h2>
      <div className="pubs-and-bars__cards">
        {pubsAndBars.map((pub) => (
          <div key={pub.id} className="pubs-and-bars__card">
            <img src={pub.image} alt={pub.name} className="pubs-and-bars__card-image" />
            <h3 className="pubs-and-bars__card-name">{pub.name}</h3>
            <p className="pubs-and-bars__card-location">{pub.location}</p>
            <p className="pubs-and-bars__card-description">{pub.description}</p>
            <button 
              className="pubs-and-bars__book-button" 
              onClick={() => window.open(pub.formLink, '_blank')} // Open Google Form in new tab
            >
              Book Table
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PubsAndBars;
