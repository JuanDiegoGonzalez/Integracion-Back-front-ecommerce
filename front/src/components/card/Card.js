import React from 'react';
import { Link } from 'react-router-dom'
import './Card.scss';

export const Card = (props) => {
    return (
        <div className="card">
            {/* <img src="http://http2.mlstatic.com/D_916062-MLA43654417337_102020-I.jpg" className="card-img-top" alt="iphone 11"/> */}
            <Link className="card-img-link" to={`/list/${props.id}`}>
                <img src={props.image} className="card-img-top" alt={props.title}/>
            </Link>
            <div className="card-body">
            <div className="card-body-description">
                <h5 className="card-title">$ {props.price}</h5>
                <p className="card-text">{props.title}</p>
            </div>
            <div className="card-body-location">
                <p className="card-text">{props.location}</p>
            </div>
            </div>
        </div>
    )
}
