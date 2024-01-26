import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

function Register() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();  
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8081/register", values)
      .then((res) => {
        if(res.data.Status === "Succes"){
          navigate('/signin')
        }else{
          alert('error');
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="mb-3 row">
            <label htmlFor="name" className="col-sm-2 col-form-label">
              name
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                onChange={e => setValues({...values, name: e.target.value })}
                className="form-control"
                id="name"
                name="name"
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="email" className="col-sm-2 col-form-label">
              Email
            </label>
            <div className="col-sm-10">
              <input
                type="email"
                onChange={e =>
                  setValues({...values, email: e.target.value })
                }
                className="form-control"
                id="email"
                name="email"
                placeholder="email@example.com"
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="password" className="col-sm-2 col-form-label">
              Password
            </label>
            <div className="col-sm-10">
              <input
                type="password"
                onChange={e =>
                  setValues({...values, password: e.target.value })
                }
                className="form-control"
                id="password"
                name="password"
              />
            </div>
          </div>
          <div className="col-auto">
            <button  className="btn btn-primary mb-3">
              Confirm
            </button>
          </div>
        </form>
        <a href="/signin">allready register ?</a>
      </div>
    </>
  );
}

export default Register;
