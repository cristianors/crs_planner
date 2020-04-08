const initState = {
    todos: [
        {id: 1, designation: "todo 1", description: "todo 1 description", date: "07/04/2020"},
        {id: 2, designation: "todo 2", description: "todo 2 description", date: "08/04/2020"},
        {id: 3, designation: "todo 3", description: "todo 3 description", date: "09/04/2020"}
    ]
}

const todoReducer = (state = initState, action) => {

    let todos

    switch( action.type ){

        case "ADD_TODO":
            todos = [...state.todos, action.todo]
            return {
                ...state,
                todos
            }

        case "DELETE_TODO": 
            todos = state.todos.filter( todo => {return todo.id !== action.id} );
            return {
                ...state,
                todos
            }
    }

    return state;
}

export default todoReducer;