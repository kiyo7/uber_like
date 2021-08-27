//サーバーサイド(Rails側)で定義したURL文字列を返す定数を設定している

const DEFAULT_API_LOCALHOST = 'http://localhost:3000/api/v1';

//レストラン一覧
export const restaurantsIndex = `${DEFAULT_API_LOCALHOST}/restaurants`;

//特定のレストランの商品一覧
export const foodsIndex = (restaurantId) =>
  `${DEFAULT_API_LOCALHOST}/restaurants/${restaurantId}/foods`;

//仮注文データ
export const lineFoods = `${DEFAULT_API_LOCALHOST}/line_foods`;

//仮注文に複数の店舗の商品が混ざらないように最後に選択した店舗の商品のみにする
export const lineFoodsReplace = `${DEFAULT_API_LOCALHOST}/line_foods/replace`;

//注文確定画面
export const orders = `${DEFAULT_API_LOCALHOST}/orders`;
