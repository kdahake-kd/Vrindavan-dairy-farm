import logo from "../logo.svg";
import {Link} from "react-router-dom"
import AllProducts  from "./allproducts";
import SingleProduct  from "./singleproduct";
import React, { useState, useEffect } from 'react';

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
  return (
    <main className="mt-4">
      <div className="container">
        {/* Latest product section */}
        <h3 className="mb-3">
          Latest Product{" "}
          <Link to="/products" className="float-end btn  btn-dark ">
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
        <h3 className="mb-3">
          Popular Product{" "}
          <a href="#" className="float-end btn  btn-dark ">
            View All Product <i className="fa-solid fa-arrow-right"></i>{" "}
          </a>
        </h3>
        <div className="row mb-4">
          {/* Product box */}
          <div className="col-12 col-md-3 mb-4">
            <div className="card shadow">
              <img src={logo} className="card-img-top" alt="..." />
              <div className="card-body">
                <h4 className="card-title">Card title</h4>
                <h5 className="card-title text-muted">Price : Rs. 500</h5>
                <div className="card-footer">
                <button title="Add to Cart" className="btn btn-primary">
                <i className="fa-solid fa-cart-shopping fa-1x"></i>
              </button>
              <button title="Add to Wishlist" className="btn  btn-danger ms-3">
                <i className="fa-regular fa-heart"></i>
              </button>
                </div>
              </div>
            </div>
          </div>
          {/* product box end */}
          {/* Product box */}
          <div className="col-12 col-md-3 mb-4">
            <div className="card shadow">
              <img src={logo} className="card-img-top" alt="..." />
              <div className="card-body">
                <h4 className="card-title">Card title</h4>
                <h5 className="card-title text-muted">Price : Rs. 500</h5>
                <div className="card-footer">
                <button title="Add to Cart" className="btn btn-primary">
                <i className="fa-solid fa-cart-shopping fa-1x"></i>
              </button>
              <button title="Add to Wishlist" className="btn  btn-danger ms-3">
                <i className="fa-regular fa-heart"></i>
              </button>
                </div>
              </div>
            </div>
          </div>
          {/* product box end */}
          {/* Product box */}
          <div className="col-12 col-md-3 mb-4">
            <div className="card shadow">
              <img src={logo} className="card-img-top" alt="..." />
              <div className="card-body">
                <h4 className="card-title">Card title</h4>
                <h5 className="card-title text-muted">Price : Rs. 500</h5>
                <div className="card-footer">
                <button title="Add to Cart" className="btn btn-primary">
                <i className="fa-solid fa-cart-shopping fa-1x"></i>
              </button>
              <button title="Add to Wishlist" className="btn  btn-danger ms-3">
                <i className="fa-regular fa-heart"></i>
              </button>
                </div>
              </div>
            </div>
          </div>
          {/* product box end */}
          {/* Product box */}
          <div className="col-12 col-md-3 mb-4">
            <div className="card shadow">
              <img src={logo} className="card-img-top" alt="..." />
              <div className="card-body">
                <h4 className="card-title">Card title</h4>
                <h5 className="card-title text-muted">Price : Rs. 500</h5>
                <div className="card-footer">
                <button title="Add to Cart" className="btn btn-primary">
                <i className="fa-solid fa-cart-shopping fa-1x"></i>
              </button>
              <button title="Add to Wishlist" className="btn  btn-danger ms-3">
                <i className="fa-regular fa-heart"></i>
              </button>
                </div>
              </div>
            </div>
          </div>
          {/* product box end */}
        </div>

        {/* Popular Sellers  section */}
        <h3 className="mb-3">
          Popular Seller{" "}
          <a href="#" className="float-end btn  btn-dark ">
            View All Seller Products <i className="fa-solid fa-arrow-right"></i>{" "}
          </a>
        </h3>
        <div className="row mb-4">
          {/* Product box */}
          <div className="col-12 col-md-3 mb-4">
            <div className="card shadow">
              <img src={logo} className="card-img-top" alt="..." />
              <div className="card-body">
                <h4 className="card-title">Card title</h4>

                <div className="card-footer">
                  Categories : <a href="#">Python</a> <a href="#">Java</a>
                </div>
              </div>
            </div>
          </div>
          {/* product box end */}
          {/* Product box */}
          <div className="col-12 col-md-3 mb-4">
            <div className="card shadow">
              <img src={logo} className="card-img-top" alt="..." />
              <div className="card-body">
                <h4 className="card-title">Card title</h4>

                <div className="card-footer">
                  Categories : <a href="#">Django</a> <a href="#">Rest</a>
                </div>
              </div>
            </div>
          </div>
          {/* product box end */}
          {/* Product box */}
          <div className="col-12 col-md-3 mb-4">
            <div className="card shadow">
              <img src={logo} className="card-img-top" alt="..." />
              <div className="card-body">
                <h4 className="card-title">Card title</h4>

                <div className="card-footer">
                  Categories : <a href="#">React</a> <a href="#">javaScript</a>
                </div>
              </div>
            </div>
          </div>
          {/* product box end */}
          {/* Product box */}
          <div className="col-12 col-md-3 mb-4">
            <div className="card shadow">
              <img src={logo} className="card-img-top" alt="..." />
              <div className="card-body">
                <h4 className="card-title">Card title</h4>

                <div className="card-footer">
                  Categories : <a href="#">Angular</a> <a href="#">Express</a>
                </div>
              </div>
            </div>
          </div>
          {/* product box end */}
        </div>
        {/* End Seller section */}

        {/* Review and Rating */}

        <div
          id="carouselExampleIndicators"
          className="carousel slide my-4 border bg-dark text-white p-5"
          data-bs-ride="true"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <figure className="text-center">
                <blockquote className="blockquote">
                  <p>A well-known quote, contained in a blockquote element.</p>
                </blockquote>
                <figcaption className="blockquote-footer">
                  <i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star text-warning"></i>
                  <cite title="Source Title">Customer Name </cite>
                </figcaption>
              </figure>
            </div>
            <div className="carousel-item">
              <figure className="text-center">
                <blockquote className="blockquote">
                  <p>A well-known quote, contained in a blockquote element.</p>
                </blockquote>
                <figcaption className="blockquote-footer">
                  <i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star text-warning"></i>
                  <cite title="Source Title">Customer Name </cite>
                </figcaption>
              </figure>
            </div>
            <div className="carousel-item">
              <figure className="text-center">
                <blockquote className="blockquote">
                  <p>A well-known quote, contained in a blockquote element.</p>
                </blockquote>
                <figcaption className="blockquote-footer">
                  <i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star text-warning"></i>
                  <cite title="Source Title">Customer Name </cite>
                </figcaption>
              </figure>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        {/* End Review and Rating */}
      
      </div>
    </main>
  );
}
export default Home;
