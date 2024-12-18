import { GET_STUDENT_APPLICATION_FAILURE, GET_STUDENT_APPLICATION_REQUEST, GET_STUDENT_APPLICATION_SUCCESS, GET_STUDENT_APPLICATIONS_FAILURE, GET_STUDENT_APPLICATIONS_REQUEST, GET_STUDENT_APPLICATIONS_SUCCESS, GET_STUDENT_FAILURE, GET_STUDENT_REQUEST, GET_STUDENT_SUCCESS } from "./ActionTypes";



const initialState = {
    student: null,
    studentApplication: null,
    loading: false,
    error: null,
    studentApplications: [],
}

const studentReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_STUDENT_REQUEST:
        case GET_STUDENT_APPLICATION_REQUEST:
        case GET_STUDENT_APPLICATIONS_REQUEST:
            return { ...state, loading: true, error: null };
    
        case GET_STUDENT_SUCCESS:
            return { ...state, loading: false, student: action.payload }

        case GET_STUDENT_APPLICATION_SUCCESS:
            return { ...state, loading: false, studentApplication: action.payload }

        case GET_STUDENT_APPLICATIONS_SUCCESS:
            return { ...state, loading: false, studentApplications: [...action.payload]}

        case GET_STUDENT_FAILURE:
        case GET_STUDENT_APPLICATION_FAILURE:
        case GET_STUDENT_APPLICATIONS_FAILURE:
            return { ...state, loading: false, error: action.payload }

        default:
            return state;
    }
}

export default studentReducer;