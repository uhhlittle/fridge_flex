class Fridge < ActiveRecord::Base
  belongs_to :profile
  has_many :ingredients
end
