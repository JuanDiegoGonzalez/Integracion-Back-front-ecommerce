import React from "react";
import "./ProductItem.scss";

export const ProductItem = ({ productItem }) => {
  const { title, sold_quantity, thumbnail, description, price } = productItem;
  return (
    <div className="product">
      <div className="product__detail no-gutters">
        <img
          className="product__image"
          loading="lazy"
          src={thumbnail}
          alt={title}
          title={title}
        />
        <div className="product__info">
          <p className="sold">{sold_quantity} vendidos</p>
          <p className="title">{title}</p>
          {price ? <p className="price"> $ {price}</p> : ""}
          <button className="btn btn-primary" type="button">
            Comprar
          </button>
        </div>
      </div>
      <div className="product__description">
        <h2 className="title">Descripción del producto</h2>
        <p className="plain_text">{description}</p>
      </div>
    </div>
  );
};
