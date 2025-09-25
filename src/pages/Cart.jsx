import { useCart } from "../contexts/CartContext";

export default function Cart() {
  const { cartItems, removeFromCart, clearCart, updateQuantity } = useCart();

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cartItems.length === 0) {
    return <h2 className="p-6 text-lg">Your cart is empty 🛒</h2>;
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      <ul className="space-y-4">
        {cartItems.map((item) => (
          <li key={item.id} className="flex justify-between items-center border-b pb-3">
            <div>
              <h3 className="font-semibold">{item.title}</h3>
              <p>${item.price} × {item.quantity}</p>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-2 bg-gray-200 rounded">-</button>
              <span>{item.quantity}</span>
              <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-2 bg-gray-200 rounded">+</button>
              <button onClick={() => removeFromCart(item.id)} className="px-3 bg-red-500 text-white rounded">Remove</button>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-6 font-bold">Total: ${total.toFixed(2)}</div>
      <button onClick={clearCart} className="mt-4 px-4 py-2 bg-gray-700 text-white rounded">Clear Cart</button>
    </div>
  );
}
