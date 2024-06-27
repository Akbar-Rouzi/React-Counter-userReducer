export function counterReducer(state, action) {
    if(action.type === 'INCREMENT') {
        return {
            count: state.count + 1
        }
    }
    else if(action.type === 'DECREMENT') {
        return {
            count: state.count -1
        }
    }
    else if (action.type === 'RESET') {
        return {
            count: 0
        }
    }
    return state;
}