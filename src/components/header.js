import React from 'react';

function Header(){

    return (
        <header className="bg-dark py-10 px-5 row">
        
        <div className="col-12">
            <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand text-light mr-5" href="#">CRS Planner</a>
                <button className="navbar-toggler text-light" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
              
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item active mr-3">
                      <a className="nav-link text-light" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-light mr-3" href="#">Do</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-light mr-3" href="#">Buy</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-light mr-3" href="#">Events</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-light" href="#">Learn</a>
                    </li>
                  </ul>
                  <form className="form-inline my-2 my-lg-0 mx-auto">
                    <input className="form-control mr-sm-2" type="search" placeholder="Searching for..." aria-label="Search"/>
                    <button className="btn btn-outline-info my-2 my-sm-0" type="submit">Search</button>
                  </form>
                  <a id="userLink" className="text-light" href="/user">User</a>
                </div>
              </nav>
        </div>
    
    </header>
    )

}

export default Header; 