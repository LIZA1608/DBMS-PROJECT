import React from 'react'
import './Payment.css';
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

function Payment() {
    const[{ basket, user }, dispatch] = useStateValue()

    const stripe = useStripe();
    const elements = useElements();

    

    const handleSubmit = e=> {
        // stripe stuff
    }

    const handleChange = e =>{

        

    }


    
    return (
        <div className='payment'>
            <div className='payment__container'>
                <h1>
                    Checkout (
                        <Link to="/checkout">{basket?.length} items</Link>
                        )
                </h1>
            {/* Payment section - delivery address*/}
             <div className='payment__section'>
                <div className='payment__title'>
                    <h3>Delivery Address :</h3>
                </div>
                <div className='payment__address'>
                    
                    <p>Karnal</p>
                    <p>Haryana</p>

                </div>
              </div>

            </div>

            {/* Payment section - Review Items*/}
            <div className='payment__section'>
              <div className='payment__title'>
                  <h3>Review Items</h3>


               </div> 
                <div className='payment__items'>
                    {basket.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                </div>
            </div>

            {/* Payment section - Payment Method*/}
            <div className='payment__section'>
                <div clasName="payment__title">
                    <h3>Payment Method</h3>
                </div>
                <div className="payment__details">
                      {/* STRIPE  */}

                      <form onSubmit={handleSubmit}>
                          <CardElement onChange={handleChange} />

                          <div className='payment__price'></div>


                      </form>
                      <Link to="/">
                      <button className='payment__pay'>Proceed to Pay</button>
                      </Link>
                        
                      
                </div>

                
            </div>
            

        </div>
    )
}

export default Payment
