module Api
  module V1
    class LineFoodsController < ApplicationController
      before_action :set_food, only: %i(create replace)

      def index
        line_foods = LineFood.active #全てのLineFoodモデルの中から、active: trueのものを取得して、line_foodsという変数に代入している
        if line_foods.exists? #line_foodsが空かどうか？をチェック

          line_food_ids = []
          count = 0
          amount = 0

          line_foods.each do |line_food|
            line_food_ids << line_food.id # <<はpushメソッド見たいな感じ(要素を破壊的に追加)
            count += line_food[:count] #countの合計
            amount += line_food.total_amount #total_amountを合計
          end

          render json: {
            line_food_ids: line_food_ids,
            restaurant: line_foods[0].restaurant,
            count: count,
            amount: amount,
          }, status: :ok
          else
            render json: {}, status: :no_content
          end
      end

      def create
        if LineFood.active.other_restaurant(@ordered_food.restaurant.id).exists? #他店舗での仮注文がすでにある場合return
          return render json: {
            existing_restaurant: LineFood.other_restaurant(@ordered_food.restaurant.id).first.restaurant.name,
            new_restaurant: Food.find(params[:food_id]).restaurant.name,
          }, status: :not_acceptable
        end

        set_line_food(@ordered_food)

        if @line_food.save
          render json: {
            line_food: @line_food
          }, status: :created
        else
          render json: {}, status: :internal_server_error
        end
      end
        
         def replace
          LineFood.active.other_restaurant(@ordered_food.restaurant.id).each do |line_food|
            line_food.update_attribute(:active, false)
        end

        #mapとeachの違い  mapは配列を返すのに対し、eachはただ繰り返し処理を行うだけ(配列は返さない)

        set_line_food(@ordered_food)

      if @line_food.save
        render json: {
         line_food: @line_food
        }, status: :created
      else
          render json: {}, status: :internal_server_error
        end
      end

      private

      def set_food
        @ordered_food = Food.find(params[:food_id])
      end

      def set_line_food(ordered_food)
        if ordered_food.line_food.present?
          @line_food = ordered_food.line_food
          @line_food.attributes = {
            count: ordered_food.line_food.count + params[:count],
            active: true
          }
        else
          @line_food = ordered_food.build_line_food(
            count: params[:count],
            restaurant: ordered_food.restaurant,
            active: true
          )
        end
      end
    end
  end
end
