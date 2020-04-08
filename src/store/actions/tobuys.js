export const addToBuy = (tobuy) => {
    return {
        type: "ADD_BUY",
        tobuy
    }
}

export const deleteToBuy = (id) => {
    return {
        type: "DELETE_BUY",
        id
    }
}