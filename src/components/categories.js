import React, { useEffect, useState } from "react";
import logo from "../logo.svg";
import { Link } from "react-router-dom";

function Categories() {
  const baseUrl = "http://127.0.0.1:8000/api";
  const [categories, setCategories] = useState([]);  // Initialize as an empty array
  const [totalResult, setTotalResult] = useState(0);

  useEffect(() => {
    fetchData(baseUrl + "/categories/");
  }, []);

  function fetchData(baseurl) {
    fetch(baseurl)
      .then((response) => response.json())
      .then((data) => {
        
        setCategories(data.results ? data.results : []);  // Ensure 'categories' is always an array
        setTotalResult(data.count);
      })
      .catch((error) => {
       
        setCategories([]);  // Set to an empty array in case of an error
      });
  }

  function changeUrl(baseurl) {
    
    fetchData(baseurl);
  }

  var links = [];
  var limit = 3;  // Changed limit to 3 as per your pagination settings
  var totalLinks = Math.ceil(totalResult / limit);

  for (let i = 1; i <= totalLinks; i++) {
    links.push(
      <li className="page-item" key={i}>
        <Link
          onClick={() => changeUrl(baseUrl + `/categories/?page=${i}`)}
          className="page-link"
          to={`/categories/?page=${i}`}
        >
          {i}
        </Link>
      </li>
    );
  }

  return (
    <section className="container mt-4">
      <h3 className="mb-3">All Categories Section</h3>
      <div className="row mb-2">
        {
          // Check if 'categories' is an array and has data before mapping
          categories && categories.length > 0 ? (
            categories.map((category) => (
              <div className="col-12 col-md-3 mb-4" key={category.id}>
                <div className="card shadow">
                  <img src={logo} className="card-img-top" alt={category.title} />
                  <div className="card-body">
                    <h4 className="card-title">
                      <Link to={`/category/${category.title}/${category.id}`}>{category.title}</Link>
                    </h4>
                  </div>
                  <div className="card-footer">Product Downloads : 2456</div>
                </div>
              </div>
            ))
          ) : (
            <p>No categories found.</p>
          )
        }
      </div>
      <nav aria-label="Page navigation example">
        <ul className="pagination">{links}</ul>
      </nav>
    </section>
  );
}

export default Categories;

// import React, { useEffect, useState } from "react";
// import logo from "../logo.svg";
// import { Link } from "react-router-dom";
// function Categories() {
//   const baseUrl = "http://127.0.0.1:8000/api";
//   const [categories, setCategories] = useState([]);
//   const [totalResult, setTotalResult] = useState(0);
  

//   useEffect(() => {
//     fetchData(baseUrl + "/categories/");
//   }, []);

//   function fetchData(baseurl) {
//     fetch(baseurl)
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data.results);
//         setCategories(data.results);
//         setTotalResult(data.count);
//       });
//   }

//   function changeUrl(baseurl) {
//     console.log(baseurl);
//     fetchData(baseurl);
//   }
//   var links=[];
//   var limit=1;
//   var totalLinks=totalResult/limit;
//   for(let i=1;i<=totalLinks;i++)
//   {
//      links.push(  <li className="page-item"><Link  onClick={()=> changeUrl(baseUrl+`/categories/?page=${i}`)} className="page-link" to={`/categories/?page=${i}`}>{i}</Link></li>)
//   }



//   return (
//     <section className="container mt-4">
//       <h3 className="mb-3">All Categories Section </h3>
//       <div className="row mb-2">
//         {
//         categories.map((category) => 
//           <div className="col-12 col-md-3 mb-4">
//             <div className="card shadow">
//               <img src={logo} className="card-img-top" alt={category.title} />
//               <div className="card-body">
//                 <h4 className="card-title">
//                   <Link to={`/category/${category.title}/${category.id}`}>{category.title}</Link>
//                 </h4>
//               </div>
//               <div className="card-footer">Product Downloads : 2456</div>
//             </div>
//           </div>
//         )
//         }
    
//       </div>
//       <nav aria-label="Page navigation example">
//         <ul className="pagination">
//       {links}
//         </ul>
//       </nav>
//     </section>
//   );
// }
// export default Categories;
