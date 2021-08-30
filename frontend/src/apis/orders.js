import axios from 'axios';
import { orders } from '../urls/index';

export const postOrder = (params) => {
  return axios
    .post(orders, {
      line_food_ids: params.line_food_ids,
    })
    .then((res) => {
      return res.data;
    })
    .catch((e) => console.error(e));
};

//ここではline_foodデータのidが複数入ったデータを期待する。(line_food_ids)
// 1つの店舗で登録された1つ以上の仮注文のデータをまとめて注文データに紐付けることができる
