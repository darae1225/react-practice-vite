import { Fragment } from "react";
import { CartItemDetails } from "./CartItemDetails";

export function CartItem({ cartItem, deleteCartItem }) {
  return (
    <Fragment>
      <img className="product-image" src={cartItem.product.image} />

      <CartItemDetails cartItem={cartItem} deleteCartItem={deleteCartItem} />
    </Fragment>
  );
}
