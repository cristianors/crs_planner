const initState = {
    tobuys: [
        {id: 1, designation: "tobuy 1", description: "tobuy 1 description", date: "07/04/2020"},
        {id: 2, designation: "tobuy 2", description: "tobuy 2 description", date: "08/04/2020"},
        {id: 3, designation: "tobuy 3", description: "tobuy 3 description", date: "09/04/2020"}
    ]
}

const tobuyReducer = (state = initState, action) => {

    let tobuys;

    switch( action.type ){

        case "ADD_BUY":
            tobuys = [...state.tobuys, action.tobuy];
            return {tobuys};
        case "DELETE_BUY":
            tobuys = state.tobuys.filter(item => {return item.id !== action.id});
            return {
                ...state,
                tobuys
            }

    }

    return state;

}


export default tobuyReducer;