import { NavLink, useNavigate } from "react-router";
import "./Header.css";
import { useState } from "react";

export function Header({
  cart,
}: {
  cart: {
    productId: string;
    quantity: number;
    deliveryOptionId: string;
  }[];
}) {
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
            <img
              data-testid="header-logo"
              className="logo"
              src="images/logo-white.png"
              alt="logo"
            />
            <img
              data-testid="header-mobile-logo"
              className="mobile-logo"
              src="images/mobile-logo-white.png"
              alt="mobile-logo"
            />
          </NavLink>
        </div>

        <div className="middle-section">
          <input
            data-testid="header-search-bar"
            value={search}
            onChange={updateSearchInput}
            className="search-bar"
            type="text"
            placeholder="Search"
          />

          <button
            data-testid="header-search-button"
            onClick={searchProducts}
            className="search-button"
          >
            <img
              className="search-icon"
              src="images/icons/search-icon.png"
              alt="search-icon"
            />
          </button>
        </div>

        <div className="right-section">
          <NavLink
            data-testid="header-orders-link"
            className="orders-link header-link"
            to="/orders"
          >
            <span className="orders-text">Orders</span>
          </NavLink>

          <NavLink
            data-testid="header-cart-link"
            className="cart-link header-link"
            to="/checkout"
          >
            <img
              className="cart-icon"
              src="images/icons/cart-icon.png"
              alt="cart-icon"
            />
            <div className="cart-quantity">{totalQuantity}</div>
            <div className="cart-text">Cart</div>
          </NavLink>
        </div>
      </div>
    </>
  );
}
