import logo from "../../logo.svg";
import {Link} from "react-router-dom"
import SellerSlidebar from "./sellerslidebar";

function VendorChangePassword() {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-3 col-12 mb-2">
          <SellerSlidebar/>
        </div>
        <div className="col-md-9 col-12 mb-2">
            <div className="row">
            <div className="card">
            <h4 className="card-header text-center">Change Password</h4>
            <div className="card-body">
              <form>
                
                <div className="mb-3">
                  <label for="password" className="form-label">
                    New Password
                  </label>
                  <input 
                    type="password"
                    className="form-control"
                    id="newpassword"
                    placeholder="Enter your password"
                  />
                </div>
                <div className="mb-3">
                  <label for="password" className="form-label">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="confirmpassword"
                    placeholder="Re-Enter Your Password"
                  />
                </div>
              
                <button type="submit" className="btn btn-primary w-100">
                  Change My Password
                </button>
              </form>
            </div>
          </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default VendorChangePassword;
