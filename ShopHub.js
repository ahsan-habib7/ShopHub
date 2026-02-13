const defaultConfig = {
      store_name: "ShopHub",
      tagline: "Your One-Stop Shopping Destination",
      offer_title: "Up to 50% Off Today!",
      offer_description: "Don't miss our biggest sale of the season. Free shipping on orders over $50.",
      footer_text: "© 2024 ShopHub. All rights reserved.",
      primary_gradient_start: "#667eea",
      primary_gradient_end: "#764ba2",
      background_color: "#f8f9ff",
      surface_color: "#ffffff",
      text_color: "#1f2937",
      accent_color: "#ef4444"
    };

    // Expanded product catalog
    const products = [
      { id: 1, name: "Wireless Headphones", category: "electronics", subcategory: "audio", price: 79.99, image: "🎧", rating: 4.5, description: "Premium noise-cancelling headphones with 30-hour battery life", images: ["🎧", "🎵", "🔊"], stock: 45, brand: "AudioTech" },
      { id: 2, name: "Smart Watch", category: "electronics", subcategory: "wearables", price: 199.99, image: "⌚", rating: 4.8, description: "Fitness tracking smartwatch with heart rate monitor", images: ["⌚", "💓", "📱"], stock: 32, brand: "TechTime" },
      { id: 3, name: "4K Smart TV", category: "electronics", subcategory: "tv", price: 599.99, image: "📺", rating: 4.9, description: "55-inch 4K Ultra HD Smart TV with HDR", images: ["�������", "🎬", "🖼️"], stock: 12, brand: "ViewMax" },
      { id: 4, name: "Laptop Pro", category: "electronics", subcategory: "laptops", price: 1299.99, image: "💻", rating: 4.7, description: "15-inch professional laptop with 16GB RAM", images: ["💻", "⌨️", "🖱️"], stock: 18, brand: "CompuTech" },
      
      { id: 5, name: "Designer T-Shirt", category: "fashion", subcategory:"t-shirts", price: 29.99, image: "👕", rating: 4.3, description: "Premium cotton t-shirt with modern design", images: ["👕", "👔", "🎨"], stock: 120, brand: "StyleWear" },
      { id: 6, name: "Leather Jacket", category: "fashion", subcategory:"leathers", price: 149.99, image: "🧥", rating: 4.7, description: "Genuine leather jacket with classic cut", images: ["🧥", "🎩", "✨"], stock: 24, brand: "LeatherLux" },
      { id: 7, name: "Sneakers", category: "fashion", subcategory:"shoes", price: 119.99, image: "👟", rating: 4.6, description: "Comfortable running shoes with cushioned sole", images: ["👟", "🏃", "���"], stock: 67, brand: "RunFast" },
      { id: 8, name: "Denim Jeans", category: "fashion", subcategory:"pants", price: 69.99, image: "👖", rating: 4.4, description: "Classic fit denim jeans in dark wash", images: ["��", "✂️", "🔵"], stock: 89, brand: "DenimCo" },
      
      { id: 9, name: "Table Lamp", category: "home", subcategory:"lighting", price: 39.99, image: "💡", rating: 4.2, description: "Modern LED table lamp with adjustable brightness", images: ["💡", "🏠", "🌟"], stock: 56, brand: "LightHome" },
      { id: 10, name: "Throw Pillow", category: "home", subcategory:"furniture", price: 24.99, image: "🛋️", rating: 4.4, description: "Soft decorative pillow with geometric pattern", images: ["🛋️", "🎨", "✨"], stock: 134, brand: "CozyHome" },
      { id: 11, name: "Wall Art", category: "home", subcategory:"decor", price: 49.99, image: "🖼️", rating: 4.3, description: "Canvas wall art with abstract design", images: ["🖼️", "🎨", "🌈"], stock: 42, brand: "ArtWall" },
      { id: 12, name: "Coffee Maker", category: "home", subcategory:"kitchen", price: 89.99, image: "☕", rating: 4.6, description: "Programmable coffee maker with thermal carafe", images: ["☕", "🏠", "⏰"], stock: 28, brand: "BrewMaster" },
      
      { id: 13, name: "Sunglasses", category: "accessories", subcategory:"sunglasses", price: 59.99, image: "🕶️", rating: 4.6, description: "UV protection sunglasses with polarized lenses", images: ["🕶️", "☀️", "😎"], stock: 78, brand: "SunStyle" },
      { id: 14, name: "Backpack", category: "accessories", subcategory:"bags", price: 69.99, image: "🎒", rating: 4.5, description: "Water-resistant backpack with laptop compartment", images: ["🎒", "💼", "🎓"], stock: 91, brand: "TravelPro" },
      { id: 15, name: "Watch Band", category: "accessories", subcategory:"watches", price: 19.99, image: "⌚", rating: 4.1, description: "Silicone sport watch band in multiple colors", images: ["⌚", "🎨", "💪"], stock: 156, brand: "BandIt" },
      { id: 16, name: "Wallet", category: "accessories", subcategory:"wallets", price: 34.99, image: "👛", rating: 4.4, description: "Leather wallet with RFID protection", images: ["👛", "", "🔒"], stock: 103, brand: "SecureWallet" },
      
      { id: 17, name: "Yoga Mat", category: "sports", subcategory:"yoga", price: 29.99, image: "🧘", rating: 4.5, description: "Non-slip yoga mat with carrying strap", images: ["🧘", "💪", "🌿"], stock: 87, brand: "FitFlow" },
      { id: 18, name: "Dumbbell Set", category: "sports", subcategory:"gym", price: 89.99, image: "🏋️", rating: 4.7, description: "Adjustable dumbbell set 5-25 lbs", images: ["🏋️", "💪", "⚡"], stock: 34, brand: "PowerGym" },
      { id: 19, name: "Running Shoes", category: "sports", subcategory:"running", price: 129.99, image: "👟", rating: 4.8, description: "Lightweight running shoes with breathable mesh", images: ["👟", "🏃", "💨"], stock: 62, brand: "SpeedRun" },
      { id: 20, name: "Water Bottle", category: "sports", subcategory:"outdoor", price: 19.99, image: "💧", rating: 4.3, description: "Insulated stainless steel water bottle", images: ["💧", "❄️", "♨️"], stock: 201, brand: "HydroMax" },
      
      { id: 21, name: "Face Cream", category: "beauty", subcategory:"skincare", price: 39.99, image: "✨", rating: 4.6, description: "Anti-aging face cream with vitamin C", images: ["✨", "💆", "🌸"], stock: 112, brand: "GlowSkin" },
      { id: 22, name: "Perfume", category: "beauty", subcategory:"fragrance", price: 79.99, image: "💐", rating: 4.8, description: "Luxury eau de parfum with floral notes", images: ["💐", "🌹", ""], stock: 67, brand: "Essence" },
      { id: 23, name: "Hair Dryer", category: "beauty", subcategory:"haircare", price: 59.99, image: "💇", rating: 4.4, description: "Professional ionic hair dryer 1800W", images: ["💇", "💨", "✨"], stock: 43, brand: "StylePro" },
      { id: 24, name: "Makeup Set", category: "beauty", subcategory:"makeup", price: 49.99, image: "💄", rating: 4.5, description: "Complete makeup set with brushes", images: ["💄", "🎨", "💋"], stock: 89, brand: "BeautyBox" },
      
      { id: 25, name: "Fiction Novel", category: "books", subcategory:"fiction", price: 14.99, image: "📚", rating: 4.7, description: "Bestselling thriller novel by award-winning author", images: ["📚", "📖", "✍️"], stock: 234, brand: "BookHouse" },
      { id: 26, name: "Cookbook", category: "books", subcategory:"non-fiction", price: 24.99, image: "📗", rating: 4.6, description: "Healthy recipes cookbook with 200+ dishes", images: ["📗", "🍳", "🥗"], stock: 156, brand: "ChefBooks" },
      { id: 27, name: "Wireless Mouse", category: "electronics",subcategory:"gaming", price: 24.99, image: "🖱️", rating: 4.3, description: "Ergonomic wireless mouse with USB receiver", images: ["🖱️", "💻", "⚡"], stock: 178, brand: "ClickTech" },
      
      { id: 28, name: "Building Blocks", category: "toys", subcategory:"building", price: 34.99, image: "🧱", rating: 4.8, description: "Creative building blocks set 500 pieces", images: ["🧱", "🎨", "🏗️"], stock: 92, brand: "BuildFun" },
      { id: 29, name: "Board Game", category: "toys", subcategory:"board-games", price: 29.99, image: "🎲", rating: 4.6, description: "Strategy board game for family fun", images: ["🎲", "🎯", "👨‍👩‍👧‍👦"], stock: 67, brand: "GameNight" },
      { id: 30, name: "Remote Car", category: "toys", subcategory:"remote", price: 49.99, image: "🚗", rating: 4.5, description: "RC racing car with rechargeable battery", images: ["🚗", "🏁", "🔋"], stock: 54, brand: "SpeedToys" },
      
      { id: 31, name: "Organic Coffee", category: "food", subcategory:"beverages", price: 12.99, image: "☕", rating: 4.7, description: "Premium organic coffee beans 1lb", images: ["☕", "🌱", "😋"], stock: 312, brand: "BeanSource" },
      { id: 32, name: "Protein Bars", category: "food", subcategory:"snacks", price: 19.99, image: "🍫", rating: 4.4, description: "High protein energy bars variety pack", images: ["🍫", "💪", "🥜"], stock: 267, brand: "FitFood" },
      { id: 33, name: "Olive Oil", category: "food", subcategory:"organic", price: 16.99, image: "🫒", rating: 4.8, description: "Extra virgin olive oil cold pressed", images: ["🫒", "🌿", "👨‍🍳"], stock: 189, brand: "OliveGold" },
      
      { id: 34, name: "Car Phone Mount", category: "automotive", subcategory:"accessories", price: 19.99, image: "📱", rating: 4.5, description: "Universal car phone holder with 360° rotation", images: ["📱", "🚗", "🧭"], stock: 142, brand: "DriveSafe" },
      { id: 35, name: "Car Charger", category: "automotive", subcategory:"electronics", price: 14.99, image: "🔌", rating: 4.3, description: "Dual USB fast car charger", images: ["🔌", "⚡", "��"], stock: 203, brand: "PowerDrive" },
      { id: 36, name: "Floor Mats", category: "automotive", subcategory:"care", price: 39.99, image: "🚗", rating: 4.6, description: "All-weather rubber car floor mats set", images: ["🚗", "🧹", "💧"], stock: 78, brand: "AutoGuard" },
      
      { id: 37, name: "Dog Food", category: "pets", subcategory:"dogs", price: 34.99, image: "🐕", rating: 4.7, description: "Premium dry dog food 15lb bag", images: ["🐕", "🍖", "❤️"], stock: 156, brand: "PetNutrition" },
      { id: 38, name: "Cat Toy Set", category: "pets", subcategory:"cats", price: 15.99, image: "🐈", rating: 4.5, description: "Interactive cat toys variety pack", images: ["���", "🎾", "🎉"], stock: 234, brand: "KittyPlay" },
      { id: 39, name: "Pet Bed", category: "pets", subcategory:"pet-beds", price: 49.99, image: "🛏️", rating: 4.6, description: "Cozy pet bed with washable cover", images: ["🛏️", "🐾", "💤"], stock: 87, brand: "ComfyPet" },
      { id: 40, name: "Fish Tank", category: "pets", subcategory:"fish", price: 89.99, image: "🐠", rating: 4.4, description: "10-gallon aquarium starter kit", images: ["🐠", "🌊", "🪸"], stock: 34, brand: "AquaLife" }
    ];

    let cart = [];
    let currentFilter = 'all';
    let currentSubFilter = 'all';
    let currentPage = 'home';
    
    // Subcategory definitions for each main category
    const subcategories = {
      electronics: [
        { id: 'mobiles', name: 'Mobile Phones', icon: '📱' },
        { id: 'laptops', name: 'Laptops', icon: '💻' },
        { id: 'audio', name: 'Audio & Headphones', icon: '🎧' },
        { id: 'wearables', name: 'Smartwatches', icon: '⌚' },
        { id: 'tv', name: 'TVs & Displays', icon: '📺' },
        { id: 'cameras', name: 'Cameras', icon: '📷' },
        { id: 'gaming', name: 'Gaming', icon: '🎮' }
      ],
      fashion: [
        { id: 't-shirts', name: "T-Shirts", icon: '👕' },
        { id: 'leathers', name: "Leather Jackets", icon: '🧥' },
        { id: 'pants', name: "Denim Jeans", icon: '👖' },
        { id: 'shoes', name: 'Shoes & Footwear', icon: '👟' },
        { id: 'bags', name: 'Bags & Luggage', icon: '👜' },
        { id: 'jewelry', name: 'Jewelry', icon: '💍' }
      ],
      home: [
        { id: 'furniture', name: 'Furniture', icon: '🛋️' },
        { id: 'decor', name: 'Home Decor', icon: '🖼️' },
        { id: 'kitchen', name: 'Kitchen & Dining', icon: '🍽️' },
        { id: 'bedding', name: 'Bedding & Bath', icon: '🛏️' },
        { id: 'lighting', name: 'Lighting', icon: '💡' },
        { id: 'storage', name: 'Storage & Organization', icon: '📦' }
      ],
      accessories: [
        { id: 'sunglasses', name: 'Sunglasses', icon: '🕶️' },
        { id: 'watches', name: 'Watches', icon: '⌚' },
        { id: 'bags', name: 'Bags & Backpacks', icon: '🎒' },
        { id: 'wallets', name: 'Wallets', icon: '👛' },
        { id: 'belts', name: 'Belts', icon: '👔' }
      ],
      sports: [
        { id: 'yoga', name: 'Yoga & Fitness', icon: '🧘' },
        { id: 'gym', name: 'Gym Equipment', icon: '🏋️' },
        { id: 'running', name: 'Running & Cardio', icon: '🏃' },
        { id: 'outdoor', name: 'Outdoor & Camping', icon: '⛺' },
        { id: 'sports-wear', name: 'Sports Wear', icon: '👕' }
      ],
      beauty: [
        { id: 'skincare', name: 'Skincare', icon: '✨' },
        { id: 'makeup', name: 'Makeup', icon: '💄' },
        { id: 'fragrance', name: 'Fragrances', icon: '💐' },
        { id: 'haircare', name: 'Hair Care', icon: '💇' },
        { id: 'tools', name: 'Beauty Tools', icon: '🪒' }
      ],
      books: [
        { id: 'fiction', name: 'Fiction', icon: '📚' },
        { id: 'non-fiction', name: 'Non-Fiction', icon: '📖' },
        { id: 'educational', name: 'Educational', icon: '📕' },
        { id: 'comics', name: 'Comics & Manga', icon: '📙' },
        { id: 'magazines', name: 'Magazines', icon: '📰' }
      ],
      toys: [
        { id: 'building', name: 'Building & Construction', icon: '🧱' },
        { id: 'board-games', name: 'Board Games', icon: '🎲' },
        { id: 'remote', name: 'Remote Control', icon: '🚗' },
        { id: 'educational-toys', name: 'Educational Toys', icon: '🎓' },
        { id: 'outdoor-toys', name: 'Outdoor Play', icon: '⚽' }
      ],
      food: [
        { id: 'beverages', name: 'Beverages', icon: '☕' },
        { id: 'snacks', name: 'Snacks', icon: '🍿' },
        { id: 'organic', name: 'Organic', icon: '🌱' },
        { id: 'frozen', name: 'Frozen Foods', icon: '🧊' },
        { id: 'pantry', name: 'Pantry Staples', icon: '🫒' }
      ],
      automotive: [
        { id: 'accessories', name: 'Car Accessories', icon: '🚗' },
        { id: 'parts', name: 'Auto Parts', icon: '🔧' },
        { id: 'electronics', name: 'Car Electronics', icon: '📱' },
        { id: 'care', name: 'Car Care', icon: '🧽' }
      ],
      pets: [
        { id: 'dogs', name: 'Dogs', icon: '🐕' },
        { id: 'cats', name: 'Cats', icon: '🐈' },
        { id: 'fish', name: 'Fish & Aquariums', icon: '🐠' },
        { id: 'birds', name: 'Birds', icon: '🐦' },
        { id: 'small-pets', name: 'Small Pets', icon: '🐹' },
        { id: 'pet-beds', name: 'Pet Beds', icon: '🛏️' }
      ]
    };

    // Render product card HTML
    function createProductCard(product) {
      return `
        <div class="product-card rounded-3xl p-6 cursor-pointer" data-product-id="${product.id}" style="background: ${defaultConfig.surface_color}; box-shadow: 0 4px 20px rgba(0,0,0,0.08);">
          <div class="text-6xl mb-4 text-center">${product.image}</div>
          <div class="mb-2">
            <span class="text-xs font-semibold px-3 py-1 rounded-full" style="background: ${defaultConfig.primary_gradient_start}; color: white; opacity: 0.8;">${product.brand}</span>
          </div>
          <h4 class="text-lg font-bold mb-2" style="color: ${defaultConfig.text_color};">${product.name}</h4>
          <div class="flex items-center mb-3">
            <span class="text-yellow-400 text-sm mr-2">${'⭐'.repeat(Math.floor(product.rating))}</span>
            <span class="text-gray-500 text-sm">${product.rating}</span>
            <span class="ml-auto text-xs text-gray-500">${product.stock} in stock</span>
          </div>
          <div class="flex items-center justify-between">
            <span class="text-2xl font-bold" style="color: ${defaultConfig.primary_gradient_start};">$${product.price}</span>
            <button class="add-to-cart-btn px-4 py-2 rounded-xl font-semibold text-sm transition-all hover:scale-105" data-id="${product.id}" style="background: linear-gradient(135deg, ${defaultConfig.primary_gradient_start} 0%, ${defaultConfig.primary_gradient_end} 100%); color: white;">
              👁️ View Details
            </button>
          </div>
        </div>
      `;
    }

    // Render featured products (2 from each category with sliding)
    function renderFeaturedProducts() {
      const categories = ['electronics', 'fashion', 'home', 'accessories', 'sports', 'beauty', 'books', 'toys'];
      const featuredGrid = document.getElementById('featured-products-grid');
      
      const categoryNames = {
        electronics: 'Electronics',
        fashion: 'Fashion',
        home: 'Home & Living',
        accessories: 'Accessories',
        sports: 'Sports & Fitness',
        beauty: 'Beauty & Care',
        books: 'Books & Media',
        toys: 'Toys & Games'
      };
      
      const categoryIcons = {
        electronics: '⚡',
        fashion: '👗',
        home: '🏠',
        accessories: '💎',
        sports: '⚽',
        beauty: '💄',
        books: '📚',
        toys: '���'
      };
      
      const categoryColors = {
        electronics: '#3b82f6',
        fashion: '#ec4899',
        home: '#10b981',
        accessories: '#f59e0b',
        sports: '#ef4444',
        beauty: '#8b5cf6',
        books: '#06b6d4',
        toys: '#f97316'
      };
      
      featuredGrid.innerHTML = categories.map(category => {
        const categoryProducts = products.filter(p => p.category === category);
        if (categoryProducts.length === 0) return '';
        
        const carouselId = `carousel-${category}`;
        
        return `
          <div class="mb-12">
            <div class="flex items-center justify-between mb-6">
              <div class="flex items-center space-x-3">
                <div class="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl float-animation" style="background: linear-gradient(135deg, ${categoryColors[category]}, ${categoryColors[category]}dd); box-shadow: 0 4px 16px ${categoryColors[category]}40;">
                  ${categoryIcons[category]}
                </div>
                <h4 class="text-2xl font-bold" style="color: ${defaultConfig.text_color};">${categoryNames[category]}</h4>
              </div>
              <div class="flex items-center space-x-2">
                <button class="carousel-prev-btn w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed" data-carousel="${carouselId}" style="background: white; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1f2937" stroke-width="2.5">
                    <path d="M15 18l-6-6 6-6"/>
                  </svg>
                </button>
                <button class="carousel-next-btn w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed" data-carousel="${carouselId}" style="background: white; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1f2937" stroke-width="2.5">
                    <path d="M9 18l6-6-6-6"/>
                  </svg>
                </button>
              </div>
            </div>
            <div class="carousel-container relative overflow-hidden rounded-3xl" id="${carouselId}" style="padding: 4px;">
              <div class="carousel-track flex transition-transform duration-500 ease-out" style="transform: translateX(0px); gap: 1.5rem;">
                ${categoryProducts.map(product => `
                  <div class="carousel-item flex-shrink-0" style="width: calc(50% - 0.75rem);">
                    ${createProductCard(product)}
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        `;
      }).join('');
      
      attachProductCardListeners();
      initializeCarousels();
    }
    
    // Initialize carousel functionality - always shows 2 items, slides by 2
    const carouselStates = {};
    
    function initializeCarousels() {
      document.querySelectorAll('.carousel-container').forEach(container => {
        const id = container.id;
        const track = container.querySelector('.carousel-track');
        const items = track.querySelectorAll('.carousel-item');
        
        carouselStates[id] = { 
          currentIndex: 0,
          totalItems: items.length,
          itemsPerView: 2,
          maxIndex: Math.max(0, Math.ceil(items.length / 2) - 1)
        };
        
        updateCarouselButtons(id);
      });
      
      // Prev buttons
      document.querySelectorAll('.carousel-prev-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const carouselId = btn.dataset.carousel;
          scrollCarousel(carouselId, -1);
        });
      });
      
      // Next buttons
      document.querySelectorAll('.carousel-next-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const carouselId = btn.dataset.carousel;
          scrollCarousel(carouselId, 1);
        });
      });
    }
    
    function scrollCarousel(carouselId, direction) {
      const state = carouselStates[carouselId];
      const container = document.getElementById(carouselId);
      const track = container.querySelector('.carousel-track');
      
      state.currentIndex += direction;
      state.currentIndex = Math.max(0, Math.min(state.currentIndex, state.maxIndex));
      
      // Slide by 2 items (100% of container width)
      const translateX = -(state.currentIndex * 100);
      track.style.transform = `translateX(${translateX}%)`;
      
      updateCarouselButtons(carouselId);
    }
    
    function updateCarouselButtons(carouselId) {
      const state = carouselStates[carouselId];
      const prevBtn = document.querySelector(`button.carousel-prev-btn[data-carousel="${carouselId}"]`);
      const nextBtn = document.querySelector(`button.carousel-next-btn[data-carousel="${carouselId}"]`);
      
      if (prevBtn) {
        prevBtn.disabled = state.currentIndex === 0;
      }
      
      if (nextBtn) {
        nextBtn.disabled = state.currentIndex === state.maxIndex;
      }
    }

    // Render all products with filter
    function renderAllProducts(category = 'all', subcategory = 'all') {
      const grid = document.getElementById('all-products-grid');
      let filteredProducts = products;
      
      // Filter by main category
      if (category !== 'all') {
        filteredProducts = filteredProducts.filter(p => p.category === category);
      }
      
      // Filter by subcategory
      if (subcategory !== 'all') {
        filteredProducts = filteredProducts.filter(p => p.subcategory === subcategory);
      }
      
      if (filteredProducts.length === 0) {
        grid.innerHTML = `
          <div class="col-span-full text-center py-20">
            <div class="text-6xl mb-4">🔍</div>
            <h3 class="text-2xl font-bold mb-2" style="color: #1f2937;">No products found</h3>
            <p class="text-gray-600">Try selecting a different filter</p>
          </div>
        `;
      } else {
        grid.innerHTML = filteredProducts.map(product => createProductCard(product)).join('');
        attachProductCardListeners();
      }
    }
    
    // Show subcategory filters
    function showSubFilters(category) {
      const subfilterSection = document.getElementById('subfilter-section');
      const subfilterButtons = document.getElementById('subfilter-buttons');
      const subfilterTitle = document.getElementById('subfilter-title');
      
      if (category === 'all' || !subcategories[category]) {
        subfilterSection.classList.add('hidden');
        currentSubFilter = 'all';
        return;
      }
      
      const categoryNames = {
        electronics: 'Electronics',
        fashion: 'Fashion',
        home: 'Home & Living',
        accessories: 'Accessories',
        sports: 'Sports & Fitness',
        beauty: 'Beauty & Care',
        books: 'Books & Media',
        toys: 'Toys & Games',
        food: 'Food & Grocery',
        automotive: 'Automotive',
        pets: 'Pet Supplies'
      };
      
      subfilterTitle.textContent = `${categoryNames[category]} - Filter by Type`;
      
      const subs = subcategories[category];
      subfilterButtons.innerHTML = `
        <button class="subfilter-btn px-4 py-2 rounded-xl font-semibold text-sm transition-all hover:scale-105" data-subcategory="all" style="background: linear-gradient(135deg, ${defaultConfig.primary_gradient_start} 0%, ${defaultConfig.primary_gradient_end} 100%); color: white; box-shadow: 0 2px 8px rgba(102, 126, 234, 0.3);">
          All ${categoryNames[category]}
        </button>
        ${subs.map(sub => `
          <button class="subfilter-btn px-4 py-2 rounded-xl font-semibold text-sm transition-all hover:scale-105" data-subcategory="${sub.id}" style="background: white; color: #1f2937; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <span class="flex items-center space-x-2">
              <span>${sub.icon}</span>
              <span>${sub.name}</span>
            </span>
          </button>
        `).join('')}
      `;
      
      subfilterSection.classList.remove('hidden');
      currentSubFilter = 'all';
      
      // Add event listeners to subfilter buttons
      document.querySelectorAll('.subfilter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const subcategory = btn.dataset.subcategory;
          currentSubFilter = subcategory;
          
          // Update active state
          document.querySelectorAll('.subfilter-btn').forEach(b => {
            if (b === btn) {
              b.style.background = `linear-gradient(135deg, ${defaultConfig.primary_gradient_start} 0%, ${defaultConfig.primary_gradient_end} 100%)`;
              b.style.color = 'white';
              b.style.boxShadow = `0 2px 8px rgba(102, 126, 234, 0.3)`;
            } else {
              b.style.background = 'white';
              b.style.color = defaultConfig.text_color;
              b.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
            }
          });
          
          renderAllProducts(currentFilter, subcategory);
        });
      });
    }

    // Attach event listeners to product cards
    function attachProductCardListeners() {
      // First, attach add to cart listeners
      document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          e.preventDefault();
          const productId = parseInt(btn.dataset.id);
          addToCart(productId);
        });
      });
      
      // Then attach card click listeners (excluding add to cart button area)
      document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('click', (e) => {
          // Don't open modal if clicking the add to cart button
          if (e.target.classList.contains('add-to-cart-btn') || e.target.closest('.add-to-cart-btn')) {
            return;
          }
          const productId = parseInt(card.dataset.productId);
          openProductModal(productId);
        });
      });
    }

    // Add to cart
    function addToCart(productId) {
      const product = products.find(p => p.id === productId);
      if (!product) return;
      
      const existingItem = cart.find(item => item.id === productId);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        cart.push({ ...product, quantity: 1 });
      }
      
      updateCartDisplay();
      showToast('Added to cart!');
    }

    // Update cart display
    function updateCartDisplay() {
      const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
      document.getElementById('cart-count').textContent = totalItems;
      
      const cartItemsContainer = document.getElementById('cart-items-container');
      
      if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
          <div class="text-center py-12">
            <div class="text-6xl mb-4">🛒</div>
            <p class="text-gray-600">Your cart is empty</p>
          </div>
        `;
      } else {
        cartItemsContainer.innerHTML = cart.map(item => `
          <div class="mb-4 pb-4 border-b border-gray-200">
            <div class="flex items-start space-x-4">
              <div class="text-4xl">${item.image}</div>
              <div class="flex-1">
                <h4 class="font-bold mb-1" style="color: ${defaultConfig.text_color};">${item.name}</h4>
                <p class="text-sm text-gray-500 mb-2">$${item.price}</p>
                <div class="flex items-center space-x-3">
                  <button class="decrease-qty w-8 h-8 rounded-lg flex items-center justify-center hover:bg-gray-100" data-id="${item.id}" style="border: 1px solid #e5e7eb;">-</button>
                  <span class="font-semibold">${item.quantity}</span>
                  <button class="increase-qty w-8 h-8 rounded-lg flex items-center justify-center hover:bg-gray-100" data-id="${item.id}" style="border: 1px solid #e5e7eb;">+</button>
                  <button class="remove-item ml-auto text-red-500 hover:text-red-700 font-semibold text-sm" data-id="${item.id}">Remove</button>
                </div>
              </div>
            </div>
          </div>
        `).join('');
        
        // Add event listeners for cart actions
        document.querySelectorAll('.increase-qty').forEach(btn => {
          btn.addEventListener('click', () => {
            const id = parseInt(btn.dataset.id);
            const item = cart.find(i => i.id === id);
            if (item) {
              item.quantity++;
              updateCartDisplay();
            }
          });
        });
        
        document.querySelectorAll('.decrease-qty').forEach(btn => {
          btn.addEventListener('click', () => {
            const id = parseInt(btn.dataset.id);
            const item = cart.find(i => i.id === id);
            if (item && item.quantity > 1) {
              item.quantity--;
              updateCartDisplay();
            }
          });
        });
        
        document.querySelectorAll('.remove-item').forEach(btn => {
          btn.addEventListener('click', () => {
            const id = parseInt(btn.dataset.id);
            cart = cart.filter(i => i.id !== id);
            updateCartDisplay();
          });
        });
      }
      
      // Update totals
      const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      document.getElementById('cart-subtotal').textContent = `$${subtotal.toFixed(2)}`;
      document.getElementById('cart-total').textContent = `$${subtotal.toFixed(2)}`;
    }

    // Show toast notification
    function showToast(message) {
      const toast = document.createElement('div');
      toast.textContent = message;
      toast.style.cssText = 'position: fixed; top: 100px; left: 50%; transform: translateX(-50%); background: linear-gradient(135deg, #10b981 0%, #059669 100%); color: white; padding: 12px 24px; border-radius: 12px; font-weight: bold; box-shadow: 0 6px 20px rgba(16, 185, 129, 0.4); z-index: 9999; animation: slideDown 0.3s ease;';
      document.body.appendChild(toast);
      setTimeout(() => toast.remove(), 2000);
    }

    // Navigate to all products page
    function showAllProductsPage() {
      currentPage = 'catalog';
      document.getElementById('home').classList.add('hidden');
      document.getElementById('offers').classList.add('hidden');
      document.getElementById('products').classList.add('hidden');
      document.querySelector('.py-16.px-4').classList.add('hidden'); // Features section
      document.querySelectorAll('section.py-16').forEach(s => s.classList.add('hidden')); // All other sections
      document.getElementById('all-products-page').classList.remove('hidden');
      window.scrollTo(0, 0);
    }

    // Navigate back to home
    function showHomePage() {
      currentPage = 'home';
      document.getElementById('home').classList.remove('hidden');
      document.getElementById('offers').classList.remove('hidden');
      document.getElementById('products').classList.remove('hidden');
      document.querySelectorAll('section.py-16').forEach(s => s.classList.remove('hidden'));
      document.getElementById('all-products-page').classList.add('hidden');
      window.scrollTo(0, 0);
    }

    // Open product detail modal
    let currentModalProductId = null;
    
    function openProductModal(productId) {
      const product = products.find(p => p.id === productId);
      if (!product) return;
      
      currentModalProductId = productId;
      const modal = document.getElementById('product-modal');
      
      // Update modal content
      document.getElementById('modal-title').textContent = product.name;
      document.getElementById('modal-brand').textContent = product.brand;
      document.getElementById('modal-description').textContent = product.description;
      document.getElementById('modal-price').textContent = `$${product.price}`;
      document.getElementById('modal-rating').textContent = '⭐'.repeat(Math.floor(product.rating));
      document.getElementById('modal-rating-num').textContent = product.rating;
      document.getElementById('modal-stock').textContent = product.stock > 0 ? `${product.stock} In Stock` : 'Out of Stock';
      document.getElementById('modal-stock').style.color = product.stock > 0 ? '#10b981' : '#ef4444';
      
      // Update main image
      document.getElementById('modal-main-image').textContent = product.images[0];
      
      // Update thumbnails
      const thumbnailContainer = document.getElementById('modal-thumbnail-container');
      thumbnailContainer.innerHTML = product.images.map((img, index) => `
        <button class="text-4xl p-3 rounded-xl transition-all hover:scale-110 ${index === 0 ? 'ring-2 ring-purple-500' : ''}" 
                data-image="${img}" 
                style="background: linear-gradient(135deg, #f8f9ff 0%, #e8eaff 100%);">
          ${img}
        </button>
      `).join('');
      
      // Add thumbnail click handlers
      thumbnailContainer.querySelectorAll('button').forEach(btn => {
        btn.addEventListener('click', () => {
          document.getElementById('modal-main-image').textContent = btn.dataset.image;
          thumbnailContainer.querySelectorAll('button').forEach(b => b.classList.remove('ring-2', 'ring-purple-500'));
          btn.classList.add('ring-2', 'ring-purple-500');
        });
      });
      
      // Show modal
      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }

    // Close product modal
    function closeProductModal() {
      const modal = document.getElementById('product-modal');
      modal.classList.add('hidden');
      document.body.style.overflow = 'auto';
      currentModalProductId = null;
    }

    // Open/close cart sidebar
    function openCart() {
      document.getElementById('cart-sidebar').style.transform = 'translateX(0)';
    }

    function closeCart() {
      document.getElementById('cart-sidebar').style.transform = 'translateX(100%)';
    }

    // Modal event listeners
    document.getElementById('close-modal-btn').addEventListener('click', closeProductModal);
    document.getElementById('product-modal').addEventListener('click', (e) => {
      if (e.target.id === 'product-modal') {
        closeProductModal();
      }
    });

    document.getElementById('modal-add-to-cart').addEventListener('click', () => {
      if (currentModalProductId) {
        addToCart(currentModalProductId);
      }
    });

    document.getElementById('modal-buy-now').addEventListener('click', () => {
      if (currentModalProductId) {
        addToCart(currentModalProductId);
        closeProductModal();
        openCart();
      }
    });

    // Cart button
    document.getElementById('cart-btn').addEventListener('click', openCart);
    document.getElementById('close-cart-btn').addEventListener('click', closeCart);

    // Open checkout modal
    function openCheckoutModal() {
      if (cart.length === 0) {
        showToast('Your cart is empty!');
        return;
      }
      
      const modal = document.getElementById('checkout-modal');
      const checkoutItems = document.getElementById('checkout-items');
      
      // Populate checkout items
      checkoutItems.innerHTML = cart.map(item => `
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-3">
            <span class="text-2xl">${item.image}</span>
            <div>
              <div class="font-semibold" style="color: #1f2937;">${item.name}</div>
              <div class="text-sm text-gray-600">Qty: ${item.quantity} × $${item.price}</div>
            </div>
          </div>
          <div class="font-bold" style="color: #667eea;">$${(item.price * item.quantity).toFixed(2)}</div>
        </div>
      `).join('');
      
      // Update totals
      const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      document.getElementById('checkout-subtotal').textContent = `$${subtotal.toFixed(2)}`;
      document.getElementById('checkout-total').textContent = `$${subtotal.toFixed(2)}`;
      
      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
      closeCart();
    }
    
    // Close checkout modal
    function closeCheckoutModal() {
      const modal = document.getElementById('checkout-modal');
      modal.classList.add('hidden');
      document.body.style.overflow = 'auto';
    }
    
    // Checkout button
    document.getElementById('checkout-btn').addEventListener('click', openCheckoutModal);
    
    // Close checkout modal button
    document.getElementById('close-checkout-btn').addEventListener('click', closeCheckoutModal);
    
    // Payment option selection
    document.querySelectorAll('.payment-option').forEach(option => {
      option.addEventListener('click', () => {
        const radio = option.querySelector('input[type="radio"]');
        radio.checked = true;
        
        document.querySelectorAll('.payment-option').forEach(opt => {
          opt.classList.remove('selected');
        });
        option.classList.add('selected');
      });
    });
    
    // Checkout form submission
    document.getElementById('checkout-form').addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('checkout-name').value;
      const phone = document.getElementById('checkout-phone').value;
      const address = document.getElementById('checkout-address').value;
      const city = document.getElementById('checkout-city').value;
      const postal = document.getElementById('checkout-postal').value;
      const paymentMethod = document.querySelector('input[name="payment"]:checked').value;
      
      // Get payment method display name
      const paymentNames = {
        bkash: 'bKash',
        nagad: 'Nagad',
        rocket: 'Rocket',
        bank: 'Bank Transfer',
        card: 'Credit/Debit Card',
        cod: 'Cash on Delivery'
      };
      
      closeCheckoutModal();
      
      // Show success message
      const successMessage = document.createElement('div');
      successMessage.style.cssText = 'position: fixed; inset: 0; z-index: 9999; background: rgba(0,0,0,0.5); backdrop-filter: blur(4px); display: flex; align-items: center; justify-content: center;';
      successMessage.innerHTML = `
        <div style="background: white; border-radius: 24px; padding: 48px; max-width: 500px; text-align: center; box-shadow: 0 20px 60px rgba(0,0,0,0.3);">
          <div style="font-size: 64px; margin-bottom: 16px;">✅</div>
          <h3 style="font-size: 28px; font-weight: bold; color: #1f2937; margin-bottom: 16px;">Order Placed Successfully!</h3>
          <p style="color: #6b7280; margin-bottom: 24px;">Thank you, ${name}! Your order has been confirmed.</p>
          <div style="background: linear-gradient(135deg, #f8f9ff 0%, #e8eaff 100%); border-radius: 16px; padding: 20px; margin-bottom: 24px; text-align: left;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 12px;">
              <span style="color: #6b7280;">Payment Method:</span>
              <span style="font-weight: bold; color: #1f2937;">${paymentNames[paymentMethod]}</span>
            </div>
            <div style="display: flex; justify-content: space-between; margin-bottom: 12px;">
              <span style="color: #6b7280;">Delivery Address:</span>
              <span style="font-weight: bold; color: #1f2937;">${city}</span>
            </div>
            <div style="display: flex; justify-content: space-between; padding-top: 12px; border-top: 1px solid #e5e7eb;">
              <span style="color: #6b7280;">Total Amount:</span>
              <span style="font-weight: bold; font-size: 20px; color: #667eea;">$${cart.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2)}</span>
            </div>
          </div>
          <p style="color: #6b7280; font-size: 14px; margin-bottom: 24px;">You will receive a confirmation email shortly with your order details.</p>
          <button onclick="this.parentElement.parentElement.remove(); document.body.style.overflow='auto';" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 16px 32px; border-radius: 16px; font-weight: bold; border: none; cursor: pointer; font-size: 16px;">Continue Shopping</button>
        </div>
      `;
      document.body.appendChild(successMessage);
      document.body.style.overflow = 'hidden';
      
      // Clear cart
      cart = [];
      updateCartDisplay();
      
      // Clear form
      document.getElementById('checkout-form').reset();
    });

    // View all products button
    document.getElementById('view-all-products-btn').addEventListener('click', () => {

      document.querySelectorAll("main > section").forEach(sec => {
        if (sec.id !== "all-products-page") {
          sec.classList.add("hidden");
        }
      });

      // Show all products page
      document.getElementById("all-products-page").classList.remove("hidden");
      showAllProductsPage();
      renderAllProducts('all');
      window.scrollTo(0, 0);
    });

    // Back to home button
    document.getElementById('back-to-home-btn').addEventListener('click', showHomePage);

    // Catalog filter buttons
    document.querySelectorAll('.catalog-filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const category = btn.dataset.category;
        currentFilter = category;
        currentSubFilter = 'all';
        
        // Update active state
        document.querySelectorAll('.catalog-filter-btn').forEach(b => {
          if (b === btn) {
            b.style.background = `linear-gradient(135deg, ${defaultConfig.primary_gradient_start} 0%, ${defaultConfig.primary_gradient_end} 100%)`;
            b.style.color = 'white';
            b.style.boxShadow = `0 4px 12px rgba(102, 126, 234, 0.3)`;
          } else {
            b.style.background = defaultConfig.surface_color;
            b.style.color = defaultConfig.text_color;
            b.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
          }
        });
        
        // Show/hide subcategory filters
        showSubFilters(category);
        
        renderAllProducts(category, 'all');
      });
    });
    
    // Clear subfilter button
    document.getElementById('clear-subfilter-btn').addEventListener('click', () => {
      currentSubFilter = 'all';
      
      // Reset subfilter buttons
      document.querySelectorAll('.subfilter-btn').forEach((btn, index) => {
        if (index === 0) {
          btn.style.background = `linear-gradient(135deg, ${defaultConfig.primary_gradient_start} 0%, ${defaultConfig.primary_gradient_end} 100%)`;
          btn.style.color = 'white';
          btn.style.boxShadow = `0 2px 8px rgba(102, 126, 234, 0.3)`;
        } else {
          btn.style.background = 'white';
          btn.style.color = defaultConfig.text_color;
          btn.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
        }
      });
      
      renderAllProducts(currentFilter, 'all');
    });

    // Newsletter form
    document.getElementById('newsletter-form').addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('newsletter-email').value;
      if (email) {
        showToast('Thank you for subscribing!');
        document.getElementById('newsletter-email').value = '';
      }
    });

    // Mobile menu
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeMenuBtn = document.getElementById('close-menu-btn');
    
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.add('active');
    });
    
    closeMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
    });
    
    // Close mobile menu on link click
    document.querySelectorAll('.mobile-menu-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
      });
    });

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });

    // Element SDK implementation
    async function onConfigChange(config) {
      const storeName = config.store_name || defaultConfig.store_name;
      const tagline = config.tagline || defaultConfig.tagline;
      const offerTitle = config.offer_title || defaultConfig.offer_title;
      const offerDescription = config.offer_description || defaultConfig.offer_description;
      const footerText = config.footer_text || defaultConfig.footer_text;
      
      document.getElementById('store-name').textContent = storeName;
      document.getElementById('tagline').textContent = tagline;
      document.getElementById('offer-title').textContent = offerTitle;
      document.getElementById('offer-description').textContent = offerDescription;
      document.getElementById('footer-text').textContent = footerText;
      
      // Apply colors
      const primaryStart = config.primary_gradient_start || defaultConfig.primary_gradient_start;
      const primaryEnd = config.primary_gradient_end || defaultConfig.primary_gradient_end;
      const bgColor = config.background_color || defaultConfig.background_color;
      const surfaceColor = config.surface_color || defaultConfig.surface_color;
      const textColor = config.text_color || defaultConfig.text_color;
      const accentColor = config.accent_color || defaultConfig.accent_color;
      
      document.getElementById('app').style.background = `linear-gradient(to bottom, ${bgColor} 0%, ${surfaceColor} 100%)`;
      
      // Update store name gradient
      const storeNameEl = document.getElementById('store-name');
      storeNameEl.style.background = `linear-gradient(135deg, ${primaryStart} 0%, ${primaryEnd} 100%)`;
      storeNameEl.style.webkitBackgroundClip = 'text';
      storeNameEl.style.webkitTextFillColor = 'transparent';
      storeNameEl.style.backgroundClip = 'text';
      
      // Re-render products with new colors
      renderProducts(currentFilter);
    }

    if (window.elementSdk) {
      window.elementSdk.init({
        defaultConfig,
        onConfigChange,
        mapToCapabilities: (config) => ({
          recolorables: [
            {
              get: () => config.background_color || defaultConfig.background_color,
              set: (value) => {
                config.background_color = value;
                window.elementSdk.setConfig({ background_color: value });
              }
            },
            {
              get: () => config.surface_color || defaultConfig.surface_color,
              set: (value) => {
                config.surface_color = value;
                window.elementSdk.setConfig({ surface_color: value });
              }
            },
            {
              get: () => config.text_color || defaultConfig.text_color,
              set: (value) => {
                config.text_color = value;
                window.elementSdk.setConfig({ text_color: value });
              }
            },
            {
              get: () => config.primary_gradient_start || defaultConfig.primary_gradient_start,
              set: (value) => {
                config.primary_gradient_start = value;
                window.elementSdk.setConfig({ primary_gradient_start: value });
              }
            },
            {
              get: () => config.accent_color || defaultConfig.accent_color,
              set: (value) => {
                config.accent_color = value;
                window.elementSdk.setConfig({ accent_color: value });
              }
            }
          ],
          borderables: [],
          fontEditable: undefined,
          fontSizeable: undefined
        }),
        mapToEditPanelValues: (config) => new Map([
          ["store_name", config.store_name || defaultConfig.store_name],
          ["tagline", config.tagline || defaultConfig.tagline],
          ["offer_title", config.offer_title || defaultConfig.offer_title],
          ["offer_description", config.offer_description || defaultConfig.offer_description],
          ["footer_text", config.footer_text || defaultConfig.footer_text]
        ])
      });
    }

    // Initial render
    renderFeaturedProducts();
    updateCartDisplay();