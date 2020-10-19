import { ourAPI } from "../api/api";

const FETCH_REQUEST = "mainScreen/FETCH_REQUEST";
const FETCH_SUCCESS = "mainScreen/FETCH_SUCCESS";
const FETCH_FAILURE = "mainScreen/FETCH_FAILURE";

let initialState = {
  isFetching: false,
  api: [],
  error: "",
};
console.log(initialState.api);
export const fetchImagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REQUEST: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case FETCH_SUCCESS: {
      console.log("FETCH_SUCCESS");
      return {
        ...state,
        isFetching: false,
        api: action.payload,
      };
    }
    case FETCH_FAILURE: {
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};


export const fetchingRequest = () => {
  console.log("fetchingRequest");
  return {
    type: FETCH_REQUEST,
    isFetching: true,
  };
};

export const fetchingSuccess = (json) => {
  return {
    type: FETCH_SUCCESS,
    isFetching: false,
    payload: json,
  };
};

export const fetchingFailure = (error) => {
  console.log("fetchingFailure", error);
  return {
    type: FETCH_FAILURE,
    isFetching: false,
    payload: error,
  };
};


export const getPhotosThunkCreator = () => async (dispatch) => {
  let items = await ourAPI.getItems();
  dispatch(fetchingSuccess(items));
};
