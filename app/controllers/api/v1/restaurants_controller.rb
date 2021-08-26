module Api #module Apiとすることで、名前空間を指定
  module V1
    class RestaurantsController < ApplicationController
      def index
        restaurants = Restaurant.all

        render json: {
          restaurants: restaurants
        }, status: :ok
        #status: :okとすることで、リクエストが成功したこと、200 OKと一緒にデータを返すようになる
      end
    end
  end
end
