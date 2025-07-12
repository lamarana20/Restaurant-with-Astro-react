import { useState } from 'react';
import { FiHeart, FiClock, FiStar, FiPlus } from 'react-icons/fi';
import { motion } from 'framer-motion';

const MenuItem = ({ item, addToCart }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [quantity, setQuantity] = useState(1);

  return (
    <motion.div 
      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 relative"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <a
        href={`/menu/${item.id}`}
        className="block no-underline"
        aria-label={`View details for ${item.name}`}
      >
        <div className="relative">
          <img 
            src={item.image || '/placeholder-food.jpg'} 
            alt={item.name} 
            className="w-full h-48 object-cover"
            loading="lazy"
          />

          <div className="absolute top-0 left-0 right-0 flex justify-between p-3">
            {item.isPopular && (
              <div className="bg-amber-500 text-white px-3 py-1 rounded-full flex items-center gap-1 text-sm font-medium shadow-md">
                <FiStar className="text-yellow-200" />
                <span>Chef's Pick</span>
              </div>
            )}

            <button 
              onClick={(e) => {
                e.preventDefault();
                setIsFavorite(!isFavorite);
              }}
              className={`p-2 rounded-full backdrop-blur-sm transition ${isFavorite ? 'bg-rose-100 text-rose-500' : 'bg-white/80 text-gray-600 hover:bg-rose-50'}`}
            >
              <FiHeart className={isFavorite ? 'fill-current' : ''} />
            </button>
          </div>

          {(item.isVegan || item.isGlutenFree) && (
            <div className="absolute bottom-3 left-3 flex gap-2">
              {item.isVegan && (
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">Vegan</span>
              )}
              {item.isGlutenFree && (
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">Gluten Free</span>
              )}
            </div>
          )}
        </div>

        <div className="p-5">
          <div className="flex justify-between items-start mb-2">
            <h2 className="text-xl font-bold text-gray-900">{item.name}</h2>
            <span className="text-amber-600 font-bold text-lg whitespace-nowrap pl-2">
              ${(item.price * quantity).toFixed(2)}
            </span>
          </div>

          <p className="text-gray-600 text-sm mb-4">{item.description}</p>

          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <FiClock className="text-amber-500" />
              <span>{item.prepTime} min</span>
            </div>
            <span>{item.calories} kcal</span>
          </div>
        </div>
      </a>

      <div
        className="flex items-center justify-between px-5 pb-5 pt-2 border-t border-gray-100 bg-white"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center border border-gray-200 rounded-full">
          <button 
            onClick={(e) => {
              e.preventDefault();
              setQuantity(Math.max(1, quantity - 1));
            }}
            className="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded-l-full"
          >
            -
          </button>
          <span className="px-3">{quantity}</span>
          <button 
            onClick={(e) => {
              e.preventDefault();
              setQuantity(quantity + 1);
            }}
            className="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded-r-full"
          >
            +
          </button>
        </div>

        <motion.button 
          onClick={(e) => {
            e.preventDefault();
            addToCart({ ...item, qty: quantity });
          }}
          className="flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors"
          whileTap={{ scale: 0.95 }}
        >
          <FiPlus />
          <span>Add</span>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default MenuItem;
