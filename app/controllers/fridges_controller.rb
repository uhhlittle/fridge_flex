class FridgesController < ApplicationController
# def index
#   @fridge = current_user.profile.fridge
#   respond_to do |format|
#     format.html { render :show }
#     format.json { render json: @fridge}
#   end
# end

def show
  @fridge = current_user.profile.fridge
  respond_to do |format|
    format.html { render :show }
    format.json { render json: @fridge}
  end
end



end
