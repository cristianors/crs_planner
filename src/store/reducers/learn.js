const initState = {
    learnings: [
        {id: 1, designation: "learning 1", description: "learning 1 description", date: "07/04/2020"},
        {id: 2, designation: "learning 2", description: "learning 2 description", date: "08/04/2020"},
        {id: 3, designation: "learning 3", description: "learning 3 description", date: "09/04/2020"}
    ]
}


const learnReducer = (state = initState, action) => {

    switch( action.type ){

        case "ADD_LEARNING":
            console.log("Adding Learning");
            break;
        case "DELETE_LEARNING":
            console.log("Deleting Learning");
            break;
    }

    return state;
}

export default learnReducer;