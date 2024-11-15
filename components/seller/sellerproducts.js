import logo from "../../logo.svg";
import { Link } from "react-router-dom";
import SellerSlidebar from "./sellerslidebar";

function SellerProducts() {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-3 col-12 mb-2">
          <SellerSlidebar/>
        </div>
        <div className="col-md-9 col-12 mb-2">
        <div className="row">
        <div className="col-12">
                    <Link to="/seller/add-product" className="btn btn-outline-primary mb-4 float-end"><i className="fa fa-plus-circle"></i> Add Product </Link>
                </div>
            <div className="table-responsive">
            <table className="table table-bordered">
              <thead >
                <tr>
                  <th>#</th>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Statuc</th>
                  <th>Action</th>

                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>
                   Product Title 
                  </td>
                  <td>Rs 500</td>
                  <td>Published </td>
                  <td>
                    <a href="#" className="btn btn-info "> Views</a>
                    <a href="#" className="btn btn-primary ms-2"> Edit</a>
                    <a href="#" className="btn btn-danger ms-2"> Delete</a>

                    
                </td>

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

export default SellerProducts;
