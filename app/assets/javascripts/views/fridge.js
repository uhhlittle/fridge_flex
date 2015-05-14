var FridgeView = function(fridgeModel){
  var newIngredientButton = document.querySelector("#new-ingredient-button");
  this.newIngredientName = document.querySelector("#new-ingredient-name");
  this.newIngredientOz = document.querySelector("#new-ingredient-oz");
  this.currentIngredientList = document.querySelector("#current-ingredient-column, .ingredient-list");
  this.doneList = document.querySelector("#completed-column .ingredient-list");
  this.model = fridgeModel;
  newIngredientButton.addEventListener("click", this.addIngredient.bind(this));
  this.render();
}

FridgeView.prototype = {
  addIngredient: function(event){
    event.preventDefault();
    var name = this.newIngredientName.value;
    var oz = this.newIngredientOz.value;
    var ingredient = new Ingredient(null, name, oz);
    ingredient.save();
    this.render()
  },
  render: function(){
    this.currentIngredientList.innerHTML = ""
    this.doneList.innerHTML = ""
    for(var i = 0; i < this.model.ingredients.length; i++){
      var ingredientView = new IngredientView(this.model.ingredients[i])
      if(this.model.ingredients[i]){
        this.doneList.appendChild(ingredientView)
      }
      else{
        this.currentIngredientList.appendChild(ingredientView)
      }
    }
  }
}
