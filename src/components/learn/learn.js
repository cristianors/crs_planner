import React, {useState} from 'react';
import List from '../layout/list';
import Details from '../layout/details';
import Create from './create';
import {connect} from 'react-redux';
import {deleteLearning, addLearning} from '../../store/actions/learn';

function Learn (props){

    let [selectedID, setID] = useState(-1);
    let [learning, setLearning] = useState({designation: "", obs: ""});

    const handleChange = (event) => {
        setLearning({...learning, [event.target.id]: event.target.value});
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.add(learning);
    }

    const handleSelect = (id) => {
        setID(id);
    }

    const handleDelete = (id) => {
        props.delete(id);
    }

    return (
            <section className="row pt-5">
                <div className="col-md-4 p-4 text-center pl-5">
                    <List list="Learn" items={props.learnings} selectItem={handleSelect}/>
                </div>
                <Details item={props.learnings.find(learning => learning.id === selectedID)} deleteItem={handleDelete}/>
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