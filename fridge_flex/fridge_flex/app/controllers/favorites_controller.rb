class FavoritesController < ApplicationController
  def index
    @favorites = Favorite.all
  end

  
private
def get_recipes(search)
  recipes= []#iterates through each item and sends get request to api for ingredients
  search.each do |item|
    results = Unirest.get "https://community-food2fork.p.mashape.com/get?key=#{@api_key}&rId=#{item}",
    headers:{
      "X-Mashape-Key" => "YjpQ94av6rmshlVYGUYlXQEZkQEZp1ytKoqjsnDobroeiEJWut",
      "Accept" => "application/json"
    }
    recipes << {title: results.body["recipe"]["title"], ingredients: results.body["recipe"]["ingredients"], image_url: results.body["recipe"]["image_url"]}
  end
  return recipes
end
end
