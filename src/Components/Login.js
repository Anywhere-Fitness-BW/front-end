import Axios from 'axios';
import React, {Component} from 'react';
import axios from 'axios';

export default class Login extends Component {
    handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            email: this.email,
            password: this.password
        };
        
        axios
        .post('http://127.0.0.1:5000/', data)
        .then(res => {
            console.log('succccccccess', res)
        })
        .catch(err => {
            console.log(err)
        })
    };
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
               <h3>Login</h3>
              
               <div className='form-group'>
                   <label>Email</label>
                   <input type='email' className='form-control'
                   placeholder='email'
                   onChange={e => this.email = e.target.value} />
               </div>
               <div className='form-group'>
                   <label>Password</label>
                   <input type='password' className='form-control'
                   placeholder='Password'
                   onChange={e => this.password = e.target.value} />
               </div>
               
               <button className="btn btn-primary btn-block">Login</button>
           </form>
        )
    }
}