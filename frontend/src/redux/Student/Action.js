import { GET_STUDENT_APPLICATION_FAILURE, GET_STUDENT_APPLICATION_REQUEST, GET_STUDENT_APPLICATION_SUCCESS, GET_STUDENT_APPLICATIONS_FAILURE, GET_STUDENT_APPLICATIONS_REQUEST, GET_STUDENT_APPLICATIONS_SUCCESS, GET_STUDENT_FAILURE, GET_STUDENT_REQUEST, GET_STUDENT_SUCCESS } from "./ActionTypes"
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
        console.log(response);
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
        console.log(response);
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