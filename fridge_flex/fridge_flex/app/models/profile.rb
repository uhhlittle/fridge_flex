class Profile < ActiveRecord::Base
  belongs_to :user
  has_many :recipes
  has_one :fridge


end
