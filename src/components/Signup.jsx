


const Signup = () => {
  return (
    <>
      <div className="position-relative pt-5">
      <img
                    src={"https://github.com/Rajganez/Landingpage/blob/main/src/Images/bg-masthead.jpg?raw=true"}
                    alt="sea background"
                    style={{ height: "300px", width: "100%" }}
                />
        <div className="position-absolute top-50 start-50 ps-5 translate-middle">
          <div className="row">
            <div className="row text-white ">
              <h4 className="text-wrap">Ready to get started? Sign up now!</h4>
            </div>
            <div className="row  ">
              <div className="col gap-4 d-flex ">
                <input
                  type="email"
                  style={{ width: "50%" }}
                  className="form-control form-control-lg"
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
export default Signup;