export const addLearning = (learning) => {

    return {
        type: "ADD_LEARNING",
        learning
    }

}

export const deleteLearning = (id) => {

    return {
        type: "DELETE_LEARNING",
        id
    }

}