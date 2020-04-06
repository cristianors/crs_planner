import React, {useState} from 'react';
import Header from './components/header';
import UserContext from './utilities/userContext';
import {BrowserRouter}  from 'react-router-dom';
import Routes from './route/routes';

function App(){  

   var [user, setUser] = useState("Cristiano");

    return (
      <BrowserRouter>
      <UserContext.Provider value={{user: user}}>
      <div className="App container-fluid p-0">
          <Header></Header>
          <Routes></Routes>    
      </div>
      </UserContext.Provider>
      </BrowserRouter>
    );

}


export default App;
