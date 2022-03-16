import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../actions";

const Dashbored = () => {
  const { email, password } = useSelector((state) => state.loginReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logoutUser = () => {
    dispatch(logout({ email, password }));
    navigate("/");
  };

  return (
    <>
      <div className="container mt-5 text-center">
        <div className="row">
          <h1>User Details</h1>
          <div className="col-12 col-md-5 col-lg-5 m-auto  mt-5">
            <p className="form-control mb-2">Email : {email}</p>
            <p className="form-control mb-2">Password : {password}</p>

            <button title="Logout" className="btn btn-primary" onClick={logoutUser}>
              <i class="fa-solid fa-outdent"> Logout </i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashbored;
