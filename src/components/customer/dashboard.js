import logo from "../../logo.svg";

import Slidebar from "./slidebar";

function Dashboard(props) {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-3 col-12 mb-2">
          <Slidebar/>
        </div>
        <div className="col-md-9 col-12 mb-2">
            <div className="row">
                <div className="col-md-4 mb-2">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="text-center">Total Order</h4>
                            <h4 className="text-center" ><a href="" >123</a></h4>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-2">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="text-center">Wishlist</h4>
                            <h4 className="text-center" ><a href="" >34</a></h4>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-2">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="text-center">Addressess</h4>
                            <h4 className="text-center" ><a href="" >5</a></h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
