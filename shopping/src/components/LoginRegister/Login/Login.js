import React from 'react'
import { useForm } from 'react-hook-form';
import "./styles/Login.css"

function Login() {
  const { register, handleSubmit,formState:{errors} } = useForm();
  
  const onSubmit = (data) => {
    console.log(data);
  };
    
  return (
    <div>
      <div className="form">
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Email</label>
          <input className="form-control"
            type="email"
            name='email'
            placeholder="email"
            {...register("email")}
          />
          <label>Password</label>
          <input className="form-control"
            type="password"
            placeholder="password"
            {...register("password")}
          />
          
          <button className="loginbtn" type="submit">Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login