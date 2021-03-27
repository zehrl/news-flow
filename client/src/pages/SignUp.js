import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import '../sass/signUp.css'
import API from '../utils/api';

const SignUp = () => {

  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const changeFullName = (event) => {

    setFullName(event.target.value)

  }

  const changePassword = (event) => {

    setPassword(event.target.value)

  }

  const changeEmail = (event) => {

    setEmail(event.target.value)

  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const userData = { fullName, password, email }

    // console.log("SignUp.js, userData: ", (userData))

    API.register(userData).catch(error => console.log(error.response.data));


  }

  return (
    <div id="root">
      <div className="container">
        <div className="form-div">
          <form onSubmit={handleSubmit}>
            <h1 className="title">Sign Up</h1>

            <input type="text"
              placeholder='Email'
              onChange={changeEmail}
              value={email}
              className='form-control form-group'
              name="email"
              required
            />

            <input type="text"
              placeholder='Full Name'
              onChange={changeFullName}
              value={fullName}
              className='form-control form-group'
              name="fullName"
              required
            />

            <input type="password"
              placeholder='Password'
              onChange={changePassword}
              value={password}
              className='form-control form-group'
              name="password"
              required
            />

            <input type="submit" className='btn btn-primary btn-block' value='Submit' />
          </form>
        </div>
      </div>
    </div>

  )
}

export default SignUp