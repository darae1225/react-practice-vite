import { it, expect, describe, beforeEach, vi } from "vitest";
import { Header } from "../components/Header";
import { MemoryRouter } from "react-router";
import { render, screen } from "@testing-library/react";
import axios from "axios";
import userEvent from "@testing-library/user-event";
vi.mock("axios");

describe("Header component", () => {
  let cart;

  beforeEach(() => {
    cart = [
      {
        productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
        quantity: 2,
        deliveryOptionId: "1",
      },
      {
        productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
        quantity: 3,
        deliveryOptionId: "2",
      },
    ];
  });

  it("displays the correct header details", () => {
    render(
      <MemoryRouter>
        <Header cart={cart} />
      </MemoryRouter>
    );

    const logo = screen.getByTestId("header-logo");
    expect(logo.toHaveAttribute("src", "images/logo-white.png"));
  });
});
