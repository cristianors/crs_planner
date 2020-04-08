export const addEvent = (event) => {
    return {
        type: "ADD_EVENT",
        event
    }
}

export const deleteEvent = (id) => {
    return {
        type: "DELETE_EVENT",
        id
    }
}