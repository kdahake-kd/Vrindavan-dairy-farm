import logo from "../../logo.svg";
import {Link} from "react-router-dom"
import Slidebar from "./slidebar";

function Wishlist() {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-3 col-12 mb-2">
          <Slidebar/>
        </div>
        <div className="col-md-9 col-12 mb-2">
            <div className="row">
            <div className="table-responsive">
            <table className="table table-bordered">
              <thead >
                <tr>
                  <th>#</th>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Action</th>

                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>
                   <Link ><img
                      src={logo}
                      className="img-thumbnail"
                      width="80"
                      alt="..."
                    /></Link>

                    <p><Link>Django</Link></p>
                  </td>
                  <td>Rs 500</td>
                
                  <td><Link className="btn btn-danger">Remove </Link></td>

                </tr>
                <tr>
                  <td>2</td>
                  <td>
                   <Link ><img
                      src={logo}
                      className="img-thumbnail"
                      width="80"
                      alt="..."
                    /></Link>

                    <p><Link>Flask</Link></p>
                  </td>
                  <td>Rs 300</td>
                 
                  <td><Link className="btn btn-danger">Remove </Link></td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                   <Link ><img
                      src={logo}
                      className="img-thumbnail"
                      width="80"
                      alt="..."
                    /></Link>

                    <p><Link>Python</Link></p>
                  </td>
                  <td>Rs 900</td>
                  
                  <td><Link className="btn btn-danger">Remove </Link></td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>
                   <Link ><img
                      src={logo}
                      className="img-thumbnail"
                      width="80"
                      alt="..."
                    /></Link>

                    <p><Link>React Js</Link></p>
                  </td>
                  <td>Rs 1000</td>
            
                  <td><Link className="btn btn-danger">Remove </Link></td>
                </tr>
              </tbody>
             
            </table>
          </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Wishlist;
