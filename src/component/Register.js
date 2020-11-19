import React, {useState, useEffect} from 'react';
import * as Yup from "yup";
const axios = require('axios').default;
export default function Register(){
        const submitForm = e => {
            e.preventDefault();
            console.log("Submitting");
            axios
            .post ('https://buildweek-backend.herokuapp.com/')
            // ('https://reqres.in/api/users')
            
            // .post("https://reqres.in/api/users", formState)
            .then(res => {

                
                console.log("success", res.data);
            })
            .catch(err => console.log(err.res));
        }
        const [buttonDisabled, setButtonDisabled] = useState(false);
        const inputChange = e => {
            e.persist();
            let value = e.target.value;
            Yup
            .reach(formSchema, e.target.name)
            .validate(value)
            .then(valid => {
            setErrors({
                ...errors,
                [e.target.name]: ""
            });
            })
            .catch(err => {
            setErrors({
                ...errors,
                [e.target.name]: err.errors[0]
            });
            });
            setFormState({
                ...formState,
                [e.target.name]: value
            });
        };
        const formSchema = Yup.object().shape({
            first_name: Yup
                .string()
                .required("Must include first name.")
                .min(2, "Name must be at least 2 characters"),
            last_name: Yup
                .string()
                .required("Must include last name.")
                .min(2, "Name must be at least 2 characters"),
            email: Yup
                .string()
                .required("Must include email.")
                .email("Must be valid email"),
            username: Yup
                .string()
                .required("Must include username.")
                .min(3, "Username must be at least 3 characters in length"),
            password: Yup
                .string()
                .required("Must have password")
                .min(6, "Password must be at least 6 characters"),
            role: Yup
                .string()
            });
        const [errors, setErrors] = useState({
            first_name:'',
            last_name:'',
            email:'',
            password:'',
            username:'',
            role:'',
        });
        const [formState, setFormState] = useState({
            first_name:'',
            last_name:'',
            email:'',
            password:'',
            username:'',
            role:'Client'
        });
        useEffect(() => {
            formSchema.isValid(formState).then(valid => {
              setButtonDisabled(!valid);
            });
          }, [formState]);
        return (
           <form onSubmit={submitForm}>
               <h3>Sign Up</h3>
               <div className='form-group'>
                   <label>First Name</label>
                   <input type='text' className='form-control'
                   placeholder='John' name='first_name' value={formState.first_name} onChange={inputChange}
                   />
               </div>
               <div className="form-group">
                   <label>Last Name</label>
                   <input type='text' className='form-control'
                   placeholder='Doe' name='last_name' value={formState.last_name} onChange={inputChange}
                   />
               </div>
               <div className='form-group'>
                   <label>Email</label>
                   <input type='email' className='form-control'
                   placeholder='john@gmail.com' name='email' value={formState.email} onChange={inputChange}
                   />
               </div>
               <div className='form-group'>
                   <label>Username</label>
                   <input type='text' className='form-control'
                   placeholder='johndoe' name='username' value={formState.username} onChange={inputChange}
                   />
               </div>
               <div className='form-group'>
                   <label>Password</label>
                   <input type='password' className='form-control'
                   placeholder='Enter Password' name='password' value={formState.password} onChange={inputChange}
                   />
               </div>
               <div className='form-group'>
                   <label>Select Role</label>
                   <select name='role' onChange={inputChange} value={formState.role}> 
                        <option value='Client'>Client</option>
                        <option value='Instructor'>Instructor</option>
                    </select>
               </div>
               <div>
                    {errors.first_name.length > 0 ? (<p>{errors.first_name}</p>) : null}
                    {errors.last_name.length > 0 ? (<p>{errors.last_name}</p>) : null}
                    {errors.email.length > 0 ? (<p>{errors.email}</p>) : null}
                    {errors.username.length > 0 ? (<p>{errors.username}</p>) : null}
                    {errors.password.length > 0 ? (<p>{errors.password}</p>) : null}
                    {errors.role.length > 0 ? (<p>{errors.role}</p>) : null}
                </div>
               <button className="btn btn-primary btn-block" disabled={buttonDisabled}>Sign Up</button>
           </form>
        )
    }
