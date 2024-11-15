import logo from "../logo.svg";
import {Link, NavLink} from "react-router-dom"
import AllProducts  from "./allproducts";
import SingleProduct  from "./singleproduct";
import React, { useState, useEffect } from 'react';
import './home.css';
import { Why } from "./Why";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Frequent } from "./FAQ/frequent";
import { Subscribe } from "./Subscribe";
import { Monkey } from "./Monkey";
function Home() {

  // const products=[
  //   {
  //     'title':'product 1',
  //     'price':100
  //   },
  //   {
  //     'title':'product 2',
  //     'price':200
  //   },
  //   {
  //     'title':'product 3',
  //     'price':300
  //   },
  //   {
  //     'title':'product 4',
  //     'price':400
  //   }
  // ]
  // Step 1: State to hold product data
  const [products, setProducts] = useState([]);

  // Step 2: Fetch the products from the API using useEffect
  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/products/')
      .then(response => response.json())
      .then(data => {
        setProducts(data.results); // Set the fetched data in state
      })
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  useEffect(()=>{
    AOS.init({
    });
  },[])
  
  return (
    
    <main className="mt-4">
      <div className="rock">
        <div className="power" >

        </div>
      </div>
      <div className="why">
        <Why />
      </div>
      <div className="container">
        {/* Latest product section */}
        <h3 className="mb-3" style={{
          position:'relative',
          bottom:"-50px"
        }}>
          <Link to="/products" className="float-end btn  btn-dark " >
            View All Product <i className="fa-solid fa-arrow-right"></i>{" "}
          </Link>
        </h3>
        <div className="row mb-4">
        {products.map((product) => (
          <SingleProduct key={product.title} product={product} />
        ))}
         
        </div>
        {/* End Latest product section */}
        

        {/* Popular product section */}
        <h3 className="mb-3" style={{
          position:"relative",
          bottom:"-30px"
        }}>
          Popular Product{" "}
          
        </h3>
        <div className="row mb-4" style={{
          position:"relative",
          top:"100px"
        }}>
          {/* Product box */}
        
          <div className="col-12 col-md-3 mb-4"style={{margin:"0px 0px 0px 1px"}} id="maya" data-aos="fade-right">
            <div id="first">
                <img src={require('../Images/milk.jpg')} width="400px" height="290px"className="card-img-top" alt="..." />
              <div className="card-body" id="large">
                <h4 className="card-title">Card title</h4>
                <h5 className="card-title text-muted">Price : Rs. 500</h5>
                <div className="card-footer">
                <button title="Add to Cart" className="btn btn-primary">
                <i className="fa-solid fa-cart-shopping fa-1x"></i>
              </button>
              <button title="Add to Wishlist" className="btn  btn-danger ms-3">
                <i className="fa-regular fa-heart"></i>
              </button>
              <button style={{
                position:"relative",
                padding:"6px",
                borderRadius:"5px",
                left:"30px",
                top:"4px",
                backgroundColor:"skyblue"
              }}>Buy Now</button>
                </div>
              </div>
            </div>
          </div>
          {/* product box end */}
          {/* Product box */}
          <div className="col-12 col-md-3 mb-4" style={{margin:"0px 0px 0px 130px"}} id="maya" data-aos="fade-down">
            <div id="first">
              <img src={require('../Images/ghee.jpg')} width="400px" height="290px" className="card-img-top" alt="..." />
              <div className="card-body" id="large">
                <h4 className="card-title">Card title</h4>
                <h5 className="card-title text-muted">Price : Rs. 500</h5>
                <div className="card-footer">
                <button title="Add to Cart" className="btn btn-primary">
                <i className="fa-solid fa-cart-shopping fa-1x"></i>
              </button>
              <button title="Add to Wishlist" className="btn  btn-danger ms-3">
                <i className="fa-regular fa-heart"></i>
              </button>
              <button style={{
                position:"relative",
                padding:"6px",
                borderRadius:"5px",
                left:"30px",
                top:"4px",
                backgroundColor:"skyblue"
              }}>Buy Now</button>
                </div>
              </div>
            </div>
          </div>
          {/* product box end */}
          {/* Product box */}
          <div className="col-12 col-md-3 mb-4"style={{margin:"0px 0px 0px 130px",
          }} id="maya" data-aos="fade-left">
            <div id="first">
              <img src={require('../Images/photo1.jpg')}className="card-img-top" alt="..." />
              <div className="card-body" id="large">
                <h4 className="card-title">Card title</h4>
                <h5 className="card-title text-muted">Price : Rs. 500</h5>
                <div className="card-footer">
                <button title="Add to Cart" className="btn btn-primary">
                <i className="fa-solid fa-cart-shopping fa-1x"></i>
              </button>
              <button title="Add to Wishlist" className="btn  btn-danger ms-3">
                <i className="fa-regular fa-heart"></i>
              </button>
              <button style={{
                position:"relative",
                padding:"6px",
                borderRadius:"5px",
                left:"30px",
                top:"4px",
                backgroundColor:"skyblue"
              }}>Buy Now</button>
                </div>
              </div>
            </div>
          </div>
          {/* product box end */}
          {/* Product box */}
          {/* product box end */}
        </div>

        {/* Popular Sellers  section */}

        <div className="popular" data-aos="fade-right" style={{borderRadius:"30px"}}>
          <div>
            <h1 style={{
              textAlign:"center",
              position:"relative",
              top:"60px",
              fontFamily:"sans-serif",
              letterSpacing:"2px",
              color:"white"
            }}>Our Achievements</h1>
          </div>
          <div className="outer">
            <h1>200+</h1>
            <h1>20+</h1>
            <h1>20+</h1>
            <h1>500+</h1>
          </div>
          <div className="inner">
            <p>Happy Cattles</p>
            <p>Temples Worldwide</p>
            <p>Outlets</p>
            <p>Happy Customers</p>
          </div>
        </div>
        <div className="ceo" data-aos="fade-left" style={{borderRadius:"30px"}}>
          <div className="cow">
            <img src={require('./seller/Photo/mama-removebg-preview.png')} style={
              {
                position:"relative",
                width:"120%",
                height:"200%",
                bottom:"180px"
              }
            }></img>
          </div>
          <div className="miranda" >
            <h1 style={
              {
                position:"relative",
                top:"60px",
                left:"100px",
                fontFamily:"sans-serif",
                letterSpacing:"2px",
                color:"white"
              }
            }>Meet Our Founder</h1>
            <h4 style={{
              color:"white",
              position:"relative",
              top:"100px",
              left:"100px",
              letterSpacing:"1px"
            }}>Hello My name is <b>N.K.Khedkar</b>. I have founded the <br></br><b>Vrunda A2 Milk</b> in 2014. The purpose is to provide<br></br>good quality milk and ghee to our society. Since 10<br></br>years are passed on we are delivering good quality <br></br>of products to our customers.</h4>
          </div>
        </div>

        {/* End Review and Rating */}
      </div>
      <div className="pogo" data-aos="fade-right">
        <div className="deliver">
          <img src={require('./seller/Photo/deliveryboybeta.png')}  height="400px" ></img>
        </div>
        <div className="logic">
          <h1>Home Delivery</h1>
          <h5> Get farm-fresh milk delivered directly to your doorstep with our reliable <br></br>and hassle-free home delivery service. At Vrunda A2 Milk, we understand<br></br>the importance of convenience and quality, so we bring the freshest milk<br></br>straight from the farm to your home.</h5>
        </div>
        <div className="free">
          <button>
            Register Now
          </button>
        </div>
      </div>
      <div className="nana" data-aos="fade-left">
        <Subscribe />
      </div>
      <div className="frequency" data-aos="fade-right">
         <Frequent/>
      </div>
      <div className="foot" style={{
        backgroundColor:"#282828"
      }}>
        <Monkey />
      </div>
    </main>
    
  );
}
export default Home;
