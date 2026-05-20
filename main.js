const destinationData = {
    'goa-india': {
        name: 'Goa, India',
        image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/fc/f0/goa.jpg?w=1200&h=700&s=1',
        description: 'Goa is known for its sun-soaked beaches, Portuguese heritage, and buzzing nightlife. It combines easygoing beach vibes with culture, seafood cuisine, and adventure.',
        attractions: ['Calangute Beach', 'Fort Aguada', 'Dudhsagar Falls', 'Basilica of Bom Jesus'],
        localFood: 'Fish Curry, Prawns, Bebinca, Feni, Seafood Thali',
        budget: 'Low',
        travelTips: 'Visit during monsoon for waterfalls and avoid peak crowds. Respect local customs at churches. Best time: November to May.'
    },
    'kerala-india': {
        name: 'Kerala, India',
        image: 'https://www.cholantours.com/blog/wp-content/uploads/2025/11/Best-Places-To-Visit-In-Kerala-For-World-Travellers.webp',
        description: 'Kerala is a lush, tranquil state celebrated for its backwaters, hill stations, wildlife, and cultural rhythms. Perfect for slow travel and nature lovers.',
        attractions: ['Backwaters of Alleppey', 'Munnar Tea Gardens', 'Periyar Wildlife Sanctuary', 'Kovalam Beach'],
        localFood: 'Appam with Stew, Puttu, Avial, Fish Curry, Sadhya',
        budget: 'Medium',
        travelTips: 'Take a houseboat cruise in the backwaters and visit during Onam festival for cultural experiences. Best time: September to March.'
    },
    'rajasthan-india': {
        name: 'Rajasthan, India',
        image: 'https://s7ap1.scene7.com/is/image/incredibleindia/2-mehrangarh-fort-jodhpur-rajasthan-city-hero?qlt=82&ts=1726660925514',
        description: 'Rajasthan offers royal palaces, desert landscapes, and colorful traditions. It is a destination for history, architecture, and unforgettable cultural festivals.',
        attractions: ['Amber Fort', 'City Palace Jaipur', 'Jaisalmer Fort', 'Udaipur City Palace'],
        localFood: 'Dal Baati Churma, Laal Maas, Gatte ki Sabzi, Ker Sangri, Rajasthani Thali',
        budget: 'Medium',
        travelTips: 'Stay in heritage hotels and visit during desert festivals. Best time: October to March.'
    },
    'himachal-pradesh-india': {
        name: 'Himachal Pradesh, India',
        image: 'https://www.himachal.exploreindia.in/wordpress/wp-content/uploads/2013/05/hp1.jpg',
        description: 'Himachal Pradesh is a hill station paradise with snowy mountains, alpine forests, and scenic valleys. Ideal for trekking, meditation, and peaceful retreats.',
        attractions: ['Shimla', 'Manali', 'Dharamshala', 'Rohtang Pass', 'Solang Valley'],
        localFood: 'Dham, Chana Madra, Siddu, Patande, Apple Cider',
        budget: 'Medium',
        travelTips: 'Carry warm clothes and obtain inner line permits for restricted areas. Best time: March to June, September to November.'
    },
    'uttarakhand-india': {
        name: 'Uttarakhand, India',
        image: 'https://static.toiimg.com/thumb/103720915/Tapovan-Uttarakhand.jpg?width=636&height=358&resize=4',
        description: 'Uttarakhand is a spiritual and scenic retreat, offering riverside ghats, hill towns, and pilgrimage routes across the Himalayas.',
        attractions: ['Rishikesh', 'Haridwar', 'Nainital', 'Mussoorie', 'Valley of Flowers'],
        localFood: 'Aloo Ke Gutke, Kafuli, Jhangora, Bal Mithai, Garhwali Cuisine',
        budget: 'Low',
        travelTips: 'Visit during Char Dham Yatra and stay in ashrams for a spiritual experience. Best time: March to June.'
    },
    'jammu-kashmir-india': {
        name: 'Jammu & Kashmir, India',
        image: 'https://www.tourmyindia.com/blog//wp-content/uploads/2025/10/Sonmarg-Jammu-and-Kashmir.jpg',
        description: 'Jammu & Kashmir captivates travelers with snow-capped peaks, serene lakes, and Mughal gardens. A dream destination for nature and romantic getaways.',
        attractions: ['Dal Lake', 'Gulmarg', 'Pahalgam', 'Srinagar Mughal Gardens', 'Sonamarg'],
        localFood: 'Roganjosh, Yakhni, Dum Aloo, Kashmiri Pulao, Kahwa Tea',
        budget: 'Medium',
        travelTips: 'Obtain proper permits, respect local culture, and travel between April and October for best weather.'
    },
    'delhi-india': {
        name: 'Delhi, India',
        image: 'https://s7ap1.scene7.com/is/image/incredibleindia/red-fort-delhi1-attr-hero?qlt=82&ts=1742170492880',
        description: 'Delhi is a rich blend of history and modern energy, with ancient monuments, bustling markets, and world-class cuisine.',
        attractions: ['Red Fort', 'India Gate', 'Qutub Minar', 'Lotus Temple', 'Chandni Chowk'],
        localFood: 'Butter Chicken, Chole Bhature, Paratha, Kulfi, Street Food',
        budget: 'Low',
        travelTips: 'Use the metro for easy transportation and visit between October and March. Explore heritage sites early in the morning.'
    },
    'mumbai-india': {
        name: 'Mumbai, India',
        image: 'https://assets.cntraveller.in/photos/67060b030871a221e9f6bd88/2:1/w_2560%2Cc_limit/GettyImages-520120864.jpg',
        description: 'Mumbai pulses with Bollywood glamour, colonial architecture, coastal promenades, and a legendary street food scene.',
        attractions: ['Gateway of India', 'Marine Drive', 'Elephanta Caves', 'Bollywood Studios'],
        localFood: 'Vada Pav, Pav Bhaji, Bhel Puri, Misal Pav, Seafood',
        budget: 'Medium',
        travelTips: 'Use local trains for fast travel and enjoy the city during November to May for pleasant weather.'
    },
    'bangalore-india': {
        name: 'Bangalore, India',
        image: 'https://www.vaishnavikrishnabrundavan.in/images/vaishnavi/bangalore.webp',
        description: 'Bangalore offers a mix of leafy parks, tech hubs, and vibrant nightlife. Known as India’s Silicon Valley, it also delivers charming heritage and gardens.',
        attractions: ['Cubbon Park', 'Bangalore Palace', 'ISKCON Temple', 'Lalbagh Botanical Garden'],
        localFood: 'Masala Dosa, Bisi Bele Bath, Filter Coffee, Ragi Mudde, Biryani',
        budget: 'Low',
        travelTips: 'Explore during Dasara festival and enjoy the city’s cafe culture. Best time: October to March.'
    },
    'chennai-india': {
        name: 'Chennai, India',
        image: 'https://www.agoda.com/wp-content/uploads/2024/03/Chennai-India-scaled-e1710033849588.jpg',
        description: 'Chennai is a cultural gateway to South India, with beautiful beaches, temples, classical music, and spicy Chettinad cuisine.',
        attractions: ['Marina Beach', 'Kapaleeshwarar Temple', 'Fort St. George', 'San Thome Basilica'],
        localFood: 'Idli Sambar, Dosa, Chettinad Cuisine, Filter Coffee, Pongal',
        budget: 'Low',
        travelTips: 'Visit during Pongal festival and explore colonial architecture. Best time: December to March.'
    },
    'kolkata-india': {
        name: 'Kolkata, India',
        image: 'https://www.oyorooms.com/travel-guide/wp-content/uploads/2021/05/Visit-in-Kolkata-1.jpg',
        description: 'Kolkata offers literary heritage, colonial-era landmarks, colorful festivals, and a rich Bengali food culture.',
        attractions: ['Victoria Memorial', 'Howrah Bridge', 'Kalighat Temple', 'South City Mall'],
        localFood: 'Rosogolla, Shorshe Ilish, Phuchka, Biryani, Sandesh',
        budget: 'Low',
        travelTips: 'Visit during Durga Puja and take tram rides to explore the city. Best time: October to March.'
    },
    'agra-india': {
        name: 'Agra, India',
        image: 'https://s7ap1.scene7.com/is/image/incredibleindia/taj-mahal-agra-uttar-pradesh-city-1-hero?qlt=82&ts=1726650403456',
        description: 'Agra is the home of the iconic Taj Mahal and offers remarkable Mughal architecture and marble craftsmanship.',
        attractions: ['Taj Mahal', 'Agra Fort', 'Fatehpur Sikri', 'Itmad-ud-Daulah'],
        localFood: 'Petha, Dal Moth, Bedai, Paratha, Kebabs',
        budget: 'Low',
        travelTips: 'Visit at sunrise or sunset for the best Taj Mahal views and shop for marble crafts. Best time: October to March.'
    },
    'jaipur-india': {
        name: 'Jaipur, India',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuDD8CIjBDuVukV24jBDSDnW6-DUu3qrzpeQ&s',
        description: 'Jaipur is the Pink City, famed for its royal forts, palaces, and vibrant markets with traditional handicrafts.',
        attractions: ['Hawa Mahal', 'Amber Fort', 'City Palace', 'Jantar Mantar', 'Jal Mahal'],
        localFood: 'Dal Baati Churma, Laal Maas, Gatte ki Sabzi, Rajasthani Sweets',
        budget: 'Low',
        travelTips: 'Stay in havelis and visit during the elephant festival. Best time: October to March.'
    },
    'varanasi-india': {
        name: 'Varanasi, India',
        image: 'https://s7ap1.scene7.com/is/image/incredibleindia/manikarnika-ghat-city-hero?qlt=82&ts=1727959374496',
        description: 'Varanasi is one of the world’s oldest cities and a spiritual heart of India, centered around the majestic Ganges River.',
        attractions: ['Ganges Ghats', 'Kashi Vishwanath Temple', 'Sarnath', 'Ramnagar Fort'],
        localFood: 'Kachori, Banarasi Paan, Rabri, Lassi, Street Food',
        budget: 'Low',
        travelTips: 'Take a boat ride on the Ganges and visit during festivals. Best time: October to March.'
    },
    'amritsar-india': {
        name: 'Amritsar, India',
        image: 'https://whyweseek.com/wp-content/uploads/2018/03/Golden-Temple-at-Night-Amritsar.jpg',
        description: 'Amritsar is a spiritual city known for the Golden Temple, stirring history, and Punjabi hospitality.',
        attractions: ['Golden Temple', 'Jallianwala Bagh', 'Wagah Border', 'Partition Museum'],
        localFood: 'Sarson da Saag, Makki di Roti, Kulcha, Lassi, Chole Bhature',
        budget: 'Low',
        travelTips: 'Visit the Golden Temple early morning and experience the Wagah border ceremony. Best time: October to March.'
    },
    'mysore-india': {
        name: 'Mysore, India',
        image: 'https://content.r9cdn.net/rimg/dimg/43/2c/fe92dfc3-lm-48454-167a97bd72f.jpg?width=1366&height=768&xhint=1488&yhint=1244&crop=true',
        description: 'Mysore is famous for its grand palace, royal festivals, and classical crafts, offering a calm cultural escape.',
        attractions: ['Mysore Palace', 'Chamundi Hill', 'Brindavan Gardens', 'Jaganmohan Palace'],
        localFood: 'Mysore Pak, Kosambari, Bisi Bele Bath, Maddur Vada, Filter Coffee',
        budget: 'Low',
        travelTips: 'Visit during the Dasara festival and explore sandalwood factories. Best time: October to March.'
    },
    'hyderabad-india': {
        name: 'Hyderabad, India',
        image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/98/f7/df/charminar.jpg?w=600&h=500&s=1',
        description: 'Hyderabad blends historic monuments, bustling bazaars, and the iconic flavors of Hyderabadi biryani.',
        attractions: ['Charminar', 'Golconda Fort', 'Hussain Sagar', 'Salar Jung Museum'],
        localFood: 'Hyderabadi Biryani, Haleem, Irani Chai, Double Ka Meetha, Kebabs',
        budget: 'Low',
        travelTips: 'Try pearl shopping and visit during Ramzan for a special atmosphere. Best time: October to March.'
    },
    'ahmedabad-india': {
        name: 'Ahmedabad, India',
        image: 'https://www.mistay.in/travel-blog/content/images/2021/08/Lake-Kankaria-I-MiStay.jpeg',
        description: 'Ahmedabad is a historic city with lively markets, ancient stepwells, and delicious Gujarati cuisine.',
        attractions: ['Sabarmati Ashram', 'Kankaria Lake', 'Sidi Saiyyed Mosque', 'Calico Museum'],
        localFood: 'Dhokla, Khakra, Thepla, Fafda, Undhiyu',
        budget: 'Low',
        travelTips: 'Explore textile markets and visit during Uttarayan kite festival. Best time: October to March.'
    },
    'pune-india': {
        name: 'Pune, India',
        image: 'https://www.constructionworld.in/assets/uploads/707bc047df3a846cc4b1b9ba4b0ed587.webp',
        description: 'Pune is a youthful city with historic forts, educational heritage, and a booming cultural scene.',
        attractions: ['Aga Khan Palace', 'Shaniwar Wada', 'Parvati Hill', 'Pune Okayama Friendship Garden'],
        localFood: 'Misal Pav, Poha, Thalipeeth, Shrikhand, Puran Poli',
        budget: 'Low',
        travelTips: 'Visit during Ganesh festival and explore the city’s educational neighborhoods. Best time: October to May.'
    },
    'darjeeling-india': {
        name: 'Darjeeling, India',
        image: 'https://www.sterlingholidays.com/blog/wp-content/uploads/2024/12/Darjeeling-Winter-Campaign-Blog.jpg',
        description: 'Darjeeling is a charming hill station known for tea gardens, mountain vistas, and the historic toy train.',
        attractions: ['Tiger Hill', 'Batasia Loop', 'Peace Pagoda', 'Darjeeling Himalayan Railway'],
        localFood: 'Momos, Thukpa, Gundruk, Kinema, Darjeeling Tea',
        budget: 'Medium',
        travelTips: 'Take the toy train ride and visit during the tea festival. Best time: March to May, September to November.'
    }
};

function getDestinationSlug(name) {
    return name.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function initializeDestinationNavigation() {
    const cards = document.querySelectorAll('.destination-card');
    cards.forEach(card => {
        const title = card.querySelector('h3');
        if (!title) return;
        const slug = getDestinationSlug(title.textContent);
        const targetUrl = `destination.html?dest=${slug}`;
        card.style.cursor = 'pointer';
        card.addEventListener('click', function(event) {
            if (event.target.closest('.view-more-btn')) return;
            window.location.href = targetUrl;
        });
        let viewMoreButton = card.querySelector('.view-more-btn');
        if (viewMoreButton) {
            viewMoreButton.href = targetUrl;
        } else {
            viewMoreButton = document.createElement('a');
            viewMoreButton.className = 'view-more-btn';
            viewMoreButton.href = targetUrl;
            viewMoreButton.textContent = 'View Details';
            viewMoreButton.style.cssText = 'display: inline-block; margin-top: 10px; padding: 10px 14px; background: #667eea; color: #fff; border-radius: 6px; text-decoration: none; font-size: 14px;';
            card.appendChild(viewMoreButton);
        }
    });
}

function loadDestinationDetails() {
    const container = document.getElementById('destinationDetailContainer');
    if (!container) return;

    const params = new URLSearchParams(window.location.search);
    const destinationKey = params.get('dest');
    const destination = destinationKey ? destinationData[destinationKey] : null;

    if (!destination) {
        container.innerHTML = `
            <div class="destination-detail-card">
                <h2>Destination not found</h2>
                <p>Please choose a destination from the main destinations page.</p>
                <a href="destinations.html" class="view-more-btn">Back to Destinations</a>
            </div>
        `;
        return;
    }

    container.innerHTML = `
        <div class="destination-detail-card">
            <img src="${destination.image}" alt="${destination.name}" onerror="this.src='https://via.placeholder.com/900x450?text=Image+Unavailable';">
            <div class="destination-detail-content">
                <span class="destination-badge">${destination.budget} Budget</span>
                <h1>${destination.name}</h1>
                <p class="destination-description">${destination.description}</p>
                <div class="destination-detail-grid">
                    <div>
                        <h3>Top Attractions</h3>
                        <ul>
                            ${destination.attractions.map(item => `<li>${item}</li>`).join('')}
                        </ul>
                    </div>
                    <div>
                        <h3>Local Food</h3>
                        <p>${destination.localFood}</p>
                        <h3>Travel Tips</h3>
                        <p>${destination.travelTips}</p>
                    </div>
                </div>
                <a href="destinations.html" class="view-more-btn">Back to Destinations</a>
            </div>
        </div>
    `;
}

document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    updateActiveNavLink();
    initializeLoginState();
    initializeDestinationNavigation();
    loadDestinationDetails();
});

function initializeNavigation() {
    const navMenu = document.querySelector('.nav-menu');
    const navContainer = document.querySelector('.nav-container');

    if (window.innerWidth <= 768) {
        createHamburgerMenu();
    }

    window.addEventListener('resize', function() {
        if (window.innerWidth <= 768) {
            createHamburgerMenu();
        }
    });
}

function createHamburgerMenu() {
    if (document.querySelector('.hamburger')) return;

    const nav = document.querySelector('.nav-container');
    const hamburger = document.createElement('button');
    hamburger.className = 'hamburger';
    hamburger.innerHTML = '☰';
    hamburger.setAttribute('aria-label', 'Toggle menu');

    hamburger.addEventListener('click', function() {
        const navMenu = document.querySelector('.nav-menu');
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    nav.appendChild(hamburger);
}

function updateActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html') || (currentPage === 'destination.html' && href === 'destinations.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

function formatCurrency(amount) {
    return '₹' + Math.round(amount).toLocaleString('en-IN');
}

function showNotification(message, type = 'success') {
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        background-color: ${type === 'success' ? '#27ae60' : '#e74c3c'};
        color: white;
        border-radius: 5px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.2);
        z-index: 9999;
        animation: slideIn 0.3s ease;
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
    
    .hamburger {
        display: none;
        background: none;
        border: none;
        font-size: 24px;
        cursor: pointer;
        color: #333;
    }
    
    @media (max-width: 768px) {
        .hamburger {
            display: block;
        }
        
        .nav-menu {
            position: absolute;
            top: 70px;
            left: 0;
            right: 0;
            background-color: white;
            flex-direction: column;
            width: 100%;
            display: none;
            padding: 20px 0;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        
        .nav-menu.active {
            display: flex;
        }
    }
`;

function initializeLoginState() {
    const currentUser = localStorage.getItem('currentLoggedInUser');
    const loginBtn = document.querySelector('.login-btn');

    if (currentUser && loginBtn) {
        const navMenu = loginBtn.parentElement;
        loginBtn.remove();

        createSettingsIcon(navMenu, currentUser);
    }
}

function createSettingsIcon(navMenu, userName) {
    const settingsContainer = document.createElement('div');
    settingsContainer.className = 'settings-container';
    settingsContainer.style.cssText = `
        position: relative;
        display: inline-block;
    `;

    const settingsBtn = document.createElement('button');
    settingsBtn.className = 'settings-btn';
    settingsBtn.innerHTML = '⚙️';
    settingsBtn.setAttribute('title', 'Settings');
    settingsBtn.style.cssText = `
        background: none;
        border: none;
        font-size: 24px;
        cursor: pointer;
        padding: 5px 10px;
        border-radius: 50%;
        transition: all 0.3s ease;
    `;

    settingsBtn.addEventListener('hover', function() {
        this.style.backgroundColor = '#f0f0f0';
    });

    settingsBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        toggleSettingsMenu();
    });

    const dropdownMenu = document.createElement('div');
    dropdownMenu.className = 'settings-dropdown';
    dropdownMenu.style.cssText = `
        position: absolute;
        top: 100%;
        right: 0;
        background: white;
        border: 1px solid #ddd;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        min-width: 220px;
        z-index: 1000;
        display: none;
        margin-top: 10px;
        animation: dropdownSlideIn 0.3s ease;
    `;

    const userInfo = document.createElement('div');
    userInfo.style.cssText = `
        padding: 15px;
        border-bottom: 1px solid #eee;
        font-size: 13px;
        color: #666;
    `;
    userInfo.innerHTML = `
        <div style="font-weight: 500; color: #333; margin-bottom: 3px;">Logged in as:</div>
        <div style="word-break: break-all;">${userName}</div>
    `;

    const menuItems = document.createElement('div');
    menuItems.style.cssText = `
        padding: 10px 0;
    `;

    const profileItem = createSettingsMenuItem('👤 View Profile', function() {
        window.location.href = 'profile.html';
        closeSettingsMenu();
    });

    const passwordItem = createSettingsMenuItem('🔐 Change Password', function() {
        showChangePasswordModal();
        closeSettingsMenu();
    });

    const preferencesItem = createSettingsMenuItem('⚙️ Preferences', function() {
        showPreferencesModal();
        closeSettingsMenu();
    });

    const logoutItem = createSettingsMenuItem('🚪 Logout', function() {
        handleLogout();
    }, true);

    menuItems.appendChild(profileItem);
    menuItems.appendChild(passwordItem);
    menuItems.appendChild(preferencesItem);
    menuItems.appendChild(logoutItem);

    dropdownMenu.appendChild(userInfo);
    dropdownMenu.appendChild(menuItems);

    settingsContainer.appendChild(settingsBtn);
    settingsContainer.appendChild(dropdownMenu);
    navMenu.appendChild(settingsContainer);

    document.addEventListener('click', function(e) {
        if (!settingsContainer.contains(e.target)) {
            closeSettingsMenu();
        }
    });
}

function createSettingsMenuItem(text, callback, isLogout = false) {
    const item = document.createElement('button');
    item.innerHTML = text;
    item.style.cssText = `
        width: 100%;
        padding: 12px 15px;
        background: none;
        border: none;
        text-align: left;
        cursor: pointer;
        font-size: 14px;
        color: ${isLogout ? '#e74c3c' : '#333'};
        transition: all 0.2s ease;
        border-bottom: 1px solid #f0f0f0;
    `;

    item.addEventListener('mouseover', function() {
        this.style.backgroundColor = isLogout ? '#ffe6e6' : '#f5f5f5';
    });

    item.addEventListener('mouseout', function() {
        this.style.backgroundColor = 'transparent';
    });

    item.addEventListener('click', callback);

    return item;
}

function toggleSettingsMenu() {
    const menu = document.querySelector('.settings-dropdown');
    if (menu) {
        if (menu.style.display === 'none') {
            menu.style.display = 'block';
        } else {
            menu.style.display = 'none';
        }
    }
}

function closeSettingsMenu() {
    const menu = document.querySelector('.settings-dropdown');
    if (menu) {
        menu.style.display = 'none';
    }
}

function showChangePasswordModal() {
    const modal = document.createElement('div');
    modal.className = 'password-modal';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 2000;
    `;

    const content = document.createElement('div');
    content.style.cssText = `
        background: white;
        padding: 30px;
        border-radius: 12px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.2);
        max-width: 400px;
        width: 90%;
    `;

    content.innerHTML = `
        <h3 style="margin-top: 0; color: #333; margin-bottom: 20px;">🔐 Change Password</h3>
        <div style="margin-bottom: 15px;">
            <label style="display: block; margin-bottom: 5px; color: #666; font-size: 14px;">Current Password</label>
            <input type="password" id="currentPass" placeholder="Enter current password" style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 5px; box-sizing: border-box;">
        </div>
        <div style="margin-bottom: 15px;">
            <label style="display: block; margin-bottom: 5px; color: #666; font-size: 14px;">New Password</label>
            <input type="password" id="newPass" placeholder="Enter new password" style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 5px; box-sizing: border-box;">
        </div>
        <div style="margin-bottom: 20px;">
            <label style="display: block; margin-bottom: 5px; color: #666; font-size: 14px;">Confirm Password</label>
            <input type="password" id="confirmPass" placeholder="Confirm new password" style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 5px; box-sizing: border-box;">
        </div>
        <div style="display: flex; gap: 10px; justify-content: flex-end;">
            <button id="cancelBtn" style="padding: 10px 20px; border: 1px solid #ddd; background: #f5f5f5; border-radius: 5px; cursor: pointer; font-weight: 500;">Cancel</button>
            <button id="updateBtn" style="padding: 10px 20px; background: #667eea; color: white; border: none; border-radius: 5px; cursor: pointer; font-weight: 500;">Update</button>
        </div>
    `;

    modal.appendChild(content);
    document.body.appendChild(modal);

    document.getElementById('cancelBtn').addEventListener('click', function() {
        modal.remove();
    });

    document.getElementById('updateBtn').addEventListener('click', function() {
        const currentPass = document.getElementById('currentPass').value;
        const newPass = document.getElementById('newPass').value;
        const confirmPass = document.getElementById('confirmPass').value;

        if (!currentPass || !newPass || !confirmPass) {
            showNotification('All fields are required', 'error');
            return;
        }

        if (newPass !== confirmPass) {
            showNotification('New passwords do not match', 'error');
            return;
        }

        if (newPass.length < 8) {
            showNotification('New password must be at least 8 characters', 'error');
            return;
        }

        modal.remove();
        showNotification('Password updated successfully!', 'success');
    });

    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

function showPreferencesModal() {
    const modal = document.createElement('div');
    modal.className = 'preferences-modal';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 2000;
        overflow-y: auto;
    `;

    const content = document.createElement('div');
    content.style.cssText = `
        background: white;
        padding: 30px;
        border-radius: 12px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.2);
        max-width: 450px;
        width: 90%;
        margin: 20px 0;
    `;

    content.innerHTML = `
        <h3 style="margin-top: 0; color: #333; margin-bottom: 20px;">⚙️ Preferences</h3>
        
        <div style="margin-bottom: 20px;">
            <label style="display: flex; align-items: center; cursor: pointer;">
                <input type="checkbox" id="emailNotif" style="margin-right: 10px; cursor: pointer;" checked>
                <span style="color: #333; font-size: 14px;">Email Notifications</span>
            </label>
            <p style="margin: 5px 0 0 30px; color: #888; font-size: 12px;">Receive updates about your trips and offers</p>
        </div>
        
        <div style="margin-bottom: 20px;">
            <label style="display: flex; align-items: center; cursor: pointer;">
                <input type="checkbox" id="smsNotif" style="margin-right: 10px; cursor: pointer;">
                <span style="color: #333; font-size: 14px;">SMS Notifications</span>
            </label>
            <p style="margin: 5px 0 0 30px; color: #888; font-size: 12px;">Get SMS updates for important travel info</p>
        </div>
        
        <div style="margin-bottom: 20px;">
            <label style="display: flex; align-items: center; cursor: pointer;">
                <input type="checkbox" id="newsletter" style="margin-right: 10px; cursor: pointer;" checked>
                <span style="color: #333; font-size: 14px;">Subscribe to Newsletter</span>
            </label>
            <p style="margin: 5px 0 0 30px; color: #888; font-size: 12px;">Weekly travel tips and destination guides</p>
        </div>
        
        <div style="margin-bottom: 20px; padding-top: 15px; border-top: 1px solid #eee;">
            <label style="display: block; margin-bottom: 8px; color: #666; font-size: 14px; font-weight: 500;">Default Currency</label>
            <select id="currency" style="width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 5px; font-size: 14px;">
                <option selected>Indian Rupee (₹)</option>
                <option>US Dollar ($)</option>
                <option>Euro (€)</option>
                <option>British Pound (£)</option>
            </select>
        </div>
        
        <div style="display: flex; gap: 10px; justify-content: flex-end; margin-top: 25px;">
            <button id="prefCancelBtn" style="padding: 10px 20px; border: 1px solid #ddd; background: #f5f5f5; border-radius: 5px; cursor: pointer; font-weight: 500;">Cancel</button>
            <button id="prefSaveBtn" style="padding: 10px 20px; background: #667eea; color: white; border: none; border-radius: 5px; cursor: pointer; font-weight: 500;">Save</button>
        </div>
    `;

    modal.appendChild(content);
    document.body.appendChild(modal);

    const emailNotif = localStorage.getItem('emailNotif');
    const smsNotif = localStorage.getItem('smsNotif');
    const newsletter = localStorage.getItem('newsletter');
    const currencyValue = localStorage.getItem('currency');
    document.getElementById('emailNotif').checked = emailNotif === 'true' || emailNotif === null;
    document.getElementById('smsNotif').checked = smsNotif === 'true';
    document.getElementById('newsletter').checked = newsletter === 'true' || newsletter === null;
    document.getElementById('currency').value = currencyValue || 'Indian Rupee (₹)';

    document.getElementById('prefCancelBtn').addEventListener('click', function() {
        modal.remove();
    });

    document.getElementById('prefSaveBtn').addEventListener('click', function() {
        localStorage.setItem('emailNotif', document.getElementById('emailNotif').checked ? 'true' : 'false');
        localStorage.setItem('smsNotif', document.getElementById('smsNotif').checked ? 'true' : 'false');
        localStorage.setItem('newsletter', document.getElementById('newsletter').checked ? 'true' : 'false');
        localStorage.setItem('currency', document.getElementById('currency').value);
        modal.remove();
        showNotification('Preferences saved successfully!', 'success');
    });

    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

function showLogoutConfirmationModal() {
    closeSettingsMenu();

    const overlay = document.createElement('div');
    overlay.className = 'logout-modal-overlay';
    overlay.innerHTML = `
        <div class="logout-modal">
            <h3>Are you sure you want to logout?</h3>
            <div class="logout-modal-actions">
                <button class="logout-modal-btn logout-modal-confirm">Logout</button>
                <button class="logout-modal-btn logout-modal-cancel">Cancel</button>
            </div>
        </div>
    `;

    document.body.appendChild(overlay);

    const confirmButton = overlay.querySelector('.logout-modal-confirm');
    const cancelButton = overlay.querySelector('.logout-modal-cancel');

    function closeModal() {
        overlay.remove();
    }

    confirmButton.addEventListener('click', function() {
        closeModal();
        localStorage.removeItem('currentLoggedInUser');
        showNotification('Logged out successfully!', 'success');
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1000);
    });

    cancelButton.addEventListener('click', closeModal);
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) {
            closeModal();
        }
    });
}

function handleLogout() {
    showLogoutConfirmationModal();
}

const dropdownStyle = document.createElement('style');
dropdownStyle.textContent = `
    @keyframes dropdownSlideIn {
        from {
            opacity: 0;
            transform: translateY(-10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .settings-btn:hover {
        background-color: #f0f0f0 !important;
        transform: scale(1.1);
    }
`;
document.head.appendChild(dropdownStyle)
document.head.appendChild(style);