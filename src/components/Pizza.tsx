import React from 'react';
import  PizzaCss from './Pizza.module.css';
import {Pizza} from '../types'
import { useAddToCart } from './AddToCart';



interface Props{
    pizza: Pizza;
}

const PizzaItem: React.FC<Props>= ({pizza}) => {
    const addToCart = useAddToCart();
    const handleAddToCartClick = () => {
        addToCart({ id: pizza.id, name: pizza.name, price: pizza.price });
    };
    return (
        <div>
            <li className={PizzaCss.container}>
                <h2>{pizza.name}</h2>
                <p>{pizza.description}</p>
                <p>{pizza.price}</p>
                <button type="button" onClick={handleAddToCartClick}>Add to Cart</button>
            </li>
        </div>
    )
};



export default PizzaItem;
