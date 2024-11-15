import { useState } from "react";
import axios from "axios"


function Login(props) {
  const baseUrl="http://127.0.0.1:8000/api/"
  const [formError,setFormError]=useState(false)
  const [errorMsg,setErrorMsg]=useState('')

const[loginFormData,setLoginFormData]=useState({
  'username':'',
  'password':''

});

const inputHandler = (event)=>{
  setLoginFormData({
    ...loginFormData,
    [event.target.name]:event.target.value
  })
};

const submitHandler = (event)=>{
  const formdata=new FormData();
  formdata.append('username',loginFormData.username);
  formdata.append('password',loginFormData.password);
  // console.log(formdata);
  // console.log('Username:', loginFormData.username);
  // console.log('Password:', loginFormData.password);

  // Optionally, you can also inspect the FormData contents like this:
  // for (let pair of formdata.entries()) {
  //   console.log(pair[0] + ': ' + pair[1]);
  // }

  axios.post(baseUrl+'customer/login',formdata)
  .then(function (response) {
    console.log(response);
    if(response.data.bool==false)
    {
      
      setFormError(true)
      setErrorMsg(response.data.msg)
    }
    else{
      console.log(response.data)
      localStorage.setItem('customer_login',true)
      localStorage.setItem('customer_username',response.data.user)

      setFormError(false)
      setErrorMsg('')
    }
  })
  .catch(function (error) {
    console.log(error);
  });

};

console.log(localStorage.getItem('customer_login'));
const checkcustomer=localStorage.getItem('customer_login');
if(checkcustomer)
{
  window.location.href="/customer/dashboard"
}




  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8 col-sm-10 col-12">
          <div className="card">
            <h4 className="card-header text-center">Login</h4>
            <div className="card-body">
              <form>
              {formError &&
                <p className="text-danger">{errorMsg}</p>}
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="username"
                    name="username"
                    value={loginFormData.username}
                    onChange={inputHandler}
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
                    name="password"
                    value={loginFormData.password}
                    onChange={inputHandler}
                    placeholder="Enter your password"
                  />
                </div>
                <button type="button"  onClick={submitHandler} className="btn btn-primary w-100">
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

export default Login;
