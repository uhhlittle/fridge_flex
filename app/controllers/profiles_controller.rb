class ProfilesController < ApplicationController
def show
  @profile = Profile.find(params[:id])
end

def new
  @profile = Profile.new

end

def create
  @profile = current_user.create_profile(profile_params)
  @fridge = @profile.create_fridge
  redirect_to @profile
end

def edit
  @profile = Profile.find(params[:id])
end

def update
  @profile = Profile.find(params[:id])
  @profile.update(profile_params)
  redirect_to profile_path(@profile)
end

# def user_registration
#   redirect_to new_profile_path
# end

  private

  def profile_params
    return params[:profile].permit(:user_id, :first_name, :last_name, :location, :dob)
  end


end
