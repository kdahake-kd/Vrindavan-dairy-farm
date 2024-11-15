

import SellerSlidebar from "./sellerslidebar";

function Reports() {
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
                            <h4 className="text-center">Daily Reports</h4>
                            <h4 className="text-center" > <button
                        className="btn btn-primary btn-sm ms-1 text-center"
                      >
                        View
                      </button></h4>
                       
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-2">
                <div className="card">
                        <div className="card-body">
                            <h4 className="text-center">Montly Reports</h4>
                            <h4 className="text-center" > <button
                        className="btn btn-primary btn-sm ms-1 text-center"
                      >
                        View
                      </button></h4>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-2">
                <div className="card">
                        <div className="card-body">
                            <h4 className="text-center">Yearly Reports</h4>
                            <h4 className="text-center" > <button
                        className="btn btn-primary btn-sm ms-1 text-center"
                      >
                        View
                      </button></h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Reports;
