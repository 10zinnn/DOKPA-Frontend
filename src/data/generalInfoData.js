export const generalInfoData = {
  acclimatization: {
    id: 'acclimatization',
    title: 'Altitude & Acclimatization',
    subtitle: 'Golden rules for staying healthy above 3,500 meters',
    icon: '🏔️',
    heroImage: '/hero-bg.jpg',
    introduction: 'Leh sits at an altitude of 3,524 meters (11,562 ft), where atmospheric pressure is significantly lower and oxygen molecules are roughly 35% less dense than at sea level. Proper acclimatization is not just advice—it is the cornerstone of a safe Himalayan expedition.',
    keyRules: [
      {
        title: 'The Mandatory 48-Hour Rest Rule',
        description: 'When flying into Leh, take the first 48 hours completely easy. Avoid stair climbing, brisk walking, heavy exertion, or immediate road trips across high passes.',
        icon: '⏱️'
      },
      {
        title: 'Hydration Overdrive',
        description: 'Drink 4 to 5 liters of fluids daily (water, herbal teas, electral or lemon honey water). The dry mountain air dehydrates you faster without noticeable sweating.',
        icon: '💧'
      },
      {
        title: 'Climb High, Sleep Low',
        description: 'On treks, gain elevation during day hikes but descend to lower camp altitudes to sleep. This stimulates red blood cell production safely.',
        icon: '🏕️'
      },
      {
        title: 'Know the Symptoms of AMS',
        description: 'Mild headaches, nausea, dizziness, insomnia, and fatigue are early warning signs of Acute Mountain Sickness (AMS). Never conceal symptoms from your guide.',
        icon: '🩺'
      }
    ],
    medicalAdvice: {
      preventativeMedication: 'Acetazolamide (Diamox) is commonly used to accelerate acclimatization (typically 125mg or 250mg twice daily starting 24 hours prior to arrival). Consult your personal physician before taking it, especially if you have sulfur allergies.',
      medicalFacilities: 'Leh has well-equipped hospitals including SNM District Hospital and military medical facilities with hyperbaric chambers and high-altitude emergency wings.',
      emergencyProtocol: 'All Dokpa expedition leaders carry pulse oximeters, emergency supplemental oxygen cylinders, and wilderness medical kits. The universal rule: If symptoms worsen, descent is mandatory.'
    }
  },

  permits: {
    id: 'permits',
    title: 'Permits & Protected Areas',
    subtitle: 'Navigating Inner Line Permits (ILP) and border regulations',
    icon: '📄',
    heroImage: '/dest-nubra.jpg',
    introduction: 'Due to Ladakh\'s strategic geopolitical location bordering Tibet/China and Pakistan, several sensitive and pristine valleys require official travel permits issued by the District Magistrate of Leh.',
    regionsRequiringPermits: [
      {
        area: 'Nubra Valley & Siachen Base Camp',
        highlights: 'Diskit, Hunder Sand Dunes, Turtuk, Panamik hot springs, and Warshi',
        permitType: 'Inner Line Permit (ILP) / PAP'
      },
      {
        area: 'Pangong Tso & Changthang Plateau',
        highlights: 'Lukung, Spangmik, Man, Merak, Chushul, and Tsaga La',
        permitType: 'Inner Line Permit (ILP)'
      },
      {
        area: 'Tso Moriri & Tso Kar Lakes',
        highlights: 'Korzok, Chumathang, Mahe, and Kyagar Tso',
        permitType: 'Inner Line Permit (ILP)'
      },
      {
        area: 'Hanle & Umling La',
        highlights: 'Indian Astronomical Observatory, highest motorable pass in the world (19,024 ft)',
        permitType: 'Special Border Area Permit'
      },
      {
        area: 'Dha-Hanu (Aryan Valley)',
        highlights: 'Brokpa indigenous villages along the lower Indus River basin',
        permitType: 'Inner Line Permit (ILP)'
      }
    ],
    requirements: [
      'Valid Government Photo ID (Aadhaar / Voter ID / Passport for Indian nationals)',
      'Valid Passport with Indian Visa / OCI card for Foreign Nationals (Note: Foreigners are currently restricted from Hanle and certain sensitive border roads)',
      'Multiple photocopies of permits and identity documents for military checkpoints along mountain passes',
      'Dokpa Expeditions arranges all paperwork and environment fee clearances seamlessly on behalf of our travelers.'
    ]
  },

  seasons: {
    id: 'seasons',
    title: 'Seasons & Climate Guide',
    subtitle: 'When to visit: From blooming apricots to frozen rivers',
    icon: '🌤️',
    heroImage: '/dest-leh.jpg',
    seasonsList: [
      {
        name: 'Summer (June to September)',
        tag: 'Peak Trekking & Mountaineering',
        temperature: 'Day: 18°C to 25°C | Night: 5°C to 12°C',
        description: 'Roads via Manali-Leh and Srinagar-Leh are fully open. High mountain passes are clear of heavy snow. Ideal for trekking (Markha Valley, Kang Yatse, Stok Range), high-altitude lakes, and vibrant monastic festivals like Hemis and Karsha Gustor.',
        recommendedFor: 'Trekking, Peak Climbing, Rafting, Motorbiking'
      },
      {
        name: 'Autumn (October to early November)',
        tag: 'Golden Poplars & Crisp Clear Skies',
        temperature: 'Day: 10°C to 16°C | Night: -2°C to 5°C',
        description: 'The crowds thin out dramatically. The Indus and Zanskar valleys turn into radiant shades of gold, amber, and deep turquoise. Night skies are crystal clear with phenomenal astrophotography conditions.',
        recommendedFor: 'Photography, Cultural Tours, Astrophotography, Road Expeditions'
      },
      {
        name: 'Winter (December to February)',
        tag: 'Extreme Expeditions & Wildlife',
        temperature: 'Day: -5°C to 2°C | Night: -15°C to -25°C',
        description: 'The real Trans-Himalayan winter. The Zanskar River freezes to form the legendary Chadar route. Elusive snow leopards descend to lower valleys in Hemis National Park, making winter the prime season for wildlife tracking.',
        recommendedFor: 'Chadar Frozen River Trek, Snow Leopard Expeditions, Winter Monastery Festivals'
      },
      {
        name: 'Spring (April to May)',
        tag: 'Apricot Blossoms & Awakening Valleys',
        temperature: 'Day: 12°C to 18°C | Night: 0°C to 6°C',
        description: 'The snow begins to melt on lower hillsides, and apricot orchards in Kargil, Turtuk, and Sham Valley burst into magnificent pink and white blossoms. Days are sunny and peaceful.',
        recommendedFor: 'Blossom Trails, Cultural Journeys, Bird Watching'
      }
    ]
  },

  packing: {
    id: 'packing',
    title: 'Gear & Packing Essentials',
    subtitle: 'The art of layering for high-altitude cold and intense UV',
    icon: '🎒',
    heroImage: '/trekking.jpg',
    principles: 'In the high altitude of Ladakh, temperatures can shift by 20°C in an hour. You must rely on a modular 3-layer system: Base layer (moisture-wicking), Mid layer (insulation/fleece), and Outer layer (windproof & waterproof shell).',
    checklist: [
      {
        category: 'Apparel & Layering',
        items: [
          'Thermal base layers (merino wool or synthetic capilene)',
          'Breathable trekking shirts (long sleeves for UV protection)',
          'Polar fleece jacket or micro-down midlayer',
          'Heavy down jacket with hood (rated for -10°C to -20°C for summit/high camps)',
          'Windproof & waterproof hardshell jacket and trekking pants',
          'Comfortable camp trousers and moisture-wicking underwear'
        ]
      },
      {
        category: 'Footwear & Extremities',
        items: [
          'Sturdy, well-broken-in waterproof trekking boots with ankle support',
          '3-4 pairs of merino wool hiking socks and 2 lightweight liner socks',
          'Lightweight camp shoes or sandals for river crossings',
          'Windproof warm beanie and UV-blocking wide-brim sun hat',
          'Fleece liner gloves + heavy waterproof mountaineering mittens',
          'Thermal neck buff or balaclava against dust and biting winds'
        ]
      },
      {
        category: 'Sun & Health Protection',
        items: [
          'Category 3 or 4 UV-protection sunglasses with side shields',
          'High SPF (50+) broad-spectrum sunscreen and SPF lip balm',
          'Personal medication: Diamox, pain relief, rehydration salts, blister pads',
          'Broad-spectrum water purification tablets or UV filter bottle',
          'Personal hand sanitizer and biodegradable wet wipes'
        ]
      },
      {
        category: 'Expedition Hardware',
        items: [
          '30-40L daypack with rain cover for daily essentials while trekking',
          '70-90L waterproof duffel bag for mules/porters (Dokpa provides gear duffels for guided clients)',
          'Adjustable trekking poles with carbide tips and snow baskets',
          'Headlamp with extra rechargeable batteries (cold depletes battery life rapidly)',
          'Power bank (20,000 mAh) stored in an insulated pouch inside sleeping bag'
        ]
      }
    ]
  },

  etiquette: {
    id: 'etiquette',
    title: 'Cultural Etiquette & Eco-Ethics',
    subtitle: 'Traveling with respect for the land and its custodians',
    icon: '🙏',
    heroImage: '/cultural-tours.jpg',
    values: [
      {
        title: 'Clockwise Movement (Kora)',
        description: 'Always walk clockwise around monasteries (Gompas), stupas (Chortens), and Mani stone walls bearing carved Buddhist mantras. It represents the sacred path of the sun.',
        icon: '☸️'
      },
      {
        title: 'Monastery Dignity',
        description: 'Remove your shoes before stepping into prayer halls. Dress respectfully by covering shoulders and knees. Never touch sacred wall murals or relics, and avoid pointing the soles of your feet towards altars or monks.',
        icon: '🛕'
      },
      {
        title: 'Respecting Nomadic Communities',
        description: 'When visiting Changpa herder camps, greet with a warm "Julley". Always ask for permission before taking photographs of families, elders, or livestock. Do not hand out candies or money to children.',
        icon: '🤝'
      },
      {
        title: 'Zero Waste & Leave No Trace',
        description: 'Ladakh is a high-altitude fragile cold desert ecosystem where trash takes centuries to decompose. Never buy single-use plastic bottles—refill from certified filtered water stations. Carry all non-biodegradable waste back to Leh.',
        icon: '🌱'
      }
    ]
  },

  logistics: {
    id: 'logistics',
    title: 'Connectivity, Money & Travel',
    subtitle: 'Practical tips to keep your journey seamless',
    icon: '🧭',
    heroImage: '/dest-kargil.jpg',
    points: [
      {
        title: 'Mobile Networks & SIM Cards',
        detail: 'Prepaid SIM cards from outside Jammu & Kashmir / Ladakh DO NOT work in Ladakh due to security regulations. You must have a Postpaid connection (Jio and Airtel have the best 4G coverage in Leh, Kargil, and parts of Nubra; BSNL has the widest presence in remote border valleys). You can also purchase a local Ladakh prepaid SIM in Leh market using your passport/Aadhaar.'
      },
      {
        title: 'Cash, ATMs & Cards',
        detail: 'While digital payments (UPI) and card swipe machines work in Leh town shops and upscale cafes, cash is absolutely essential in Nubra, Pangong, Zanskar, and trekking routes. ATMs outside Leh are unreliable or frequently out of cash. Withdraw sufficient cash before leaving Leh.'
      },
      {
        title: 'Getting to Leh',
        detail: 'By Air: Daily flights operate from Delhi, Mumbai, Srinagar, and Chandigarh to Kushok Bakula Rimpochee Airport (IXL). By Road: The scenic Manali-Leh Highway (428 km) and Srinagar-Leh Highway (434 km) are typically open between late May/June and October.'
      },
      {
        title: 'Electricity & Charging',
        detail: 'Remote villages and high camps often operate on limited solar power. Carry high-capacity power banks and keep electronics close to your body heat during night freezes to prevent battery drain.'
      }
    ]
  },

  faqs: [
    {
      question: 'Is prior high-altitude trekking experience required to travel with Dokpa?',
      answer: 'Not for all trips! We offer journeys suited for every fitness level—from relaxed cultural tours and gentle village homestay walks to demanding 6,000m mountaineering summits. We clearly mark difficulty levels and tailor the acclimatization schedule to your comfort.'
    },
    {
      question: 'What is the "Julley" greeting I hear everywhere?',
      answer: '"Julley" (pronounced joo-lay) is the magical Ladakhi word that means Hello, Goodbye, Thank You, and Nice to meet you. Greeting the locals with a warm "Julley" and a smile will open countless doors and tea cups.'
    },
    {
      question: 'Can foreigners visit Hanle and Umling La?',
      answer: 'As of current administrative directives, foreign passport holders (including OCI holders) face restrictions near sensitive border zones such as Hanle and Umling La. However, foreign nationals can freely visit Nubra Valley, Pangong Tso, Tso Moriri, Sham Valley, and Zanskar with standard Protected Area Permits.'
    },
    {
      question: 'How safe is water and food while trekking in Ladakh?',
      answer: 'All drinking water on Dokpa expeditions is freshly boiled or filtered with high-grade UV and ceramic purification systems. Our camp chefs prepare hot, nourishing meals combining local organic buckwheat, lentils, barley (tsampa), fresh vegetables, and Himalayan soups designed for digestive ease at high altitude.'
    },
    {
      question: 'What happens in case of an acute medical emergency?',
      answer: 'Safety is Dokpa\'s foundational philosophy. We carry pulse oximeters, specialized first-aid kits, and oxygen cylinders on all remote treks. If a traveler shows signs of severe altitude sickness or injury, our leaders immediately initiate assisted descent to lower altitude and coordinate with Indian Army and civilian helicopter evacuation if required.'
    }
  ]
};
