class AddDobToProfile < ActiveRecord::Migration
  def change
    add_column :profiles, :dob, :date
  end
end
