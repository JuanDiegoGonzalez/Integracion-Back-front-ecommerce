import React from "react";
import ReactDOM from "react-dom";
import { Card } from "./Card";
import { MemoryRouter } from "react-router-dom";

describe("Card suite", () => {
  test("should show Card information", () => {
    const container = document.createElement("div");

    ReactDOM.render(
      <MemoryRouter>
        <Card
          product={{
            id: "MLA",
            title: "Iphone11",
            address: { state_name: "Buenos Aires" },
            thumbnail:
              "http://http2.mlstatic.com/D_738648-MLA43654417399_102020-I.jpg",
            price: "12000",
          }}
        ></Card>
      </MemoryRouter>,
      container
    );
    expect(container.textContent).toMatch("Iphone11");
  });
});
