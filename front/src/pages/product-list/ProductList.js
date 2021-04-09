import { Card } from '../../components/card/Card';
import React,  {useEffect, useState} from 'react'
import './ProductList.scss'
import {getItems} from '../../services/utils'


export const ProductList = () => {
    
    const [products, setProducts] = useState([]);
     
    useEffect(() => {
      getItems('').then((data) => setProducts(data));
    }, []) 
  
  
    return (
        <div className="container product-list">
           {products.map((prod) => 
                <Card id={prod.id} key={prod.id} title={prod.title} price={prod.price} location={prod.address.state_name} image={prod.thumbnail}></Card>
            )} 
        </div>
    )
}
