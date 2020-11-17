import React, {Component} from 'react';

import axios from 'axios';

export default function Register(){
    /*
    const handleSubmit = e => {
        e.preventDefault();
        const data = {
            first_name: this.firstName,
            last_name: this.lastName,
            email: this.email,
            password: this.password,
            password_confirm: this.confirmPassword
        };
     console.log(data);
    // axios.post('https://localhost:8000/register', data).then(
    //     res => {
    //         console.log(res)
    //     }
    // ).catch(
    //     err => {
    //         console.log('erroooooooooo', err);
    //     }
    // )

    };*/
    
        return (
           <form>
               <h3>Sign Up</h3>
               <div className='form-group'>
                   <label>First Name</label>
                   <input type='text' className='form-control'
                   placeholder='First Name'
                   />
               </div>

               <div className="form-group">
                   <label>Last Name</label>
                   <input type='text' className='form-control'
                   placeholder='Last Name' 
                   />
               </div>
               <div className='form-group'>
                   <label>Email</label>
                   <input type='email' className='form-control'
                   placeholder='email'
                   />
               </div>
               <div className='form-group'>
                   <label>Password</label>
                   <input type='password' className='form-control'
                   placeholder='Password'
                   />
               </div>
               <div className='form-group'>
                   <label>Conform Password</label>
                   <input type='password' className='form-control'
                   placeholder='Conform Password'
                   />
               </div>
               
               <button className="btn btn-primary btn-block">Sign Up</button>
           </form>
        )
    }
