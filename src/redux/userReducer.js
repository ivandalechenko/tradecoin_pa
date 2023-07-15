const intialState = {
    user: {},
    isLoggedIn: false
}

const userReducer = (state = intialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                user: action.payload.user,
                isLoggedIn: action.payload.isLoggedIn
            }
        case 'LOGOUT':
            return {
                ...state,
                user: {},
                isLoggedIn: false
            }
        case 'SET_USER':
            return {
                ...state,
                user: action.payload,
            }
        default:
            return state
    }
}

export default userReducer