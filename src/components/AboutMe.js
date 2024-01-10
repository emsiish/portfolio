import React from 'react';
import ReadingPhoto from '../assets/reading.jpg';
import BakingPhoto from '../assets/baking.jpg';

function AboutMe() {
  return (
      <section className="about-me bg-peach text-black min-h-screen">
        <div className="container mx-auto flex flex-col items-center justify-center h-full text-center">
          <h1 className="section-title text-4xl font-bold mb-8">If I'm not coding, you can find me enjoying:</h1>
          <div className="activity-cards flex flex-col md:flex-row justify-center items-center">
            <div className="activity-card flex flex-col items-center p-8 w-full md:w-1/2">
              <img src={ReadingPhoto} alt="Reading" className="activity-image w-full h-64 object-cover rounded-lg mb-4" />
              <h2 className="activity-name text-3xl font-bold">Reading</h2>
            </div>
            <div className="activity-card flex flex-col items-center p-8 w-full md:w-1/2">
              <img src={BakingPhoto} alt="Baking" className="activity-image w-full h-64 object-cover rounded-lg mb-4" />
              <h2 className="activity-name text-3xl font-bold">Baking</h2>
            </div>
          </div>
        </div>
      </section>
  );
}

export default AboutMe;
