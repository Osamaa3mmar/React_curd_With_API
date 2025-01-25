import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom';

export default function Add() {
    const {register,handleSubmit }=useForm();
    const navigate=useNavigate();
    
    const submit= async(data)=>{
      console.log(data)
        const response=await axios.post("https://node-react-10.onrender.com/users",data)
        console.log(response)
        if(response.status==201) {
          navigate('/');
        }
    }
  return (
  <form onSubmit={handleSubmit(submit)} className='w-50 m-auto pt-5'>
  
  <div className="mb-3">
    <label htmlFor="exampleInput" className="form-label">UserName</label>
    <input type="text" className="form-control" {...register("userName")} id="exampleInput" />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="text" className="form-control" {...register("password")} id="exampleInputPassword1" />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" {...register("email")}  id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>
  <div className="mb-3">
    <label htmlFor="examplePhone" className="form-label">Phone Number</label>
    <input type="number" className="form-control" {...register("phone")}  id="examplePhone" aria-describedby="emailHelp" />
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>

  )
}
