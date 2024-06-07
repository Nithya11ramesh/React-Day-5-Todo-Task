import "../App.css";
import facebook from "/facebook.svg";
import twitter from "/twitter.svg";
import instagram from "/instagram.svg";
 function Footer() {
  return (
    <>
      <div className="p-5 d-sm-flex">
        <div className="col h-100 text-center text-lg-start my-auto">
          <ul className="list-inline mb-2">
            <li className="list-inline-item">
              <a href="#">About</a>
            </li>
            <li className="list-inline-item">.</li>

            <li className="list-inline-item">
              <a href="#">Contact</a>
            </li>
            <li className="list-inline-item">.</li>
            <li className="list-inline-item">
              <a href="#">Terms of Use</a>
            </li>
            <li className="list-inline-item">.</li>
            <li className="list-inline-item">
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
          <div>© Your Website 2023. All Rights Reserved.</div>
        </div>
        <div className="col h-100 text-center my-auto ps-5 pt-5">
        <ul className="list-inline mb-0">
          <li className="list-inline-item me-4">
          <img src={facebook} alt="FB"style={{height:25}} />
          </li>
          <li className="list-inline-item me-4">
          <img src={twitter} alt="twitter"style={{height:25}} />
          </li>
          <li className="list-inline-item me-4">
          <img src={instagram} alt="instagram"style={{height:25}} />
          </li>
        </ul>
        </div>
      </div>
    </>
  );
}
export default Footer;