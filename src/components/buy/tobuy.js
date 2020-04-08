import React, { useState } from 'react';
import List from '../list';
import Create from './create';
import {connect} from 'react-redux';
import {deleteToBuy, addToBuy} from '../../store/actions/tobuys';

function ToBuy(props){

    let [tobuy, setTobuy] = useState({designation: "", description: ""});

    const handleChange = (event) => {
        const value = event.target.value;
        if( event.target.id === "designation" )
            setTobuy({...tobuy, designation: value});
        else if( event.target.id === "description" )
            setTobuy({...tobuy, description: value});
        
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        if( tobuy.designation !== "" && tobuy.description !== "" )
            props.add(tobuy);
    }
    
    const handleDelete = (id) => {
        props.delete(id);
    }

    return (
        <section className="row pt-5">
            <div className="col-md-4 p-4 text-center pl-5">
                <List list="To Buy" items={props.tobuys} deleteItem={handleDelete}/>
            </div>
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