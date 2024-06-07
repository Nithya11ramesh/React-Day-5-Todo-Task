/* eslint-disable no-unused-vars */
import React from 'react' 

    const Features2 = () => {
      return (
        <>
          {/* First Image */}
          <div className="col d-sm-flex flex-row-reverse pt-5 ">
            <div className="col">
              <img 
              src={" https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/bg-showcase-1.jpg"}
              className="float-start"
              style={{ width: "100%" }}
           />
            </div>
            <div className="col my-auto text-wrap text-center">
              <h2>Fully Responsive Design</h2>
              <p className="mb-0 fontSize">
                When you use a theme created by Start Bootstrap, you know that the
                theme will look great on any device, whether its a phone, tablet, or
                desktop the page will behave responsively!
              </p>
            </div>
          </div>

          <div className="col d-sm-flex ">
            <div className="col">
               <img
                src={"https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/bg-showcase-2.jpg"}
                className="float-start"
                style={{ width: "100%" }}
              /> 
            </div>
            <div className="col my-auto text-wrap text-center">
              <h2>Updated For Bootstrap 5</h2>
              <p className="mb-0 fontSize"> 
                Newly improved, and full of great utility classes, Bootstrap 5 is
                leading the way in mobile responsive web development! All of the
                themes on Start Bootstrap are now using Bootstrap 5!
              </p>
            </div>
          </div>
         
          <div className="col d-sm-flex flex-row-reverse ">
            <div className="col">
               <img
                src={"https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/bg-showcase-3.jpg"}
         className="float-start"
                style={{ width: "100%" }}
              /> 
            </div>
            <div className="col my-auto text-wrap text-center ">
              <h2>Easy to Use & Customize</h2>
              <p className="mb-0 fontSize">
                Landing Page is just HTML and CSS with a splash of SCSS for users
                who demand some deeper customization options. Out of the box, just
                add your content and images, and your new landing page will be ready
                to go!
              </p>
            </div>
          </div>
        </>
      );
    };
    export default Features2;
