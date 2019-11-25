import axios from "axios";

export const LOADING_START = "LOADING_START";
export const LOADING_SUCCESS = "LOADING_SUCCESS";
export const LOAIDING_FAILED = "LOAIDING_FAILED";

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
