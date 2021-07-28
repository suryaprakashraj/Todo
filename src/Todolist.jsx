import React from "react";
import './App.css';

const Todolist = (props)=>{
   
    return(
    <>
    <div className="list">
    <button onClick={()=>{props.onselect(props.id)}}>Delete</button>
     <li>{props.item}</li>
     </div>
     </>
    )
}
export default Todolist;
