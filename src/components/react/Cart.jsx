import React from "react";
import { useCart } from "./CartContext";

export default function Cart() {
  const { cart, total, updateQuantity, removeFromCart, clearCart, itemCount } = useCart();

  if (itemCount === 0) return <p>Votre panier est vide</p>;

  return (
    <div className="p-4 border rounded">
      <h2 className="font-bold text-xl mb-4">Panier ({itemCount} articles)</h2>

      {cart.map(item => (
        <div key={item.id} className="flex items-center gap-4 mb-2">
          <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
          <div className="flex-grow">
            <h3>{item.name}</h3>
            <p>{(item.price * item.qty).toFixed(2)} €</p>
            <div>
              <button onClick={() => updateQuantity(item.id, item.qty - 1)}>-</button>
              <span className="mx-2">{item.qty}</span>
              <button onClick={() => updateQuantity(item.id, item.qty + 1)}>+</button>
            </div>
          </div>
          <button onClick={() => removeFromCart(item.id)} className="text-red-600">Supprimer</button>
        </div>
      ))}

      <p className="font-bold mt-4">Total : {total.toFixed(2)} €</p>
      <button onClick={clearCart} className="mt-2 underline text-red-600">Vider le panier</button>
    </div>
  );
}
