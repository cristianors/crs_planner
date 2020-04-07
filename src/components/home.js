import React from 'react';
import List from './list';
import {connect} from 'react-redux';

function Home(props){

    return (

        <section className="row text-center pt-5">
            <div className="col-md-4 p-4">
              <List list="To Do" deleteItem={() => {}} items={props.todos}/>
            </div>
            <div className="col-md-4 p-4">
              <List list="To Buy" deleteItem={() => {}} items={props.tobuys}/>
            </div>
            <div className="col-md-4 p-4">
              <List list="Events" deleteItem={() => {}} items={props.events}/>
            </div>
          </section>

    );

}


const mapStateToProps = (state) => {
  return {
    todos: state.todos.todos,
    tobuys: state.tobuys.tobuys,
    events: state.events.events
  }
}


export default connect(mapStateToProps)(Home);