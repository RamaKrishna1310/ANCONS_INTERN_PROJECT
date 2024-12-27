import { CREATE_ACADEMIC_HISTORY_FAILURE, CREATE_ACADEMIC_HISTORY_REQUEST, CREATE_ACADEMIC_HISTORY_SUCCESS, CREATE_ENROLLMENT_PLAN_FAILURE, CREATE_ENROLLMENT_PLAN_REQUEST, CREATE_ENROLLMENT_PLAN_SUCCESS, CREATE_PERSONAL_INFORMATION_FAILURE, CREATE_PERSONAL_INFORMATION_REQUEST, CREATE_PERSONAL_INFORMATION_SUCCESS, CREATE_STUDENT_APPLICATION_FAILURE, CREATE_STUDENT_APPLICATION_REQUEST, CREATE_STUDENT_APPLICATION_SUCCESS, GET_ACADEMIC_HISTORY_FAILURE, GET_ACADEMIC_HISTORY_REQUEST, GET_ACADEMIC_HISTORY_SUCCESS, GET_ADDRESS_FAILURE, GET_ADDRESS_REQUEST, GET_ADDRESS_SUCCESS, GET_ENROLLMENT_PLAN_FAILURE, GET_ENROLLMENT_PLAN_REQUEST, GET_ENROLLMENT_PLAN_SUCCESS, GET_PERSONAL_INFORMATION_FAILURE, GET_PERSONAL_INFORMATION_REQUEST, GET_PERSONAL_INFORMATION_SUCCESS, GET_STUDENT_APPLICATION_FAILURE, GET_STUDENT_APPLICATION_REQUEST, GET_STUDENT_APPLICATION_SUCCESS, GET_STUDENT_APPLICATIONS_FAILURE, GET_STUDENT_APPLICATIONS_REQUEST, GET_STUDENT_APPLICATIONS_SUCCESS, GET_STUDENT_FAILURE, GET_STUDENT_REQUEST, GET_STUDENT_SUCCESS } from "./ActionTypes";



const initialState = {
    student: null,
    studentApplication: null,
    loading: false,
    error: null,
    studentApplications: [],
    personalInformation: null,
    addresses: [],
    enrollmentPlan: null,
    academicHistory: [],
}

const studentReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_STUDENT_REQUEST:
        case GET_STUDENT_APPLICATION_REQUEST:
        case GET_STUDENT_APPLICATIONS_REQUEST:
        case GET_PERSONAL_INFORMATION_REQUEST:
        case GET_ENROLLMENT_PLAN_REQUEST:
        case GET_ACADEMIC_HISTORY_REQUEST:
        case GET_ADDRESS_REQUEST:
        case CREATE_STUDENT_APPLICATION_REQUEST:
        case CREATE_PERSONAL_INFORMATION_REQUEST:
        case CREATE_ENROLLMENT_PLAN_REQUEST:
        case CREATE_ACADEMIC_HISTORY_REQUEST:
            return { ...state, loading: true, error: null };
    
        case GET_STUDENT_SUCCESS:
            return { ...state, loading: false, student: action.payload }

        case GET_STUDENT_APPLICATION_SUCCESS:
            return { ...state, loading: false, studentApplication: action.payload }

        case GET_STUDENT_APPLICATIONS_SUCCESS:
            return { ...state, loading: false, studentApplications: [...action.payload]}

        case GET_PERSONAL_INFORMATION_SUCCESS:
            return { ...state, loading: false, personalInformation: action.payload}

        case GET_ADDRESS_SUCCESS:
            return { ...state, loading: false, addresses: [...action.payload]}

        case GET_ENROLLMENT_PLAN_SUCCESS:
            return { ...state, loading: false, enrollmentPlan: action.payload}

        case GET_ACADEMIC_HISTORY_SUCCESS:
            return { ...state, loading: false, academicHistory: [...action.payload]}

        case CREATE_STUDENT_APPLICATION_SUCCESS:
            return { ...state, loading: false, createdStudentApplicationResponse: action.payload}
        case CREATE_PERSONAL_INFORMATION_SUCCESS:
            return { ...state, loading: false, createdPersonalInformationResponse: action.payload}
        case CREATE_ENROLLMENT_PLAN_SUCCESS:
            return { ...state, loading: false, createdEnrollmentPlanResponse: action.payload}
        case CREATE_ACADEMIC_HISTORY_SUCCESS:
            return { ...state, loading: false, createdAcademicHistoryResponse: action.payload}

        case GET_STUDENT_FAILURE:
        case GET_STUDENT_APPLICATION_FAILURE:
        case GET_STUDENT_APPLICATIONS_FAILURE:
        case GET_PERSONAL_INFORMATION_FAILURE:
        case GET_ADDRESS_FAILURE:
        case GET_ENROLLMENT_PLAN_FAILURE:
        case GET_ACADEMIC_HISTORY_FAILURE:
        case CREATE_STUDENT_APPLICATION_FAILURE:
        case CREATE_PERSONAL_INFORMATION_FAILURE:
        case CREATE_ENROLLMENT_PLAN_FAILURE:
        case CREATE_ACADEMIC_HISTORY_FAILURE:
            return { ...state, loading: false, error: action.payload }

        default:
            return state;
    }
}

export default studentReducer;