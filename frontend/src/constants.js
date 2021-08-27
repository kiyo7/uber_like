// REQUEST_STATEはAPIリクエスト中に画面がいまどういう状態なのか？を知るための状態
export const REQUEST_STATE = {
  INITIAL: 'INITIAL',
  LOADING: 'LOADING', //ロード中のスピナーを出すため
  OK: 'OK', //通信成功アラートs
};

export const HTTP_STATUS_CODE = {
  NOT_ACCEPTABLE: 406,
};
