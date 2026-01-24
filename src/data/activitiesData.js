// Shared activities data for all components
export const activitiesData = [
  {
    id: 'rock-climbing',
    title: 'Rock Climbing',
    icon: '🧗',
    shortDescription: 'Scale dramatic cliff faces and granite walls with expert guidance.',
    fullDescription: 'Experience the thrill of rock climbing in Ladakh\'s stunning landscapes. Our expert guides will take you to some of the most spectacular climbing routes in the region, from beginner-friendly crags to challenging multi-pitch climbs. Whether you\'re new to climbing or an experienced climber, we have routes that will challenge and inspire you.',
    difficulty: 'Intermediate to Advanced',
    season: 'Apr - Oct',
    duration: '1-7 days',
    groupSize: '2-6 people',
    image: '/rock-climbing.jpg',
    highlights: [
      'World-class granite climbing routes',
      'Professional climbing instruction',
      'All technical equipment provided',
      'Stunning Himalayan backdrop',
      'Routes for all skill levels'
    ],
    included: [
      'Certified climbing guide',
      'All climbing equipment (harness, helmet, ropes)',
      'Safety briefing and instruction',
      'Transportation to climbing sites',
      'First aid kit and emergency support'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Introduction & Basic Routes',
        description: 'Safety briefing, equipment check, and warm-up on beginner routes'
      },
      {
        day: 2,
        title: 'Intermediate Climbing',
        description: 'Progress to more challenging routes with technical instruction'
      },
      {
        day: 3,
        title: 'Advanced Routes',
        description: 'Tackle multi-pitch climbs and advanced techniques'
      }
    ],
    pricing: {
      single: 12000,
      group: 8000,
      currency: 'INR',
      perPerson: true
    }
  },
  {
    id: 'ice-climbing',
    title: 'Ice Climbing',
    icon: '🧊',
    shortDescription: 'Conquer frozen waterfalls and glacial formations in winter wonderland.',
    fullDescription: 'Embark on an extraordinary ice climbing adventure in Ladakh\'s frozen landscapes. During winter, the region transforms into an ice climber\'s paradise with frozen waterfalls and glacial formations. Our experienced guides will teach you ice climbing techniques and lead you to the most spectacular ice routes in the Himalayas.',
    difficulty: 'Advanced',
    season: 'Dec - Feb',
    duration: '3-10 days',
    groupSize: '2-4 people',
    image: '/ice-climbing.jpg',
    highlights: [
      'Frozen waterfall climbing',
      'Professional ice climbing instruction',
      'Technical ice equipment provided',
      'Winter Himalayan experience',
      'Small group sizes for safety'
    ],
    included: [
      'Expert ice climbing guide',
      'Ice axes, crampons, and technical gear',
      'Winter clothing and equipment',
      'Accommodation in heated camps',
      'All meals during expedition'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Ice Climbing Basics',
        description: 'Equipment familiarization and basic ice climbing techniques'
      },
      {
        day: 2,
        title: 'Frozen Waterfall Practice',
        description: 'Practice on smaller ice formations'
      },
      {
        day: 3,
        title: 'Major Ice Routes',
        description: 'Climb spectacular frozen waterfalls'
      }
    ],
    pricing: {
      single: 25000,
      group: 18000,
      currency: 'INR',
      perPerson: true
    }
  },
  {
    id: 'motor-biking',
    title: 'Motor Biking',
    icon: '🏍️',
    shortDescription: 'Ride through the highest motorable passes on legendary Himalayan routes.',
    fullDescription: 'Experience the ultimate motorcycle adventure on the world\'s highest motorable roads. Ride through breathtaking landscapes, cross high-altitude passes, and explore remote villages on this legendary journey. Our tours cater to all skill levels, from beginners to experienced riders, with support vehicles and experienced guides throughout.',
    difficulty: 'All Levels',
    season: 'May - Sep',
    duration: '5-15 days',
    groupSize: '4-12 people',
    image: '/motor-biking.jpg',
    highlights: [
      'Ride to Khardung La (18,380 ft)',
      'Explore Nubra Valley and Pangong Lake',
      'Royal Enfield motorcycles available',
      'Support vehicle accompaniment',
      'Experienced road captain'
    ],
    included: [
      'Royal Enfield motorcycle rental',
      'Experienced riding guide',
      'Support vehicle with mechanic',
      'Accommodation and meals',
      'Permits and entry fees',
      'Riding gear (helmet, gloves, jacket)'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Leh Acclimatization',
        description: 'Bike familiarization and local rides'
      },
      {
        day: 2,
        title: 'Leh to Nubra Valley',
        description: 'Cross Khardung La pass'
      },
      {
        day: 3,
        title: 'Nubra Exploration',
        description: 'Ride through sand dunes and monasteries'
      }
    ],
    pricing: {
      single: 35000,
      group: 28000,
      currency: 'INR',
      perPerson: true
    }
  },
  {
    id: 'river-rafting',
    title: 'River Rafting',
    icon: '🚣',
    shortDescription: 'Navigate thrilling rapids through pristine mountain river valleys.',
    fullDescription: 'Experience the rush of white water rafting on the Indus and Zanskar rivers. Navigate through exciting rapids while surrounded by stunning Himalayan scenery. Our rafting expeditions range from half-day trips for beginners to multi-day expeditions for experienced rafters, all led by certified river guides.',
    difficulty: 'Beginner to Advanced',
    season: 'Jun - Aug',
    duration: '1-7 days',
    groupSize: '6-16 people',
    image: '/river-rafting.jpg',
    highlights: [
      'Grade II to IV rapids',
      'Indus and Zanskar river routes',
      'Certified river guides',
      'All safety equipment provided',
      'Riverside camping options'
    ],
    included: [
      'Professional rafting guide',
      'Life jackets and helmets',
      'Rafting equipment',
      'Safety kayaker support',
      'Riverside lunch (full day trips)',
      'Transportation to/from river'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Upper Indus Run',
        description: 'Gentle rapids perfect for beginners'
      },
      {
        day: 2,
        title: 'Zanskar Confluence',
        description: 'More challenging rapids and stunning scenery'
      },
      {
        day: 3,
        title: 'Advanced Rapids',
        description: 'Grade III-IV rapids for experienced rafters'
      }
    ],
    pricing: {
      single: 3500,
      group: 2500,
      currency: 'INR',
      perPerson: true
    }
  },
  {
    id: 'trekking',
    title: 'Trekking',
    icon: '🥾',
    shortDescription: 'Journey through ancient trails, remote villages, and breathtaking landscapes.',
    fullDescription: 'Discover Ladakh on foot through our carefully curated trekking routes. From gentle valley walks to challenging high-altitude treks, we offer experiences for all fitness levels. Trek through remote villages, cross high mountain passes, and camp under star-filled skies while experiencing the raw beauty of the Himalayas.',
    difficulty: 'All Levels',
    season: 'May - Oct',
    duration: '3-21 days',
    groupSize: '2-12 people',
    image: '/trekking.jpg',
    highlights: [
      'Markha Valley, Chadar, and Stok Kangri treks',
      'Experienced trekking guides',
      'Porter and camping support',
      'Remote village homestays',
      'High altitude passes and lakes'
    ],
    included: [
      'Professional trekking guide',
      'Camping equipment (tents, sleeping bags)',
      'All meals during trek',
      'Porters and pack animals',
      'Permits and entry fees',
      'First aid and emergency support'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Trek Start',
        description: 'Begin journey from base village'
      },
      {
        day: 2,
        title: 'Valley Exploration',
        description: 'Trek through scenic valleys and villages'
      },
      {
        day: 3,
        title: 'High Pass Crossing',
        description: 'Cross mountain passes with panoramic views'
      }
    ],
    pricing: {
      single: 15000,
      group: 12000,
      currency: 'INR',
      perPerson: true
    }
  },
  {
    id: 'expeditions',
    title: 'Expeditions',
    icon: '⛰️',
    shortDescription: 'Multi-day adventures to summit peaks and explore uncharted territories.',
    fullDescription: 'Join us on serious mountaineering expeditions to summit some of Ladakh\'s most challenging peaks. These expeditions require good physical fitness and previous high-altitude experience. Our expert mountaineering guides will lead you through technical climbs, glacier travel, and high-altitude camping to reach spectacular summits.',
    difficulty: 'Advanced',
    season: 'Jun - Sep',
    duration: '10-30 days',
    groupSize: '2-6 people',
    image: '/peak-climbing.jpg',
    highlights: [
      'Stok Kangri (6,153m) and other peaks',
      'Professional mountaineering guides',
      'Technical climbing instruction',
      'High altitude camping',
      'Summit certificate'
    ],
    included: [
      'Experienced mountaineering guide',
      'All technical climbing equipment',
      'High altitude camping gear',
      'All meals and accommodation',
      'Permits and fees',
      'Emergency evacuation insurance'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Base Camp Trek',
        description: 'Trek to base camp and acclimatization'
      },
      {
        day: 2,
        title: 'Advanced Base Camp',
        description: 'Move to higher camp, technical training'
      },
      {
        day: 3,
        title: 'Summit Push',
        description: 'Early morning summit attempt'
      }
    ],
    pricing: {
      single: 45000,
      group: 35000,
      currency: 'INR',
      perPerson: true
    }
  },
  {
    id: 'cultural-tours',
    title: 'Cultural Tours',
    icon: '🏛️',
    shortDescription: 'Immerse in Buddhist monasteries, local traditions, and Ladakhi heritage.',
    fullDescription: 'Experience the rich cultural heritage of Ladakh through our immersive cultural tours. Visit ancient Buddhist monasteries, participate in local festivals, stay in traditional homestays, and learn about the unique Ladakhi way of life. These tours offer a deep connection with the region\'s spiritual and cultural traditions.',
    difficulty: 'Easy',
    season: 'Year Round',
    duration: '3-10 days',
    groupSize: '2-15 people',
    image: '/cultural-tours.jpg',
    highlights: [
      'Ancient monastery visits',
      'Traditional homestay experiences',
      'Local festival participation',
      'Tibetan Buddhist teachings',
      'Traditional Ladakhi cuisine'
    ],
    included: [
      'Cultural guide and interpreter',
      'Monastery entry fees',
      'Homestay accommodation',
      'Traditional meals',
      'Cultural workshops',
      'Transportation'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Leh Monasteries',
        description: 'Visit Thiksey, Hemis, and Shey monasteries'
      },
      {
        day: 2,
        title: 'Village Homestay',
        description: 'Experience traditional Ladakhi village life'
      },
      {
        day: 3,
        title: 'Cultural Immersion',
        description: 'Participate in local activities and traditions'
      }
    ],
    pricing: {
      single: 8000,
      group: 6000,
      currency: 'INR',
      perPerson: true
    }
  }
];

// Helper function to get activity by ID
export const getActivityById = (id) => {
  return activitiesData.find(activity => activity.id === id);
};

// Helper function to get related activities
export const getRelatedActivities = (currentId, count = 3) => {
  return activitiesData
    .filter(activity => activity.id !== currentId)
    .slice(0, count);
};
