import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import '../sass/signUp.css'
import api from '../utils/api';
import axios from 'axios';

class SignUp extends Component {
  constructor() {
    super()
    this.state = {
      fullName: '',
      email: '',
      password: ''
    }
    this.changeFullName = this.changeFullName.bind(this)
    this.changePassword = this.changePassword.bind(this)
    this.changeEmail = this.changeEmail.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  changeFullName(event){
    this.setState({
      fullName:event.target.value
    })
  }
  changeUsername(event){
    this.setState({
      username: event.target.value
    })
  }
  changePassword(event){
    this.setState({
      password:event.target.value
    })
  }
  changeEmail(event){
    this.setState({
      email:event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();

    const userData = {
      fullName: this.state.fullName,
      password: this.state.password,
      email: this.state.email
    }
    
    // axios.post('api/register', userData).then(response=> console.log(response))
    // api.register(userData)
    // .then(response => {
    //   console.log(response.data)
    //   window.location='/'
    // })
    console.log("userData: ", JSON.stringify(userData))

    api.register( JSON.stringify(userData) )

  }

  render() {
    return (
      <div id="root">
        <div className="container">
          <div className="form-div">
            <form onSubmit={this.handleSubmit}>
              <h1 className="title"> Sign Up </h1>
              <input type="text"
                placeholder='E-mail'
                onChange={this.changeEmail}
                value={this.state.email}
                className='form-control form-group'
                name="email"
                required
              />
              <input type="text"
                placeholder='Full name'
                onChange={this.changeFullName}
                value={this.state.fullName}
                className='form-control form-group'
                name="fullName"
                required
              />
              {/* <input type="text"
                placeholder='Username'
                onChange={this.changeUsername}
                value={this.state.username}
                className='form-control form-group'
                required
              /> */}
              <input type="password"
                placeholder='password'
                onChange={this.changePassword}
                value={this.state.password}
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
}

export default SignUp