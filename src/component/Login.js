import Axios from 'axios';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function Login() {
    const [loginDetails, setLoginDetails] = useState({username:'', password:''});
    const inputChange = e => {
        e.persist();
        let value = e.target.value;
        setLoginDetails({
            ...loginDetails,
            [e.target.name]: value
        });
    };
    const submitForm = e => {
        e.preventDefault();
        console.log("Submitting");
        axios
        .post("https://reqres.in/api/login", loginDetails)
        .then(res => {
            console.log("success", res.data);
        })
        .catch(err => console.log(err.response));
    }
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
            <form onSubmit={submitForm}>
               <h3>Login</h3>
               <div className='form-group'>
                   <label>Username</label>
                   <input type='text' className='form-control'
                   placeholder='Username' name="username" onChange={inputChange}
                    />
               </div>
               <div className='form-group'>
                   <label>Password</label>
                   <input type='password' className='form-control'
                   placeholder='Password' name="password" onChange={inputChange}
                   />
               </div>
               
               <button className="btn btn-primary btn-block">Login</button>
           </form>
        )
    }