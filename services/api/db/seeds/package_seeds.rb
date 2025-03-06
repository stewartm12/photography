family_category = Category.find_by(name: 'Individual & Family Portraits')
engagement_category = Category.find_by(name: 'Engagement & Couples Photography')
corporate_category = Category.find_by(name: 'Corporate & Commercial Photography')
product_category = Category.find_by(name: 'Product Photography')
pet_category = Category.find_by(name: 'Pet & Animal Photography')
event_category = Category.find_by(name: 'Event Photography')
graduation_category = Category.find_by(name: 'Graduation & Senior Portraits')

Package.create(name: 'Basic', price: 250, duration: 1, category: pet_category, features: [
  '30-minute session',
  '1 pet',
  '1 location',
  '10 edited digital images',
  'Online gallery',
  'Print release'
])
Package.create(name: 'Standard', price: 350, duration: 1, category: pet_category, popular: true, features: [
  '1-hour session',
  'Up to 2 pets',
  '1 location',
  '25 edited digital images',
  'Online gallery',
  'Print release',
  '1 8×10 print'
])
Package.create(name: 'Premium', price: 500, duration: 2, category: pet_category, features: [
  '2-hour session',
  'Multiple pets',
  'Up to 2 locations',
  '50 edited digital images',
  'Online gallery',
  'Print release',
  '2 8×10 prints',
  'Custom pet portrait (digital)'
])

Package.create(name: 'Basic', price: 200, duration: 1, category: graduation_category, features: [
  '1 hour session',
  '1 location',
  '1 outfit',
  '10 edited digital images',
  'Online gallery',
  'Print release'
])
Package.create(name: 'Standard', price: 350, duration: 1, popular: true, category: graduation_category, features: [
  '1-hour session',
  '2 locations',
  '2 outfits',
  '25 edited digital images',
  'Online gallery',
  'Print release',
  '5 graduation announcement cards'
])
Package.create(name: 'Deluxe', price: 500, duration: 2, category: graduation_category, features: [
  '2-hour session',
  '3 locations',
  '3 outfits',
  '50 edited digital images',
  'Online gallery',
  'Print release',
  '10 graduation announcement cards',
  '1 16×20 mounted print'
])

Package.create(name: 'Mini Session', price: 200, duration: 1, category: family_category, features: [
  '30-minute session',
  '1 location',
  'Up to 5 people',
  '10 edited digital images',
  'Online gallery',
  'Print release'
])
Package.create(name: 'Family Session', price: 350, duration: 1, category: family_category, popular: true, features: [
  '1-hour session',
  '1 location',
  'Up to 8 people',
  '25 edited digital images',
  'Online gallery',
  'Print release',
  '1 8×10 family print'
])
Package.create(name: 'Extended Family', price: 550, duration: 2, category: family_category, features: [
  '2-hour session',
  '1-2 locations',
  'Large family groups',
  '50 edited digital images',
  'Online gallery',
  'Print release',
  '1 16×20 family print',
  'Individual family groupings'
])

Package.create(name: 'Simple', price: 250, duration: 1, category: engagement_category, features: [
  '1-hour session',
  '1 location',
  '1 outfit',
  '20 edited digital images',
  'Online gallery',
  'Print release'
])
Package.create(name: 'Storyteller', price: 400, duration: 2, popular: true, category: engagement_category, features: [
  '2-hour session',
  '2 locations',
  '2 outfits',
  '40 edited digital images',
  'Online gallery',
  'Print release',
  'Engagement announcement design'
])
Package.create(name: 'Adventure', price: 600, duration: 3, category: engagement_category, features: [
  '3-hour session',
  'Multiple locations',
  'Multiple outfits',
  '60 edited digital images',
  'Online gallery',
  'Print release',
  'Engagement announcement design',
  '11×14 fine art print',
  'Sunset/sunrise option'
])


Package.create(name: 'Starter', price: 300, duration: 1, popular: false, category: product_category, features: [
  'Up to 5 products',
  'White background',
  '3 angles per product',
  'Basic retouching',
  'Online gallery',
  'Commercial usage rights'
])

Package.create(name: 'E-commerce', price: 600, duration: 2, popular: true, category: product_category, features: [
  'Up to 10 products',
  'White background + 1 styled setting',
  '5 angles per product',
  'Detailed retouching',
  'Online gallery',
  'Commercial usage rights',
  'Web-optimized images'
])

Package.create(name: 'Premium', price: 1200, duration: 3, popular: false, category: product_category, features: [
  'Up to 20 products',
  'Multiple background options',
  'Lifestyle and detail shots',
  'Advanced retouching',
  'Online gallery',
  'Commercial usage rights',
  'Web and print optimized images',
  'Social media crops'
])

Package.create(name: 'Social Event Basic', price: 500, duration: 2, popular: false, category: event_category, features: [
  '2 hours of coverage',
  '1 photographer',
  '100+ edited digital images',
  'Online gallery with download access',
  'Print release for personal use',
  'Delivered within 10 days',
  'Perfect for birthday parties, small gatherings'
])

Package.create(name: 'Celebration Standard', price: 950, duration: 4, popular: true, category: event_category, features: [
  '4 hours of coverage',
  '1 photographer',
  '200+ edited digital images',
  'Online gallery with download access',
  'Print release for personal use',
  '10 social media highlight images within 48 hours',
  'Full gallery delivered within 10 days',
  'Event timeline consultation',
  'Ideal for anniversaries, milestone celebrations, reunions'
])

Package.create(name: 'Premium Event', price: 1800, duration: 8, popular: false, category: event_category, features: [
  '8 hours of coverage',
  '2 photographers',
  '400+ edited digital images',
  'Online gallery with download access',
  'Print release for personal use',
  '15 social media highlight images within 24 hours',
  'Full gallery delivered within 10 days',
  'Event timeline consultation',
  'Custom slideshow of event highlights',
  '8×10 hardcover photo book (20 pages)',
  'Perfect for galas, fundraisers, large celebrations'
])

Package.create(name: 'Business Essential', price: 800, duration: 0, popular: true, category: corporate_category, features: [
  '4-hour session',
  'Headshots + team photos',
  'Office/workplace environment shots',
  '50 edited digital images',
  'Online gallery',
  'Commercial usage rights',
  'Quick turnaround (3 business days)'
])

Package.create(name: 'Headshots', price: 400, duration: 2, popular: false, category: corporate_category, features: [
  '2-hour session',
  'Up to 10 employees',
  '1 background/setting',
  '2 edited images per person',
  'Online gallery',
  'Commercial usage rights'
])

Package.create(name: 'Starter', price: 300, duration: 24, popular: false, category: corporate_category, features: [
  '8-hour session',
  'Comprehensive brand imagery',
  'Product/service documentation',
  'Team and individual portraits',
  '100+ edited digital images',
  'Online gallery',
  'Commercial usage rights',
  'Social media size optimizations',
  'Priority editing (48 hours)'
])
