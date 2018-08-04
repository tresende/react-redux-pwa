const INITIAL_STATE = {
    size: 1
}

export function countReducer(state = INITIAL_STATE, action) {
    if (action.type === "ADD") {
        return {
            size: state.size + 1
        }
    }
    if (action.type === "REMOVE") {
        return {
            size: state.size - 1
        }
    }
    return state;
}