import { it, expect, describe, beforeEach, vi } from "viteset";
import { Header } from "../components/Header";
import { MemoryRouter } from "react-router";
import { render, screen } from "@testing-library/react";
import axios from "axios";

vi.mock("axios");

describe(() => {
  let cart;

  beforeEach(() => {
    cart = axios.post("/api/cart-items?expand=product");
  });

  it("displays correct details", () => {
    render(
      <MemoryRouter>
        <Header cart={cart} />
      </MemoryRouter>
    );
  });
});
