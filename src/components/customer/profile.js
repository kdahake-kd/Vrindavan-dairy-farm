import logo from "../../logo.svg";
import {Link} from "react-router-dom"
import Slidebar from "./slidebar";

function Profile() {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-3 col-12 mb-2">
          <Slidebar/>
        </div>
        <div className="col-md-9 col-12 mb-2">
            <div className="row">
            <div className="card">
            <h4 className="card-header text-center"> Update Profile</h4>
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label for="firstname" className="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstname"
                    placeholder="Enter your first name"
                  />
                </div>
                <div className="mb-3">
                  <label for="lastname" className="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastname"
                    placeholder="Enter your last name"
                  />
                </div>
                <div className="mb-3">
                  <label for="username" className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    placeholder="Choose a username"
                  />
                </div>
                <div className="mb-3">
                  <label for="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mb-3">
                <label for="profileimg" className="form-label">Choose an image</label>
                <input className="form-control" type="file" id="profileimg" accept="image/*" onchange="previewImage(event)"/>
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

export default Profile;
