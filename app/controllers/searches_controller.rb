class SearchesController < ApplicationController
  def get_search_result
    @fridge = current_user.profile.fridge
    # search_params = @fridge.ingredients.name each do |ingredient|
    #
    # end

    
    # @search_results = F2F.new(params[:q]).perform.results
    @search_results = FoodApi.new("black+beans+bananas").perform.results
    render json: @search_results
  end
end
