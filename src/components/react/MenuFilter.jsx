
import { useState } from "react";
import MenuItem from "./MenuItem";
import { categories, menuItems } from "../../utils/data";
import { FiFilter } from "react-icons/fi";

export default function MenuFilter() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredItems =
    selectedCategory === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  const categoryName =
    selectedCategory === "all"
      ? "Tous nos plats"
      : categories.find((c) => c.id === selectedCategory)?.name ?? "Plats";

  return (
    <div>
      {/* Filtres */}
      <div className=" flex flex-wrap gap-2 justify-center ">
        <button
          onClick={() => setSelectedCategory("all")}
          className={`px-4 py-2 rounded-full flex items-center gap-1 border transition ${
            selectedCategory === "all"
              ? "bg-amber-600 text-white"
              : "bg-gray-100 hover:bg-gray-200"
          }`}
        >
          <FiFilter className="text-sm" />
          <span>Tous</span>
        </button>
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-4 py-2 rounded-full flex items-center gap-1 border transition ${
              selectedCategory === cat.id
                ? "bg-amber-600 text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            <span>{cat.icon}</span>
            <span>{cat.name}</span>
          </button>
        ))}
      </div>

      {/* Section plats */}
      <section className="flex flex-col gap-4 my-3 mx-auto w-full md:w-2/3">
        <h2 className="text-2xl font-bold mb-4 text-center">{categoryName}</h2>
        {filteredItems.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            Aucun plat ne correspond à cette catégorie.!
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <MenuItem key={item.id} item={item} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
