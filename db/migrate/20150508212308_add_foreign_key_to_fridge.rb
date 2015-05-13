class AddForeignKeyToFridge < ActiveRecord::Migration
  def change
    add_column :fridges, :profile_id, :integer
  end
end
