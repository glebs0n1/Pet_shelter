import React, { useState } from 'react'; 
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './css/App.css';
import PetsPage from './PetsPage';
import ContactPage from './ContactPage';
import ServicesPage from './ServicesPage';
import AboutUs from './AboutUs';
import Layout from './Layout';
import logo from './images/logo.png';
import menuIcon from './images/menu-bar.png';
import bannerImage from './images/pets-banner.jpg';
import search from './images/search.png';
import dogIcon from './images/dog.png';
import catIcon from './images/cat.png';
import animalsIcon from './images/animals.png';
import pet1 from './images/dog1.jpg';
import pet2 from './images/dog2.jpeg';
import pet3 from './images/dog3.jpeg';
import pet4 from './images/animals.png';
import likeIcon from './images/like.png';


function App() {
  const redirectToSignup = () => {
    console.log('Redirecting to signup page...');
  };

  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="app">
      <Router>
        <header className="app-header">
          {/* Top Row */}
          <div className="top-row">
            <p className="top-message">Become a member of the community today for free!</p>
            <button className="get-started-button" onClick={redirectToSignup}>
              Get Started!
            </button>
          </div>

 {/* Logo and Menu for Desktop */}
 <div className="desktop-menu">
            <div className="logo-section">
              <img src={logo} alt="Logo" className="logo" />
            </div>
            <div className="menu-section">
              <Link to="/about-us">About Us</Link>
              <Link to="/pets">Pets</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/services">Services</Link>
            </div>
            <div className="right-buttons">
              <button className="sign-up-button">Sign Up</button>
              <button className="login-button">Login</button>
            </div>
          </div>
        </header>

        <Routes>
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/pets" element={<PetsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/services" element={<ServicesPage />} />
        </Routes>
      </Router>

      <div className="banner">
    <img src={bannerImage} alt="Banner" className="banner-image" />
    <div className="banner-overlay"></div>
    <div className="search-bar">
        <div className="search-input-container">
            <input type="text" placeholder="Search for pets" className="search-input" />
            <img src={search} alt="Search" className="search-icon" />
        </div>
    </div>
    <div className="banner-text">
        <h1>Find Your New Best Friend</h1>
        <p>Browse pets from our network of over 14,500 shelters and rescues</p>
</div>
      </div>

      <div className="pet-types">
        <div className="pet-type-box">
          <img src={dogIcon} alt="Dog Icon" className="pet-type-icon" />
          <h2>Dogs</h2>
        </div>
        <div className="pet-type-box">
          <img src={catIcon} alt="Cat Icon" className="pet-type-icon" />
          <h2>Cats</h2>
        </div>
        <div className="pet-type-box">
          <img src={animalsIcon} alt="Bird Icon" className="pet-type-icon" />
          <h2>Other Animals</h2>
        </div>
      </div>

      <div className="adoption-section">
        <h2>Pets Available for Adoption</h2>
        <div className="pet-images">
          <div className="pet-image-box">
            <button className="like-button"><img src={likeIcon} alt="Like" /></button>
            <img src={pet1} alt="Pet 1" className="pet-image" />
            <p className="pet-name">Buddy</p>
          </div>
          <div className="pet-image-box">
            <button className="like-button"><img src={likeIcon} alt="Like" /></button>
            <img src={pet2} alt="Pet 2" className="pet-image" />
            <p className="pet-name">Luna</p>
          </div>
          <div className="pet-image-box">
            <button className="like-button"><img src={likeIcon} alt="Like" /></button>
            <img src={pet3} alt="Pet 3" className="pet-image" />
            <p className="pet-name">Max</p>
          </div>
          <div className="pet-image-box special-pet-box">
            <img src={pet4} alt="Pet 4" className="pet-image" />
            <p className="pet-name">Meet them</p>
          </div>
        </div>
      </div>

      {/* Planning to Adopt Section */}

<div className="planning-section">
    <h2>Planning to Adopt a Pet?</h2>
    <div className="story-touts-container">
        {/* First Box */}
        <a href="/adopt-or-get-involved/" target="_blank" rel="noopener noreferrer" className="story-tout-link">
            <div className="story-tout-box">
                <img src={pet4} alt="Pet 4" className="story-tout-image" />
                <h2 className="story-tout-title">Adoption Checklist</h2>
                <p className="story-tout-description">Ensure a smooth transition for you and your new pet.</p>
                <div className="story-tout-cta">
                    <div className="story-tout-button">Learn More</div>
                </div>
            </div>
        </a>
        {/* Second Box */}
        <a href="/adopt-or-get-involved/" target="_blank" rel="noopener noreferrer" className="story-tout-link">
            <div className="story-tout-box">
                <img src={pet4} alt="Pet 4" className="story-tout-image" />
                <h2 className="story-tout-title">Preparing Your Home</h2>
                <p className="story-tout-description">Create a safe and welcoming environment for your new pet.</p>
                <div className="story-tout-cta">
                    <div className="story-tout-button">Learn More</div>
                </div>
            </div>
        </a>
        {/* Third Box */}
        <a href="/adopt-or-get-involved/" target="_blank" rel="noopener noreferrer" className="story-tout-link">
            <div className="story-tout-box">
                <img src={pet4} alt="Pet 4" className="story-tout-image" />
                <h2 className="story-tout-title">Post-Adoption Care</h2>
                <p className="story-tout-description">Ensure long-term happiness and health for your new family member.</p>
                <div className="story-tout-cta">
                    <div className="story-tout-button">Learn More</div>
                </div>
            </div>
        </a>
</div>
              {/* Footer Section */}
              <footer className="app-footer">
    <div className="footer-content">
        <div className="footer-column">
            <h3>About Us</h3>
            <ul>
                <li><a href="#">Our Story</a></li>
                <li><a href="#">Team</a></li>
                <li><a href="#">Careers</a></li>
            </ul>
        </div>
        <div className="footer-column">
            <h3>Adoption</h3>
            <ul>
                <li><a href="#">How to Adopt</a></li>
                <li><a href="#">Adoption Centers</a></li>
                <li><a href="#">FAQs</a></li>
            </ul>
        </div>
        <div className="footer-column">
            <h3>Contact Us</h3>
            <p>123 Pet Shelter Street</p>
            <p>City, State, 12345</p>
            <p>Email: info@petshelter.com</p>
            <p>Phone: +1 (123) 456-7890</p>
        </div>
    </div>
    <div className="footer-bottom">
        <p>&copy; 2024 Pet Shelter. All Rights Reserved.</p>
    </div>
</footer>
    </div>
    </div>

  );
}

export default App;