/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React,{useState, useEffect}  from 'react'
import {Link, useNavigate, Outlet } from 'react-router-dom';
// import Card from './components/Card';

const TopContent = ({task, setTask}) => {
   let [color, setColor] = useState('')
   let [values, setValues] = useState("All")
   const [disp] = useState("");
   
  let [empty, setEmpty] = useState('') //After adding the todo, the input will be changed to empty    name 
  let [dempty, setDempty] = useState('') //After adding the todo, the input will be changed to empty  description

  let [name, setName] = useState("");
  let [description, setDescription] = useState("")
  let [isCompletion, setIsCompletion] = useState(false)

  let navigate = useNavigate()
  const hoverOn = () => {
    disp("show-menu")
}

const hoverOff = () => {
    disp("hide-menu")
}
  
  const handleCreate = ()=>{
    let id = task.length ? task[task.length -1].id+1 : 1
    let newArray = [...task] //deep copy Achieve Immutability
    newArray.push({
      id,
      name,
      description,
      isCompletion,
    })
    setTask(newArray)
    navigate('/home/all')
  }
   
  return (
    <>
  {/* Add doto top-content */}
    <h1 className="text-center HeaderColor">My Todo</h1>
        <div className="container text-center">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 row-cols-sm-1 g-4">
            <div className="col col-md-5">
              <div className="">
                <input placeholder="Name" value={empty} onChange={(e)=>{setName(e.target.value); setEmpty(e.target.value)}} type="text" />
              </div>
            </div>
            <div className="col col-md-5">
              <div className="">
                <input placeholder="Todo Description" value={dempty} onChange={(e)=>{setDescription(e.target.value);  setDempty(e.target.value)}} type="text" />
              </div>
            </div>
            <div className="col col-lg-12 col-md-12 col-sm-12 mt-3">
              <div className="">
                <button type="button" onClick={()=> {handleCreate(); setEmpty(''); setDempty('')}} className="btn btn-success">
                  Add Todo
                </button>
              </div>
            </div>
          </div>
        </div>
{/* nav- content */}
        <div className="d-flex justify-content-between align-items-center p-5">
          <div>
            <h3 className="fw-bold">My Todos</h3>
          </div>
          <div>
            <h4>
            <div className="card-text d-flex gap-2">
              Status Filter :{" "}
              <span>
                {" "}            
                  <div className="dropdown">
                       <button className={`btn btn-success dropdown-toggle ${color}`} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        
                         {values}
                       </button>
                       <ul className="dropdown-menu">
                       <li onMouseEnter={hoverOn} onMouseLeave={hoverOff}>
                         <li><Link to={'all'} className="dropdown-item" onClick={()=>{setValues("All"); setColor("bg-success");  }} >All</Link></li>
                         <li><Link to={'completed'} className="dropdown-item" onClick={()=>{setValues("Completed"); setColor("bg-success");}} >Completed</Link></li>
                         <li><Link to={'not-completed'} className="dropdown-item" onClick={()=>{setValues("Not Completed"); setColor("bg-danger"); }} >Not Completed</Link></li>                         
                       </li>
                       </ul>
                  </div>
              </span>
              </div>
            </h4>
          </div>
        </div>

       
{/* Card content */}
        <div className="container">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-sm-2 g-4">
           <Outlet></Outlet>       
        </div>
        </div>
    </>
  )
}

export default TopContent