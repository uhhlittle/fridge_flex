class FridgesController < ApplicationController
def index
  @fridges = current_user.profile.fridge
  respond_to do |format|
    format.html { render :index }
    format.json { render json: @fridges}
  end
end

def show
  @fridge = current_user.profile.fridge
end

def user_session
  @fridge = Fridge.find(params[:id])
  redirect_to fridge_path(@fridge)
end


end
