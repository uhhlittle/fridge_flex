var RecipeView = function(recipe){
  this.recipe = recipe;

  this.container = document.createElement("div");
  console.log("this div has been created");
  this.container.className = "recipe";
  // create label for input used by in-place editing
  this.title = document.createElement("label");
  this.title.innerHTML = recipe.title;
  this.title.htmlFor = "recipe"


  // this.sourceUrl = document.createElement("a")
  // this.sourceUrl.className = "sourceUrl"
  // this.sourceUrl.innerHTML = recipe.sourceUrl;

  this.container.appendChild(this.title);
  // this.container.appendChild(this.sourceUrl);

  this.title.addEventListener("click", this.redirectToSource.bind(this))

  return this.container
}

RecipeView.prototype = {
  redirectToSource: function(event) {

    console.log("go to imageURl")
  }
};
