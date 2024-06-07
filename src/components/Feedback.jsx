/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import {Card  } from "./Card";

const Feedback = () => {
  return (
    <>
      <div className="row text-center pt-5 mt-5 fontSize">
        <h3>What People are saying...</h3>
      </div>
      <div className="d-sm-flex pt-5">
        {Card.map((img) => (
          <div className="col" key={img.id}>
            <img
              className="img-fluid img-thumbnail mx-auto d-block rounded-circle mb-3"
              src={(`${img.featuresImg1}`)} 
              style={{width: '50%'}}
            />
            <h3 className="text-center">{img.name}</h3>
            <p className="fontSize text-center">{img.comment}</p>
          </div>
        ))}
      </div>
    </>
  );
};
export default Feedback;