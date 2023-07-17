import api from "../api/api";

export const loginAction = (loginData) => async dispatch => {
    try {
        const { data } = await api.post('/users/login', loginData)

        dispatch({ type: 'LOGIN', payload: { user: data.user, isLoggedIn: true } })

        localStorage.setItem('token', data.token)

    } catch (e) {
        // throw new Error(e.response.data.message)
        throw (e.response.data.message)
    }
}

export const registrationAction = (registrationData) => async dispatch => {
    try {
        const { data } = await api.post('/users/signup', registrationData)

        localStorage.setItem('registrationToken', data.token)

    } catch (e) {
        throw (e.response.data.message)
    }
}

export const enterCodeAction = (enterCodeData) => async dispatch => {
    try {
        const { data } = await api.post('/users/enterCode', enterCodeData)

        dispatch({ type: 'LOGIN', payload: { user: data.user, isLoggedIn: true } })

        localStorage.removeItem('registrationToken')
        localStorage.setItem('token', data.token)

    } catch (e) {
        throw (e.response.data.message)
    }
}

export const checkAuthAction = () => async dispatch => {
    try {
        const { data } = await api.get('/users/checkAuth')

        dispatch({ type: 'LOGIN', payload: { user: data.user, isLoggedIn: true } })

    } catch (e) {
        throw (e.response.data.message)
    }
}

export const updateTokensAction = (tokenData) => async dispatch => {
    try {
        const { data } = await api.post('/users/updateTokens', tokenData)

        dispatch({ type: 'SET_USER', payload: data.user })

    } catch (e) {
        throw (e.response.data.message)
    }
}


export const changePasswordAction = (changePasswordData) => async dispatch => {
    try {
        const { data } = await api.post('/users/updatePassword', changePasswordData)

    } catch (e) {
        throw (e.response.data.message)
    }
}