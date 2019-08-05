export const newFilter = (text) => {
    return {
        type: 'NEW',
        data: text
    }
}

const filterReducer = (state = '', action) => {
    switch (action.type) {
        case 'NEW':
            return action.data
        default:
            return state
    }
}

export default filterReducer