import React, {useState, useEffect} from 'react';
import * as Yup from "yup";
const axios = require('axios').default;
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
        const [formState, setFormState] = useState({
            first_name:'',
            last_name:'',
            email:'',
            password:'',
            role:'Client'
        });
        return (
           <form>
               <h3>Sign Up</h3>
               <div className='form-group'>
                   <label>First Name</label>
                   <input type='text' className='form-control'
                   placeholder='John' name='firstname'
                   />
               </div>

               <div className="form-group">
                   <label>Last Name</label>
                   <input type='text' className='form-control'
                   placeholder='Doe' name='lastname'
                   />
               </div>
               <div className='form-group'>
                   <label>Email</label>
                   <input type='email' className='form-control'
                   placeholder='john@gmail.com' name='email'
                   />
               </div>
               <div className='form-group'>
                   <label>Password</label>
                   <input type='password' className='form-control'
                   placeholder='Enter Password' name='password'
                   />
               </div>
               <div className='form-group'>
                   <label>Confirm Password</label>
                   <input type='password' className='form-control'
                   placeholder='Confirm Password' name='password_confirm'
                   />
               </div>
               <div className='form-group'>
                   <label>Select Role</label>
                   <select name='role'> 
                        <option value='Client'>Client</option>
                        <option value='Instructor'>Instructor</option>
                    </select>
               </div>
               
               <button className="btn btn-primary btn-block">Sign Up</button>
           </form>
        )
    }
