import { useEffect, useState } from "react";
import {ProductItem} from "../../exportComponents";

const ProductsList = ({products}) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem("favorites");
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingProduct = prevItems.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  function removerItem(product) {
    setCartItems((prev) => prev.filter((item) => item.id !== product.id));
  }

  const toggleFavorite = (product) => {
    setFavorites((prevFavorites) => {
      const isFavorite = prevFavorites.some((item) => item.id === product.id);
      if (isFavorite) {
        return prevFavorites.filter((item) => item.id !== product.id);
      }
      return [...prevFavorites, product];
    });
  };

  return (
    <div className=" text-center">
      <ul className="row row-gap-4 p-0 px-5 px-sm-0 px-md-2">
        {products.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            handleAddToCart={addToCart}
            cartItems={cartItems}
            handleRemoveItem={removerItem}
            favorites={favorites}
            handleToggleFavorite={toggleFavorite}
          />
        ))}
      </ul>
    </div>
  );
};

export default ProductsList;
