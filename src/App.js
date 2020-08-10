import React from 'react';
import './App.css';
import Navigationbar from './components/navbar'
import Corosel from './components/corosel'
import Footer from './components/footer'
import Products from './components/products'
import Ourpartners from './components/ourpartners'
import Aboutus from './components/aboutus'
function App() {
  return (
    <div className="back">
      <Navigationbar/>
      <Corosel/>
      <Aboutus/>
      <Products/>
      <Ourpartners/>
      <Footer/>  
    </div>
     
  );
}

export default App;
