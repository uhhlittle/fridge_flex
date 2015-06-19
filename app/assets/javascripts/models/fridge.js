var Fridge = function(){
  this.ingredients = []
  this.fetchIngredients()
  console.log("This fridge has been CREATED@!!!!")
  // $.ajax({
  //   type: 'GET',
  //   data: { fridge: {profile_id: this.profileID}},
  //   dataType: 'json',
  //   url: "/fridges"
  // }).done(function(response){
  //
  //   console.log(response);
  // }).fail(function(){
  //   console.log("failed to save")
  // });
}

Fridge.prototype = {
  save: function(){
    $.ajax({
      type: 'POST',
      data: {fridge: data},
      dataType: 'json',
      url: "/fridges"
    }).done(function(response){
      console.log("model saved");
    }).fail(function(){
      console.log("failed to save")
    })
  },
  fetchIngredients: function(callback) {
    $.ajax({
      type: 'GET',
      dataType: 'json',
      url: "/ingredients",
      context: this
    }).done(function(response) {
      // fridgeView = new FridgeView(this);
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
