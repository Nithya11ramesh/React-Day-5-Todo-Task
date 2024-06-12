/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

const Card = ({data, task, setTask}) => {
     let boo = task.isCompletion;
    const [states, setStates] =useState(task.isCompletion)
    const[color, setColor] = useState('')
    const [values, setValues] = useState("") 
  
  
    const navigate = useNavigate() 
 
  
   
    useEffect(()=> {
      states ? `${ setValues("Completed"),  setColor("bg-success")}` : `${ setValues("Not Completed"),  setColor("bg-danger")}`;
    },[]);
   
    
    const handleDelete = (id)=>{
     let index;
      for(let i = 0; i < data.length; i++){
        if(data[i].id === id){
          index = i
          break
        }
      }
      let newArray = [...data];
      newArray.splice(index, 1)
      setTask(newArray)
    }

    let handleComplete = (id, state) =>{
          console.log(id, state)
          let index;
          for(let i = 0; i < data.length; i++){
            if(data[i].id === id){
              index = i
              break
            }
          }
          console.log(index)
          let newArray = [...data];
          newArray[index].isCompletion = state;
        
    }

  return (
    <>

    <div className="col">
            <div className="card">
              <div className="card-body">
                <p className="card-text">Name : {task.name}</p>
                <p className="card-text">Description : {task.description}</p>
                <div className="card-text d-flex gap-2">
                  Status :{" "}                  
                  <div className="dropdown">
                       <button className={`btn btn-secondary dropdown-toggle ${color}`} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        
                         {values}
                       </button>
                       <ul className="dropdown-menu">
                       
                       

                         <li><a className="dropdown-item" onClick={()=>{setValues("Completed"); setColor("bg-success"); handleComplete(task.id,false) }} >Completed</a></li>
                         <li><a className="dropdown-item" onClick={()=>{setValues("Not Completed"); setColor("bg-danger"); handleComplete(task.id,true)}} >Not Completed</a></li>   
                                        
                       </ul>

                  </div>
                  
                </div>
                <div className="justify-content-end d-flex mt-3">
                <button type="button" className="btn btn-info" onClick={()=>{navigate(`/edit/${task.id}`)}} >Edit</button> &nbsp; &nbsp;
                <button type="button" className="btn btn-danger" onClick={()=>handleDelete(task.id)} >Delete</button>
                </div>
              </div>
            </div>
          </div>
    </>
  )
}

export default Card