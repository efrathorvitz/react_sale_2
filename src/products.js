import React from 'react'
import Product from './product';
import {
    BrowserRouter,
    Routes,
    Route,Link
  } from "react-router-dom";
function Products() {
    const arr=[
        "J0289618.JPG",
        "J0289641.JPG",
        "J0289613.JPG",
    ];
    return (
        <>
        <h1>hello products</h1>
        {arr.map((item, index) => (
 <Product key={index} imgName={item} />
// &&<Link to="/detail_product">לפרטים</Link>}/>
    ))}
        </>
    )
}
export default Products;