import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { CartProvider, useCart } from "./contexts/CartContext";
import { fetchProducts } from "./services/api";
import ProductCard from "./components/ProductCard";
import Cart from "./pages/Cart";

function Navbar() {
  const { cartItems } = useCart();
  return (
    <nav className="p-4 bg-gray-200 flex gap-4">
      <Link to="/">Home</Link>
      <Link to="/cart">Cart ({cartItems.length})</Link>
    </nav>
  );
}

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProducts() {
      setLoading(true);
      const data = await fetchProducts();
      setProducts(data);
      setLoading(false);
    }
    loadProducts();
  }, []);

  if (loading) return <p className="p-6 text-lg">Loading products...</p>;
  if (products.length === 0)
    return <p className="p-6 text-lg">No products available.</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}
