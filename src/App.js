import React, {Component} from 'react';
import Header from './components/header';
import UserContext from './utilities/userContext';
import {BrowserRouter}  from 'react-router-dom';
import Routes from './route/routes';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      user: "Cristiano"  
    };
  }

  render(){

    return (
      <BrowserRouter>
      <UserContext.Provider value={{user: this.state.user}}>
      <div className="App container-fluid p-0">
          <Header></Header>
          <Routes></Routes>    
      </div>
      </UserContext.Provider>
      </BrowserRouter>
    );

  }

}


export default App;
