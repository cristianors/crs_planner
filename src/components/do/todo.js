import React, {useState,useEffect} from 'react';
import List from '../layout/list';
import Create from './create';
import Details from '../layout/details';
import {connect} from 'react-redux';
import {deleteTodo, addTodo} from '../../store/actions/todos';

function Todo(props){

    var [selectedID, setID] = useState(-1);
    let [todo, setTodo] = useState({id: "", designation: "", description: "", date: ""});

    //Component did Mount
    //Return Component will unmount
    useEffect(() => {
        console.log("Component did mount");
        return () => {
            console.log("Component 'Todo' will unmout!");
        };

    }, []);

    //Component did update
    useEffect(() => {});

    //On Change Event
    const handleChange = (event) => {
        setTodo({...todo, [event.target.id]: event.target.value});
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if( todo.designation !== "" && todo.description !== "" && todo.date !== "" )
           props.add(todo);
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
                    <List id={selectedID} list="To Do" items={props.todos} selectItem={handleSelect}/>
                </div>
                <Details item={props.todos.find(todo => todo.id == selectedID)} deleteItem={handleDelete}/>
                <Create handleChange={handleChange} handleSubmit={handleSubmit}/>
            </section>    
        );
}


const mapStateToProps = (state) => {

    return {
        todos: state.todos.todos
    }

}

const mapDispatchToProps = (dispatch) => {

    return {
        delete: (id) => dispatch(deleteTodo(id)),
        add: (todo) => dispatch(addTodo(todo))
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);