import React, { Children } from 'react';
import {
   BrowserRouter,
   Routes,
   Route,Link
 } from "react-router-dom";
import Details from './details';
import DetailsPro from './detailsPro';
import Login from './login';
import Products from './products';

function Router(){
    return(<><BrowserRouter> <Link to="/products">מוצרים..................</Link></BrowserRouter>
    <BrowserRouter>
        <Routes>
           <Route path='/login' element={<Login />} />
           <Route path='/products' element={<Products />} />  {/*Children={path='/detail_product' }*/} 
           <Route path='/detail_product' element={<Details/>} />   
        </Routes>
      </BrowserRouter></>
       
   )    
}
export default Router;