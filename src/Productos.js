import React from 'react';
import Item from './Item';


function Productos(props){
     return (

        <div className="Productos">
            {
            props.items.map(item =>
              <Item
                    key={item.id} 
                    id={item.id} 
                    title={item.title} 
                    image={item.image}
                    rating={item.rating} />

                )
            }
        </div>

);
    }

     export default Productos;