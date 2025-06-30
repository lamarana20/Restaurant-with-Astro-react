import { useContext } from 'react';
import { CartContext } from './react/CartContext';

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  // Calcul total du panier
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  if (cart.length === 0) {
    return <div className="p-4 text-center text-gray-500">Votre panier est vide.</div>;
  }

  return (
    <div className="p-4 border rounded-lg max-w-md mx-auto bg-white shadow-md">
      <h2 className="text-xl font-bold mb-4">Votre Panier</h2>

      <ul className="divide-y divide-gray-200">
        {cart.map((item) => (
          <li key={item.id} className="flex justify-between items-center py-2">
            <div>
              <p className="font-semibold">{item.name}</p>
              <p className="text-sm text-gray-500">
                {item.qty} × {item.price.toFixed(2)} €
              </p>
            </div>
            <div className="flex items-center gap-4">
              <span className="font-bold">{(item.price * item.qty).toFixed(2)} €</span>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-600 hover:text-red-800 font-semibold"
              >
                Supprimer
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-4 border-t pt-4 flex justify-between font-bold text-lg">
        <span>Total :</span>
        <span>{total.toFixed(2)} €</span>
      </div>

      <button
        onClick={clearCart}
        className="mt-6 w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition"
      >
        Vider le panier
      </button>
    </div>
  );
}
export default Cart;