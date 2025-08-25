import { Fragment, useState } from "react";
import { formatMoney } from "../../utils/money";

export function CartItem({ cartItem, deleteCartItem }) {
  const [updateStatus, setUpdateStatus] = useState(false);

  const updateCartItem = () => {
    setUpdateStatus(true);
  };
  return (
    <Fragment>
      <img className="product-image" src={cartItem.product.image} />

      <div className="cart-item-details">
        <div className="product-name">{cartItem.product.name}</div>
        <div className="product-price">
          {formatMoney(cartItem.product.priceCents)}
        </div>
        <div className="product-quantity">
          <span>
            Quantity:{" "}
            {updateStatus && (
              <input type="text" className="checkout-quantity-input" />
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
    </Fragment>
  );
}
