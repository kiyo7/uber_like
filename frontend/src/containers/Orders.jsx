import React, { useEffect } from 'react';

//api
import { fetchLineFoods } from '../apis/line_foods';

export const Orders = () => {
  useEffect(() => {
    fetchLineFoods()
      .then((data) => console.log(data))
      .catch((e) => console.error(e));
  }, []);
  return <>注文画面</>;
};
