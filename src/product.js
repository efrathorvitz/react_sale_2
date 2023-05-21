import React from "react"
import DetailsPro from "./detailsPro";
import {
    BrowserRouter,
    Routes,
    Route,Link
  } from "react-router-dom";
import Details from "./details";
function Product(props){
    const {imgName}=props;
    return(<>
        <img src={require(`./pictures/${imgName}`)} onClick={(e)=>console.log("click")&&<Details picture={imgName}/>} />
        {/* imgName={imgName}/><Link to="/detail_product">לפרטים</Link> }*/}
        </>
    )
}
export default Product;