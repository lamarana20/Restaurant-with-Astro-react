import { CartProvider } from './CartContext';

export default function CartWrapper({ children }) {
  return <CartProvider>{children}</CartProvider>;
}
