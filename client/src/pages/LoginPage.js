import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import '../sass/signUp.css';
import { useHistory } from "react-router-dom";
import { useLogin } from "../utils/auth"


const LoginPage = () => {

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const history = useHistory();
  const login = useLogin();


  const enterPassword = (event) => {
    setPassword(event.target.value)
  }

  const enterEmail = (event) => {

    setEmail(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    // const userData = { password, email }

    login({email, password})
      .then(res => {
        console.log(res)
        history.push("/");
      }).catch(err => {
        alert(err)
      })


  }

  return (
    <div id="root">
      <div className="container">
        <div className="form-div">
          <form onSubmit={handleSubmit}>
            <h1 className="title"> Login </h1>
            <input type="text"
              placeholder='E-mail'
              onChange={enterEmail}
              value={email}
              className='form-control form-group'
            />
            <input type="password"
              placeholder='password'
              onChange={enterPassword}
              value={password}
              className='form-control form-group'
            />

            <input type="submit" className='btn btn-primary btn-block' value='Submit' />
          </form>
        </div>
      </div>
    </div>

  )
}

export default LoginPage