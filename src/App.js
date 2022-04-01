
import React from 'react';
import './App.css';
import { useState } from 'react'

function App() {
  const [toDos, setToDos] = useState([])
  const [toDo, setToDo] = useState('')

  function clearTodo (){
    setToDo = ''
  }

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(e) => setToDo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={
          () => {
            setToDos([...toDos, { id: Date.now(), text: toDo, status: false }]) 
            setToDo('')
          }
          }
           className="fas fa-plus"></i>
      </div>
      <div className="todos">

        {
          toDos.map((value) => {
            return (

              <div className="todo">
                <div className="left">
                  <input onChange={(e) => {

                    setToDos(toDos.filter((obj2) => {
                      if (value.id === obj2.id) {
                        obj2.status = e.target.checked
                      }
                      return obj2
                    }))

                  }} type="checkbox" name="" id="" />
                  <p>{value.text}</p>
                </div>
                <div className="right">
                  <i className="fas fa-times" 
                  onClick={()=>{
                    setToDos(toDos.filter((obj2)=>{
                      return value.id !== obj2.id
                    }))
                  }
                  }
                  ></i>
                </div>
              </div>

            )
          })
        }

        {
          toDos.map((value)=>{
            if(value.status){
              return (
                <h1>{value.text}</h1> 
              )
            }
            return null
          })
        }

      </div>
    </div>
  );
}

export default App;