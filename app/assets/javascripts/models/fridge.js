var Fridge = function(id, profileId, empty) {
  this.id = id;
  this.profileId = profileId;
  this.empty = empty;
}

Fridge.prototype = {
  save: function() {
        $.ajax({
        type: 'POST',
        data: { fridge: {id: this.id, profile_id: this.profileId, empty: this.empty}},
        dataType: 'json',
        url: "/fridge(params[:id])"
      }).done(function(response){
      console.log("model saved");
      }).fail(function(){
      console.log("failed to save")
    })
  }
}
