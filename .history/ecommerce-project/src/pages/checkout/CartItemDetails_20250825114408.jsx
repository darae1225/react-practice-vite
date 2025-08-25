import { formatMoney } from "../../utils/money";
import { useState } from "react";

export function CartItemDetails({ cartItem, deleteCartItem }) {
  const [isUpdating, setIsUpdating] = useState(false);
  const [quantity, setQuantity] = useState(cartItem.quantity);

  const updateQuantity = (event) => {
    setQuantity(event.target.value);
  };

  const updateCartItem = () => {
    setIsUpdating(true);
  };

  return (
    <div className="cart-item-details">
      <div className="product-name">{cartItem.product.name}</div>
      <div className="product-price">
        {formatMoney(cartItem.product.priceCents)}
      </div>
      <div className="product-quantity">
        <span>
          Quantity:{" "}
          {isUpdating && (
            <input
              value={quantity}
              onChange={updateQuantity}
              type="text"
              className="checkout-quantity-input"
            />
          )}
          <span className="quantity-label">{cartItem.quantity}</span>
        </span>
        <span
          className="update-quantity-link link-primary"
          onClick={updateCartItem}
        >
          Update
        </span>
        <span
          className="delete-quantity-link link-primary"
          onClick={deleteCartItem}
        >
          Delete
        </span>
      </div>
    </div>
  );
}
