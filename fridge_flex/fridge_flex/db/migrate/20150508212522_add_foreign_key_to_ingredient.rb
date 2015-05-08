class AddForeignKeyToIngredient < ActiveRecord::Migration
  def change
    add_column :ingredients, :fridge_id, :integer
  end
end
