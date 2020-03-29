import React, {Component} from 'react';
import Header from './components/header';
import List from './components/list';
//import UserContext from './utilities/userContext';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      user: "Cristiano"  
    };
  }

  render(){

    return (
      //<UserContext.Provider value={this.state.user}>
      <div className="App container-fluid p-0">
          <Header></Header>
          <section className="row text-center pt-5">
            <div className="col-md-4 p-4">
              <List/>
            </div>
            <div className="col-md-4 p-4">
              <List/>
            </div>
            <div className="col-md-4 p-4">
              <List/>
            </div>
          </section>    
      </div>
      //</UserContext.Provider>

    );

  }

}

/* function App() {
  return (
    <div className="App container-fluid p-0">
          <Header></Header>
          <section className="row text-center pt-5">
            <div className="col-md-4 p-4">
              <List/>
            </div>
            <div className="col-md-4 p-4">
              <List/>
            </div>
            <div className="col-md-4 p-4">
              <List/>
            </div>
          </section>    
    </div>
  );
} */

export default App;
