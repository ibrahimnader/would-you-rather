import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router";
import { getAllQuestions } from "../questions/questionsSlice";
import { selectUsers, getAllusers, loginandGetQuestions, login, logedUser } from "./UsersSlice";
const Login = () => {
  const users = useSelector(selectUsers);
  let location = useLocation();
  const history=useHistory()

  const [selectedUser, setselectedUser] = useState();
  let { from } = location.state || { from: { pathname: "/" } };
 
 
  const userOptions = Object.entries(users).map((user) => (
    <option value={user[0]} key={user[0]}>
      {user[1].name}
    </option>
  ));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllusers());
  }, [dispatch]);
  return (
    <div className="container">
      <div className="card text-center mt-5 w-50  mx-auto">
        <h5 className="card-header">Welcome to my Would you rather project </h5>
        <div className="card-body">
          <h5 className="card-title fw-bold text-danger text-uppercase">
            Sign In
          </h5>
          <p className="card-text"> 
          {from? <p className="text-warning">You must login to access the pages</p>:""}
            Sign in now to start using the app and answer some questions
          </p>
          <select
            className="form-select form-select-lg mb-3"
            aria-label=".form-select-lg example"
            onChange={(e) => setselectedUser(e.target.value)}
          >
            <option value={null}>Select</option>
            {userOptions.map((option) => option)}
          </select>
          <button
            className=" btn btn-dark w-100"
            onClick={async () => {
              if(selectedUser!=null){

              await dispatch(login(selectedUser));
              await dispatch(getAllQuestions());
              history.replace(from);
              }
            }}
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
