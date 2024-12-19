import { CREATE_ACADEMIC_HISTORY_FAILURE, CREATE_ACADEMIC_HISTORY_REQUEST, CREATE_ACADEMIC_HISTORY_SUCCESS, CREATE_ENROLLMENT_PLAN_FAILURE, CREATE_ENROLLMENT_PLAN_REQUEST, CREATE_ENROLLMENT_PLAN_SUCCESS, CREATE_PERSONAL_INFORMATION_FAILURE, CREATE_PERSONAL_INFORMATION_REQUEST, CREATE_PERSONAL_INFORMATION_SUCCESS, CREATE_STUDENT_APPLICATION_FAILURE, CREATE_STUDENT_APPLICATION_REQUEST, CREATE_STUDENT_APPLICATION_SUCCESS, GET_ACADEMIC_HISTORY_FAILURE, GET_ACADEMIC_HISTORY_REQUEST, GET_ACADEMIC_HISTORY_SUCCESS, GET_ENROLLMENT_PLAN_FAILURE, GET_ENROLLMENT_PLAN_REQUEST, GET_ENROLLMENT_PLAN_SUCCESS, GET_PERSONAL_INFORMATION_FAILURE, GET_PERSONAL_INFORMATION_REQUEST, GET_PERSONAL_INFORMATION_SUCCESS, GET_STUDENT_APPLICATION_FAILURE, GET_STUDENT_APPLICATION_REQUEST, GET_STUDENT_APPLICATION_SUCCESS, GET_STUDENT_APPLICATIONS_FAILURE, GET_STUDENT_APPLICATIONS_REQUEST, GET_STUDENT_APPLICATIONS_SUCCESS, GET_STUDENT_FAILURE, GET_STUDENT_REQUEST, GET_STUDENT_SUCCESS } from "./ActionTypes"
import axios from "axios";
import { API_BASE_URL } from "../../Api/api";


export const getStudentProfile = (token) => async(dispatch) => {
    dispatch({ type: GET_STUDENT_REQUEST});
    try {
        const response = await axios.get(`${API_BASE_URL}/api/getStudentProfile`, {
            headers: {
                Authorization: `Bearer ${token || localStorage.getItem("jwt")}`
            }
        });
        const student = response.data;
        console.log("studentProfile ", response);
        dispatch({ type: GET_STUDENT_SUCCESS, payload: student})
    } catch (error) {
        console.log(error);
        dispatch({ type: GET_STUDENT_FAILURE, payload: error})
    }
}

export const getStudentApplication = (id) => async(dispatch) => {
    dispatch({ type: GET_STUDENT_APPLICATION_REQUEST});
    try {
        const response = await axios.get(`${API_BASE_URL}/api/${id}/getStudentApplication`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("jwt")}`
            }
        })
        const studentApplication = response.data;
        console.log("studentApplication ", response);
        dispatch({type: GET_STUDENT_APPLICATION_SUCCESS, payload: studentApplication})
    } catch (error) {
        console.log(error);
        dispatch({ type: GET_STUDENT_APPLICATION_FAILURE, payload: error})
    }
}

export const getStudentApplications = (id) => async(dispatch) => {
    dispatch({ type: GET_STUDENT_APPLICATIONS_REQUEST});
    try {
        const response = await axios.get(`${API_BASE_URL}/api/${id}/getStudentApplications`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("jwt")}`
            }
        })
        const studentApplications = response.data;
        console.log("studentApplications ", response);
        dispatch({type: GET_STUDENT_APPLICATIONS_SUCCESS, payload: studentApplications})
    } catch (error) {
        console.log(error);
        dispatch({type: GET_STUDENT_APPLICATIONS_FAILURE, payload: error})
    }
}

export const getPersonalInformation = (id) => async(dispatch) => {
    dispatch({ type: GET_PERSONAL_INFORMATION_REQUEST});
    try {
        const response = await axios.get(`${API_BASE_URL}/api/${id}/getPersonalInformation`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("jwt")}`
            }
        })
        const personalInformation = response.data;
        console.log("personalInformation ", response);
        dispatch({type: GET_PERSONAL_INFORMATION_SUCCESS, payload: personalInformation})
    } catch (error) {
        console.log(error);
        dispatch({type: GET_PERSONAL_INFORMATION_FAILURE, payload: error})
    }
}

export const getEnrollmentPlan = (id) => async(dispatch) => {
    dispatch({ type: GET_ENROLLMENT_PLAN_REQUEST});
    try {
        const response = await axios.get(`${API_BASE_URL}/api/${id}/getEnrollmentPlan`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("jwt")}`
            }
        })
        const enrollmentPlan = response.data;
        console.log("enrollmentPlan ", response);
        dispatch({type: GET_ENROLLMENT_PLAN_SUCCESS, payload: enrollmentPlan})
    } catch (error) {
        console.log(error);
        dispatch({type: GET_ENROLLMENT_PLAN_FAILURE, payload: error})
    }
}

export const getAcademicHistory = (id) => async(dispatch) => {
    dispatch({ type: GET_ACADEMIC_HISTORY_REQUEST});
    try {
        const response = await axios.get(`${API_BASE_URL}/api/${id}/getAcademicHistory`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("jwt")}`
            }
        })
        const academicHistory = response.data;
        console.log("academicHistory ", response);
        dispatch({type: GET_ACADEMIC_HISTORY_SUCCESS, payload: academicHistory})
    } catch (error) {
        console.log(error);
        dispatch({type: GET_ACADEMIC_HISTORY_FAILURE, payload: error})
    }
}

export const createApplication = (id, data) => async(dispatch) => {
    dispatch({ type: CREATE_STUDENT_APPLICATION_REQUEST});
    try {
        const response = await axios.post(`${API_BASE_URL}/api/${id}/createApplication`, data, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("jwt")}`
            }
        })
        console.log("createApplication ", response);
        dispatch({type: CREATE_STUDENT_APPLICATION_SUCCESS, payload: response})
    } catch (error) {
        console.log(error);
        dispatch({type: CREATE_STUDENT_APPLICATION_FAILURE, payload: error})
    }
}

export const createPersonalInformation = (id, data) => async(dispatch) => {
    dispatch({ type: CREATE_PERSONAL_INFORMATION_REQUEST});
    try {
        const response = await axios.post(`${API_BASE_URL}/api/${id}/createPersonalInformation`, data, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("jwt")}`
            }
        })
        console.log("createPersonalInformation ", response);
        dispatch({type: CREATE_PERSONAL_INFORMATION_SUCCESS, payload: response})
    } catch (error) {
        console.log(error);
        dispatch({type: CREATE_PERSONAL_INFORMATION_FAILURE, payload: error})
    }
}

export const createEnrollmentPlan = (id, data) => async(dispatch) => {
    dispatch({ type: CREATE_ENROLLMENT_PLAN_REQUEST});
    try {
        const response = await axios.post(`${API_BASE_URL}/api/${id}/createEnrollmentPlan`, data, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("jwt")}`
            }
        })
        console.log("createEnrollmentPlan ", response);
        dispatch({type: CREATE_ENROLLMENT_PLAN_SUCCESS, payload: response})
    } catch (error) {
        console.log(error);
        dispatch({type: CREATE_ENROLLMENT_PLAN_FAILURE, payload: error})
    }
}

export const createAcademicHistory = (id, data) => async(dispatch) => {
    dispatch({ type: CREATE_ACADEMIC_HISTORY_REQUEST});
    try {
        const response = await axios.post(`${API_BASE_URL}/api/${id}/createAcademicHistory`, data, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("jwt")}`
            }
        })
        console.log("createAcademicHistory ", response);
        dispatch({type: CREATE_ACADEMIC_HISTORY_SUCCESS, payload: response})
    } catch (error) {
        console.log(error);
        dispatch({type: CREATE_ACADEMIC_HISTORY_FAILURE, payload: error})
    }
}