import { it, expect, describe, beforeEach, vi } from "vitest";
import { Header } from "../components/Header";
import { MemoryRouter } from "react-router";
import { render, screen } from "@testing-library/react";
import axios from "axios";
import userEvent from "@testing-library/user-event
vi.mock("axios");

describe(() => {
  let cart;
  let user;

  beforeEach(() => {
    cart = axios.post("/api/cart-items?expand=product");
    user = userEvent.setup();
  });

  it("displays correct details", () => {
    render(
      <MemoryRouter>
        <Header cart={cart} />
      </MemoryRouter>
    );

    expect();
  });
});
