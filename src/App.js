import React from 'react';

import './App.css';
import Home from './Home';
import Productos from './Productos';
import { ThemeProvider } from './Context/ThemeContext';

import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyDIYOa73JdDgDl7mCNKarvoj0MNhXgolyM",
  authDomain: "dans-d2455.firebaseapp.com",
  projectId: "dans-d2455",
  storageBucket: "dans-d2455.appspot.com",
  messagingSenderId: "209322027641",
  appId: "1:209322027641:web:d069a14a72b519671642a8",
  measurementId: "G-T267DEMNB6"
};


const app = initializeApp(firebaseConfig);
console.log("Firebase ->", app)



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
      <ThemeProvider>
      <Home title="DAN"/>
      <Productos items={this.state.Zapatos}/>

      </ThemeProvider>    
</div>
  

  );
}
}

export default App;
