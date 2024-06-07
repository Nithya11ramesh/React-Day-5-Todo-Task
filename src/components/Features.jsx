/* eslint-disable no-unused-vars */
import React from 'react'
import fullyresponsive from "/fullyresponsive.svg";
import bootsrap5 from "/bootsrap5.svg";
import easytouse from "/easytouse.svg";


const Features = () => {
  return (
      <>
        

   
      <div className="d-sm-flex pt-5">
        <div className="col text-wrap pt-5 ms-2 text-center">
          <img src={fullyresponsive} style={{height:74}}/>
          <h2>Fully Responsive</h2>
          <p>This theme will look great on any device,no matter the size!</p>
        </div>
        <div className="col text-wrap pt-5 ms-2 text-center">
           <img src={bootsrap5} style={{height:74}}/> 
          <h2>React and bootstrap</h2>
          <p>Featuring the latest build of the newer framework!</p>
        </div>
        <div className="col text-wrap pt-5 ms-2 text-center">
           <img className="mx-auto d-block" src={easytouse} style={{height:74}}/>
          <h2>Easy to Use</h2>
          <p>
            Ready to use with your own content, or customize the source files!
          </p>
        </div>
      </div>
    </>
  );
}

export default Features;