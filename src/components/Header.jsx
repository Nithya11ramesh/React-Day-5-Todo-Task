/* eslint-disable no-unused-vars */
import React from 'react'
// import "App.css";


const Header = () => {
    return (
        <>
            <div className="position-relative  mt-6">
                <img
                    src={"https://github.com/Rajganez/Landingpage/blob/main/src/Images/bg-masthead.jpg?raw=true"}
                    alt="sea background"
                    style={{ height: "300px", width: "100%" }}
                />
                <div className="position-absolute top-50 start-50 ps-5 translate-middle">
                    <div className="row">
                        <div className="text-center text-white ">
                            <h1 className="mb-5">Generate more leads with a professional landing page!

                            </h1>
                        </div>
                        <div className="row  ">
                            <div className="col gap-4 d-flex ">
                                <input
                                    type="email"
                                    style={{ width: "50%" }}
                                    className="form-control form-control-lg"
                                    placeholder='enter your email'
                                />

                                <button className="btn btn-primary disabled">Submit</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Header;
