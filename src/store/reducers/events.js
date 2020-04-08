const initState = {
    events: [
        {id: 1, designation: "events 1", description: "events 1 description", date: "07/04/2020"},
        {id: 2, designation: "events 2", description: "events 2 description", date: "08/04/2020"},
        {id: 3, designation: "events 3", description: "events 3 description", date: "09/04/2020"}
    ]
}

const eventReducer = (state = initState, action) => {

    let events;

    switch( action.type ){

        case "ADD_EVENT":
            events = [...state.events, action.event];
            return {
                events
            }
        case "DELETE_EVENT":
            events = state.events.filter(item => { return item.id !== action.id });
            return {
                ...state,
                events
            }
            

    }

    return state;

}

export default eventReducer;