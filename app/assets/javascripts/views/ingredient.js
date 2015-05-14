var IngredientView = function(ingredient){
  this.ingredient = ingredient;
  this.container = document.createElement("div");
  this.container.className = "card";
  this.name = document.createElement("label");
  this.name.innerHTML = ingredient.name;s
  this.name.htmlFor = "ingredient" + ingredient.id;
  this.container.appendChild(this.name);

  // var input = document.createElement("input")
  // input.type = "text"
  // input.checked = card.completed
  // input.className = "finish"
  // input.id = "card" + card.id;
  // input.addEventListener("click", function(){
  //   var completed = input.checked ? true : false
  //   card.update({completed: completed});
  // })

  this.name.addEventListener("click", this.editIngredient.bind(this))
  // this.container.appendChild(input)
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
        var value = input.value
        this.ingredient.update({name:value})
        FridgeView.render()
      }
    }.bind(this) )
  }
}
