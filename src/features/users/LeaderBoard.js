import React from 'react'
import { useSelector } from "react-redux";
import { selectUsers } from './UsersSlice';

const LeaderBoard = () => {
      const users = useSelector(selectUsers);
      let  usersSorted = Object.values(users).sort((a,b)=> (Object.keys(b.answers).length+b.questions.length)-(Object.keys(a.answers).length+a.questions.length) )

    return (
        <div className="container">
        {
            usersSorted.map(user=>
            <div className="card  mt-5 w-50  mx-auto text-white bg-dark px-4 py-2" key={user.name}>
          <h5 className="card-header fw-bold my-3 border-light">
            <span className="text-uppercase">{user.name}</span>
          </h5>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={user.avatarURL}
                className="img-fluid rounded-circle "
                alt={user.name}
              />
              <div className="py-4 px-3 text-primary fw-bolder ">
                      Total Questions 
                      <p className="text-danger fw-bolder">

                       {Object.keys(user.answers).length+user.questions.length}
                      </p>
                   
                    </div>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                    <div className="py-4 px-3 text-primary fw-bolder ">
                      Questions Answered
                      <p className="text-danger fw-bolder">

                       {Object.keys(user.answers).length}
                      </p>
                   
                    </div>
                    <div className="py-4 px-3 text-primary fw-bolder">
                    Questions Asked
                      <p className="text-danger fw-bolder">
                       {user.questions.length}
                      </p>
                   
                    </div>
                  </div>
              </div>
            </div>
          </div>)
        }
        </div>
    
      
    )
}

export default LeaderBoard
