import React from "react";
import "./App.css";
import { useState } from "react";
import Todolist from "./Todolist";

const Todo = () => {
  const [input, setInput] = useState("");
  const [item, setItem] = useState([]);
  const getvalue = (e) => {
    setInput(e.target.value);
  };
  const AddItem = () => {
    setItem((old) => {
      return [...old, input];
    });

    setInput("");
  };
  const deleteItem = (id)=>{
    console.log("deleted")
    console.log(id)
    setItem((old)=>{
       return old.filter((element,index)=>{
            return id !== index
        })
    })
}
  return (
    <>
      <div className="main-container">
        <div className="todo-container">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input
            type="text"
            placeholder="Add Items"
            value={input}
            onChange={getvalue}
          />
          <button disabled= {!input} onClick={AddItem}>Add</button>
          <ol>
            {item.map((value, index) => {
              return (
                <>
                  <Todolist id={index}
                   key={index} 
                   item={value}
                   onselect ={deleteItem} />
                </>
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};
export default Todo;
