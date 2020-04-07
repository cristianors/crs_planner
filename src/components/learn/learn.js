import React from 'react';
import List from '../list';
import Create from './create';
import {connect} from 'react-redux';

function Learn (props){

    return (
            <section className="row pt-5">
                <div className="col-md-4 p-4 text-center pl-5">
                    <List list="Learn" items={props.learnings}/>
                </div>
                <Create/>
            </section>    
        )
}

const mapStateToProps = (state) => {

    return {
        learnings: state.learn.learnings
    }

}

export default  connect(mapStateToProps)(Learn);