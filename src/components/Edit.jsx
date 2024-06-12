/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import  {useState, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Edit = ({task, setTask}) => {
  const navigate = useNavigate()
  const param = useParams()

 const findIndex = (id) => { //index finder
     for(let i = 0; i< task.length; i++){
        if(id === task[i].id){
           return i
        }
     }
  };
  

  const id = Number(param.id)
let index = findIndex(id);
  
  const [name, setName] = useState("");
const [description, setDescription] = useState("")
const [isCompletion, setIsCompletion] = useState(task[index].isCompletion)

  const handleEdit = ()=>{
    // let id = Number(param.id)
    // let index = findIndex(id)
    let newArray = [...task] //deep copy Achieve Immutability

    newArray.splice(index, 1,{
      id,
      name,
      description,
      isCompletion,
    })
    setTask(newArray)
    navigate('/home/all')
  }
  

  const getData = () => {
    setName(task[index].name)
    setDescription(task[index].description)
    setIsCompletion(task[index].isCompletion)
  }

  useEffect(()=>{
    getData()
  },[])


  return (
   <>
    <h1 className="text-center HeaderColor">Edit Todo</h1>
        <div className="container text-center">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 row-cols-sm-1 g-1">
            <div className="col col-md-6 mt-3">
              <div className="">
                <input placeholder="Name" value={name} onChange={(e)=>{setName(e.target.value)}} type="text" />
              </div>
            </div>
            <div className="col col-lg-6 mt-3">
              <div className="">
                <input placeholder="Todo Description" value={description} onChange={(e)=>{setDescription(e.target.value)}} type="text" />
              </div>
            </div>
            <div className="col col-lg-12 col-md-12 col-sm-12 mt-3">
              <div className="">
                <button type="button" onClick={()=> handleEdit()} className="btn btn-info mt-3">
                  Save Todo
                </button> &nbsp;
                <button type="button" onClick={()=> navigate('/home/all')} className="btn btn-warning mt-3">Cancel Todo</button>
              </div>
            </div>
          </div>
        </div>
   </>
  )
}

export default Edit