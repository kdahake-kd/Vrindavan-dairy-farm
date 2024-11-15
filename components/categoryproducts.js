import React, { useEffect, useState } from "react";
import SingleProduct from "./singleproduct";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function CategoryProducts() {
  const baseUrl = "http://127.0.0.1:8000/api";
  const [products, setProducts] = useState([]);
  const [totalResult, setTotalResult] = useState(0);

  // Destructure the category_id from useParams
  const { category_slug, category_id } = useParams();
  console.log("Selected category ID:", category_id);

  useEffect(() => {
    // Fetch products by category_id when component mounts or category_id changes
    fetchData(`${baseUrl}/products/?category_id=${category_id}`);
  }, [category_id]); // Dependency array includes category_id

  function fetchData(url) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.results || []);  // Ensure products array is updated
        setTotalResult(data.count || 0);  // Update total results for pagination
      })
      .catch((error) => console.error("Error fetching products:", error));
  }

  function changeUrl(newUrl) {
    fetchData(newUrl);  // Fetch products for the new URL
  }

  const links = [];
  const limit = 10;  // Change to the desired pagination limit
  const totalPages = Math.ceil(totalResult / limit);
  
  for (let i = 1; i <= totalPages; i++) {
    links.push(
      <li className="page-item" key={i}>
        <Link
          onClick={() => changeUrl(`${baseUrl}/products/?category_id=${category_id}&page=${i}`)}
          className="page-link"
          to={`/category/${category_slug}/${category_id}/?page=${i}`}
        >
          {i}
        </Link>
      </li>
    );
  }

  return (
    <section className="container mt-3">
      <h3 className="mb-3">Products in Category</h3>
      <div className="row mb-4">
        {products.length > 0 ? (
          products.map((product) => <SingleProduct key={product.id} product={product} />)
        ) : (
          <p>No products available in this category.</p>
        )}
      </div>
      {/* Pagination */}
      <nav aria-label="Page navigation example">
        <ul className="pagination">{links}</ul>
      </nav>
    </section>
  );
}

export default CategoryProducts;


// import React, { useEffect, useState } from "react";
// import SingleProduct from "./singleproduct";
// import { Link } from "react-router-dom";
// import { useParams } from "react-router-dom";

// function CategoryProducts() {
//   const baseUrl = "http://127.0.0.1:8000/api";
//   const [products, setProducts] = useState([]);
//   const [totalResult, setTotalResult] = useState(0);

//   // Destructure the category_id from useParams
//   const {category_slug,category_id } = useParams();
//   console.log(category_id);

//   useEffect(() => {
//     fetchData(`${baseUrl}/products/?category_id=${category_id}`);
//   }, [category_id]); // Dependency array includes category_id to fetch data when it changes

//   function fetchData(baseurl) {
//     fetch(baseurl)
//       .then((response) => response.json())
//       .then((data) => {
//         // Ensure data.results is an array before setting it
//         setProducts(Array.isArray(data.results) ? data.results : []);
//         setTotalResult(data.count);
//       })
//       .catch((error) => console.log("Error fetching products:", error));
//   }

//   function changeUrl(baseurl) {
//     console.log(baseurl);
//     fetchData(baseurl);
//   }

//   var links = [];
//   var limit = 1;
//   var totallinks = Math.ceil(totalResult / limit);
//   for (let i = 1; i <= totallinks; i++) {
//     links.push(
//       <li className="page-item" key={i}>
//         <Link
//           onClick={() => changeUrl(baseUrl + `/products/?category=${category_id}&page=${i}`)}
//           className="page-link"
//           to={`/category/${category_slug}/${category_id}/?page=${i}`}
//         >
//           {i}
//         </Link>
//       </li>
//     );
//   }

//   return (
//     <section className="container mt-3">
//       <h3 className="mb-3">All Products in Category</h3>
//       <div className="row mb-4">
//         {/* Check if products is an array and map over it */}
//         {products.length > 0 ? (
//           products.map((product) => <SingleProduct key={product.id} product={product} />)
//         ) : (
//           <p>No products available in this category.</p>
//         )}
//       </div>
//       {/* Pagination here */}
//       <nav aria-label="Page navigation example">
//         <ul className="pagination">{links}</ul>
//       </nav>
//     </section>
//   );
// }

// export default CategoryProducts;

// import React, { useEffect, useState } from "react";
// import SingleProduct from "./singleproduct";
// import { Link } from "react-router-dom";
// import {useParams} from 'react-router-dom'
// function CategoryProducts() {
//   const baseUrl = "http://127.0.0.1:8000/api";
//   const [products, setProducts] = useState([]);
//   const [totalResult, setTotalResult] = useState(0);
//   const [category_id] = useParams();
//   console.log(category_id)


//   useEffect(() => {
//     fetchData(baseUrl + "/products/");
//   }, []);

//   function fetchData(baseurl) {
//     fetch(baseurl)
//       .then((response) => response.json())
//       .then((data) => {
//         setProducts(data.results);
//         setTotalResult(data.count);
//       });
//   }


//   function changeUrl(baseurl) {
//     console.log(baseurl);
//     fetchData(baseurl);
//   }

//   var links = [];
//   var limit = 1;
//   var totallinks = totalResult / limit;
//   for (let i = 1; i <= totallinks; i++) {
//     links.push(
//       <li className="page-item">
//         <Link
//           onClick={() => changeUrl(baseUrl + `/products/?page=${i}`)}
//           className="page-link"
//           to={`/products/?page=${i}`}
//         >
//           {i}
//         </Link>
//       </li>
//     );
//   }

//   return (
//     <section className="container mt-3">
//       <h3 className="mb-3">ALL Product</h3>
//       <div className="row mb-4">
//         {products.map((product) => (
//           <SingleProduct key={product.title} product={product} />
//         ))}
//       </div>
//       {/* Pagination here */}
//       <nav aria-label="Page navigation example">
//         <ul className="pagination">
//           {links}
//           </ul>
//       </nav>
//     </section>
//   );
// }

// export default CategoryProducts;