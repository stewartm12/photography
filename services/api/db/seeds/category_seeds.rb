categories = [
  'Individual & Family Portraits',
  'Engagement & Couples Photography',
  'Corporate & Commercial Photography',
  'Product Photography',
  'Pet & Animal Photography',
  'Event Photography',
  'Graduation & Senior Portraits'
]

categories.each do |category_name|
  Category.find_or_create_by(name: category_name)
end

puts "Successfully eeded #{Category.count} categories."
