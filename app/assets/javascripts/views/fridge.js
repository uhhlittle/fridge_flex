var FridgeView = function(fridgeModel){
  var newIngredientButton = document.querySelector("#new-ingredient-button");
  var lookForRecipesButton = document.querySelector("#look-for-recipes");
  this.newIngredientName = document.querySelector("#new-ingredient-name");
  this.newIngredientOz = document.querySelector("#new-ingredient-oz");
  this.fridgeId = document.querySelector("#fridge-id")
  this.currentIngredientList = document.querySelector("#current-ingredient-column ul.ingredient-list");
  this.recipeList = document.querySelector("#recipes-column ul.recipe-list");
  this.model = fridgeModel;
  newIngredientButton.addEventListener("click", this.addIngredient.bind(this));
  lookForRecipesButton.addEventListener("click", this.searchRecipes.bind(this));
  this.render();
}

FridgeView.prototype = {
  addIngredient: function(event){
    event.preventDefault();
    var id = this.id;
    var name = this.newIngredientName.value;
    var oz = this.newIngredientOz.value;
    var fridgeId = this.fridgeId.value;
    var ingredient = new Ingredient(id, name, oz, fridgeId);
    ingredient.save();
    this.render()
  },

  searchRecipes:  function(callback) {
    $.ajax({
      type: 'GET',
      dataType: 'json',
      url: "/get_search_result",
      context: this
    }).done(function(response) {
        console.log("got search response");
      // fridgeView = new FridgeView(this);

      fridgeView.loadRecipes(response);
      fridgeView.render();
      fridgeView.renderRecipes();

    }).fail(function(response){
      console.log("js failed to load")
    })
  },

  loadRecipes: function(response) {
    console.log("loading recipes");
    this.recipes = [];
    for(var i = 0; i < response.length; i++){
      var recipe = new Recipe(response[i].title, response[i].ingredients, response[i].image_url);
      this.recipes.push(recipe);
    }
      console.log(this.recipes);

  },

  renderRecipes: function(){
    this.recipeList.innerHTML = "";
    // console.log("clear recipes");
    for(var i = 0; i < this.recipes.length; i++){
    var recipeView = new RecipeView(this.recipes[i])
      this.recipeList.appendChild(recipeView);
    }
  },

  render: function(){
    this.currentIngredientList.innerHTML = "";
    console.log("current-ingredients");
    for(var i = 0; i < this.model.ingredients.length; i++){
      var ingredientView = new IngredientView(this.model.ingredients[i])
        this.currentIngredientList.appendChild(ingredientView);

    }

}

};
