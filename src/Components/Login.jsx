import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../actions";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const loginUser = (e) => {
    e.preventDefault();
    if (password.length > 7) {
      dispatch(login({ email, password }));
      if (!email && !password) {
        navigate("/");
      } else {
        navigate("/dashboard");
      }
    } else {
      alert("Please Enter Password Atleast 8");
    }
  };

  return (
    <>
      <div className="container mt-5 text-center">
        <div className="row">
          <h1>Login Form</h1>
          <form
            onSubmit={loginUser}
            className="col-12 col-md-5 col-lg-5 m-auto  mt-5"
          >
            <input
              type="email"
              className="form-control mb-2"
              placeholder="📧 Enter Your Email "
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              className="form-control mb-2"
              placeholder="🔑 Enter Your Password  "
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />

            <button title="Login" className="btn btn-primary" type="submit">
              <i className=" fa-solid fa-right-to-bracket"> Login </i>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
