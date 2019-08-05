const initialState = 'Welcome to the anecdotes store'

export const newNotification = (text) => {
    return {
        type: 'NEW_NOTIFICATION',
        data: text
    }
}

const notificationReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'NEW_NOTIFICATION':
            return action.data
        default:
            return state
    }
}

export default notificationReducer