import React from 'react';
import { FaFilm, FaStar, FaUsers } from 'react-icons/fa';
import Navbar from '../../components/Navbar/Navbar';  // Pre-built Navbar component
import Footer from '../../components/Footer/Footer';  // Pre-built Footer component
import './Aboutpage.css';       // CSS file for styling

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="about-container">
        <h1 className="about-title">THYViEW</h1>  {/* Customize the app name */}
        <div className="about-content">
          <section className="about-section">
            <FaFilm className="about-icon" />
            <h2>Discover Movies</h2>
            <p>
              Explore a vast library of movies, from classics to the latest blockbusters. Find details, trailers, and ratings in one place.
            </p>
          </section>

          <section className="about-section">
            <FaStar className="about-icon" />
            <h2>Rate and Review</h2>
            <p>
              Share your thoughts and rate movies you've watched. Help others discover great films through your insights and reviews.
            </p>
          </section>

          <section className="about-section">
            <FaUsers className="about-icon" />
            <h2>Join the Community</h2>
            <p>
              Connect with fellow movie enthusiasts, discuss favorites, and build your watchlist. Your voice matters in shaping the movie community.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
