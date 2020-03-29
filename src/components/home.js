import React from 'react';
import List from './list';

function Home(){

    return (

        <section className="row text-center pt-5">
            <div className="col-md-4 p-4">
              <List list="To Do"/>
            </div>
            <div className="col-md-4 p-4">
              <List list="To Buy"/>
            </div>
            <div className="col-md-4 p-4">
              <List list="Events"/>
            </div>
          </section>

    );

}

export default Home;