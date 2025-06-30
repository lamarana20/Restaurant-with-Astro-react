import { FiFilter } from 'react-icons/fi';
import { categories } from '../../utils/data';

export default function CategoryFilter({ selectedCategory }) {
  // Fonction pour modifier l'URL et recharger la page
  function updateCategory(catId) {
    const search = new URLSearchParams(window.location.search);
    if (catId === 'all') {
      search.delete('category');
    } else {
      search.set('category', catId);
    }
    window.location.search = search.toString();
  }

  return (
    <div className="flex flex-wrap gap-2 justify-center">
      <button
        onClick={() => updateCategory('all')}
        className={`px-4 py-2 rounded-full flex items-center gap-1 transition ${
          selectedCategory === 'all'
            ? 'bg-amber-600 text-white font-semibold shadow'
            : 'bg-gray-100 hover:bg-gray-200'
        }`}
      >
        <FiFilter className="text-sm" />
        <span>Tous</span>
      </button>

      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => updateCategory(cat.id)}
          className={`px-4 py-2 rounded-full flex items-center gap-2 transition ${
            selectedCategory === cat.id
              ? 'bg-amber-600 text-white font-semibold shadow'
              : 'bg-gray-100 hover:bg-gray-200'
          }`}
        >
          <span>{cat.icon}</span>
          <span>{cat.name}</span>
        </button>
      ))}
    </div>
  );
}
