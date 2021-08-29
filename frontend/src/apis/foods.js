import axios from 'axios';
import { foodsIndex } from '../urls/index'; //特定のレストランの商品一覧を返す関数

export const fetchFoods = (restaurantsId) => {
  return axios
    .get(foodsIndex(restaurantsId)) //引数のrestaurantsIdが999だとすればaxios.get(http://localhost:3000/api/v1/foods?restaurant_id=999)となる
    .then((res) => {
      return res.data;
    })
    .catch((e) => console.error(e));
};
