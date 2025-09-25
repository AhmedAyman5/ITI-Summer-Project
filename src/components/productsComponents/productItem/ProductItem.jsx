import { IoCartOutline } from "react-icons/io5";
import {
  FaRegEye,
  FaRegHeart,
  FaHeart,
  FaTrash,
  FaRegCommentDots,
} from "react-icons/fa";
import { CartBtn, StarRating } from "../../exportComponents";
import { useNavigate } from "react-router-dom";

const ProductItem = ({
  product,
  handleAddToCart,
  handleRemoveItem,
  cartItems,
  handleToggleFavorite,
  favorites,
}) => {
  const navigate = useNavigate();

  const isInCart = cartItems.find((item) => item.id === product.id);
  const isFavorite = favorites.find((item) => item.id === product.id);

  return (
    <li className="product-item col-sm-6 col-md-4 col-lg-3">
      <div className="card h-100 justify-content-between text-start overflow-hidden position-relative border-card">
        <span
          className="view-card-icon position-absolute fs-4"
          style={{ top: "8px", right: "-100%" }}
        >
          <CartBtn onClick={()=> navigate(`/product/${product.id}`)}>
            <FaRegEye color="#008ECC" />
          </CartBtn>
        </span>
        <div
          className="d-flex justify-content-center align-items-center p-3 h-75"
          style={{ background: "#F5F5F5" }}
        >
          <img
            style={{ maxHeight: "140px", maxWidth: "150px" }}
            src={product.image}
            className="card-img-top m-auto"
            alt={product.title}
            loading="lazy"
          />
        </div>
        <div>
          <h6
            className="card-title m-0 mt-3 px-3 text-truncate"
            title={product.title}
          >
            {product.title}
          </h6>
          <div className="py-1 d-flex align-items-center gap-3 px-3">
            <div className="d-flex align-items-center gap-1">
              <StarRating rating={product.rating.rate} size={14}/>
              <span style={{ fontSize: "13px" }}>{product.rating.rate}</span>
            </div>
            <div className="d-flex align-items-center gap-1">
              <FaRegCommentDots color="#008ECC" size={14}/>
              <span style={{ fontSize: "13px" }}>{product.rating.count}</span>
            </div>
          </div>
          <div className="d-flex align-items-center py-2 px-3">
            <p className="m-0 flex-grow-1 fw-medium">${product.price}</p>
            <div className="flex-grow-1 d-flex align-items-center justify-content-end">
              <span>
                <CartBtn onClick={() => handleToggleFavorite(product)}>
                  {!isFavorite ? <FaRegHeart /> : <FaHeart color="red" />}
                </CartBtn>
              </span>
              <span>
                {!isInCart ? (
                  <CartBtn onClick={() => handleAddToCart(product)}>
                    <IoCartOutline />
                  </CartBtn>
                ) : (
                  <CartBtn onClick={() => handleRemoveItem(product)}>
                    <FaTrash color="red" />
                  </CartBtn>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ProductItem;