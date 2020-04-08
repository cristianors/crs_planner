import React, { useState } from 'react';
import List from '../layout/list';
import Details from '../layout/details';
import Create from './create';
import {connect} from 'react-redux';
import {deleteToBuy, addToBuy} from '../../store/actions/tobuys';

function ToBuy(props){

    let [selectedID, setID] = useState(-1);
    let [tobuy, setTobuy] = useState({designation: "", description: ""});

    const handleChange = (event) => {
            setTobuy({...tobuy, [event.target.id]: event.target.value});
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        if( tobuy.designation !== "" && tobuy.description !== "" )
            props.add(tobuy);
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
                <List list="To Buy" items={props.tobuys} selectItem={handleSelect}/>
            </div>
            <Details item={props.tobuys.find(tobuy => tobuy.id === selectedID)} deleteItem={handleDelete}/>
            <Create handleChange={handleChange} handleSubmit={handleSubmit}/>
        </section>    
    );

}


const mapStateToProps = (state) => {

    return {
        tobuys: state.tobuys.tobuys
    }

}

const mapDispatchToProps = (dispatch) => {

    return {
        delete: (id) => dispatch(deleteToBuy(id)),
        add: (tobuy) => dispatch(addToBuy(tobuy))
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(ToBuy);