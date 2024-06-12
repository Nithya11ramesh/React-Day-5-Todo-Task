/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import Card from './Card';

// eslint-disable-next-line react/prop-types
const All = ({task, setTask}) => {
  return (
    <>     
          {task.map((e, i) => {
            return <Card data={task} task={e} setTask={setTask} key={i}  />;
        })}
       
    </>
  )
}

export default All