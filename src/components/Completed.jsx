/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import Card from './Card';

const Completed = ({task, setTask}) => {
const find = task.filter((e) => e.isCompletion === true)
  return (
    <>     
          {find.map((e, i) => {
            return <Card data={task} task={e} setTask={setTask} key={i}  />;
        })}
       
    </>
  )
}

export default Completed