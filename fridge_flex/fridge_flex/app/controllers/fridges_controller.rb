class FridgesController < ApplicationController
def index
  @fridges = Fridge.all
end

def show
  @fridge = Fridge.find(params[:id])
end

def user_session
  @fridge = Fridge.find(params[:id])
  redirect_to fridge_path(@fridge)
end


end
