class SearchesController < ApplicationController
  def get_search_result
    @fridge = current_user.profile.fridge
    @ingredients = @fridge.ingredients
    @ingredient_string = [].join("+")
    @ingredients.each do |ingredient|
      @ingredient_string << ingredient.name
    end
    # @search_results = F2F.new(params[:q]).perform.results
    @search_results = FoodApi.new(@ingredient_string).perform.results
    render json: @search_results
  end
end
