import React from 'react';
import './Item.css';
import CartWidget from './CartWidget';

function Item(props){
     

    return(
        <div className="item">
            <div className="image"><img src={'img/' + props.image} alt='' width="100%" /></div>
            <div className="title">{props.title}</div>
            <div className="rating">
                <p>
                
                </p>
                Cantidad: 
                <select value={props.rating}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>
            <div className="actions">
                <button> Añadir al carrito
                <CartWidget/>
                </button>
            </div>
        </div>
    );
}


export default Item;