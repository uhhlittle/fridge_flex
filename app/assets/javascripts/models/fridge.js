var Fridge = function(){
  this.ingredients = []
  this.fetchIngredients();
}

Fridge.prototype = {
  fetchIngredients: function(callback) {
    $.ajax({
      type: 'GET',
      dataType: 'json',
      url: "/ingredients"
    }).done(function(response) {
      fridgeModel.loadIngredients(response);
      fridgeView.render();
    }).fail(function(response){
      console.log("js failed to load")
    })
  },
  loadIngredients: function(response) {
    this.ingredients = [];
    for(var i = 0; i < response.length; i++){
      var ingredient = new Ingredient(response[i].id, response[i].name, response[i].oz);
      this.ingredients.push(ingredient);
    }
  }

}
