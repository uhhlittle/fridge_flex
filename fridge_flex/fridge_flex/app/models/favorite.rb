class Favorite < ActiveRecord::Base
  belongs_to :profile
  
  def initialize
  end
end
