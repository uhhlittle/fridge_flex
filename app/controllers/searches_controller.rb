class SearchesController < ApplicationController
  def get_search_result
    @fridge = current_user.profile.fridge
    @ingredients = Ingredient.all
    @ingredient_names = []
    @ingredients.each do |ingredient|
      @ingredient_names << ingredient.name
    end
    @ingredient_string = @ingredient_names.split.join("+")
    # @search_results = F2F.new(params[:q]).perform.results
    @search_results = FoodApi.new(@ingredient_string).perform.results
    print @ingredient_string
    render json: @search_results
  end
end
