import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import '../sass/signUp.css';
import API from '../utils/api';


class LoginPage extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: ''
    }
    this.enterPassword = this.enterPassword.bind(this)
    this.enterEmail = this.enterEmail.bind(this)
  }



  enterPassword(event){
    this.setState({
      password:event.target.value
    })
  }
  enterEmail(event){
    this.setState({
      email:event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();

    const userData = {
      password: this.state.password,
      email: this.state.email
    }
    
    API.login(userData).then(res=>{console.log(res)})

  } 

  render() {
    return (
      <div id="root">
        <div className="container">
          <div className="form-div">
            <form onSubmit={this.handleSubmit}>
              <h1 className="title"> Login </h1>
              <input type="text"
                placeholder='E-mail'
                onChange={this.enterEmail}
                value={this.state.email}
                className='form-control form-group'
              />
              <input type="password"
                placeholder='password'
                onChange={this.enterPassword}
                value={this.state.password}
                className='form-control form-group'
              />

              <input type="submit" className='btn btn-primary btn-block' value='Submit' />
            </form>
          </div>
        </div>
      </div>

    )
  }
}

export default LoginPage