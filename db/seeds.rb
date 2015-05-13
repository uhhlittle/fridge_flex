# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Profile.destroy_all

Profile.create ([
  {first_name: "Bob", last_name: "Dole", location: "Washington", user_id: 1, dob: 1980-03-02}
   ]);
