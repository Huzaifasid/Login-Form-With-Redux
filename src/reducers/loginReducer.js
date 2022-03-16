const initialState = {

    email: '',
    password: ''

}

const loginReducer = (state = initialState, action) => {
    // console.log(action.type);
    switch (action.type) {

        case 'LOG_IN':
            const { email, password } = action.payload
            
            return {
                    ...state,
                    email: email,
                    password: password,


                }

        default: return state
    }
}
const logoutReducer = (state = initialState, action) => {
    // console.log(action.type);
    switch (action.type) {

        case 'LOG_OUT':

            return {
                ...state,
                email: '',
                password: '',


            }
        default: return state
    }
}
export { loginReducer, logoutReducer } 