// Shared destinations data for all components
export const destinationsData = [
  {
    id: 'kargil',
    title: 'Kargil',
    subtitle: 'The Gateway to Adventure',
    shortDescription: 'The ancient gateway connecting Ladakh with the rest of the world. A land of dramatic contrast, from lush valleys to stark mountain passes.',
    fullDescription: 'Kargil is more than just a transit point. It is a place of historical significance and breathtaking natural beauty. From the legendary battlefields of Drass to the hidden villages of the Aryan valley, it offers a deep dive into the resilient spirit of the Himalayas. The region is known for its strategic location, rich history, and stunning landscapes that range from green valleys to snow-capped peaks.',
    image: '/dest-kargil.jpg',
    tag: 'Most Authentic',
    features: ['Historic Sites', 'Suru Valley', 'Aryan Valley'],
    highlights: [
      'Drass War Memorial - Second coldest inhabited place',
      'Suru Valley - Lush green valley with stunning views',
      'Aryan Valley - Home to the Dard-Aryan people',
      'Mulbekh Monastery - Ancient rock-carved Buddha',
      'Kargil War Museum - Historical significance',
      'Nun-Kun peaks - Majestic twin peaks'
    ],
    bestTimeToVisit: 'May to October',
    altitude: '2,676 meters (8,780 ft)',
    distanceFromLeh: '204 km (5-6 hours drive)',
    attractions: [
      {
        name: 'Drass War Memorial',
        description: 'Memorial dedicated to soldiers of the Kargil War',
        distance: '60 km from Kargil'
      },
      {
        name: 'Suru Valley',
        description: 'Beautiful valley with Nun-Kun peaks backdrop',
        distance: '15 km from Kargil'
      },
      {
        name: 'Mulbekh Monastery',
        description: '9-meter rock-carved Maitreya Buddha',
        distance: '45 km from Kargil'
      }
    ],
    activities: ['Trekking', 'Cultural Tours', 'Photography', 'Historical Tours'],
    accommodation: 'Hotels, guesthouses, and homestays available',
    localCuisine: 'Kashmiri and Ladakhi cuisine, famous for apricots'
  },
  {
    id: 'leh-ladakh',
    title: 'Leh & Ladakh',
    subtitle: 'Land of High Passes',
    shortDescription: 'The high-altitude heart of the region, where ancient Buddhist culture meets futuristic landscapes.',
    fullDescription: 'Leh is the pulse of Ladakh. Surrounded by peaks, it serves as the perfect base for exploring the high-altitude wonders of the region. Visit the moon-like landscapes of Lamayuru, the crystal waters of Pangong Lake, and the vast sand dunes of Nubra. The region is a perfect blend of adventure, spirituality, and natural beauty, offering experiences that range from monastery visits to high-altitude trekking.',
    image: '/dest-leh.jpg',
    tag: 'Must Visit',
    features: ['Nubra Valley', 'Pangong Lake', 'Ancient Monasteries'],
    highlights: [
      'Pangong Lake - Stunning blue waters at 14,270 ft',
      'Nubra Valley - Cold desert with sand dunes',
      'Khardung La - World\'s highest motorable pass',
      'Thiksey Monastery - Magnificent Buddhist monastery',
      'Shanti Stupa - White-domed peace pagoda',
      'Leh Palace - 17th-century royal palace'
    ],
    bestTimeToVisit: 'May to September',
    altitude: '3,524 meters (11,562 ft)',
    distanceFromLeh: 'Base location',
    attractions: [
      {
        name: 'Pangong Lake',
        description: 'Breathtaking high-altitude lake',
        distance: '160 km from Leh'
      },
      {
        name: 'Nubra Valley',
        description: 'Valley of flowers with double-humped camels',
        distance: '150 km from Leh'
      },
      {
        name: 'Hemis Monastery',
        description: 'Largest and wealthiest monastery in Ladakh',
        distance: '45 km from Leh'
      }
    ],
    activities: ['Motor Biking', 'Trekking', 'Cultural Tours', 'Photography', 'River Rafting'],
    accommodation: 'Wide range from budget to luxury hotels',
    localCuisine: 'Thukpa, Momos, Butter Tea, Skyu'
  },
  {
    id: 'zanskar-valley',
    title: 'Zanskar Valley',
    subtitle: 'The Untouched Frontier',
    shortDescription: 'The hidden frontier. A remote wilderness where time seems to have stood still for centuries.',
    fullDescription: 'Zanskar is for the true explorer. Remote, rugged, and deeply spiritual, it is home to some of the most isolated monasteries in the world. The trek to Phugtal, built into a cliffside cave, is a journey of a lifetime. The valley remains cut off from the rest of the world for nearly 8 months due to heavy snowfall, preserving its pristine beauty and ancient culture.',
    image: '/dest-zanskar.jpg',
    tag: 'Hidden Gem',
    features: ['Phugtal Monastery', 'Padum Valley', 'Shinku La Pass'],
    highlights: [
      'Phugtal Monastery - Cave monastery accessible only by foot',
      'Chadar Trek - Walk on frozen Zanskar River',
      'Padum - Capital of Zanskar region',
      'Karsha Monastery - Largest monastery in Zanskar',
      'Zanskar River - Famous for rafting and Chadar trek',
      'Stongdey Monastery - Ancient hilltop monastery'
    ],
    bestTimeToVisit: 'June to September (Summer), January to February (Chadar Trek)',
    altitude: '3,600 meters (11,800 ft)',
    distanceFromLeh: '240 km (7-8 hours drive)',
    attractions: [
      {
        name: 'Phugtal Monastery',
        description: 'Spectacular cave monastery',
        distance: '2-day trek from Padum'
      },
      {
        name: 'Chadar Trek',
        description: 'Trek on frozen Zanskar River',
        distance: 'Starts from Chilling'
      },
      {
        name: 'Padum',
        description: 'Main town and base for exploration',
        distance: '240 km from Leh'
      }
    ],
    activities: ['Trekking', 'Chadar Trek', 'Cultural Tours', 'Photography', 'River Rafting'],
    accommodation: 'Limited guesthouses and homestays',
    localCuisine: 'Traditional Zanskari food, Butter Tea'
  },
  {
    id: 'nubra-valley',
    title: 'Nubra Valley',
    subtitle: 'The Valley of Flowers',
    shortDescription: 'The valley of flowers. A unique landscape of cold deserts, bactrian camels, and lush orchards.',
    fullDescription: 'Nubra offers a surprising diversity of landscapes. Once a key stop on the Silk Road, it now welcomes travelers with its famous double-humped camels, dramatic vistas, and fertile valleys hidden between towering ridges. The valley is known for its sand dunes at Hunder, hot springs at Panamik, and the stunning Diskit Monastery perched on a hilltop.',
    image: '/dest-nubra.jpg',
    tag: 'Unique Experience',
    features: ['Hunder Dunes', 'Diskit Monastery', 'Panamik Hot Springs'],
    highlights: [
      'Hunder Sand Dunes - Ride double-humped Bactrian camels',
      'Diskit Monastery - 32-meter Maitreya Buddha statue',
      'Panamik Hot Springs - Natural therapeutic springs',
      'Khardung La Pass - Gateway to Nubra Valley',
      'Turtuk Village - Last village before Pakistan border',
      'Sumur Village - Beautiful monastery and gardens'
    ],
    bestTimeToVisit: 'May to September',
    altitude: '3,150 meters (10,330 ft)',
    distanceFromLeh: '150 km (5-6 hours via Khardung La)',
    attractions: [
      {
        name: 'Hunder Sand Dunes',
        description: 'Cold desert with camel rides',
        distance: '10 km from Diskit'
      },
      {
        name: 'Diskit Monastery',
        description: 'Oldest and largest monastery in Nubra',
        distance: '7 km from Hunder'
      },
      {
        name: 'Turtuk',
        description: 'Balti village with unique culture',
        distance: '90 km from Diskit'
      }
    ],
    activities: ['Camel Safari', 'Motor Biking', 'Cultural Tours', 'Photography', 'Hot Springs'],
    accommodation: 'Camps, hotels, and homestays',
    localCuisine: 'Balti cuisine, Apricot products, Local bread'
  }
];

// Helper function to get destination by ID
export const getDestinationById = (id) => {
  return destinationsData.find(dest => dest.id === id);
};

// Helper function to get related destinations
export const getRelatedDestinations = (currentId, count = 3) => {
  return destinationsData
    .filter(dest => dest.id !== currentId)
    .slice(0, count);
};
