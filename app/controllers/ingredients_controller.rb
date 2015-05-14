class IngredientsController < ApplicationController
  def index
    @ingredients = Ingredient.all

    respond_to do |format|
      format.html { render :index }
      format.json { render json: @ingredients }
    end
  end

  def show
    @ingredient = Ingredient.find(params[:id])
    render json: @ingredient
  end

  def create
    Rails.logger.info(params)
    @ingredient = Ingredient.create(ingredient_params)
    render json: @ingredient
  end

  def update
    @ingredient = Ingredient.find(params[:id])
    @ingredient.update(ingredient_params)
    render json: @ingredient
  end

  def destroy
    @ingredient = Ingredient.find(params[:id])
    @ingredient.destroy
    render nothing: true
  end

private
def ingredient_params
  return params[:ingredient].permit(:name, :oz)
end
end
