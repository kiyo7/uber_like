import axios from 'axios';
import { restaurantsIndex } from '../urls/index';

//axiosはPromiseベースである。つまりaxiosを使う側でnew Promiseなどしなくても、非同期処理を実装することが可能

//axios.getの引数には文字列が必要(今回はurlsディレクトリのrestaurantsIndexを参照している)

//サーバーサイドのAPIを叩いて、JSON形式のデータを返す関数
export const fetchRestaurants = () => {
  return axios
    .get(restaurantsIndex)
    .then((res) => {
      return res.data;
    })
    .catch((e) => console.error(e));
};
