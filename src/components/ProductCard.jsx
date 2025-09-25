import { useCart } from "../contexts/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="border rounded-lg shadow-sm p-4 text-center">
      <img src={product.image} alt={product.title} className="w-28 h-28 mx-auto object-contain mb-3" />
      <h3 className="font-medium text-sm mb-1 truncate">{product.title}</h3>
      <p className="text-gray-600 mb-2">${product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600"
      >
        Add to Cart
      </button>
    </div>
  );
}
