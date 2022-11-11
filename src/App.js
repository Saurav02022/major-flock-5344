import React from 'react';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import MainContent from './components/MainContent';
import IndividuaProduct from './components/IndividuaProduct';
import Footer from './components/Footer';
import SignupModal from './components/SignupModal';
import cart from './components/cart';
import Checkout from './components/Checkout';
import OrderPlacedSuccessfully from './components/OrderPlacedSuccessfully';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Content}/>
        <Route exact path="/mainContent" component={MainContent}/>
        <Route exact path="/product/:id" render={(props) => <IndividuaProduct {...props} />} />
        <Route exact path="/signup" component={SignupModal}/>
        <Route exact path="/cart" component={cart}/>
        <Route exact path="/checkout" component={Checkout}/>
        <Route exact path="/orderplaced" component={OrderPlacedSuccessfully}/>
      </Switch>
      <Footer />
    </BrowserRouter>
  
  );
}



export default App;
