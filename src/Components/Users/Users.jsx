import axios from 'axios';
import React, { useEffect, useState } from 'react'
import style from './user.module.css'
import { Link } from 'react-router-dom';
export default function Users() {

    const [data,setData]=useState([]);
    const [loading ,setLoading]=useState(true);
    const [error ,setError]=useState(null);
    const [change,setChange]=useState(true);
    const getData=async()=>{
        try{
        const {data}=await axios.get('https://node-react-10.onrender.com/users');
        setData(data.users);
        setError(null);
        }
        catch(e){
            setError(e.message);
            setData([]);
        }
        finally{
            setLoading(false)
        }
    }

    useEffect(()=>{
        getData();
    },[])
    const deleteUser=async (id)=>{
        const response= await axios.delete(`https://node-react-10.onrender.com/users/${id}`);
        console.log(id)
        console.log(response);
        getData();
      
    }
    if(loading){
        return <div>Loading.....</div>
    }
  return (
    <div className='row'>
      {error?<div className='alert alert-danger'>{error}</div>
      :
      data.length >0?data.map((user)=>{
        return <div className={'col-lg-3 col-md-4 col-sm-6 d-flex '+style.hover} key={user._id}>
            <div className={"flex-grow-1 shadow "+style.card}>
                <h3>{user.userName}</h3>
                <p>{user.email}</p>
                <p>{user.phone}</p>
                <div className={style.btns}>
                <Link to={'/edit/'+user._id} className={style.btn +" "+  style.btnInfo}>Edit</Link>
                <button className={style.btn +" "+style.btnDanger} onClick={()=>deleteUser(user._id)}>Delete</button>
            </div>
            </div>
            
        </div>
      }):<div className='alert alert-warning mt-5 container'>no user available now</div>}
      
    </div>
  )
}
