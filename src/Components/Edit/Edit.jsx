import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom';

export default function Edit() {
    const {register,handleSubmit,setValue }=useForm();
    const {id}=useParams();
    const navigat=useNavigate();
    const getUser=async ()=>{
      const {data}=await axios.get(`https://node-react-10.onrender.com/users/${id}`);
      setValue('userName',data.user.userName);
      setValue('phone',data.user.phone);
      setValue('email',data.user.email);
    }


    const submit= async(data)=>{
        const response=await axios.put(`https://node-react-10.onrender.com/users/${id}`,{userName:data.userName});
        console.log(response)
        if(response.status===200){
        navigat('/');
        }
    }


    useEffect(()=>{
      getUser();
    },[])
  return (
    
  <form onSubmit={handleSubmit(submit)} className='w-50 m-auto pt-5'>
  <div className="mb-3">
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">UserName</label>
    <input type="text" className="form-control"  {...register("userName")} id="exampleInputPassword1" />
  </div>
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" {...register("email")}  disabled id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>
  <div className="mb-3">
    <label htmlFor="examplePhone" className="form-label">Phone Number</label>
    <input type="number" className="form-control" {...register("phone")}  disabled id="examplePhone" aria-describedby="emailHelp" />
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>

  )
}
