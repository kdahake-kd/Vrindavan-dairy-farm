
import { Link } from "react-router-dom";
function OrderFail(props) {
  return (
    <div className="container mt-4">
        <div className="row">
            <div className="col-md-8 offset-2">
                <div className="card">
                    <div className="card-body text-center">
                        <p><i className="fa fa-check-timer text-danger fa-5x"></i></p>
                        <h3 className="text-danger">Oops..... Something Getting  Wrong </h3>
                        <h3 className="text-success">Try Again  <i className="fa-regular fa-face-smile"></i></h3>

                        <p className="mt-4">
                            <Link to="/customer/orders" className="btn btn-primary"> Go to Orders </Link>
                            <Link to="/" className="btn btn-secondary ms-2">Explore More Items</Link>

                        </p>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  );
}
export default OrderFail;
