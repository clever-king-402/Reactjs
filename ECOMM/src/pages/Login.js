import React from 'react'
import { useState } from 'react'
import { createUser } from '../components/Fetcher'
const Login = () => {
    const [userData, setUserData] = useState({
      firstName: "",
      lastName: "",
      userName : "",
      mobileNo: "",
      email: "",
      password: "",
      confirmPassword: "",
    });

    const handleChange = (event) => {
      setUserData({ ...userData, [event.target.name]: event.target.value });
    };

    
    const handleSubmit = (event)=>{
        event.preventDefault();
        createUser(userData);
        setUserData({
          firstName: "",
          lastName: "",
          userName: "",
          mobileNo: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
    }

  return (
    <>
      {/* <!-- Breadcrumb Start --> */}
      <div class="breadcrumb-wrap">
        <div class="container-fluid">
          <ul class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li class="breadcrumb-item">
              <a href="#">Products</a>
            </li>
            <li class="breadcrumb-item active">Login & Register</li>
          </ul>
        </div>
      </div>
      {/* <!-- Breadcrumb End --> */}

      {/* <!-- Login Start --> */}
      <div class="login">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-6">
              <div class="register-form">
                <form class="row" onSubmit={handleSubmit} method="POST">
                  <div class="col-md-6">
                    <label>First Name</label>
                    <input
                      class="form-control"
                      type="text"
                      placeholder="First Name"
                      name="firstName"
                      value={userData.firstName}
                      onChange={handleChange}
                    />
                  </div>
                  <div class="col-md-6">
                    <label>Last Name"</label>
                    <input
                      class="form-control"
                      type="text"
                      placeholder="Last Name"
                      name="lastName"
                      value={userData.lastName}
                      onChange={handleChange}
                    />
                  </div>
                  <div class="col-md-6">
                    <label>User Name"</label>
                    <input
                      class="form-control"
                      type="text"
                      placeholder="User Name"
                      name="userName"
                      value={userData.userName}
                      onChange={handleChange}
                    />
                  </div>
                  <div class="col-md-6">
                    <label>E-mail</label>
                    <input
                      class="form-control"
                      type="text"
                      placeholder="E-mail"
                      name="email"
                      value={userData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div class="col-md-6">
                    <label>Mobile No</label>
                    <input
                      class="form-control"
                      type="text"
                      placeholder="Mobile No"
                      name="mobileNo"
                      value={userData.mobileNo}
                      onChange={handleChange}
                    />
                  </div>
                  <div class="col-md-6">
                    <label>Password</label>
                    <input
                      class="form-control"
                      type="text"
                      placeholder="Password"
                      name="password"
                      value={userData.password}
                      onChange={handleChange}
                    />
                  </div>
                  <div class="col-md-6">
                    <label>Retype Password</label>
                    <input
                      class="form-control"
                      type="text"
                      placeholder="Password"
                      name="confirmPassword"
                      value={userData.confirmPassword}
                      onChange={handleChange}
                    />
                  </div>
                  <div class="col-md-12">
                    <button class="btn" type="submit">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div class="col-lg-6">
              <form class="login-form">
                <div class="row">
                  <div class="col-md-6">
                    <label>E-mail / Username</label>
                    <input
                      class="form-control"
                      type="text"
                      placeholder="E-mail / Username"
                    />
                  </div>
                  <div class="col-md-6">
                    <label>Password</label>
                    <input
                      class="form-control"
                      type="text"
                      placeholder="Password"
                    />
                  </div>
                  <div class="col-md-12">
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="newaccount"
                      />
                      <label class="custom-control-label" for="newaccount">
                        Keep me signed in
                      </label>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <button class="btn">Submit</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Login End --> */}
    </>
  );
}

export default Login