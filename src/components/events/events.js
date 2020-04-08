import React, {useState} from 'react';
import List from '../list';
import Create from './create';
import {connect} from 'react-redux';
import {deleteEvent, addEvent} from '../../store/actions/events';

function Events(props){

    let [item, setEvent] = useState({designation: "", description: "", date: ""});

    const handleChange = (event) => {
        let value = event.target.value;
        if( event.target.id === "designation" )
            setEvent({...item, designation: value});
        else if( event.target.id === "description" )
            setEvent({...item, description: value});
        else if( event.target.id === "date" )
            setEvent({...item, date: value});    
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.add(item);
    }

    const handleDelete = (id) => {
        console.log("DELETE");
        props.delete(id);

    }

    return (
        <section className="row pt-5">
            <div className="col-md-4 p-4 text-center pl-5">
                <List list="Events" items={props.events} deleteItem={handleDelete}/>
            </div>
            <Create handleChange={handleChange} handleSubmit={handleSubmit}/>
        </section>    
        );
}


const mapStateToProps = (state) => {

    return {
        events: state.events.events
    }

}


const mapDispatchToProps = (dispatch) => {

    return {
        delete: (id) => dispatch(deleteEvent(id)),
        add: (event) => dispatch(addEvent(event))
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Events);