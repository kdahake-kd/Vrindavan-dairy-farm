
import {Link} from "react-router-dom"
import Slidebar from "./slidebar";

function AddAddress() {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-3 col-12 mb-2">
          <Slidebar/>
        </div>
        <div className="col-md-9 col-12 mb-2">
            <div className="row">
            <div className="card">
            <h4 className="card-header text-center">Add your new Address</h4>
            <div className="card-body">
              <form>
                
                <div className="mb-3">
                  <label for="address" className="form-label">
                    Address
                  </label>
                  <textarea
                    
                    className="form-control"
                    id="address"
                    
                  ></textarea>
                </div>
             
              
                
                <button type="submit" className="btn btn-primary w-100">
                  Submit
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

export default AddAddress;
