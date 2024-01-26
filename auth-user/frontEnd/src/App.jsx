import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// import Register from "./components/Register";

function App() {
  const [auth, setAuth] = useState(false);
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");

  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios.get("http://localhost:8081").then((res) => {
      if (res.data.Status === "Succes") {
        setAuth(true);
        setName(res.data.name);
        navigate("/login");
      } else {
        setAuth(false);
        setMessage(res.data.Error);
      }
    });
  });
  return (
    <>
      {auth ? (
        <div>
          <h3>you are authorized --- {name}</h3>
          {/* <button onClick={handleLogout}>logout</button> */}
        </div>
      ) : (
        <div>
          <h3>{message}</h3>
          <h3>login now</h3>
          <Link to="/signin">login</Link>

          <a href="/register">not account ?</a>
        </div>
      )}

      <div></div>
    </>
  );
}

export default App;
