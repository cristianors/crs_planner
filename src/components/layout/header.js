import React from 'react';
import UserContext from '../../utilities/userContext';
import {Link}  from 'react-router-dom';

function Header(){

    return (
        <UserContext.Consumer>
          { context => (
          <header className="bg-dark py-10 px-5 row">
          
          <div className="col-12">
              <nav className="navbar navbar-expand-lg navbar-light">
                  <Link className="navbar-brand text-light mr-5" to="/">CRS Planner</Link>
                  <button className="navbar-toggler text-light" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                      <li className="nav-item active mr-3">
                        <Link className="nav-link text-light" to="/home">Home <span className="sr-only">(current)</span></Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link text-light mr-3" to="/do">Do</Link>
                      </li>
                      <li className="nav-item">
                          <Link className="nav-link text-light mr-3" to="/buy">Buy</Link>
                      </li>
                      <li className="nav-item">
                          <Link className="nav-link text-light mr-3" to="/events">Events</Link>
                      </li>
                      <li className="nav-item">
                          <Link className="nav-link text-light" to="/learn">Learn</Link>
                      </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0 mx-auto">
                      <input className="form-control mr-sm-2" type="search" placeholder="Searching for..." aria-label="Search"/>
                      <button className="btn btn-outline-info my-2 my-sm-0" type="submit">Search</button>
                    </form>
                    <Link id="userLink" className="text-light" to="/user">{context.user}</Link>
                  </div>
                </nav>
          </div>
      
      </header> )}
    </UserContext.Consumer>
    )

}

export default Header; 