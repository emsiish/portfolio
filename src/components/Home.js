import React from 'react';
import MyPhoto from '../assets/my-photo.jpg';

function Home() {
  return (
      <section className="home">
        <div className="hero-container flex flex-col items-center justify-center bg-peach text-black h-screen">
          <div className="max-w-4xl mx-auto flex">
            <div className="content flex-1 p-8 text-center">
              <h1 className="title text-5xl font-bold mb-4">My name is Emiliya Usheva</h1>
              <p className="description text-lg">
                I am a student at TUES. I have recently started learning React, and I enjoy designing and developing frontend. Currently, my goal is to further my education in Europe.
              </p>
            </div>
            <div className="image-container flex-1 max-h-96 overflow-hidden hidden md:flex">
              <img src={MyPhoto} alt="Me" className="image w-full h-full object-cover rounded-3xl" />
            </div>
          </div>
        </div>
      </section>
  );
}

export default Home;
