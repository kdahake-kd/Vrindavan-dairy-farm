import React from "react";
import logo from "../logo.svg";
import { Link } from "react-router-dom";

function SingleRelatedProduct({ product }) {
    console.log("value of product array",product)
    return (
        <div className="col-4 offset-4 mb-4">
            <div className="card shadow">
                <Link to={`/product/${product.title.replace(/\s+/g, '-').toLowerCase()}/${product.id}`}><img src={product.image} className="card-img-top" alt={product.title} /></Link>
                <div className="card-body">
                    <h4 className="card-title"><Link to={`/product/${product.title.replace(/\s+/g, '-').toLowerCase()}`}>{product.title}</Link></h4>
                    <h5 className="card-title text-muted">Price: Rs. {product.price}</h5>
                    <div className="card-footer">
                        <button title="Add to Cart" className="btn btn-primary">
                            <i className="fa-solid fa-cart-shopping fa-1x"></i>
                        </button>
                        <button title="Add to Wishlist" className="btn btn-danger ms-3">
                            <i className="fa-regular fa-heart"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SingleRelatedProduct;