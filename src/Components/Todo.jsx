import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect,useState } from 'react'
import axios from 'axios'
import { CircularProgress } from '@mui/material'
function Todo() {
  const {id} =useParams()
  const[tododetail,settododetail] =useState()
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`).then((res)=>{
            const respdata=res.data;
            settododetail(respdata)
        })
    },[id])
    console.log(tododetail)
    const {userId , title ,completed} = tododetail || {}
  return ( 
    <>
    {tododetail ? ( 
    <div>
      <h4>{`Todo's title is : ${title}`}</h4>
      <h4>{`Todo's user id: ${userId}`}</h4>
      <h4>{`Todo's title is : ${completed}`}</h4>
    </div>
    ) :<CircularProgress /> }
    </>         
  )         
}
export default Todo
