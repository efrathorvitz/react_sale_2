import React from 'react';
import Details from './details';
import Login from './login';
import Products from './products';
import Router from './router';
import service from './service';

function App() {  
  const logOut=()=>{
    // setIsLogin(false);
    service.initialUser();
}
  // const [isLogin, setIsLogin]=useState(false);
// service.initialUser();
return (
    <>

   <h3>שלום ל{service.getUser()}</h3>
    {
      service.getUser()==="אורח"?
    <Login/>
    :
    <Router/>}
    {/* <Products/> */}
    {/* <Details picture={"Ripple.jpg"}/> */}
    <input value="יציאה" type="button" onClick={logOut}/>
    </>
  );
}
export default App;