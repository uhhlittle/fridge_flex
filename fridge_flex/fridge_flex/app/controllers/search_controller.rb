class SearchController < ApplicationController
  def get_search_result
    # @search_results = F2F.new(params[:q]).perform.results
    @search_results = F2F.new("Chicken parm").perform.results
    render json: @search_results
  end
end
