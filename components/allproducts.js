import React, { useEffect, useState } from "react";
import SingleProduct from "./singleproduct";
import { Link } from "react-router-dom";
function AllProducts() {
  const baseUrl = "http://127.0.0.1:8000/api";
  const [products, setProducts] = useState([]);
  const [totalResult, setTotalResult] = useState(0);
  // const [baseurl, setbaseurl] = useState(baseUrl+'/products/');

  useEffect(() => {
    fetchData(baseUrl + "/products/");
  }, []);

  function fetchData(baseurl) {
    fetch(baseurl)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.results);
        setTotalResult(data.count);
      });
  }

  // useEffect(() => {
  //   fetch(baseUrl+'/products/')
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! Status: ${response.status}`);
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setProducts(data.results);
  //       setTotalResult(data.count); // Set fetched data
  //     })
  //     .catch((error) => console.error("Fetch error:", error));
  // }, []); // Empty dependency array to run once on mount

  function changeUrl(baseurl) {
    
    fetchData(baseurl);
  }

  var links = [];
  var limit = 12;
  var totallinks = totalResult / limit;
  for (let i = 1; i <= totallinks; i++) {
    links.push(
      <li className="page-item">
        <Link
          onClick={() => changeUrl(baseUrl + `/products/?page=${i}`)}
          className="page-link"
          to={`/products/?page=${i}`}
        >
          {i}
        </Link>
      </li>
    );
  }

  return (
    <section className="container mt-3">
      <h3 className="mb-3">ALL Product</h3>
      <div className="row mb-4">
        {products.map((product) => (
          <SingleProduct key={product.title} product={product} />
          // <SingleProduct product={product} />
        ))}


      </div>
      {/* Pagination here */}
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          {links}
          </ul>
      </nav>
    </section>
  );
}

export default AllProducts;

// import { useState,useEffect } from "react";
// import SingleProduct  from "./singleproduct";

// function AllProducts(){
//   const [products,setProducts]=useState([])
//   useEffect(()=>
//   {
//     fetchData('http://127.0.0.1:8000/api/products/');
//   });

//   function fetchData(baseurl){
//     fetch(baseurl)
//   .then((response) => response.json())
//   .catch((data) => setProducts(data.results));
//   }

//     return (
//         <section className="container mt-3">

//         <h3 className="mb-3">
//         ALL  Product{" "}

//       </h3>
//       <div className="row mb-4">

//         {
//            products.map((product)=> <SingleProduct product={product}/>)
//         }
//         {/* Product box */}

//       </div>
//       {/* End Latest product section */}
//       <nav aria-label="Page navigation example">
//   <ul className="pagination">
//     <li className="page-item">
//       <a className="page-link" href="#" aria-label="Previous">
//         <span aria-hidden="true">&laquo;</span>
//       </a>
//     </li>
//     <li className="page-item"><a className="page-link" href="#">1</a></li>
//     <li className="page-item"><a className="page-link" href="#">2</a></li>
//     <li className="page-item"><a className="page-link" href="#">3</a></li>
//     <li className="page-item">
//       <a className="page-link" href="#" aria-label="Next">
//         <span aria-hidden="true">&raquo;</span>
//       </a>
//     </li>
//   </ul>
// </nav>
//       </section>

//     )
// }

// export default AllProducts;
