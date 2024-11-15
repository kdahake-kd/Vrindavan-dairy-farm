
import { Link } from "react-router-dom";
import Slidebar from "./slidebar";

function Addresslist() {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-3 col-12 mb-2">
          <Slidebar />
        </div>
        <div className="col-md-9 col-12 mb-2">
            <div classname="row">
                <div className="col-12">
                    <Link to="/customer/add-address" className="btn btn-outline-success mb-4 float-end"><i className="fa fa-plus-circle"></i> Add Address </Link>
                </div>
                
            </div>
          <div className="row">
            <div className="col-4 mb-4">
              <div className="card ">
                <div className="card-body text-muted">
            
                  <h6>
                  <i className="fa fa-check-circle text-success fa-2x mb-2 "></i> <br></br>
                    st-2 , new krishna nagar , near iskocn tempel , pune , India
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-4 mb-4">
              <div className="card">
                <div className="card-body text-muted">
               
                  <h6>
                    <span className="badge bg-secondary mb-2">Mark as Default</span><br></br>
                    st-2 , new krishna nagar , near iskocn tempel , pune , India
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-4 mb-4">
              <div className="card">
                <div className="card-body text-muted">
                
                  <h6>
                  <span className="badge bg-secondary mb-2">Mark as Default</span><br></br>
                    st-2 , new krishna nagar , near iskocn tempel , pune , India
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-4 mb-4">
              <div className="card ">
                <div className="card-body text-muted">
                 
                  <h6>
                  <span className="badge bg-secondary mb-2">Mark as Default</span><br></br>
                    st-2 , new krishna nagar , near iskocn tempel , pune , India
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-4 mb-4">
              <div className="card ">
                <div className="card-body text-muted">
               
                  <h6>
                  <span className="badge bg-secondary mb-2">Mark as Default</span><br></br>
                    st-2 , new krishna nagar , near iskocn tempel , pune , India
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-4 mb-4">
              <div className="card">
                <div className="card-body text-muted">
                
                  <h6>
                  <span className="badge bg-secondary mb-2">Mark as Default</span><br></br>
                    st-2 , new krishna nagar , near iskocn tempel , pune , India
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Addresslist;
