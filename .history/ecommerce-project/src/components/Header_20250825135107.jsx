import { NavLink } from "react-router";
import "./Header.css";
import { useState } from "react";

export function Header({ cart }) {
  const [InputContent, setInputContent] = useState("");

  const searchBarInput = (event) => {
    setInputContent(event.target.value);
    console.log(inputContent);
  };

  let totalQuantity = 0;

  cart.forEach((cartItem) => {
    totalQuantity += cartItem.quantity;
  });

  // { cart } is a shortcut for const cart = props.cart;

  return (
    <>
      <div className="header">
        <div className="left-section">
          <NavLink to="/" className="header-link">
            <img className="logo" src="images/logo-white.png" />
            <img className="mobile-logo" src="images/mobile-logo-white.png" />
          </NavLink>
        </div>

        <div className="middle-section">
          <input
            value={InputContent}
            onChange={SearchBarInput}
            className="search-bar"
            type="text"
            placeholder="Search"
          />

          <button
            onClick={() => {
              console.log("hi");
            }}
            className="search-button"
          >
            <img className="search-icon" src="images/icons/search-icon.png" />
          </button>
        </div>

        <div className="right-section">
          <NavLink className="orders-link header-link" to="/orders">
            <span className="orders-text">Orders</span>
          </NavLink>

          <NavLink className="cart-link header-link" to="/checkout">
            <img className="cart-icon" src="images/icons/cart-icon.png" />
            <div className="cart-quantity">{totalQuantity}</div>
            <div className="cart-text">Cart</div>
          </NavLink>
        </div>
      </div>
    </>
  );
}
