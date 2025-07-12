import React, { useMemo } from 'react';
import { menuItems } from '../../utils/data';
import MenuItem from './MenuItem';

const PopularItem = () => {
  // Mémorisation des plats populaires
  const filteredPopularItems = useMemo(
    () => menuItems.filter((item) => item.isPopular),
    []
  );

  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          ⭐ Nos plats les plus populaires
        </h2>
        <p className="text-gray-500 mb-10">
          Découvrez les favoris de nos clients, sélectionnés par notre chef.
        </p>

        {filteredPopularItems.length === 0 ? (
          <p className="text-center text-gray-500 py-12">
            Aucun plat populaire pour le moment.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredPopularItems.map((item) => (
              <MenuItem key={item.id} item={item} />
            ))}
          </div>
        )}

        <div className="my-10">
          <a
            href="/menu"
            className="inline-block bg-amber-600 hover:bg-amber-700 px-6 py-3 rounded-full text-white font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
          >
            Voir tout le menu
          </a>
        </div>
      </div>
    </section>
  );
};

export default PopularItem;
