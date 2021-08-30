import axios from 'axios';
import { lineFoods, lineFoodsReplace } from '../urls/index'; //仮注文のデータを叩きに行く

export const postLineFoods = (params) => {
  return axios //第1引数がURL,第2引数がパラメーター
    .post(lineFoods, {
      food_id: params.foodId,
      count: params.count,
    })
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      throw e;
    });
};

export const replaceLineFoods = (params) => {
  return axios
    .put(lineFoodsReplace, {
      food_id: params.foodId,
      count: params.count,
    })
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      throw e;
    });
};

// POST: リソースの作成
// PUT: リソースの作成、あるいは更新
// PATCH:リソースの部分的な更新

// ↑ここでのリソースは仮注文のデータのことを指す
