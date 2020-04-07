import React from 'react';
import List from '../list';
import Create from './create';
import {connect} from 'react-redux';

function Events(props){

        return (
            <section className="row pt-5">
                <div className="col-md-4 p-4 text-center pl-5">
                    <List list="Events" items={props.events}/>
                </div>
                <Create/>
            </section>    
        );
}


const mapStateToProps = (state) => {

    return {
        events: state.events.events
    }

}

export default connect(mapStateToProps)(Events);