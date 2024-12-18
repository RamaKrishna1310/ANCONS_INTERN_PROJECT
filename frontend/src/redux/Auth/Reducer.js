import { CREATE_PASSWORD_FAILURE, CREATE_PASSWORD_REQUEST, CREATE_PASSWORD_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS, VERIFY_PIN_FAILURE, VERIFY_PIN_REQUEST, VERIFY_PIN_SUCCESS } from "./ActionTypes"

const initialState = {
    loading: false,
    error: null,
    jwt: null,
}

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case REGISTER_REQUEST:
        case LOGIN_REQUEST:
        case VERIFY_PIN_REQUEST:
        case CREATE_PASSWORD_REQUEST:
            return { ...state, loading: true, error: null };

        case REGISTER_SUCCESS:
        case VERIFY_PIN_SUCCESS:
            return { ...state, loading: false}

        case CREATE_PASSWORD_SUCCESS:
        case LOGIN_SUCCESS:
            return { ...state, loading: false, jwt: action.payload.jwt };
        
        case REGISTER_FAILURE:
        case LOGIN_FAILURE:
        case VERIFY_PIN_FAILURE:
        case CREATE_PASSWORD_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
                fetchingData: false,
            }

        case LOGOUT:
            localStorage.removeItem("jwt");
            return {
                ...state,
                jwt: null,
                student: null,
            }

        default:
            return state;
    }
}

export default authReducer;