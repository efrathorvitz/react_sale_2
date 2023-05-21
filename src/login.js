import React, { useState } from 'react'
import service from './service';
import {
    BrowserRouter,
    Routes,
    Route,Link
  } from "react-router-dom";
  import { Navigate, NavLink } from 'react-router-dom';

function Login() {
 const [userName, setUserName] = useState('');
 const [password, setPassword] = useState('');
//  const {setIsLogin}=props;
 function addAnotherUser(){
    // setIsLogin(true); 
   
    service.addUser({userName,password});
    


 }
    return (         
        <>
        {/* {service.initialUser()} */}
        <form>            
            <input placeholder='שם משתמש' onChange={(e)=>setUserName(e.target.value)}/>
            <br></br>
            <input placeholder='סיסמה' type="password" onChange={(e)=>setPassword(e.target.value)}/>
            <br></br>
            {/* <input value="התחבר" type="button" onClick={addAnotherUser}/> */}
           <BrowserRouter> <Link to="/products" onClick={addAnotherUser}>התחבר</Link></BrowserRouter>
        </form>
        </>
    )
}
export default Login;