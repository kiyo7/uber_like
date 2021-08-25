# class モデル名でモデルを定義することができる（ここでは単数系になることに注意）
class Restaurant < ApplicationRecord
  has_many :foods
  has_many :line_foods, through: :foods

  validates :name, :fee, :time_required, presence: true
  validates :name, length: { maximum: 30 }
  validates :fee, numericality: { greater_than: 0 } #0よりも大きくなくてはならない
end
