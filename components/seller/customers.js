
import SellerSlidebar from "./sellerslidebar";

function Customers() {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-3 col-12 mb-2">
          <SellerSlidebar />
        </div>
        <div className="col-md-9 col-12 mb-2">
          <div className="row">
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>
                    Kiran Dahake
                    </td>
                    <td>mekirandahake@gmail.com</td>
                    <td>
                      123456789
                    </td>
                    <td> <button
                        className="btn btn-primary btn-sm"
                      >
                        Orders
                      </button>
                        <button
                        className="btn btn-danger btn-sm ms-1"
                      >
                        Remove from list
                      </button>

                    </td>
                  </tr>
            
                  <tr>
                    <td>2</td>
                    <td>
                    Sanket Dakhne
                    </td>
                    <td>sanket@gmail.com</td>
                    <td>
                      87636289278
                    </td>
                    <td>
                    <button
                        className="btn btn-primary btn-sm"
                      >
                        Orders
                      </button>
                        <button
                        className="btn btn-danger btn-sm ms-1"
                      >
                        Remove from list
                      </button>

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

export default Customers;
