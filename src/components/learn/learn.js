import React, {useState} from 'react';
import List from '../list';
import Create from './create';
import {connect} from 'react-redux';
import {deleteLearning, addLearning} from '../../store/actions/learn';

function Learn (props){

    let [learning, setLearning] = useState({designation: "", obs: ""});

    const handleChange = (event) => {
        let value = event.target.value;
        if( event.target.id === "designation" )
             setLearning({...learning, designation: value});
        else if( event.target.id === "obs" )
            setLearning({...learning, obs: value});    
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.add(learning);
    }

    const handleDelete = (id) => {
        props.delete(id);
    }

    return (
            <section className="row pt-5">
                <div className="col-md-4 p-4 text-center pl-5">
                    <List list="Learn" items={props.learnings} deleteItem={handleDelete}/>
                </div>
                <Create handleChange={handleChange} handleSubmit={handleSubmit}/>
            </section>    
        )
}

const mapStateToProps = (state) => {

    return {
        learnings: state.learn.learnings
    }

}

const mapDispatchToProps = (dispatch) => {

    return {
        delete: (id) => dispatch(deleteLearning(id)),
        add: (learning) => dispatch(addLearning(learning))
    }
    
}

export default  connect(mapStateToProps, mapDispatchToProps)(Learn);