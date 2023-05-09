import "./SimpleForm.css";
import logo from "../Images/logo.jpg";

function SimpleForm() {
  return (
    <div className="parent-main">

      <div className="nav">
          <div><h1>Simple form</h1></div>
          <div>
              <img src={logo} alt="logo" width="50px" height="50px" />
          </div>
      </div>

      <div className="parent-form">
        <form className="form-div">
          <div>
            <label>UserName: </label>
            <input type="text"></input>
            <br />
            <br />
          </div>
          <div>
            <label>Password: </label>
            <input type="password"></input>
            <br />
            <br />
          </div>
          <div>
            <input className="btn" type="button" value="Submit"></input>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SimpleForm;
