import axios from 'axios';
import { lineFoods, lineFoodsReplace } from '../urls/index'; //仮注文のデータを叩きに行く

// 仮注文データ(商品名、個数)を登録するAPI
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

//仮注文の際に別店舗の商品データが残っていた場合に新しい店舗データに置き換える(更新する)API
export const replaceLineFoods = (params) => {
  console.log(params);
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

export const fetchLineFoods = () => {
  return axios
    .get(lineFoods)
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      throw e;
    });
};
