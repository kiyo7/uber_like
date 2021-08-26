class Food < ApplicationRecord
  belongs_to :restaurant
  belongs_to :order, optional: true
  # optional: trueはbelongs_toの外部キーのnilを許可するもの
  has_one :line_food #1対1の関係を表す
end
