class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  # redirect user after login
def after_sign_in_path_for(resource)
  if current_user.profile.nil?
    new_profile_path
  else
    profile_path
  end
end

# redirect after logout
# def after_sign_out_path_for(resource_or_scope)
#   # redirect_to :root
# end

end
