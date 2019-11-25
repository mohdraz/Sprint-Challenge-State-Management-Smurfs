import {
  LOADING_START,
  LOADING_SUCCESS,
  LOAIDING_FAILED,
  ADD_SMURF
} from "../actions";

const initialState = {
  smurfs: [],
  isLoading: false,
  isError: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_START:
      return {
        ...state,
        isLoading: true,
        isError: ""
      };
    case LOADING_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: "",
        smurfs: [...action.payload]
      };
    case ADD_SMURF:
      return {
        ...state,
        smurfs: [...action.payload]
      };
    default:
      return state;
  }
};

export default reducer;
