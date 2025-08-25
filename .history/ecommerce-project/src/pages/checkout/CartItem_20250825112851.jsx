import { Fragment } from "react";

export function CartItem({ cartItem, deleteCartItem }) {
  return (
    <Fragment>
      <img className="product-image" src={cartItem.product.image} />
    </Fragment>
  );
}
