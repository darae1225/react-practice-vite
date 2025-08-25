import { formatMoney } from "../../utils/money";
import { useState } from "react";
import axios from "axios";

export function CartItemDetails({ cartItem, loadCart }) {
  const [isUpdatingQuantity, setIsUpdatingQuantity] = useState(false);
  const [quantity, setQuantity] = useState(cartItem.quantity);

  const updateQuantityInput = (event) => {
    setQuantity(event.target.value);
  };

  const updateQuantity = async () => {
    setIsUpdatingQuantity(true);

    if (isUpdatingQuantity) {
      await axios.put(`/api/cart-items/${cartItem.productId}`, {
        quantity: Number(quantity),
      });
      await loadCart();
      setIsUpdatingQuantity(false);
    }
  };

  const deleteCartItem = async () => {
    await axios.delete(`/api/cart-items/${cartItem.productId}`);
    await loadCart();
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
          {isUpdatingQuantity && (
            <input
              value={quantity}
              onChange={updateQuantityInput}
              type="text"
              className="checkout-quantity-input"
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  updateQuantity();
                } else if (event.key === "Escape") {
                  cartItem.quantity = quantity;
                  isUpdatingQuantity(false);
                }
              }}
            />
          )}
          <span className="quantity-label">{cartItem.quantity}</span>
        </span>
        <span
          className="update-quantity-link link-primary"
          onClick={updateQuantity}
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
