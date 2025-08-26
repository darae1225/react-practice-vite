import { it, expect, describe, vi } from "vitest"; // 'vi' create a fake function (mock) for testing purpose
import { Product } from "../home/Product";
import { render, screen } from "@testing-library/react"; //'screen' let us check the fake web page
import userEvent from "@testing-library/user-event"; //simulates a click
import axios from "axios";
import { beforeEach } from "vitest";
import { HomePage } from "./HomePage";
import { MemoryRouter } from "react-router"; //specifically used for testing

vi.mock("axios"); //fake axios

describe("HomePage component", () => {
  let loadCart;

  beforeEach(() => {
    loadCart = vi.fn();

    //this below code is used when you need to get info from backend, it will run fake axios
    axios.get.mockImplementation(async (urlPath) => {
      if (urlPath == "api/products") {
        return {
          data: [
            {
              id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
              image: "images/products/athletic-cotton-socks-6-pairs.jpg",
              name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
              rating: {
                stars: 4.5,
                count: 87,
              },
              priceCents: 1090,
              keywords: ["socks", "sports", "apparel"],
            },
            {
              id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
              image: "images/products/intermediate-composite-basketball.jpg",
              name: "Intermediate Size Basketball",
              rating: {
                stars: 4,
                count: 127,
              },
              priceCents: 2095,
              keywords: ["sports", "basketballs"],
            },
          ],
        };
      }
    });
  });

  it("displays the products correct", () => {
    render(
      <MemoryRouter>
        <HomePage cart={[]} loadCart={loadCart} />
      </MemoryRouter>
    );
  });
});
