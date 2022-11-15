import React from 'react'
import "./Home.css";
//import Footer from "./Footer";
import  Product from "./Product";
import img2 from './images/E-Commerce011.jpg';


function Home() {
    return (
        <div className="home">
      <div className="home__container">
        <img
          className="home__image"
         
            src={img2}
            alt=""
        />
        <div className="home__row">
        <Product
            id="12321341"
            title="Sony WH-1000XM4 Industry Leading Wireless Noise Cancelling Headphones, Bluetooth Headset with Mic for Phone Calls, 30 Hours Battery Life, Quick Charge, Touch Control & Alexa Voice Control – (Black)"
            price={24900}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/31DQ1NOBi4L._AC_.jpg"
          />
          
        <Product 
             id="548465"
             title="Parallel Worlds: The Science of Alternative Universes and Our Future in the Cosmos by Michio Kaku "
             price={539}
             rating={5}
             image="https://images-na.ssl-images-amazon.com/images/I/51pC9rIHCwL._SX324_BO1,204,203,200_.jpg"/>
            
            
        </div>

        <div className="home__row">
            <Product
                id="59594965"
                title="New Apple iPhone 12 Pro (128GB) - Silver"
                price={115900}
                rating={5} 
                image="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-pro-family-hero?wid=940&amp;hei=1112&amp;fmt=jpeg&amp;qlt=80&amp;.v=1604021663000"/>
                 
            <Product 
                id="6456548"
                title="Astrophysics for People in a Hurry by Neil Degrasse Tyson"
                price={445}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/51CeYGN+c0L._SX306_BO1,204,203,200_.jpg"
                 />
            <Product  
                id="564565"
                title="The Future of Humanity: Terraforming Mars, Interstellar Travel, Immortality, and Our Destiny Beyond by Michio Kaku"
                price={369}
                rating={5}
                image="https://m.media-amazon.com/images/I/91wPzXRaTHL._AC_UY327_QL65_.jpg"/>
            
        </div>

        <div className="home__row">
           <Product 
              id="654434"
              title="TCL 80 cm (32 inches) HD Ready Certified Android Smart LED TV 32P30S (Black)"
              price={14490}
              rating={3}
              image="https://images-na.ssl-images-amazon.com/images/I/81SQ3nSk7rL._SL1500_.jpg"/>
           
        </div>

        <div className="home__row">
            <Product
                id="5965254"
                title="Problem of Increasing Human Energy  by Nikola Tesla"
                price={3449}
                rating={5} 
                image="https://images-na.ssl-images-amazon.com/images/I/41-M6jamUhL._SX331_BO1,204,203,200_.jpg"/>
                 
            <Product 
                id="6456548"
                title="Backyard Guide to the Night Sky, Second Edition – National Geographic"
                price={1954}
                rating={5}
                image="https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/7741055953034?fmt=webp&qlt=90&wid=652&hei=652"
                 />
            <Product  
                id="564785"
                title="The 'What If 100' Book: The Most Popular Hypothetical Scenarios Explained With Science"
                price={3708}
                rating={5}
                image="https://cdn.shopify.com/s/files/1/1959/6971/products/whatif-book-new.jpg?v=1606257853"/>
            
        </div>
{/* 
        <div className="footer">
          <Footer />
        </div> */}
      </div>
    </div>
    )
}

export default Home

