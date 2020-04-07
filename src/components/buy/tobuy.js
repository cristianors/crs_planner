import React from 'react';
import List from '../list';
import Create from './create';
import {connect} from 'react-redux';
import {deleteToBuy} from '../../store/actions/tobuys';

function ToBuy(props){

    const handleDelete = (id) => {
        props.delete(id);
    }

    return (
        <section className="row pt-5">
            <div className="col-md-4 p-4 text-center pl-5">
                <List list="To Buy" items={props.tobuys} deleteItem={handleDelete}/>
            </div>
            <Create/>
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
        delete: (id) => dispatch(deleteToBuy(id)) 
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(ToBuy);