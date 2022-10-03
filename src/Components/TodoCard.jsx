import React from "react"
import {useNavigate } from 'react-router-dom'


function TodoCard({obj,id}) {
    const {title, completed} = obj 
    const navigate = useNavigate();
    
    return(
    <div className="card" onClick={()=>{
        console.log(id);
        navigate(`/list/${id}`)
    }}>
        
        <h6>{`${title}`}</h6>
        <h6>{`${completed}`}</h6>
    </div>
      )
 
 
}
export default TodoCard
