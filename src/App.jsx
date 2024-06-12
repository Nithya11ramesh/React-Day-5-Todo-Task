/* eslint-disable no-unused-vars */
import React, {useState} from "react";
import Card from "./components/Card";
import TopContent from "./components/TopContent";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Edit from "./components/Edit";
import All from "./components/All";
import Completed from "./components/Completed";
import Not_completed from "./components/NotCompleted"; 

const App = () => {
  let [task, setTask] = useState([
    {
      id: 1,
      name: "Today task -1 ",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa dolorum, numquam",
      isCompletion: true,
    },
    {
      id: 2,
      name: "Office Task -2",
      description:
        "Lorem ipsum dolor, sit amet consectetur ecusandae illum? Corporis, qui?",
      isCompletion: false,
    },
    {
      id: 3,
      name: "Today task complete pannanum",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisi usandae illum? Corporis, qui?",
      isCompletion: true,
    },
  ])

  return (
    <>
      <div className="container-fluid mt-4 mb-5">        
        <BrowserRouter>
          <Routes>
            <Route path="/home" element={<TopContent task={task} setTask={setTask} />}>
              <Route path="all" element={<All task={task} setTask={setTask} />}></Route>
              <Route path="completed" element={<Completed task={task} setTask={setTask} />}></Route>
              <Route path="not-completed" element={<Not_completed task={task} setTask={setTask} />}></Route>
            </Route>
            <Route path="/edit/:id" element={<Edit task={task} setTask={setTask} />}/>
            <Route path="/*" element={<Navigate to="/home/all" />}/>
          </Routes>
        </BrowserRouter>
        
      </div>
    </>
  );
};

export default App;