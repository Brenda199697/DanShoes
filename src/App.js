import React from 'react';

import './App.css';
import Home from './Home';
import Productos from './Productos';

class App extends React.Component {

  constructor(props){
    super(props);
    
    this.state = {
      Zapatos:[
        {id:0, rating: 4, title: 'Nekar', image: '1.jpg'},
        {id:1, rating: 3, title: 'Belovo', image: '2.jpg'},
        {id:2, rating: 5, title: 'Isparta', image: '3.jpg'},
        {id:3, rating: 5, title: 'Polta', image: '4.jpg'},
        {id:4, rating: 5, title: 'Natar', image: '5.jpg'}
      ],


    };
  }
  render () {
  return (
    <div className="app">
      <Home title="DAN"/>
      <Productos items={this.state.Zapatos}/>
      
</div>
  );
}
}

export default App;
