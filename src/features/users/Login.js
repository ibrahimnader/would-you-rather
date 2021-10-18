import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { selectUsers, getAllusers, loginandGetQuestions } from "./UsersSlice";
const Login = () => {
  const users = useSelector(selectUsers);
  const [selectedUser, setselectedUser] = useState();
  const userOptions = Object.entries(users).map((user) => (
    <option value={user[0]} key={user[0]}>
      {user[1].name}
    </option>
  ));
  const dispatch = useDispatch();
  const history=useHistory()
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
            Sign in now to start using the app and answersome questions
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
            onClick={() => {
              if(selectedUser!=null){

              dispatch(loginandGetQuestions(selectedUser));
              history.push("/home");
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
