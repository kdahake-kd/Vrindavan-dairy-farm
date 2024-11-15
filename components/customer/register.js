import { useState } from "react";
import axios from "axios"
function Register(props) {

  const baseUrl="http://127.0.0.1:8000/api/"
  
  const [errorMsg,setErrorMsg]=useState('')
  const [successMsg,setSuccessMsg]=useState('')

  const [registerFormData,setRegisterFormData]=useState({
    'first_name':'',
    'last_name':'',
    'username':'',
    'email':'',
    'password':''

    

  });

  const inputHandler = (event)=>{
    setRegisterFormData({
      ...registerFormData,
      [event.target.name]:event.target.value
    })
  };

  const submitHandler = (event)=>{
    const formdata=new FormData();
    formdata.append('first_name',registerFormData.first_name);
    formdata.append('last_name',registerFormData.last_name);
    formdata.append('username',registerFormData.username);
    formdata.append('email',registerFormData.email);
    formdata.append('mobile',registerFormData.mobile);
    formdata.append('password',registerFormData.password);

    
  
    axios.post(baseUrl+'customer/register',formdata)
    .then(function (response) {
      console.log(response);
      if(response.data.bool==false)
      {
        
        setErrorMsg(response.data.msg)
        setSuccessMsg('')
      }
      else{

        setRegisterFormData({
          'first_name':'',
          'last_name':'',
          'username':'',
          'email':'',
          'password':''
      
          
      
        });

        setErrorMsg('')
        setSuccessMsg(response.data.msg)
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8 col-sm-10 col-12">
          <div className="card">
            <h4 className="card-header text-center">Register</h4>
            <div className="card-body">
              <p className="text-muted"><strong>Note:</strong> All Fields are Required</p>
              {successMsg && <p class='text-success'>{successMsg}</p>}
              {errorMsg && <p className="text-danger">{errorMsg}</p>}

              <form>
                <div className="mb-3">
                  <label htmlFor="firstname" className="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="first_name"
                    onChange={inputHandler} value={registerFormData.first_name}
                    id="firstname"
                    placeholder="Enter your first name"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="lastname" className="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="last_name"
                    onChange={inputHandler} value={registerFormData.last_name}
                    className="form-control"
                    id="lastname"
                    placeholder="Enter your last name"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    name="username"
                    onChange={inputHandler} value={registerFormData.username}
                    className="form-control"
                    id="username"
                    placeholder="Choose a username"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    onChange={inputHandler} value={registerFormData.email}
                    className="form-control"
                    id="email"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="mobile" className="form-label">
                    Mobile
                  </label>
                  <input
                    type="number"
                    name="mobile"
                    onChange={inputHandler} value={registerFormData.mobile}
                    className="form-control"
                    id="mobile"
                    placeholder="Enter your Mobile Number"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="pwd" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    onChange={inputHandler} value={registerFormData.password}
                    className="form-control"
                    id="pwd"
                    placeholder="Enter your password"
                  />
                </div>
                <button type="button" onClick={submitHandler} className="btn btn-primary w-100">
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

export default Register;
