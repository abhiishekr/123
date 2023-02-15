import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { login } from '../../../features/userSlice';
import "./styles/Login.css"

function Login() {
  const { register, handleSubmit} = useForm();
  const dispatch=useDispatch();

  const onSubmit = (data) => {
    console.log(data);
    dispatch(login({
      email:data.email,
      password:data.password,
      loggedIn:true
    }))

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