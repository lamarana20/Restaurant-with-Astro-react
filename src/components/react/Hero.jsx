import React from 'react';
import hero from '../react/hero.jpg';

const Hero = () => {
  return (
    <section className="relative w-full h-[50vh] overflow-hidden">
      {/* Background Image */}
      <img
        src={hero.src}
        alt="Restaurant"
        className="w-full h-full object-cover brightness-75"
      />

      {/* Text Overlay */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 text-white z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg mb-4">
          Welcome to <span className="text-amber-500">MLD Restaurant</span>
        </h1>
        <p className="text-lg md:text-xl max-w-2xl drop-shadow-sm mb-6">
          Enjoy refined, local and generous cuisine in a warm and modern setting.
        </p>

        <a
          href="/menu"
          className="bg-amber-600 hover:bg-amber-700 px-6 py-3 rounded-full text-white font-semibold transition-all duration-300 shadow-lg hover:scale-105"
        >
          View Menu
        </a>
      </div>

      {/* Bottom black gradient for readability */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
};

export default Hero;
