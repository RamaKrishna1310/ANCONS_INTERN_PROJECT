import { REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS, VERIFY_PIN_FAILURE, VERIFY_PIN_REQUEST } from "./ActionTypes"


export const registerAndGeneratePin = (data) => async (dispatch) => {
    dispatch({ type: REGISTER_REQUEST });
    try {
        const response = await axios.post(`${API_BASE_URL}/auth/registerAndGeneratePin`, data);
        console.log(responese);
        dispatch({ type: REGISTER_SUCCESS})
    } catch (error) {
        console.log(error);
        dispatch({ type: REGISTER_FAILURE, payload: error})
    }
}

export const verifyPin = (data) => (dispatch) => {
    dispatch({ type: VERIFY_PIN_REQUEST });
    try {
    } catch (error) {
        console.log(error);
        dispatch({ type: VERIFY_PIN_FAILURE, payload: error})
    }
}