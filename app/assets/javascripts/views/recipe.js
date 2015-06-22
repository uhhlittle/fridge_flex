var RecipeView = function(recipe){
  this.recipe = recipe;

  this.container = document.createElement("div");
  console.log("this div has been created");
  this.container.className = "recipe";
  // create label for input used by in-place editing
  this.title = document.createElement("label");
  this.title.innerHTML = recipe.title;
  this.title.htmlFor = "recipe"
  this.container.appendChild(this.title);



  // this.container.appendChild(text);
  // this.container.appendChild(input); ----edit append needs work
  return this.container
}
