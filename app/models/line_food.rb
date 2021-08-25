class LineFood < ApplicationRecord
  belongs_to :food
  belongs_to :restaurant
  belongs_to :order, optional: true

  validates :count, numericality: { greater_than: 0 }

  #Railsのscopeはモデルそのものや関連するオブジェクトに対するクエリを指定することができる
  scope :active, -> { where(active: true) }

  # restaurant_idが特定の店舗IDではないもの一覧を返す
  scope :other_restaurant, -> (picked_restaurant_id) { where.not(restaurant_id: picked_restaurant_id) }

  #インスタンスメソッド
  #line_foodインスタンスの合計価格をここで算出する
  def total_amount
    food.price * count
  end
end
