import React from 'react';

const Login = ({ login }) => {
    const [loginData, setData] = useState({        
        name: '',
        email: '',
        password: ''
    });

    const onChange = (e) => setLoginData({...loginData, [e.target.name]: e.target.value});

const onSubmit = (e) => {
    e.preventDefault();
    login(name, email, password)
}

    const {name, email, password } = loginData;
    return (
        <div>
        <h1>Sign in to your account</h1>
        <form onSubmit={(e) => onSubmit(e)}>
        <input type="email"
        onChange={(e) => onChange(e)}
        autoComplete="on"
        name="email"
        placeholder="E-mail"
        />        
        <input type="password"
        onChange={(e) => onChange(e)}
        autoComplete="on"
        name="password"
        placeholder="Password"
        />    
        <button type="submit">Login</button>
        </form>
        <br/>
        <h6>Don't have an account?</h6>
        </div>


    )
} 

export default Login