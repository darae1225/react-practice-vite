import { NavLink, useNavigate } from "react-router";
import "./Header.css";
import { useState } from "react";

export function Header({ cart }) {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const updateSearchInput = (e) => {
    setSearch(e.target.value);
  };

  const searchProducts = () => {
    navigate(`/?search=${search}`);
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
            <img className="logo" src="images/logo-white.png" alt="logo" />
            <img
              className="mobile-logo"
              src="images/mobile-logo-white.png"
              alt="mobile-logo"
            />
          </NavLink>
        </div>

        <div className="middle-section">
          <input
            value={search}
            onChange={updateSearchInput}
            className="search-bar"
            type="text"
            placeholder="Search"
          />

          <button onClick={searchProducts} className="search-button">
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
