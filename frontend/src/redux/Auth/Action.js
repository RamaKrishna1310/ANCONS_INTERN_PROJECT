import { CREATE_PASSWORD_FAILURE, CREATE_PASSWORD_REQUEST, CREATE_PASSWORD_SUCCESS, FORGOT_PASSWORD_FAILURE, FORGOT_PASSWORD_REQUEST, FORGOT_PASSWORD_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS, RESET_PASSWORD_FAILURE, RESET_PASSWORD_REQUEST, RESET_PASSWORD_SUCCESS, VERIFY_PIN_FAILURE, VERIFY_PIN_REQUEST, VERIFY_PIN_SUCCESS } from "./ActionTypes"
import axios from "axios";
import { API_BASE_URL } from "../../Api/api";


export const registerAndGeneratePin = (data) => async (dispatch) => {
    dispatch({ type: REGISTER_REQUEST });
    try {
        const response = await axios.post(`${API_BASE_URL}/auth/registerAndGeneratePin`, data);
        const student = response.data;
        console.log(response);
        dispatch({ type: REGISTER_SUCCESS, payload: student })
    } catch (error) {
        console.log(error);
        dispatch({ type: REGISTER_FAILURE, payload: error })
    }
}

export const verifyPin = (email, data) => async (dispatch) => {
    dispatch({ type: VERIFY_PIN_REQUEST });
    try {
        const response = await axios.post(`${API_BASE_URL}/auth/${email}/verify-pin`, data);
        console.log(response);
        dispatch({ type: VERIFY_PIN_SUCCESS })
    } catch (error) {
        console.log(error);
        dispatch({ type: VERIFY_PIN_FAILURE, payload: error })
    }
}

export const createPassword = (email, data) => async (dispatch) => {
    dispatch({ type: CREATE_PASSWORD_REQUEST });
    try {
        const response = await axios.put(`${API_BASE_URL}/auth/${email}/create-password`, data);
        console.log(response);
        const student = response.data;
        if (student.jwt) localStorage.setItem("jwt", student.jwt);
        dispatch({ type: CREATE_PASSWORD_SUCCESS, payload: student })
    } catch (error) {
        console.log(error);
        dispatch({ type: CREATE_PASSWORD_FAILURE, payload: error })
    }
}

export const login = (data) => async (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });
    try {
        const response = await axios.post(`${API_BASE_URL}/auth/login`, data);
        console.log(response);
        const authData = response.data;
        if (authData.jwt) localStorage.setItem("jwt", authData.jwt);
        dispatch({ type: LOGIN_SUCCESS, payload: authData })
    } catch (error) {
        console.log(error);
        dispatch({ type: LOGIN_FAILURE, payload: error })
    }
}

export const forgotPassword = (data) => async (dispatch) => {
    dispatch({ type: FORGOT_PASSWORD_REQUEST });
    try {
        const response = await axios.post(`${API_BASE_URL}/auth/${data.email}/forgot-password`, data);
        console.log(response);
        const forgotPasswordMessage = response.data;
        dispatch({ type: FORGOT_PASSWORD_SUCCESS, payload: forgotPasswordMessage })
    } catch (error) {
        console.log(error);
        dispatch({ type: FORGOT_PASSWORD_FAILURE, payload: error })
    }
}

export const resetPassword = (data) => async (dispatch) => {
    dispatch({ type: RESET_PASSWORD_REQUEST });
    try {
        const response = await axios.put(`${API_BASE_URL}/auth/reset-password`, {}, {
            params: {
                token: data.token,
                password: data.password
            }
        }
        );
        console.log(response);
        const authData = response.data;
        if (authData.jwt) localStorage.setItem("jwt", authData.jwt);
        dispatch({ type: RESET_PASSWORD_SUCCESS, payload: authData })
    } catch (error) {
        console.log(error);
        dispatch({ type: RESET_PASSWORD_FAILURE, payload: error })
    }
}

export const logout = () => {
    return async (dispatch) => {
        dispatch({ type: LOGOUT });
        localStorage.clear();
    }
}