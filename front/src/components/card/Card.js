import React from "react";
import { Link } from "react-router-dom";
import "./Card.scss";

export const Card = ({ product }) => {
  const { id, title, price, address, thumbnail } = product;
  return (
    <div className="card">
      {/* <img src="http://http2.mlstatic.com/D_916062-MLA43654417337_102020-I.jpg" className="card-img-top" alt="iphone 11"/> */}
      <Link className="card-img-link" to={`/list/${id}`}>
        <img src={thumbnail} className="card-img-top" alt={title} />
      </Link>
      <div className="card-body">
        <div className="card-body-description">
          <h5 className="card-title">$ {price}</h5>
          <p className="card-text">{title}</p>
        </div>
        <div className="card-body-location">
          <p className="card-text">{address?.state_name}</p>
        </div>
      </div>
    </div>
  );
};
