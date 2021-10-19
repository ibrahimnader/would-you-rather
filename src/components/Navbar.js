import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { Link,useHistory } from 'react-router-dom'
import {authed,logedUser,logout} from '../features/users/UsersSlice'
const Navbar = () => {
  const userAuthed = useSelector(authed) 
  const user = useSelector(logedUser)
  const dispatch = useDispatch()
  const history=useHistory()

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
               <Link  className="nav-link" to="/home">Home</Link>
              </li>
              <li className="nav-item">
               <Link className="nav-link"  to="/add">New Question</Link>
              </li>
              <li className="nav-item">
               <Link className="nav-link"  to="/leadrboard">Leader Board</Link>
              </li>       
            </ul>
          {
            userAuthed?     
            <ul className="mb-2 mb-lg-0">
              <img src={user.avatarURL} alt={user.name} className="img-fluid rounded-circle" width="30" height="30" />
              <span className="text-capitalize text-light ms-2 d-inline-block">{user.name}</span>
              <button className="btn btn-danger btn-sm ms-4" onClick={() =>{
              dispatch(logout());
              history.push("/login");
            }}>logout</button>

            </ul>:""
          }
            
          </div>
        </div>
      </nav>
    )
}

export default Navbar
