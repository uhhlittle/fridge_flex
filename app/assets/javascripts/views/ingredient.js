var IngredientView = function(ingredient){
  this.ingredient = ingredient;
  this.container = document.createElement("div");
  this.container.className = "ingredient";
  // create label for input used by in-place editing
  this.name = document.createElement("label");
  this.name.innerHTML = ingredient.name;
  this.name.htmlFor = "ingredient" + ingredient.id;
  this.container.appendChild(this.name);

  //delete button
  // var delete_button = document.createElement("button");
  // delete_button.id = "ingredient" + ingredient.id
  // var text = document.createTextNode("Delete");
  // text.className = "delete"
  // delete_button.addEventListener("click", function() {
  //   ingredient.deleteIngredient();
  // });

  var delete_button = document.createElement("button");
    delete_button.id = "ingredient" + ingredient.id
    delete_button.className = "delete"
    $("#delete_button.id").attr('value', 'Delete');

    delete_button.addEventListener("click", function() {
      ingredient.deleteIngredient();
    });

  this.name.addEventListener("click", this.editIngredient.bind(this))

  this.container.appendChild(delete_button);
  // this.container.appendChild(text);
  // this.container.appendChild(input); ----edit append needs work
  return this.container
}

IngredientView.prototype = {
  editIngredient: function(event){
    var input = document.createElement("input")
    input.value = this.name.innerHTML
    this.container.removeChild(this.name)
    this.container.appendChild(input)
    input.addEventListener("keyup", function(event){
      if (event.keyCode == 13){
        var value = input.value;
        this.ingredient.update({name:value});
        fridgeView.render();
      }
    }.bind(this) )
  }
}
