class FridgesController < ApplicationController
def index
  @fridges = Fridge.all
end

def show
  @fridge = Fridge.find(params[:id])

  respond_to do |format|
    format.html { render :index }
    format.json { render json: @fridge }
  end
end

def user_session
  @fridge = Fridge.find(params[:id])
  redirect_to fridge_path(@fridge)
end


end
