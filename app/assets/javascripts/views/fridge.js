var FridgeView = function(fridgeModel){
  var newIngredientButton = document.querySelector("#new-ingredient-button");
  this.newIngredientName = document.querySelector("#new-ingredient-name");
  this.newIngredientOz = document.querySelector("#new-ingredient-oz");
  this.currentIngredientList = document.querySelector("#current-ingredient-column ul.ingredient-list");
  this.doneList = document.querySelector("#completed-column .ingredient-list");
  this.model = fridgeModel;
  newIngredientButton.addEventListener("click", this.addIngredient.bind(this));
  console.log("the button was clicked");
  this.render();
}

FridgeView.prototype = {
  addIngredient: function(event){
    console.log("there's some stuff blocking it")
    event.preventDefault();
    var id = this.id;
    var name = this.newIngredientName.value;
    var oz = this.newIngredientOz.value;
    var ingredient = new Ingredient(null, name, oz);
    ingredient.save();
    this.render()
  },
  render: function(){
    this.currentIngredientList.innerHTML = "";
    console.log("current-ingredients");
    for(var i = 0; i < this.model.ingredients.length; i++){
      var ingredientView = new IngredientView(this.model.ingredients[i])
        this.currentIngredientList.appendChild(ingredientView);

    }
  }
}
