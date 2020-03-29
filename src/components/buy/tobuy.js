import React, {Component} from 'react';
import List from '../list';
import Create from './create';

class ToBuy extends Component{

    render (){
        return (
            <section className="row pt-5">
                <div className="col-md-4 p-4 text-center pl-5">
                    <List list="To Buy"/>
                </div>
                <Create/>
            </section>    
        );

    }

}

export default ToBuy;