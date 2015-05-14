var Ingredient = function(id, description, completed){
  this.id = id;
  this.description = description;
  this.completed = completed;
}

Ingredient.prototype = {
  save: function(){
    $.ajax({
      type: 'POST',
      data: { ingredient: {name: this.name, oz: this.oz}},
      dataType: 'json',
      url: "/ingredients"
    }).done(function(response){
      console.log("model saved")
      trilloModel.fetchIngredients();
    }).fail(function(){
      console.log("failed to save")
    })
  },
  update: function(data){
    $.ajax({
      type: 'PUT',
      data: {card: data},
      dataType: 'json',
      url: "/ingredients/" + this.id
    }).done(function(response){
      trilloModel.fetchIngredients();
      console.log("model updated")
    }).fail(function(){
      console.log("failed to updated")
    })
  }
}
