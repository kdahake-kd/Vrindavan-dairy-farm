


function SellerLogin() {
  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8 col-sm-10 col-12">
          <div className="card">
            <h4 className="card-header text-center">Login</h4>
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="username"
                    placeholder="Enter your username"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="pwd" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="pwd"
                    placeholder="Enter your password"
                  />
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
  );
}

export default SellerLogin;
