import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { logedUser } from "../users/UsersSlice";

import { answered, unanswered } from "./questionsSlice";

const Home = () => {
  const user = useSelector(logedUser);
  const answeredQ = useSelector(answered(user));
  const unansweredQ = useSelector(unanswered(user));
 const history= useHistory()

  return (
    <div className="container text-center w-75 mt-5 justify-content-center">
      <nav>
        <div
          className="nav nav-tabs justify-content-center"
          id="nav-tab"
          role="tablist"
        >
          <button
            className="nav-link active w-50 fw-bold text-black "
            id="nav-unanswered-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-unanswered"
            type="button"
            role="tab"
            aria-controls="nav-unanswered"
            aria-selected="false"
          >
            unanswered Questions
          </button>
          <button
            className="nav-link  w-50 fw-bold text-black "
            id="nav-answred-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-answred"
            type="button"
            role="tab"
            aria-controls="nav-answred"
            aria-selected="true"
          >
            Answered Questions
          </button>
        </div>
      </nav>
      <div className="tab-content" id="nav-tabContent">
        <div
          className="tab-pane fade mt-5 justify-content-center "
          id="nav-answred"
          role="tabpanel"
          aria-labelledby="nav-answred-tab"
        >
          {answeredQ.length>0 &&answeredQ.map((answer) => (
            <div className="card  py-4 px-3 w-50 mx-auto mb-3 text-white bg-dark" key={answer.id}>
              <h5 className="card-header text-uppercase border-danger">{answer.author} asks</h5>
              <div className="card-body">
                <h5 className="card-title fw-bold">Would you rather?</h5>
                <div className="card-text">
                <p className="text-danger fw-bold">{answer.optionOne.text}</p>
                or
                <p className="text-danger fw-bold"> {answer.optionTwo.text}</p>
                 
                </div>
                <button className="btn btn-primary" onClick={()=>history.push(`/questions/${answer.id}`)}>
                 View Poll
                </button>
              </div>
            </div>
          ))}
        </div>
        <div
          className="tab-pane fade show active mt-5"
          id="nav-unanswered"
          role="tabpanel"
          aria-labelledby="nav-unanswered-tab"
        >
          {unansweredQ.length>0 &&unansweredQ.map((answer) => (
            <div className="card  py-4 px-3 w-50 mx-auto mb-3 text-white bg-dark" key={answer.id}>
              <h5 className="card-header  border-danger text-uppercase">{answer.author} asks</h5>
              <div className="card-body">
                <h5 className="card-title fw-bold">Would you rather?</h5>
                <div className="card-text">
                <p className="text-danger fw-bold">{answer.optionOne.text}</p>
                or
                <p className="text-danger fw-bold"> {answer.optionTwo.text}</p>
                 
                </div>
                <button className="btn btn-primary" onClick={()=>history.push(`/questions/${answer.id}`)}>
                 View Poll
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
