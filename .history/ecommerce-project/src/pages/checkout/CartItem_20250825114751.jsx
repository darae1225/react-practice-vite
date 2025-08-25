import { Fragment } from "react";
import { CartItemDetails } from "./CartItemDetails";

export function CartItem({ cartItem, deleteCartItem, loadCart }) {
  return (
    <Fragment>
      <img className="product-image" src={cartItem.product.image} />

      <CartItemDetails
        cartItem={cartItem}
        deleteCartItem={deleteCartItem}
        loadCart={loadCart}
      />
    </Fragment>
  );
}
