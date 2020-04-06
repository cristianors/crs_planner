import React, {useState,useEffect} from 'react';
import List from '../list';
import Create from './create';

function Todo(){

    var [item, setTodo] = useState({designation: "", description: "", date: ""});

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

        setTodo({...item, [event.target.id]: event.target.value});

    }

    const handleSubmit = (event) => {
        console.log(item);
        event.preventDefault();
    }

    return (
            <section className="row pt-5">
                <div className="col-md-4 p-4 text-center pl-5">
                    <List list="To Do"/>
                </div>
                <Create handleChange={handleChange} handleSubmit={handleSubmit}/>
            </section>    
        );
}

export default Todo;