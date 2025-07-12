import React from 'react';
import pkg from 'react-router-dom';
const { useNavigate } = pkg;
import { FiClock, FiStar, FiArrowLeft } from 'react-icons/fi';

const MenuItemDetail = ({ item }) => {
  const navigate = useNavigate();

  if (!item) {
    return (
      <div className="text-center py-20 text-gray-500">
        Plat introuvable.
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
    <button
  onClick={() => window.history.back()}
  className="mb-6 flex items-center gap-2 text-sm text-gray-600 hover:text-black"
>
  <FiArrowLeft /> Retour
</button>


      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={item.image || '/placeholder-food.jpg'}
          alt={item.name}
          className="w-full md:w-1/2 h-64 object-cover rounded-xl shadow"
        />

        <div className="flex-1">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">{item.name}</h1>

          {item.isPopular && (
            <span className="inline-flex items-center gap-1 text-amber-600 text-sm mb-2 bg-amber-100 px-3 py-1 rounded-full">
              <FiStar /> Populaire
            </span>
          )}

          <p className="text-gray-600 mb-4">{item.description}</p>

          <div className="flex items-center gap-4 text-gray-500 text-sm mb-4">
            <span className="flex items-center gap-1">
              <FiClock /> {item.prepTime} min
            </span>
            <span>{item.calories} kcal</span>
            {item.isVegan && <span className="text-green-600">🌱 Vegan</span>}
            {item.isGlutenFree && <span className="text-blue-600">Sans gluten</span>}
          </div>

          <p className="text-2xl font-semibold text-amber-600 mb-6">
            {item.price.toFixed(2)} $
          </p>

          <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-full font-medium transition">
            Ajouter au panier
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItemDetail;
