# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

# Load category_seeds.rb first
load Rails.root.join('db', 'seeds', 'category_seeds.rb')

# Load the rest of the seed files (excluding category_seeds.rb since it's already loaded)
Dir[Rails.root.join('db', 'seeds', '*.rb')].each do |file|
  next if file.include?('category_seeds.rb') # Skip category_seeds.rb to avoid running it twice
  load file
end
