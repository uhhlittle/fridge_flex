var Favorite = function(id, profileId, recipeId) {
  this.id = id;
  this.profileId = profileId;
  this.recipeID = recipeId;
}

Favorite.prototype = {
  fetchRecipes: function(callback) {
    $.ajax({
      type: 'GET',
      datatype: 'json',
      url: ""
    }).done
  }
}
