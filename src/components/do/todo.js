import React, {useState,useEffect} from 'react';
import List from '../list';
import Create from './create';
import {connect} from 'react-redux';
import {deleteTodo, addTodo} from '../../store/actions/todos';

function Todo(props){

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

        const value = event.target.value

        if( event.target.id === "designation" )
            setTodo({...todo, designation: value });
        else if( event.target.id === "description" )
            setTodo({...todo, description: value });
        else if( event.target.id === "date" )
            setTodo({...todo, date: value });    
    
    }

    const handleSubmit = (event) => {
        
        if( todo.designation !== "" && todo.description !== "" && todo.date !== "" )
           props.add(todo); 

        event.preventDefault();
    }

    const handleDelete = (id) => {
        props.delete(id);    
    }

    return (
            <section className="row pt-5">
                <div className="col-md-4 p-4 text-center pl-5">
                    <List list="To Do" items={props.todos} deleteItem={handleDelete}/>
                </div>
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