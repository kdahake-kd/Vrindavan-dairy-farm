

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";  // Correct import for useParams


import { Link } from "react-router-dom";

import SingleRelatedProduct from "./SingleRelatedProduct";


function ProductDetails() {
  const baseUrl = "http://127.0.0.1:8000/api";
  const { product_slug, product_id } = useParams();  // Correct way to get params from the URL

  const [productData, setProductData] = useState([]);
  const [cartButtonClickStatus, setcartButtonClickStatus] = useState(false);

  const [productImgs, setProductImgs] = useState([]);
  const [relatedProducts, setrelatedProducts] = useState([]);



  useEffect(() => {
    fetchData(baseUrl+`/product/`+product_id);
    fetchRelatedData(baseUrl+`/related-products/`+product_id);
    checkProductInCart(product_id);

  }, [product_id]);

function checkProductInCart(product_id){
  var previousCart=localStorage.getItem('cartData');
  var cartJson=JSON.parse(previousCart);
  if(cartJson!=null)
  {
    cartJson.map((cart)=>{
      if(cart!=null && cart.product.id == product_id){
        setcartButtonClickStatus(true);
      }
    });
  }
}


  function fetchData(url) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
    
        setProductData(data);  // Set product data here
        setProductImgs(data.product_imgs);
      });
  }

  // function changeUrl(baseurl) {
  //   console.log(baseurl);
  //   fetchData(baseurl);
  // }

  function fetchRelatedData(baseurl)
  {
    fetch(baseurl)
    .then((response)=>response.json())
    .then((data)=>
    {
      setrelatedProducts(data.results)
      
    })
  }


  const cartAddButtonHandler=()=>
  {
   var previousCart=localStorage.getItem('cartData');
   var cartJson=JSON.parse(previousCart);
   var cartData={
    'product':{
      'id':productData.id,
      'title':productData.title
    },
    'user':{
      'id':1
    },

   }
   if(cartJson!=null)
   {
    cartJson.push(cartData);
    var cartString=JSON.stringify(cartJson);
    localStorage.setItem('cartData',cartString);
   }
   else{
    var newCartList=[];
    newCartList.push(cartData);
    var cartString=JSON.stringify(newCartList);
    localStorage.setItem('cartData',cartString);
   }



    setcartButtonClickStatus(true);

  }

  const cartRemoveButtonHandler=()=>
  {
    var previousCart=localStorage.getItem('cartData');
    var cartJson=JSON.parse(previousCart);
    cartJson.map((cart,index)=>{
      if(cart!=null && cart.product.id == productData.id){
        delete cartJson[index];
      }
    });
    var carString=JSON.stringify(cartJson);
    localStorage.setItem('cartData',carString);
    setcartButtonClickStatus(false);
    
  }



  
  return (
    <section className="container mt-4">
      <div className="row">
        <div className="col-4">
          <div
        id="productThumbnailSlider"
        className="carousel carousel-dark   slide carousel-fade" data-bs-ride='true'
      >
        <div className="carousel-indicators">
          {
            productImgs.map((product,index)=>
            {
              if(index==0)
              {
                return <button
                type="button"
                data-bs-target="#productThumbnailSlider"
                data-bs-slide-to={index}
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              }
              else
              {
                return <button
                type="button"
                data-bs-target="#productThumbnailSlider"
                data-bs-slide-to={index}
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              }
            })
          }
        

        </div>
        <div className="carousel-inner">

          {
            productImgs.map((img,index)=>
            {
              if(index==0)
              {
                return <div className="carousel-item active">
                <div className="row mb-5">
                <img src={img.image} className="img-thumbnail mb-5" alt={index} />
                </div>
              </div>
              }
              else{
                return <div className="carousel-item active">
                <div className="row mb-5">
                <img src={img.image} className="img-thumbnail mb-5" alt={index} />
                </div>
              </div>
              }
            })
          }
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#productThumbnailSlider" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#productThumbnailSlider" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
      </div>
        </div>
        <div className="col-8">
          <h3>{productData.title}</h3>
          <p>
            {productData.detail}
          </p>
          <h5 className="card-title ">Price : Rs. {productData.price}</h5>
          <p className="mt-3">

          {!cartButtonClickStatus && 
            <button title="Add to Cart" type='button' onClick={cartAddButtonHandler} className="btn btn-primary">
              <i className="fa-solid fa-cart-shopping fa-1x"></i> Add to Cart
            </button>
           }
            {cartButtonClickStatus && 
            <button title="Remove From Cart" type='button' onClick={cartRemoveButtonHandler} className="btn btn-warning">
              <i className="fa-solid fa-cart-shopping fa-1x"></i> Remove From Cart
            </button>
           }

            <button title="Add to Cart " className="btn btn-success ms-3 ">
              <i className="fa-solid fa-bag-shopping fa-1x"></i> Buy
            </button>
            <button title="Add to Wishlist" className="btn btn-danger  ms-3">
              <i className="fa-regular fa-heart"></i> Wishlist
            </button>
          </p>

          <div className="product-tags  mt-4">
            <h5>Tags</h5>
            <p>
              <Link to="#" className="badge bg-secondary text-white me-1">
                Python
              </Link>
              <Link to="#" className="badge bg-secondary text-white me-1">
                Django
              </Link>
              <Link to="#" className="badge bg-secondary text-white me-1">
                Rest
              </Link>
              <Link to="#" className="badge bg-secondary text-white me-1">
                sqlite
              </Link>
              <Link to="#" className="badge bg-secondary text-white me-1">
                numpy
              </Link>
              <Link to="#" className="badge bg-secondary text-white me-1">
                pandas
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* End Latest product section */}
      <h3 className="mt-5 mb-3 text-center">Related Product</h3>
      <div
        id="relatedproductslider"
        className="carousel carousel-dark   slide"
      >
        <div className="carousel-indicators">
        {
            relatedProducts.map((img,index)=>
            {
              if(index==0)
              {
                return <button
                type="button"
                data-bs-target="#relatedproductslider"
                data-bs-slide-to={index}
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              }
              else
              {
                return <button
                type="button"
                data-bs-target="#relatedproductslider"
                data-bs-slide-to={index}
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              }
            })
          }
          <button
            type="button"
            data-bs-target="#relatedproductslider"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#relatedproductslider"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
        </div>
        <div className="carousel-inner">
        {
            relatedProducts.map((product,index)=>
            {
              if(index==0)
              {
                return <div className="carousel-item active">
                <div className="row mb-5">
                <SingleRelatedProduct product={product}/>
                </div>
              </div>
              }
              else{
                return <div className="carousel-item active">
                <div className="row mb-5">
                <SingleRelatedProduct product={product}/>

                </div>
              </div>
              }
            })
          }
          <div className="carousel-item active">
            <div className="row mb-5">
            
            </div>
          </div>
          <div className="carousel-item">
            <div className="row mb-5 ">
          
            </div>
          </div>
          <div className="carousel-item">
            <div className="row mb-5">
            
            </div>
          </div>
        </div>
      </div>

      {/* Popular product section */}
    </section>
  );
}
export default ProductDetails;


