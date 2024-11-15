
import { Link } from "react-router-dom";
function OrderSuccess(props) {
  return (
    <div className="container mt-4">
        <div className="row">
            <div className="col-md-8 offset-2">
                <div className="card">
                    <div className="card-body text-center">
                        <p><i className="fa fa-check-circle text-success fa-5x"></i></p>
                        <h3 className="text-success">  Thanks for the  Order </h3>
                        <h1><i className="fa-regular fa-face-smile "></i></h1>
                        <p className="mt-4">
                            <Link to="/" className="btn btn-primary"> Explore More Item  </Link>
                            <Link to="/customer/dashboard" className="btn btn-secondary ms-2"> Go to Dashboard </Link>

                        </p>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  );
}
export default OrderSuccess;
