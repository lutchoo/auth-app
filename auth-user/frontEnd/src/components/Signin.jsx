import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css"; 
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Signin() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate()
  axios.defaults.withCredentials = true; 
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8081/signin", values)
      .then((res) => {
        if(res.data.Status === "Succes"){
          navigate('/')
        }else{
          alert(res.data.Error);
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

        <div className="form-floating">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            onChange={e => setValues({...values, email: e.target.value})}
          />
          <label htmlForfor="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            onChange={e => setValues({...values, password: e.target.value})}
          />
          <label htmlForfor="floatingPassword">Password</label>
        </div>

        <div className="form-check text-start my-3">
          <input
            className="form-check-input"
            type="checkbox"
            value="remember-me"
            id="flexCheckDefault"
          />
          <label className="form-check-label" htmlForfor="flexCheckDefault">
            Remember me
          </label>
        </div>
        <button className="btn btn-primary w-100 py-2" type="submit">
          Sign in
        </button>
        <p className="mt-5 mb-3 text-body-secondary">© 2017–2023</p>
      </form>
    </div>
  );
}

export default Signin;
