const intialState = {
    money: { balance: 0, profit: 0 },
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
        case 'UPDATE_BALANCE':
            return {
                ...state,
                money: { balance: action.payload.balance, profit: action.payload.profit }
            }
        default:
            return state
    }
}

export default userReducer