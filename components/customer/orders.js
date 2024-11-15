import logo from "../../logo.svg";
import {Link} from "react-router-dom"
import Slidebar from "./slidebar";

function Orders() {
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
                  <th>Statuc</th>
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
                  <td><span className="text-success"><i className="fa fa-check-circle"></i> Completed</span></td>
                  <td><Link className="btn btn-primary">Download </Link></td>

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
                  <td><span className="text-success"><i className="fa fa-check-circle"></i> Completed</span></td>
                  <td><Link className="btn btn-primary">Download </Link></td>
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
                  <td><span className="text-warning"><i className="fa fa-spin fa-spinner"></i> Processing</span></td>
                  <td><Link className="btn btn-primary">Download </Link></td>
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
                  <td><span className="text-danger"><i className="fa fa-times-circle"></i> Cancel</span></td>
                  <td><Link className="btn btn-primary">Download </Link></td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                    <th></th>
                    <th>Total</th>
                    <th>RS 2600</th>

                </tr>
                <tr>
                    <td colSpan='3' align="center">
                        <Link className="btn btn-secondary">Continue Shopping </Link>
                        <Link className="btn btn-success ms-1">Proceed to Payment  </Link>

                    </td>
                </tr>
              </tfoot>
            </table>
          </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Orders;
