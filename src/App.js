import React from 'react';
import './App.css';
import Navigationbar from './components/navbar'
import Corosel from './components/corosel'
import Footer from './components/footer'
import Products from './components/products'

function App() {
  return (
    <div>
      <Navigationbar/>
      <Corosel/>
      <Footer/>  
    </div>
     
  );
}

export default App;
