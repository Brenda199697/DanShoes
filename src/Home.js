import React from 'react';
import Search from './Search'
import './Home.css';

function Home(props){
    return(
       <div className="container">
        <div className="subcontainer">
          <div className="logo">
               {props.title}
          </div>

          <div className="search">
            <Search />

          </div>
           <div className="actions">
             <button className="button btn-blue">+ Añadir al carrito</button>
           </div>

        </div>
        
       </div>

    );
}


export default Home;