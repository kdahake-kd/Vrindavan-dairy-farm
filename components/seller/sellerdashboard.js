

import SellerSlidebar from "./sellerslidebar";

function SellerDashboard() {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-3 col-12 mb-2">
          <SellerSlidebar/>
        </div>
        <div className="col-md-9 col-12 mb-2">
            <div className="row">
                <div className="col-md-4 mb-2">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="text-center">Total product</h4>
                            <h4 className="text-center" ><a href="" >33</a></h4>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-2">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="text-center">Total Orders</h4>
                            <h4 className="text-center" ><a href="" >34</a></h4>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-2">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="text-center">Total Customer</h4>
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

export default SellerDashboard;
