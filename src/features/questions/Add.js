import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { logedUser } from "../users/UsersSlice";
import { addQuestion } from "./questionsSlice";
const Add = () => {
  const user = useSelector(logedUser);
  const [optionOneText, setoptionone] = useState("");
  const [optionTwoText, setoptiontwo] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <div className="container">
      <div className="card text-center mt-5 w-50  mx-auto">
        <h5 className="card-header"> Create New Question </h5>
        <div className="card-body">
          <h5 className="card-title fw-bold text-danger text-uppercase">
            Would you rather ?
          </h5>
          <p className="card-text"></p>
          <div className="input-group mb-3">
            <span className="input-group-text">option one</span>
            <input
              value={optionOneText}
              onInput={(e) => setoptionone(e.target.value)}
              type="text"
              className="form-control"
              aria-label="Amount (to the nearest dollar)"
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text">option two</span>
            <input
              value={optionTwoText}
              onInput={(e) => setoptiontwo(e.target.value)}
              type="text"
              className="form-control"
              aria-label="Amount (to the nearest dollar)"
            />
          </div>

          <button
            className=" btn btn-dark w-100"
            onClick={() => {
              dispatch(
                addQuestion({ optionOneText, optionTwoText, author: user.id })
              );
              history.push("/");
            }}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Add;
