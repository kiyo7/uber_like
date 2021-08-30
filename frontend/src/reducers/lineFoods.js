import { REQUEST_STATE } from '../constants';

export const initialState = {
  fetchState: REQUEST_STATE.INITIAL, //取得状況
  postState: REQUEST_STATE.INITIAL, //登録状況
  lineFoodsSummary: null, //仮注文データ
};

export const lineFoodsActionTypes = {
  FETCHING: 'FETCHING',
  FETCH_SUCCESS: 'FETCH_SUCCESS',
  POSTING: 'POSTING',
  POST_SUCCESS: 'POST_SUCCESS',
};

//fetchStateは仮注文のデータの取得状況を表し、postStateは注文データの登録状況を表す

export const lineFoodsReducer = (state, action) => {
  switch (action.type) {
    case lineFoodsActionTypes.FETCHING:
      return {
        ...state,
        fetchState: REQUEST_STATE.LOADING,
      };
    case lineFoodsActionTypes.FETCH_SUCCESS:
      return {
        fetchState: REQUEST_STATE.OK,
        lineFoodsSummary: action.payload.lineFoodsSummary,
      };
    case lineFoodsActionTypes.POSTING:
      return {
        ...state,
        postState: REQUEST_STATE.LOADING,
      };
    case lineFoodsActionTypes.POST_SUCCESS:
      return {
        ...state,
        postState: REQUEST_STATE.OK,
      };
    default:
      throw new Error();
  }
};
