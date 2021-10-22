import React, { useEffect } from "react";
import * as actions from './actions/productactions';
import { useSelector,useDispatch } from "react-redux";
import Loading from "./loading";
import MessageBox from "./messagebox";

function  App() {
  const res = useSelector(state=>state);
  const {loading,products,err} =res;
  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(actions.getproducts())
    
  },[]);

  return(
    <React.Fragment>
      
  

    {!loading?(<Loading></Loading>):err=="Network Error"?(<MessageBox></MessageBox>):(
      <div className="my_class" >
        {products.map((product,index)=>(
               <div class="card" style={{width: 180}}>
               <img class="card-img-top" src={product.image}></img>
               <div class="card-body">
                 <h5 class="card-title">{product.name}</h5>
                 <p class="card-text">cost:${product.cost}</p>
                 <a href="#" class="btn btn-primary">add to cart</a>
               </div>
             </div>
        ))}
      </div>
    )}
      
       
    </React.Fragment>
  )
  
}
export default App;
