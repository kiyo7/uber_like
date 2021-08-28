import { REQUEST_STATE } from '../constants';

//stateの初期値
export const initialState = {
  fetchState: REQUEST_STATE.INITIAL,
  restaurantsList: [],
};

export const restaurantsActionTypes = {
  FETCHING: 'FETCHING',
  FETCH_SUCCESS: 'FETCH_SUCCESS',
};

export const restaurantsReducer = (state, action) => {
  switch (action.type) {
    //fetch中
    case restaurantsActionTypes.FETCHING:
      return {
        ...state,
        fetchState: REQUEST_STATE.LOADING, //loadingの状態にする
      };
    //fetch完了
    case restaurantsActionTypes.FETCH_SUCCESS:
      return {
        fetchState: REQUEST_STATE.OK, //okの状態にする
        restaurantsList: action.payload.restaurants,
      };
    default:
      throw new Error();
  }
};
