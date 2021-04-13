import { Card } from "../../components/card/Card";
import React, { useEffect, useState } from "react";
import "./ProductList.scss";
import { getItems } from "../../services/utils";

export const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getItems("").then((data) => setProducts(data));
  }, []);

  return (
    <div className="container product-list">
      {products.map((prod) => (
        <Card key={prod.id} product={prod}></Card>
      ))}
    </div>
  );
};
