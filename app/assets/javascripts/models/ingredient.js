var Ingredient = function(id, name, oz){
  this.id = id;
  this.name = name;
  this.oz = oz;
}

Ingredient.prototype = {
  save: function(){
    $.ajax({
      type: 'POST',
      data: { ingredient: {id: this.id, name: this.name, oz: this.oz}},
      dataType: 'json',
      url: "/ingredients"
    }).done(function(response){
      console.log("model saved")
      fridgeModel.fetchIngredients();
    }).fail(function(){
      console.log("failed to save")
    })
  },
  update: function(data){
    $.ajax({
      type: 'PUT',
      data: {ingredient: data},
      dataType: 'json',
      url: "/ingredients/" + this.id
    }).done(function(response){
      fridgeModel.fetchIngredients();
      console.log("model updated")
    }).fail(function(){
      console.log("failed to updated")
    })
  },
  deleteIngredient: function(){
    $.ajax({
      type: 'DELETE',
      data: {_method: 'delete'},
      dataType: 'json',
      url: "/ingredients/" + this.id
    }).done(function(response){
      fridgeModel.fetchIngredients();
      console.log("model deleted")
    }).fail(function(){
      fridgeModel.fetchIngredients();
      console.log("failed to delete")
    })
  }
}
