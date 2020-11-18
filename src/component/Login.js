import Axios from 'axios';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function Login() {
    /*
    handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            email: this.email,
            password: this.password
        };
        
        // axios
        // .post('http://127.0.0.1:5000/', data)
        // .then(res => {
        //     console.log('succccccccess', res)
        // })
        // .catch(err => {
        //     console.log(err)
        // })
    };
    */
        return (
            <form>
               <h3>Login</h3>
              
               <div className='form-group'>
                   <label>Username</label>
                   <input type='text' className='form-control'
                   placeholder='Username'
                    />
               </div>
               <div className='form-group'>
                   <label>Password</label>
                   <input type='password' className='form-control'
                   placeholder='Password'
                   />
               </div>
               
               <button className="btn btn-primary btn-block">Login</button>
           </form>
        )
    }