import React from 'react'
import { useForm } from 'react-hook-form';
import "../Login/styles/Login.css"

function Register() {
  const { register, handleSubmit } = useForm();
  
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
          <label>Confirm Password</label>
          <input className="form-control"
            type="password"
            placeholder="Confirm-password"
            {...register("Confirm password")}
          />
          <button className="loginbtn" type="submit">Login</button>
        </form>
      </div>
    </div>
  )
}

export default Register