class FoodApi
  attr_reader :results

  def initialize(search_params)
    search_url_params = URI.escape(search_params)
    @search_url = "https://community-food2fork.p.mashape.com/search?key=d3941dc6b97d453cf43b226ba487355f&q=#{search_url_params}"
  end

  def perform
    search_results = Unirest.get(@search_url, headers: {
      "X-Mashape-Key" => "YjpQ94av6rmshlVYGUYlXQEZkQEZp1ytKoqjsnDobroeiEJWut",
      "Accept" => "application/json"
       } ).body["recipes"]
    rids = extract_rids(search_results)
    @results ||= get_recipes(rids)
    self
  end

  private

  def api_key
    "d3941dc6b97d453cf43b226ba487355f"
  end

  def headers
    {
      "X-Mashape-Key" => "YjpQ94av6rmshlVYGUYlXQEZkQEZp1ytKoqjsnDobroeiEJWut",
      "Accept" => "application/json"
    }
  end

  def extract_rids(recipes)
    recipe_ids = []
      recipes.each do |item|
      recipe_ids << item["recipe_id"]
    end
    return recipe_ids
  end

  def get_recipes(search)
    recipes= []#iterates through each item and sends get request to api for ingredients
    search.each do |item|
      results = Unirest.get "https://community-food2fork.p.mashape.com/get?key=d3941dc6b97d453cf43b226ba487355f&rId=#{item}",
      headers:{
        "X-Mashape-Key" => "YjpQ94av6rmshlVYGUYlXQEZkQEZp1ytKoqjsnDobroeiEJWut",
        "Accept" => "application/json"
      }
      recipes << {title: results.body["recipe"]["title"], ingredients: results.body["recipe"]["ingredients"], image_url: results.body["recipe"]["image_url"]}
    end
    return recipes
  end
end
