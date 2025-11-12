document.addEventListener('DOMContentLoaded', () => {
      let currentSlide = 0;
      const slides = document.querySelectorAll('.hero-slide');
      const indicators = document.querySelectorAll('.indicator');
      const heroSection = document.querySelector('.hero');
      let autoSlideInterval;

    function showSlide(n) {
        slides.forEach(slide => slide.classList.remove('active'));
        indicators.forEach(ind => ind.classList.remove('active'));  
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
        indicators[currentSlide].classList.add('active');
    }

    function changeSlide(direction) {
        showSlide(currentSlide + direction);
        resetAutoSlide();
    }

    function goToSlide(n) {
        showSlide(n);
        resetAutoSlide();
    }

    function startAutoSlide() {
        autoSlideInterval = setInterval(() => {
          changeSlide(1);
        }, 5000);
    }

    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        startAutoSlide();
    }

    heroSection.addEventListener('mouseenter', () => clearInterval(autoSlideInterval));
    heroSection.addEventListener('mouseleave', startAutoSlide);


      showSlide(0);
      startAutoSlide();
});

document.addEventListener('DOMContentLoaded', () => {
  let currentSlide = 0;
  const slides = document.querySelectorAll('.hero-slide');
  const indicators = document.querySelectorAll('.indicator');
  const heroSection = document.querySelector('.hero');
  const prevBtn = document.querySelector('.hero-arrow.left');
  const nextBtn = document.querySelector('.hero-arrow.right');
  let autoSlideInterval;

  function showSlide(n) {
    slides.forEach(slide => slide.classList.remove('active'));
    indicators.forEach(ind => ind.classList.remove('active'));
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
    indicators[currentSlide].classList.add('active');
  }

  function changeSlide(direction) {
    showSlide(currentSlide + direction);
    resetAutoSlide();
  }

  function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
      changeSlide(1);
    }, 5000);
  }

  function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
  }

  prevBtn.addEventListener('click', () => changeSlide(-1));
  nextBtn.addEventListener('click', () => changeSlide(1));

  heroSection.addEventListener('mouseenter', () => clearInterval(autoSlideInterval));
  heroSection.addEventListener('mouseleave', startAutoSlide);

  showSlide(0);
  startAutoSlide();
});


let modalStack = [];
let currentModal = null;

function pushModal(name) {
    if (currentModal && currentModal !== name) {
        modalStack.push(currentModal);
        document.getElementById('modalBackBtn').style.display = 'flex';
    }
    currentModal = name;
}

function modalBack() {
    if (modalStack.length === 0) {
        closeModal();
        currentModal = null;
        document.getElementById('modalBackBtn').style.display = 'none';
        return;
    }
    const prev = modalStack.pop();
    if (modalStack.length === 0) {
        document.getElementById('modalBackBtn').style.display = 'none';
    }
    currentModal = prev;
    switch (prev) {
        case 'cart': openCart(); break;
        case 'wishlist': openWishlist(); break;
        case 'orders': openOrders(); break;
        case 'help': openHelp(); break;
        case 'settings': openSettings(); break;
        case 'login': openLogin(); break;
        case 'signup': openSignup(); break;
        default: break;
    }
}


//product list
const products = [
    {
        id: 1,
        name: "Elegant Evening Dress",
        category: "fashion",
        collection: "winter",
        price: 1499.00,
        image: "images/dress.jpg",
        description: "Stunning evening dress perfect for special occasions. Made from premium silk with intricate detailing.",
        bestseller: true
    },
    {
        id: 2,
        name: "Luxury Handbag",
        category: "accessories",
        collection: "holiday",
        price: 999.00,
        image: "images/handbag.jpg",
        description: "Handcrafted leather handbag with gold accents. Spacious interior with multiple compartments.",
        bestseller: true
    },
    {
        id: 3,
        name: "Premium Skincare Set",
        category: "beauty",
        collection: "christmas",
        price: 1299.00,
        image: "images/skincare.jpg",
        description: "Complete skincare routine with natural ingredients. Includes cleanser, toner, and moisturizer.",
        bestseller: true
    },
    {
        id: 4,
        name: "Designer Sunglasses",
        category: "accessories",
        collection: "summer",
        price: 299.00,
        image: "images/sunglasses.jpg",
        description: "Classic aviator sunglasses with UV protection. Lightweight titanium frame.",
        bestseller: true
    },
    {
        id: 5,
        name: "Silk Scarf",
        category: "accessories",
        collection: "spring",
        price: 499.00,
        image: "images/scarf.jpg",
        description: "Hand-printed silk scarf with unique patterns. Versatile accessory for any outfit.",
        bestseller: true
    },
    {
        id: 6,
        name: "Perfume Collection",
        category: "beauty",
        collection: "holiday",
        price: 899.00,
        image: "images/perfume.jpg",
        description: "Set of three signature fragrances. Long-lasting scents with elegant packaging.",
        bestseller: true
    },
    {
        id: 7,
        name: "Leather Jacket",
        category: "fashion",
        collection: "autumn",
        price: 1199.00,
        image: "images/jacket.jpg",
        description: "Classic leather jacket in timeless black. Soft lambskin with quilted lining.",
        bestseller: true
    },
    {
        id: 8,
        name: "Diamond Earrings",
        category: "accessories",
        collection: "christmas",
        price: 72000.00,
        image: "images/earrings.jpg",
        description: "Stunning diamond stud earrings. Conflict-free diamonds in 18k white gold setting.",
        bestseller: true
    },
    {
        id: 9,
        name: "Makeup Palette",
        category: "beauty",
        collection: "spring",
        price: 750.00,
        image: "images/makeup.jpg",
        description: "Professional makeup palette with 24 shades. Highly pigmented and long-lasting."
    },
    {
        id: 10,
        name: "Designer Heels",
        category: "fashion",
        collection: "holiday",
        price: 950.00,
        image: "images/heels.jpg",
        description: "Elegant high heels with comfortable insole. Perfect for formal events."
    },
    {
        id: 11,
        name: "Cashmere Sweater",
        category: "fashion",
        collection: "winter",
        price: 999.00,
        image: "images/sweater.jpg",
        description: "Ultra-soft cashmere sweater. Available in multiple colors, perfect for layering."
    },
    {
        id: 12,
        name: "Gold Watch",
        category: "accessories",
        collection: "christmas",
        price: 50000.00,
        image: "images/watch.jpg",
        description: "Luxury gold watch with Swiss movement. Water-resistant and scratch-proof sapphire crystal.",
    },
    {
        id: 13,
        name: "Winter Coat",
        category: "fashion",
        collection: "winter",
        price: 1199,
        image: "images/coat.jpg",
        description: "Premium wool winter coat with elegant silhouette. Timeless design for cold seasons."
    },
    {
        id: 14,
        name: "Holiday Gift Set",
        category: "beauty",
        collection: "christmas",
        price: 599.00,
        image: "images/giftset.jpg",
        description: "Curated beauty gift set perfect for holidays. Includes skincare and makeup essentials.",
    },
    {
        id: 15,
        name: "Spring Dress",
        category: "fashion",
        collection: "spring",
        price: 699.00,
        image: "images/springdress.jpg",
        description: "Floral print dress in lightweight fabric. Perfect for spring and summer occasions."
    },
    {
        id: 16,
        name: "Summer Sandals",
        category: "fashion",
        collection: "summer",
        price: 699.00,
        image: "images/sandals.jpg",
        description: "Elegant leather sandals with comfortable footbed. Ideal for warm weather."
    },
    {
        id: 17,
        name: "Autumn Blazer",
        category: "fashion",
        collection: "autumn",
        price: 1200.00,
        image: "images/blazer.jpg",
        description: "Tailored blazer in rich autumn tones. Perfect for professional and casual wear."
    },
    {
        id: 18,
        name: "Holiday Necklace",
        category: "accessories",
        collection: "holiday",
        price: 399.00,
        image: "images/necklace.jpg",
        description: "Statement necklace perfect for festive occasions. Sterling silver with precious stones."
    }
];

const faqData = [
    { question: "What is your return policy?", answer: "We offer a 30-day return policy for all items. Products must be unused and in original packaging. Refunds are processed within 5-7 business days." },
    { question: "How long does shipping take?", answer: "Standard shipping takes 5-7 business days. Express shipping (2-3 days) and overnight shipping options are available at checkout." },
    { question: "Do you ship internationally?", answer: "Yes, we ship to over 100 countries worldwide. International shipping times vary by location, typically 10-15 business days." },
    { question: "How can I track my order?", answer: "Once your order ships, you'll receive a tracking number via email. You can also track orders from your account dashboard." },
    { question: "What payment methods do you accept?", answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and Apple Pay." },
    { question: "Are your products authentic?", answer: "Yes, all products sold on NenLuxe are 100% authentic. We work directly with brands and authorized distributors." }
];

//user management
function getCurrentUser() {
    const user = localStorage.getItem('currentUser');
    return user ? JSON.parse(user) : null;
}

function isLoggedIn() {
    return getCurrentUser() !== null;
}

function requireLogin() {
    if (!isLoggedIn()) {
        openLogin();
        return false;
    }
    return true;
}

function logout() {
    localStorage.removeItem('currentUser');
    showNotification('Logged out successfully!', 'success');
    closeModal();
    updateCartCount();
    updateWishlistCount();
}

//notification funtion 
function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `custom-notification ${type}`;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.classList.add('visible');
    }, 100);

    setTimeout(() => {
        notification.classList.remove('visible');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

//cart management
function getCart() {
    try {
        const storedCart = JSON.parse(localStorage.getItem('cart'));
        return Array.isArray(storedCart) ? storedCart : [];
    } catch (e) {
        return [];
    }
}

function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

function addToCart(productId) {
    if (!requireLogin()) return;

    const product = products.find(p => p.id === productId);
    if (!product) return;

    const cart = getCart();
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            category: product.category,
            quantity: 1
        });
    }

    saveCart(cart);
    showNotification('Product added to cart!', 'success');
}

function removeFromCart(productId) {
    let cart = getCart();
    cart = cart.filter(item => item.id !== productId);
    saveCart(cart);
    openCart();
    showNotification('Product removed from cart!', 'error');
}


function updateQuantity(productId, change) {
    const cart = getCart();
    const item = cart.find(item => item.id === productId)
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            saveCart(cart);
            openCart();
        }
    }
}

function updateCartCount() {
    const cart = getCart();
    const totalItems = cart.reduce((sum, item) => sum + (Number(item.quantity) || 0), 0);
    document.getElementById('cartCount').textContent = totalItems;
}

function isUserLoggedIn() {
  const user = localStorage.getItem('user');
}

function clearUserDataOnLogout() {
  localStorage.removeItem('wishlist');
  localStorage.removeItem('cart');

  updateWishlistCount();
  updateCartCount();
}

function updateWishlistCount() {
  const wishlist = getWishlist();
  const countEl = document.getElementById('wishlistCount');
  if (countEl) {
    countEl.textContent = isUserLoggedIn() ? wishlist.length : 0;
  }
}

function updateCartCount() {
  const cart = getCart();
  const countEl = document.getElementById('cartCount');
  if (countEl) {
    countEl.textContent = isUserLoggedIn() ? cart.length : 0;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  if (!isUserLoggedIn()) {
    clearUserDataOnLogout();
  } else {
    updateWishlistCount();
    updateCartCount();
  }
});

function logoutUser() {
  localStorage.removeItem('user');
  clearUserDataOnLogout();
  showNotification('You have logged out successfully!', 'info');
  window.location.href = 'login.html';
}


//wishlist managemnet
function getWishlist() {
  try {
    return JSON.parse(localStorage.getItem('wishlist') || '[]');
  } catch (e) {
    console.error('Failed to parse wishlist', e);
    return [];
  }
}

function saveWishlist(wishlist) {
  localStorage.setItem('wishlist', JSON.stringify(wishlist));
  updateWishlistCount();
}

function handleWishlistClick(productId, event) {
  event.stopPropagation();

  const wishlist = getWishlist();
  const index = wishlist.indexOf(productId);

  let added;
  if (index === -1) {
    wishlist.push(productId);
    added = true;
  } else {
    wishlist.splice(index, 1);
    added = false;
  }

  saveWishlist(wishlist);

  const button = document.querySelector(`.wishlist-btn[data-id="${productId}"]`);
  if (button) {
    if (added) button.classList.add('active');
    else button.classList.remove('active');
  }

  updateWishlistUI();
}



function addToWishlist(productId) {
    if (!requireLogin()) return;

    const product = products.find(p => p.id === productId);
    if (!product) return;

    let wishlist = getWishlist();
    const index = wishlist.findIndex(item => item.id === productId);
    const button = document.querySelector(`.wishlist-btn[data-id="${productId}"]`);

    if (index !== -1) {
      wishlist.splice(index, 1);
      saveWishlist(wishlist);
      if (button) button.classList.remove('active');
      showNotification('Product removed from wishlist!', 'error');
        toggleBtn();
      return;
    }

    wishlist.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category
    });
        
    saveWishlist(wishlist);
    if (button) button.classList.add('active');
    showNotification('Product added to wishlist!', 'success');
    toggleBtn();
}           


function removeFromWishlist(productId) {
    let wishlist = getWishlist();
    wishlist = wishlist.filter(item => item.id !== productId);
    saveWishlist(wishlist);
    openWishlist();
    toggleBtn(productId);
}

function updateWishlistCount() {
    const wishlist = getWishlist();
    document.getElementById('wishlistCount').textContent = wishlist.length;
}

//orders managements
function getOrders() {
    return JSON.parse(localStorage.getItem('orders') || '[]');
}

function saveOrders(orders) {
    localStorage.setItem('orders', JSON.stringify(orders));
}

function placeOrder() {
    if (!requireLogin()) return;

    const cart = getCart();
    if (cart.length === 0) {
      showNotification('Your cart is empty!', 'error');
        return;
    }

    const order = {
        id: Date.now(),
        date: new Date().toLocaleDateString(),
        items: cart,
        total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
        status: 'Processing'
    };

    const orders = getOrders();
    orders.unshift(order);
    saveOrders(orders);

    saveCart([]);

    showNotification('Order placed successfully!', 'success');
    closeModal();
    openOrders();
}

//modal management
function openModal() {
    document.getElementById('modal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('modal').classList.remove('active');
    document.body.style.overflow = 'auto';
    modalStack = [];
    currentModal = null;
    document.getElementById('modalBackBtn').style.display = 'none';
}

function toggleBtn(productId) {
  const button = document.querySelector(`.wishlist-btn[data-id="${productId}"]`);
  if (!button) return;

  button.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', () => {
  updateWishlistUI();
});


function updateWishlistUI() {
  const wishlist = getWishlist();
  document.querySelectorAll('.wishlist-btn').forEach(btn => {
    const id = parseInt(btn.dataset.id, 10);
    if (wishlist.includes(id)) btn.classList.add('active');
    else btn.classList.remove('active');
  });

  updateWishlistBadge();
}

//product display card
function createProductCard(product) {
    return `
        <div class="product-card" onclick="openProductDetail(${product.id})">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
                <button class="product-wishlist wishlist-btn"
                    data-id="${product.id}"
                    onclick="event.stopPropagation(); toggleBtn(${product.id}); addToWishlist(${product.id}); handleWishlistClick(${product.id}, event)">
                  <svg class="icon" viewBox="0 0 24 24" stroke="white" stroke-width="2" fill="none">
                    <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 1 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/>
                  </svg>
                </button>
            </div>
            <div class="product-info">
                <div class="product-category">${product.category}</div>
                <h3>${product.name}</h3>
                <div class="product-price">₹${product.price.toFixed(2)}</div>
                <div class="product-actions">
                    <button class="btn btn-primary" onclick="event.stopPropagation(); addToCart(${product.id})">Add to Cart</button>
                </div>
            </div>
        </div>
    `;
}

function loadProducts(productsToShow = products) {
    const grid = document.getElementById('productGrid');
    grid.innerHTML = productsToShow.map(createProductCard).join('');
}

function filterProducts(filter) {
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    event?.target?.classList.add('active');

    if (filter === 'all') {
        loadProducts();
    } else {
        const filtered = products.filter(p => p.category === filter || p.collection === filter);
        loadProducts(filtered);
    }
}

function searchProducts() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    if (!query) {
        loadProducts();
        return;
    }
    const filtered = products.filter(p =>
        p.name.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query) ||
        p.collection.toLowerCase().includes(query)
    );
    loadProducts(filtered);
    scrollToSection('products');
}

//best seller 
function loadBestsellers() {
  const bestsellers = products.filter(p => p.bestseller);
  const scroll = document.getElementById('bestsellerScroll');

  scroll.innerHTML = bestsellers.map(product => `
    <div class="bestseller-card" onclick="openProductDetail(${product.id})" data-id="${product.id}">
      <div class="bestseller-image">
        <img src="${product.image}" alt="${escapeHtml(product.name)}">
      </div>
      <div class="bestseller-info">
        <h3>${escapeHtml(product.name)}</h3>
        <div class="bestseller-price">₹${product.price.toFixed(2)}</div>
      </div>
    </div>
  `).join('');

  setupBestsellerArrows();
}

function escapeHtml(str) {
  if (!str && str !== 0) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function changeSlide(direction) {
  const scroll = document.getElementById('bestsellerScroll');
  if (!scroll) return;

  const card = scroll.querySelector('.bestseller-card');
  if (!card) return;

  const style = window.getComputedStyle(card);
  const cardWidth = card.offsetWidth;
  const gap = parseInt(getComputedStyle(scroll).columnGap || 20, 10) || 20;

  const scrollAmount = (cardWidth + gap) * Math.abs(direction);

  if (direction > 0) {
    scroll.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  } else {
    scroll.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  }
}

function setupBestsellerArrows() {
  const scroll = document.getElementById('bestsellerScroll');
  const wrapper = scroll.closest('.bestseller-scroll-wrapper');
  const leftBtn = document.getElementById('bestLeft');
  const rightBtn = document.getElementById('bestRight');

  if (!scroll || !leftBtn || !rightBtn) return;

  leftBtn.onclick = () => changeSlide(-1);
  rightBtn.onclick = () => changeSlide(1);

  function updateArrowVisibility() {
    const maxScroll = scroll.scrollWidth - scroll.clientWidth;

    if (scroll.scrollLeft <= 8) {
      leftBtn.classList.add('hidden');
      wrapper.classList.remove('has-left-fade');
    } else {
      leftBtn.classList.remove('hidden');
      wrapper.classList.add('has-left-fade');
    }

    if (scroll.scrollLeft >= maxScroll - 8) {
      rightBtn.classList.add('hidden');
      wrapper.classList.remove('has-right-fade');
    } else {
      rightBtn.classList.remove('hidden');
      wrapper.classList.add('has-right-fade');
    }
  }

  scroll.addEventListener('scroll', debounce(updateArrowVisibility, 50));
  window.addEventListener('resize', debounce(updateArrowVisibility, 150));
  updateArrowVisibility();
}

function debounce(fn, wait) {
  let t;
  return function (...args) {
    clearTimeout(t);
    t = setTimeout(() => fn.apply(this, args), wait);
  };
}

//product detail [modal]

function openProductDetail(productId) {
    pushModal('productDetail');
    const product = products.find(p => p.id === productId);
    if (!product) return;

    document.getElementById('modalTitle').textContent = product.name;
    document.getElementById('modalBody').innerHTML = `
        <div class="product-detail">
            <div class="product-image">
                <img class="image-box" src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <p class="product-meta">${product.category} • ${product.collection}</p>
                <h2>${product.name}</h2>
                <p class="product-price">₹${product.price.toFixed(2)}</p>
                <p class="product-desc">${product.description}</p
                <div class="product-actions">
                    <button class="btn btn-full" onclick="buyNow(${product.id})">Buy Now</button>
                    <div class="btn-row">
                        <button class="btn btn-half" onclick="addToCart(${product.id}); closeModal()">Add to Cart</button>
                        <button class="btn btn-half outline" onclick="addToWishlist(${product.id})">♡</button>
                    </div>
                </div>
            </div>
        </div>
    `;
    openModal();
}
        
function buyNow(productId) {
    addToCart(productId);
    closeModal();
    openCart();
}

//view cart [modal]
function openCart() {
    pushModal('cart');
    if (!requireLogin()) return;

    const cart = getCart();
    let content = '';

    if (cart.length === 0) {
        content += '<p class="empty-message">Your cart is empty. Start shopping!</p>';
    }
    else {
        cart.forEach(item => {
            content += `
                <div class="cart-item">
                    <img class="item-image" src="${item.image}">
                    <div style="flex:1">
                        <h3 style="font-size:18px;margin-bottom:8px">${item.name}</h3>
                        <p style="color:var(--grey-mid);text-transform:uppercase;font-size:12px;letter-spacing:1px;margin-bottom:8px">${item.category}</p>
                        <p style="font-weight:700;font-size:18px">₹${item.price ? Number(item.price).toFixed(2) : '0.00'}</p>
                    </div>
                    <div style="display:flex;flex-direction:column;gap:12px;align-items:flex-end">
                        <div class="quantity-controls">
                            <button onclick="updateQuantity(${item.id}, -1)">−</button>
                            <span style="padding:0 16px;font-weight:600">${item.quantity}</span>
                            <button onclick="updateQuantity(${item.id}, 1)">+</button>
                        </div>
                        <p style="font-weight:700;font-size:20px">${(item.price * item.quantity).toFixed(2)}</p>
                        <button class="remove-btn" onclick="removeFromCart(${item.id})">Remove</button>
                    </div>
                </div>
            `;
        });
    }

    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = subtotal > 150 ? 0 : 10;
    const tax = subtotal * 0.08;
    const total = subtotal + shipping + tax;

    content += `
            <div class="cart-summary">
                <div class="summary-row"><span>Subtotal:</span><span>₹${subtotal.toFixed(2)}</span></div>
                <div class="summary-row"><span>Shipping:</span><span>₹${shipping === 0 ? 'FREE' : '+' + shipping.toFixed(2)}</span></div>
                <div class="summary-row"><span>Tax:</span><span>₹${tax.toFixed(2)}</span></div>
                <div class="summary-row total"><span>Total:</span><span>₹${total.toFixed(2)}</span></div>
                <button class="btn btn-primary" onclick="placeOrder()" style="width:100%;margin-top:24px;padding:16px">Place Order</button>
            </div>
        `;

    document.getElementById('modalTitle').textContent = 'Shopping Cart';
    document.getElementById('modalBody').innerHTML = content;
    openModal();
}

//view wishlist [modal]
        
function openWishlist() {
    pushModal('wishlist');
    if (!requireLogin()) return;

    const wishlist = getWishlist();

    let content = '';

    if (wishlist.length === 0) {
        content += '<p class="empty-message">Your wishlist is empty. Add some items!</p>';
    } 
    else {
        wishlist.forEach(item => {
            content += `
                <div class="wishlist-item">
                    <img class="item-image" src="${item.image}">
                    <div style="flex:1">
                        <h3 style="font-size:18px;margin-bottom:8px">${item.name}</h3>
                        <p style="color:var(--grey-mid);text-transform:uppercase;font-size:12px;letter-spacing:1px;margin-bottom:8px">${item.category}</p>
                        <p style="font-weight:700;font-size:18px">₹${item.price ? Number(item.price).toFixed(2) : '0.00'}</p>
                    </div>
                    <div style="display:flex;flex-direction:column;gap:12px;align-items:flex-end">
                        <button class="btn btn-primary" onclick="addToCart(${item.id}); removeFromWishlist(${item.id})">Add to Cart</button>
                        <button class="remove-btn" onclick="removeFromWishlist(${item.id})">Remove</button>
                    </div>
                </div>
            `;
        });
    }

    document.getElementById('modalTitle').textContent = 'My Wishlist';
    document.getElementById('modalBody').innerHTML = content;
    openModal();
}

//logIN and signIn 

function openLogin() {
    pushModal('login');
    document.getElementById('modalTitle').textContent = 'Welcome Back';
    document.getElementById('modalBody').innerHTML = `
        <form onsubmit="handleLogin(event)" style="max-width:400px;margin:0 auto">
            <div style="margin-bottom:20px">
                <label style="display:block;font-weight:600;margin-bottom:8px;font-size:14px">Email</label>
                <input type="email" id="loginEmail" required placeholder="Enter your email" style="width:100%;padding:14px;border:1px solid var(--grey-light);font-size:14px" />
            </div>
            <div style="margin-bottom:24px">
                <label style="display:block;font-weight:600;margin-bottom:8px;font-size:14px">Password</label>
                <input type="password" id="loginPassword" required placeholder="Enter your password" style="width:100%;padding:14px;border:1px solid var(--grey-light);font-size:14px" />
            </div>
            <button type="submit" class="btn btn-primary" style="width:100%;padding:16px">Login</button>
            <div style="text-align:center;margin-top:20px;color:var(--grey-mid)">Don't have an account? <a href="javascript:void(0)" onclick="openSignup()" style="color:var(--black);font-weight:600">Sign up</a></div>
        </form>
    `;
    openModal();
}

function handleLogin(event) {
    event.preventDefault();

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        const { password, ...userWithoutPassword } = user;
        localStorage.setItem('currentUser', JSON.stringify(userWithoutPassword));
        showNotification('Login successful!!', 'success');
        closeModal();
        updateCartCount();
        updateWishlistCount();
    } else {
        showNotification('Invalid email or password!', 'error');
    }
}

function openSignup() {
    pushModal('signup');
    document.getElementById('modalTitle').textContent = 'Create Account';
    document.getElementById('modalBody').innerHTML = `
        <form onsubmit="handleSignup(event)" style="max-width:400px;margin:0 auto">
            <div style="margin-bottom:16px">
                <label style="display:block;font-weight:600;margin-bottom:8px;font-size:14px">Full Name</label>
                <input type="text" id="signupName" required placeholder="Enter your full name" style="width:100%;padding:14px;border:1px solid var(--grey-light);font-size:14px" />
            </div>
            <div style="margin-bottom:16px">
                <label style="display:block;font-weight:600;margin-bottom:8px;font-size:14px">Email</label>
                <input type="email" id="signupEmail" required placeholder="Enter your email" style="width:100%;padding:14px;border:1px solid var(--grey-light);font-size:14px" />
            </div>
            <div style="margin-bottom:16px">
                <label style="display:block;font-weight:600;margin-bottom:8px;font-size:14px">Phone</label>
                <input type="tel" id="signupPhone" required placeholder="Enter your phone number" style="width:100%;padding:14px;border:1px solid var(--grey-light);font-size:14px" />
            </div>
            <div style="margin-bottom:16px">
                <label style="display:block;font-weight:600;margin-bottom:8px;font-size:14px">Password</label>
                <input type="password" id="signupPassword" required placeholder="Create a password" minlength="6" style="width:100%;padding:14px;border:1px solid var(--grey-light);font-size:14px" />
            </div>
            <div style="margin-bottom:24px">
                <label style="display:block;font-weight:600;margin-bottom:8px;font-size:14px">Confirm Password</label>
                <input type="password" id="signupConfirmPassword" required placeholder="Confirm your password" style="width:100%;padding:14px;border:1px solid var(--grey-light);font-size:14px" />
            </div>
            <button type="submit" class="btn btn-primary" style="width:100%;padding:16px">Sign Up</button>
            <div style="text-align:center;margin-top:20px;color:var(--grey-mid)">Already have an account? <a href="javascript:void(0)" onclick="openLogin()" style="color:var(--black);font-weight:600">Login</a></div>
        </form>
    `;
    openModal();
}

function handleSignup(event) {
    event.preventDefault();

    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const phone = document.getElementById('signupPhone').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('signupConfirmPassword').value;

    if (password !== confirmPassword) {
        showNotification('Passwords do not match!', 'error');
        return;
    }

    const users = JSON.parse(localStorage.getItem('users') || '[]');

    if (users.find(u => u.email === email)) {
        showNotification('Email already registered!', 'error');
        return;
    }

    const newUser = {
        id: Date.now(),
        name,
        email,
        phone,
        password,
        address: '',
        city: '',
        country: '',
        zipCode: ''
    };

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    showNotification('Account created successfully! Please login.', 'success');
    openLogin();
}

//settings [modal]
function openSettings() {
    pushModal('settings');
    if (!requireLogin()) return;

    const user = getCurrentUser();

    document.getElementById('modalTitle').textContent = 'Account Settings';
    document.getElementById('modalBody').innerHTML = `
        <div style="display:flex;gap:24px;border-bottom:1px solid var(--grey-light);margin-bottom:32px">
            <button style="background:transparent;border:none;padding:16px 0;font-weight:600;border-bottom:2px solid var(--black);cursor:pointer;text-transform:uppercase;letter-spacing:1px;font-size:13px">Profile</button>
            <button style="background:transparent;border:none;padding:16px 0;font-weight:600;border-bottom:2px solid transparent;cursor:pointer;text-transform:uppercase;letter-spacing:1px;font-size:13px;color:var(--grey-mid)" onclick="openOrders()">Orders</button>
            <button style="background:transparent;border:none;padding:16px 0;font-weight:600;border-bottom:2px solid transparent;cursor:pointer;text-transform:uppercase;letter-spacing:1px;font-size:13px;color:var(--grey-mid)" onclick="openWishlist()">Wishlist</button>
            <button style="background:transparent;border:none;padding:16px 0;font-weight:600;border-bottom:2px solid transparent;cursor:pointer;text-transform:uppercase;letter-spacing:1px;font-size:13px;color:var(--grey-mid)" onclick="confirmLogout()">Logout</button>
        </div>
        <form onsubmit="updateProfile(event)" style="max-width:600px">
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-bottom:16px">
                <div>
                    <label style="display:block;font-weight:600;margin-bottom:8px;font-size:14px">Full Name</label>
                    <input type="text" id="profileName" value="${user.name || ''}" required style="width:100%;padding:12px;border:1px solid var(--grey-light);font-size:14px" />
                </div>
                <div>
                    <label style="display:block;font-weight:600;margin-bottom:8px;font-size:14px">Email</label>
                    <input type="email" id="profileEmail" value="${user.email || ''}" readonly style="width:100%;padding:12px;border:1px solid var(--grey-light);background:var(--grey-ultralight);font-size:14px" />
                </div>
            </div>
            <div style="margin-bottom:16px">
                <label style="display:block;font-weight:600;margin-bottom:8px;font-size:14px">Phone</label>
                <input type="tel" id="profilePhone" value="${user.phone || ''}" required style="width:100%;padding:12px;border:1px solid var(--grey-light);font-size:14px" />
            </div>
            <div style="margin-bottom:16px">
                <label style="display:block;font-weight:600;margin-bottom:8px;font-size:14px">Address</label>
                <input type="text" id="profileAddress" value="${user.address || ''}" placeholder="Street address" style="width:100%;padding:12px;border:1px solid var(--grey-light);font-size:14px" />
            </div>
            <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:20px;margin-bottom:24px">
                <div>
                    <label style="display:block;font-weight:600;margin-bottom:8px;font-size:14px">City</label>
                    <input type="text" id="profileCity" value="${user.city || ''}" placeholder="City" style="width:100%;padding:12px;border:1px solid var(--grey-light);font-size:14px" />
                </div>
                <div>
                    <label style="display:block;font-weight:600;margin-bottom:8px;font-size:14px">Country</label>
                    <input type="text" id="profileCountry" value="${user.country || ''}" placeholder="Country" style="width:100%;padding:12px;border:1px solid var(--grey-light);font-size:14px" />
                </div>
                <div>
                    <label style="display:block;font-weight:600;margin-bottom:8px;font-size:14px">Zip Code</label>
                    <input type="text" id="profileZipCode" value="${user.zipCode || ''}" placeholder="Zip Code" style="width:100%;padding:12px;border:1px solid var(--grey-light);font-size:14px" />
                </div>
            </div>
            <button type="submit" class="btn btn-primary" style="padding:14px 32px">Update Profile</button>
        </form>
    `;
    openModal();
}

function updateProfile(event) {
    event.preventDefault();

    const user = getCurrentUser();
    if (!user) return;

    const updatedUser = {
        ...user,
        name: document.getElementById('profileName').value,
        phone: document.getElementById('profilePhone').value,
        address: document.getElementById('profileAddress').value,
        city: document.getElementById('profileCity').value,
        country: document.getElementById('profileCountry').value,
        zipCode: document.getElementById('profileZipCode').value
    };

    localStorage.setItem('currentUser', JSON.stringify(updatedUser));

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const userIndex = users.findIndex(u => u.email === user.email);
    if (userIndex !== -1) {
        users[userIndex] = { ...users[userIndex], ...updatedUser };
        localStorage.setItem('users', JSON.stringify(users));
    }
    showNotification('Profile updated successfully!', 'success');
}

//log out
function confirmLogout() {
    const modalTitleEl = document.getElementById('modalTitle');
    const modalBodyEl = document.getElementById('modalBody');

    const prevTitle = modalTitleEl ? modalTitleEl.textContent : '';
    const prevBody = modalBodyEl ? modalBodyEl.innerHTML : '';

    if (modalTitleEl && modalBodyEl) {
        modalTitleEl.textContent = 'Confirm Logout';
        modalBodyEl.innerHTML = `
            <p style="margin-bottom:20px; font-size:15px; color:var(--grey-mid)">
                Are you sure you want to log out? You will be signed out of your account.
            </p>
            <div style="display:flex; gap:12px; justify-content:flex-end;">
                <button id="cancelLogoutBtn" class="btn outline" style="padding:10px 18px">Cancel</button>
                <button id="confirmLogoutBtn" class="btn btn-danger" style="padding:10px 18px">Logout</button>
            </div>
        `;
    } else {
        if (confirm('Are you sure you want to logout?')) logout();
        return;
    }

    openModal();

    document.getElementById('cancelLogoutBtn').onclick = () => {
        modalTitleEl.textContent = prevTitle;
        modalBodyEl.innerHTML = prevBody;
        if (prevTitle === 'Account Settings') {
            openSettings();
        } else {
            closeModal();
        }
    };

    document.getElementById('confirmLogoutBtn').onclick = () => {
        logout();
        closeModal();
    };
}

function logout() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('authToken');
    sessionStorage.clear();
    showNotification('You have been logged out successfully!', 'success');

    window.location.reload();
}



//view orders [modal]
function openOrders() {
    pushModal('orders');
    if (!requireLogin()) return;

    const orders = getOrders();

    let content = '';

    if (orders.length === 0) {
        content += '<p class="empty-message">No orders yet. Start shopping!</p>';
    } else {
        orders.forEach(order => {
            content += `
                <div style="background:var(--grey-ultralight);padding:24px;margin-bottom:20px">
                    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px">
                        <div>
                            <h3 style="font-size:20px;margin-bottom:8px">Order #${order.id}</h3>
                            <p style="color:var(--grey-mid);font-size:14px">Date: ${order.date}</p>
                        </div>
                        <span style="background:var(--black);color:var(--white);padding:8px 16px;font-size:12px;text-transform:uppercase;letter-spacing:1px;font-weight:600">${order.status}</span>
                    </div>
                    <div style="border-top:1px solid var(--grey-light);padding-top:16px">
                        ${order.items.map(item => `
                            <div style="display:flex;justify-content:space-between;margin-bottom:8px;font-size:14px">
                                <span>${item.name} × ${item.quantity}</span>
                                <span style="font-weight:600">₹${(item.price * item.quantity).toFixed(2)}</span>
                            </div>
                        `).join('')}
                    </div>
                    <div style="text-align:right;margin-top:16px;padding-top:16px;border-top:1px solid var(--grey-light)">
                        <strong style="font-size:22px">Total: ₹${order.total.toFixed(2)}</strong>
                    </div>
                </div>
            `;
        });
    }
    document.getElementById('modalTitle').textContent = 'My Orders';
    document.getElementById('modalBody').innerHTML = content;
    openModal();
}

//view help [modal]
function openHelp() {
    pushModal('help');
    let content = '<p style="text-align:center;margin-bottom:32px;color:var(--grey-mid);font-size:16px">Find answers to frequently asked questions</p>';

    faqData.forEach((faq, index) => {
        content += `
            <div style="border-bottom:1px solid var(--grey-light);padding:20px 0;cursor:pointer" onclick="toggleFAQ(${index})">
                <div style="display:flex;justify-content:space-between;align-items:center;font-weight:600;font-size:16px">
                    <span>${faq.question}</span>
                    <span style="font-size:20px;color:var(--grey-mid)">+</span>
                </div>
                <div class="faq-answer" style="display:none;color:var(--grey-mid);margin-top:16px;line-height:1.8">${faq.answer}</div>
            </div>
        `;
    });

    content += `
        <div style="background:var(--black);color:var(--white);padding:32px;margin-top:32px;text-align:center">
            <h3 style="margin-bottom:16px;font-size:24px">Still need help?</h3>
            <p style="margin-bottom:20px;opacity:0.9">Contact our customer support team</p>
            <p style="margin-bottom:8px"><strong>Email:</strong> support@nenluxe.com</p>
            <p style="margin-bottom:8px"><strong>Phone:</strong> +1 234 567 8900</p>
            <p><strong>Hours:</strong> Mon-Fri, 9AM-6PM EST</p>
        </div>
    `;

    document.getElementById('modalTitle').textContent = 'Help Center';
    document.getElementById('modalBody').innerHTML = content;
    openModal();
}

function toggleFAQ(index) {
    const items = document.querySelectorAll('.faq-answer');
    const currentItem = items[index];
    const isOpen = currentItem.style.display === 'block';

    items.forEach(item => item.style.display = 'none');

    if (!isOpen) {
        currentItem.style.display = 'block';
    }
}

//navigation
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    filterProducts('all');
}

function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

document.getElementById('modal').addEventListener('click', function (e) {
    if (e.target === this) {
        closeModal();
    }
});

//initilazation
window.onload = function () {
    updateCartCount();
    updateWishlistCount();
    loadProducts();
    loadBestsellers();
};