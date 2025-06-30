import React from 'react'
import { Image } from 'astro:assets';
import hero from '../react/hero.jpg'; 

const Hero = () => {
  return (
    <section className="relative mx-1.5">
      <img src={hero.src} alt="Restaurant" className="w-full h-[30vh] object-cover" />
      <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center text-white text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Bienvenue au Restaurant MLD</h1>
        <p className="text-lg md:text-xl mb-6">Savourez une cuisine raffinée dans un cadre chaleureux</p>
        <a href="/menu" className="bg-amber-600 hover:bg-amber-700 px-6 py-3 rounded-lg text-white font-semibold transition">
          Voir le menu
        </a>
      </div>
    </section>
  )
}

export default Hero
