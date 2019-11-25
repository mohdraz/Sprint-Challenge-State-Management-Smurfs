import axios from "axios";

export const LOADING_START = "LOADING_START";
export const LOADING_SUCCESS = "LOADING_SUCCESS";
export const LOAIDING_FAILED = "LOAIDING_FAILED";

export const ADD_SMURF = "ADD_SMURF";
export const UPLOADING_ERROR = "UPLOADING_ERROR";

export const fetchSmurfs = () => dispatch => {
  dispatch({ type: LOADING_START });
  axios
    .get(`http://localhost:3333/smurfs`)
    .then(res =>
      dispatch(
        // console.log("rcvd data: ", res.data)

        { type: LOADING_SUCCESS, payload: res.data }
      )
    )
    .catch(error =>
      dispatch({ type: LOAIDING_FAILED, payload: error.response })
    );
};

export const addSmurf = formInputs => dispatch => {
  axios
    .post("http://localhost:3333/smurfs", formInputs)
    .then(res => dispatch({ type: ADD_SMURF, payload: formInputs }))
    .catch(error =>
      dispatch({ type: UPLOADING_ERROR, payload: error.response })
    );
};
