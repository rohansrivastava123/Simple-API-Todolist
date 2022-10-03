import React ,{useEffect , useState} from 'react'
import axios from 'axios';
import TodoCard from './TodoCard';
import {CircularProgress} from '@mui/material'

function TodoList() {
    const[todos,settodos] =useState()
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/todos`).then((res)=>{
            const respdata=res.data;
            settodos(respdata)
        })
    },[])
    //console.log(todos)
    return (
        <>
        {(todos) ? 
        (
            <div className="cardsection">
                {todos.map((obj,key) =>{
                    return(  
                    <TodoCard key={key} obj={obj} id={obj.id}/>
                    )
                })}
            </div>          
        ): <CircularProgress />}
        </>
  )
}
export default TodoList
