import React, {  useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {  Redirect, useParams } from "react-router";
import { logedUser, selectUser } from "../users/UsersSlice";
import { getQuestion, saveAnswerandUpdate } from "./questionsSlice";

const Question = () => {
  const { id } = useParams();
  const question = useSelector(getQuestion(id));
  const author = useSelector(selectUser(question?question.author:""));
  const user = useSelector(logedUser);
  const [answer, setanswer] = useState();
  const dispatch = useDispatch();


  return (
    <div className="container">
   {  question &&author? <div className="card  mt-5 w-50  mx-auto text-white bg-dark px-4 py-2">
        <h5 className="card-header fw-bold my-3 border-light">
          <span className="text-uppercase">{author.name}</span> asks
        </h5>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={author.avatarURL}
              className="img-fluid rounded-circle "
              alt={author.name}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              {user.answers.hasOwnProperty(question.id) ? (
                <div className="card-text">
                  <h5 className="card-title">Results</h5>
                  <div className=" my-4 py-4 px-3 bg-info">
                    Would you rather {question.optionOne.text}
                    <p className="text-danger fw-bolder">
                      {question.optionOne.votes.length} votes out of
                      {question.optionOne.votes.length +
                        question.optionTwo.votes.length}
                        <span className="fw-bolder text-danger d-block">{Math.round(question.optionOne.votes.length*100/(question.optionOne.votes.length +
                        question.optionTwo.votes.length))} %</span>
                    </p>
                    {user.answers[question.id] === "optionOne" ? (
                      <span className="fw-bolder fs-5 text-dark">
                        
                        Including You
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="py-4 px-3 bg-info">
                    Would you rather {question.optionTwo.text}
                    <p className="text-danger fw-bolder">
                      {question.optionTwo.votes.length} votes out of{" "}
                      {question.optionOne.votes.length +
                        question.optionTwo.votes.length}
                        <span className="fw-bolder text-danger d-block">{Math.round(question.optionTwo.votes.length*100/(question.optionOne.votes.length +
                        question.optionTwo.votes.length))} %</span>

                    </p>
                    {user.answers[question.id] === "optionTwo" ? (
                      <span className="fw-bolder fs-5 text-dark">
                        {" "}
                        Including You
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              ) : (
                <div className="card-text">
                  <h5 className="card-title">Would you rather</h5>
                  <div className="form-check my-4 ">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="answer"
                      onClick={(e) => {
                        setanswer("optionOne");
                      }}
                    />
                    <label
                      className="form-check-label fw-bold text-info"
                      htmlFor="flexRadioDefault1"
                    >
                      {question.optionOne.text}
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="answer"
                      onClick={(e) => {
                        setanswer("optionTwo");
                      }}
                    />
                    <label
                      className="form-check-label fw-bold text-info"
                      htmlFor="flexRadioDefault2"
                    >
                      {question.optionTwo.text}
                    </label>
                  </div>
                  <button
                    className="btn btn-danger w-100 mt-2"
                    onClick={() => {
                      dispatch(
                        saveAnswerandUpdate({ authedUser: user.id, qid: id, answer })
                      );
                    }}
                  >
                    Answer
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>:<Redirect to="/404" />}
    </div>
  );
};

export default Question;
