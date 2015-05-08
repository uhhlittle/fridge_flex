class Profile < ActiveRecord::Base
  belongs_to :users
  has_many :recipes
  has_one :fridge


end
