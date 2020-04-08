import React, {useState} from 'react';
import List from '../layout/list';
import Details from '../layout/details';
import Create from './create';
import {connect} from 'react-redux';
import {deleteEvent, addEvent} from '../../store/actions/events';

function Events(props){

    let [selectedID, setID] = useState(-1);
    let [item, setEvent] = useState({designation: "", description: "", date: ""});

    const handleChange = (event) => {
        setEvent({...item, [event.target.id]: event.target.value});
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.add(item);
    }

    const handleSelect = (id) => {
        setID(id);
    }

    const handleDelete = (id) => {
        console.log("DELETE");
        props.delete(id);

    }

    return (
        <section className="row pt-5">
            <div className="col-md-4 p-4 text-center pl-5">
                <List list="Events" items={props.events} selectItem={handleSelect}/>
            </div>
            <Details item={props.events.find(event => event.id === selectedID)} deleteItem={handleDelete}/>
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