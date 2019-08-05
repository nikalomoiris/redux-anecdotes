const initialState = 'Welcome to the anecdotes store'

export const showNotification = (text) => {
    return {
        type: 'SHOW_NOTIFICATION',
        data: text
    }
}

export const hideNotification = () => {
    return {
        type: 'HIDE_NOTIFICATION',
        data: null
    }
}

const notificationReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SHOW_NOTIFICATION':
            return action.data
        case 'HIDE_NOTIFICATION':
            return action.data
        default:
            return state
    }
}

export default notificationReducer