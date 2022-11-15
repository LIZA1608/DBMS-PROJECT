import React from "react";
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } 
from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from './Payment';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";



const promise = loadStripe('pk_test_51Io1tXSCjdeNjf9CEzKGnVXfpBMtc2MvhlDbmbPd9EtmxFzhRQGxMMhCjphya3gikTOsg9MxhNfpZQf1SruKoXu000vYxMrI38')




function App() {
  return (
    
    
        <Router>
    
        <div className="app">
     
         <Switch>
         <Route path="/login">
          <Login/>
    
          </Route>
          <Route path="/checkout">
          <Header/>
      
          <Checkout />
           </Route>
           <Route path="/payment"> {/* for payment  */}
           <Header/>
           <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
          <Header/> 
         <Home />
         <Footer />
         </Route>
        </Switch>
       </div>
      </Router>
      
      

                  
  );
}

export default App;
