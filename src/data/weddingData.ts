import {
  StoryChapter,
  TimelineEvent,
  EntourageCategory,
  AccommodationOption,
  FaqItem,
  GalleryPhoto,
} from '../types';

export const WEDDING_CONFIG = {
  bride: "Angelika Dimple Alcantara",
  groom: "Cyrill John Forte",
  shortBride: "Dimple",
  shortGroom: "Cyrill",
  initials: "C & D",
  hashtag: "#CyrillAndDimple #ForteForever2026",
  dateISO: "2026-12-22T15:00:00+08:00", // Dec 22, 2026 3:00 PM GMT+8
  dateFormatted: "Tuesday, December 22, 2026",
  dateShort: "22 . 12 . 2026",
  timeFormatted: "Three o'clock in the afternoon",
  rsvpDeadline: "November 15, 2026",
  venue: {
    name: "Jade Resort",
    location: "Bauang, La Union, Philippines",
    address: "National Highway, Paringao, Bauang, 2501 La Union",
    mapsUrl: "https://maps.google.com/?q=Jade+Resort+Bauang+La+Union",
    wazeUrl: "https://waze.com/ul?q=Jade+Resort+Bauang+La+Union",
    coordinates: { lat: 16.5321, lng: 120.3275 },
    phone: "+63 917 555 4321",
    email: "events@jaderesortlaunion.com",
    notes: "Complimentary valet and guest parking available on site."
  },
  dressCode: {
    title: "Formal / Semi-Formal Garden Cocktail",
    description: "We kindly invite our guests to dress in formal or garden cocktail attire in harmony with our romantic color palette.",
    gentlemen: "Suits, tailored blazers with trousers, or formal modern Barong Tagalog with dark slacks and dress shoes.",
    ladies: "Floor-length gowns, elegant midi dresses, or sophisticated cocktail attire in our wedding color tones.",
    avoid: "Please avoid wearing all-white, ivory, or casual denim/slippers.",
    colors: [
      { name: "Deep Burgundy", hex: "#5B1E31", bgClass: "bg-[#5B1E31]", textClass: "text-white" },
      { name: "Muted Olive", hex: "#5D6B4F", bgClass: "bg-[#5D6B4F]", textClass: "text-white" },
      { name: "Warm Ivory", hex: "#F3ECE2", bgClass: "bg-[#F3ECE2]", textClass: "text-[#2B2A27]" },
      { name: "Champagne Gold", hex: "#CDB38B", bgClass: "bg-[#CDB38B]", textClass: "text-[#2B2A27]" },
      { name: "Earthy Slate", hex: "#3E4A32", bgClass: "bg-[#3E4A32]", textClass: "text-white" }
    ]
  },
  registry: {
    note: "Your presence, love, and prayers on our wedding day are the greatest gifts of all. However, should you wish to bless us with a gift, a monetary contribution toward our future home and new beginnings together would be warmly and humbly appreciated.",
    accounts: [
      {
        provider: "GCash",
        accountName: "Angelika D. Alcantara",
        accountNumber: "0917 123 4567",
        badge: "Instant Transfer"
      },
      {
        provider: "BPI (Bank of the Philippine Islands)",
        accountName: "Cyrill John Forte",
        accountNumber: "8492 0192 34",
        badge: "Savings Account"
      },
      {
        provider: "BDO (Banco de Oro)",
        accountName: "Angelika Alcantara / Cyrill Forte",
        accountNumber: "0028 3491 8820",
        badge: "Joint Account"
      }
    ]
  }
};

export const STORY_CHAPTERS: StoryChapter[] = [
  {
    id: "chapter-1",
    number: "01",
    title: "The First Glimpse",
    subtitle: "A serendipitous meeting that changed everything",
    date: "Summer 2019",
    story: "It began on a warm afternoon when our paths crossed unexpectedly through mutual friends. What started as an effortless conversation over coffee turned into hours of shared laughter, quiet understanding, and an unspoken spark that neither of us could ignore.",
    quote: "In the middle of an ordinary life, love gave us a fairytale.",
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "chapter-2",
    number: "02",
    title: "Growing Together",
    subtitle: "Through every season, laughter, and adventure",
    date: "2020 — 2024",
    story: "From road trips along the northern coast to quiet Sunday mornings and countless shared dreams, we discovered that true partnership is not about having everything figured out—it is about choosing each other every single day, in every gentle moment and every storm.",
    quote: "Together is our favorite place to be.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "chapter-3",
    number: "03",
    title: "The Proposal",
    subtitle: "Under golden arches and a promise for eternity",
    date: "Golden Hour, December 2025",
    story: "Surrounded by historic stone arches bathed in golden sunset light, Cyrill went down on one knee. With beating hearts and happy tears, Angelika said the easiest 'Yes' of her life. It wasn't just a promise of marriage, but a celebration of a love built to last a lifetime.",
    quote: "I have found the one whom my soul loves.",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "chapter-4",
    number: "04",
    title: "Our New Beginning",
    subtitle: "December 22, 2026 · Jade Resort, La Union",
    date: "The Wedding Day",
    story: "Now, standing on the threshold of our greatest adventure yet, we are overjoyed to gather our beloved families, lifelong friends, and cherished loved ones as we exchange our vows and become husband and wife.",
    quote: "Two lives, two hearts, joined together in friendship, united forever in love.",
    image: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=1200&q=80"
  }
];

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    time: "2:30 PM",
    title: "Guest Arrival & Welcome Refreshments",
    description: "Guests arrive at the Grand Garden Pavilion, enjoy artisan citrus iced tea, and are seated to gentle acoustic strings.",
    iconName: "Users",
    location: "Garden Pavilion"
  },
  {
    time: "3:00 PM",
    title: "The Wedding Ceremony",
    description: "Processional of the wedding entourage, exchange of holy vows and wedding rings, and our solemn first kiss as husband and wife.",
    iconName: "Heart",
    location: "Ceremonial Lawn"
  },
  {
    time: "4:30 PM",
    title: "Cocktail Hour & Golden Hour Portraits",
    description: "Signature hors d'oeuvres, sparkling wines, and pre-dinner cocktails while the newlyweds capture sunset portraits by the seaside terrace.",
    iconName: "GlassWater",
    location: "Seaside Promenade"
  },
  {
    time: "5:45 PM",
    title: "Grand Reception Entrance",
    description: "Guests transition into the Grand Ballroom for the celebratory entrance of the bridal party and the newlyweds!",
    iconName: "Sparkles",
    location: "Grand Ballroom"
  },
  {
    time: "6:30 PM",
    title: "Plated Dinner & Live Music",
    description: "A gourmet four-course coastal dinner accompanied by a live acoustic ensemble and heartfelt dining conversation.",
    iconName: "Utensils",
    location: "Grand Ballroom"
  },
  {
    time: "7:30 PM",
    title: "Speeches, Toasts & Cake Cutting",
    description: "Stories, meaningful toasts from the Maid of Honor, Best Man, and parents, followed by the ceremonial cake cutting.",
    iconName: "Cake",
    location: "Main Stage"
  },
  {
    time: "8:00 PM",
    title: "First Dance & Father-Daughter Dance",
    description: "The newlyweds take the dance floor for their first dance, followed by traditional family dances.",
    iconName: "Music",
    location: "Center Dance Floor"
  },
  {
    time: "8:45 PM",
    title: "Party, Dancing & Celebration",
    description: "The DJ turns up the celebration! Open dance floor, signature drinks, late-night snacks, and midnight sparkler send-off.",
    iconName: "Flame",
    location: "Dance Floor & Patio"
  }
];

export const ENTOURAGE_DATA: EntourageCategory[] = [
  {
    category: "Parents of the Bride & Groom",
    members: [
      {
        role: "Parents of the Bride",
        names: ["Mr. Roberto Alcantara", "Mrs. Maria Elena Alcantara"]
      },
      {
        role: "Parents of the Groom",
        names: ["Mr. Antonio Forte", "Mrs. Rosalinda Forte"]
      }
    ]
  },
  {
    category: "Principal Sponsors (Ninongs & Ninangs)",
    members: [
      {
        role: "Ninongs (Godfathers)",
        names: [
          "Hon. Governor Manuel Ortega",
          "Engr. Eduardo Ramirez",
          "Dr. Ferdinand Villanueva",
          "Atty. Benjamin De Leon",
          "Mr. Carlos Mendoza"
        ]
      },
      {
        role: "Ninangs (Godmothers)",
        names: [
          "Dr. Carmela Bautista",
          "Mrs. Victoria Santos",
          "Mrs. Corazon Dela Cruz",
          "Architect Grace Morales",
          "Mrs. Patricia Rivera"
        ]
      }
    ]
  },
  {
    category: "The Bridal Party",
    members: [
      {
        role: "Maid of Honor",
        names: ["Camille Stephanie Alcantara"]
      },
      {
        role: "Best Man",
        names: ["Adrian Dave Forte"]
      },
      {
        role: "Bridesmaids",
        names: [
          "Janelle Marie Santos",
          "Kaye Anne Bautista",
          "Patricia Nicole Reyes",
          "Kristine Joy Ramos",
          "Sophia Denise Garcia"
        ]
      },
      {
        role: "Groomsmen",
        names: [
          "Mark Christian Forte",
          "Kevin Paul Villanueva",
          "Gerald Bryan Torres",
          "Joshua Emmanuel Cruz",
          "Patrick Jason Morales"
        ]
      }
    ]
  },
  {
    category: "Secondary Sponsors & Bearers",
    members: [
      {
        role: "Candle Sponsors",
        names: ["Mr. Bryan David", "Ms. Alyssa Mae Diaz"]
      },
      {
        role: "Veil Sponsors",
        names: ["Mr. Justin Kyle Ramos", "Ms. Nicole Angela Flores"]
      },
      {
        role: "Cord Sponsors",
        names: ["Mr. Vincent Allen Tan", "Ms. Rachel Anne Castro"]
      },
      {
        role: "Ring Bearer",
        names: ["Ethan Gabriel Forte"]
      },
      {
        role: "Coin Bearer",
        names: ["Liam Matthew Alcantara"]
      },
      {
        role: "Bible Bearer",
        names: ["Noah Sebastian Reyes"]
      },
      {
        role: "Flower Girls",
        names: [
          "Chloe Isabella Santos",
          "Mia Danielle Ramos",
          "Sofia Beatrice Forte"
        ]
      }
    ]
  }
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: "photo-1",
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
    alt: "Angelika & Cyrill embracing in romantic garden setting",
    caption: "Golden hour embrace in the sunlit garden terrace",
    category: "romantic",
    aspect: "tall"
  },
  {
    id: "photo-2",
    src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80",
    alt: "Couple smiling joyfully hand in hand",
    caption: "Laughter and timeless moments together",
    category: "portraits",
    aspect: "square"
  },
  {
    id: "photo-3",
    src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80",
    alt: "Couple under classic architectural archways",
    caption: "Framed under the grand stone coliseum arches",
    category: "garden",
    aspect: "wide"
  },
  {
    id: "photo-4",
    src: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=1200&q=80",
    alt: "Intimate portrait with bouquet and ring detail",
    caption: "A promise of forever sealed with love",
    category: "portraits",
    aspect: "tall"
  },
  {
    id: "photo-5",
    src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1200&q=80",
    alt: "Walking together down stone steps",
    caption: "Walking hand in hand toward our next chapter",
    category: "romantic",
    aspect: "tall"
  },
  {
    id: "photo-6",
    src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1200&q=80",
    alt: "Couple laughing during sunset stroll",
    caption: "Candid laughter and seaside breeze",
    category: "moments",
    aspect: "wide"
  },
  {
    id: "photo-7",
    src: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=1200&q=80",
    alt: "Wedding floral arrangements and aesthetic details",
    caption: "Burgundy florals and warm olive accents",
    category: "garden",
    aspect: "square"
  },
  {
    id: "photo-8",
    src: "https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=1200&q=80",
    alt: "Dancing together in the courtyard",
    caption: "A slow dance under the evening glow",
    category: "moments",
    aspect: "tall"
  }
];

export const ACCOMMODATIONS: AccommodationOption[] = [
  {
    name: "Jade Resort (Wedding Venue)",
    type: "Beachfront Resort & Hotel",
    distance: "0 km (On-site)",
    address: "National Highway, Paringao, Bauang, La Union",
    priceRange: "₱₱₱",
    contact: "+63 917 555 4321",
    description: "Enjoy luxurious beachfront accommodations right where our ceremony and reception take place. Mention the 'Alcantara-Forte Wedding' when booking for special group discount rates.",
    bookingLink: "https://maps.google.com/?q=Jade+Resort+Bauang+La+Union",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Aureo Resort La Union",
    type: "Luxury Resort & Spa",
    distance: "8 km (approx. 12 mins drive)",
    address: "San Fernando By-Pass Rd, San Fernando, La Union",
    priceRange: "₱₱₱₱",
    contact: "+63 72 888 0833",
    description: "Premier oceanfront resort with multiple infinity pools, upscale dining, and beachfront villas.",
    bookingLink: "https://maps.google.com/?q=Aureo+Resort+La+Union",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Thunderbird Resorts & Casinos Poro Point",
    type: "Santorini-Inspired Luxury Resort",
    distance: "14 km (approx. 20 mins drive)",
    address: "VOA Compound, Pennsylvania Ave, San Fernando, La Union",
    priceRange: "₱₱₱₱",
    contact: "+63 72 888 7777",
    description: "Iconic cliffside resort inspired by Santorini architecture with expansive ocean views and golf courses.",
    bookingLink: "https://maps.google.com/?q=Thunderbird+Resorts+Poro+Point",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Kahuna Beach Resort and Spa",
    type: "Tropical Boutique Resort",
    distance: "16 km (approx. 22 mins drive)",
    address: "Urbiztondo, San Juan, La Union",
    priceRange: "₱₱₱",
    contact: "+63 72 607 1040",
    description: "Balinese-inspired ocean cottages located in the vibrant surfing capital of San Juan, La Union.",
    bookingLink: "https://maps.google.com/?q=Kahuna+Beach+Resort+San+Juan+La+Union",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80"
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "When is the RSVP deadline?",
    answer: "Please kindly confirm your attendance on or before November 15, 2026 using the interactive RSVP form on this website so we can finalize our seating arrangements and gourmet catering numbers."
  },
  {
    question: "What time should I arrive at the venue?",
    answer: "The ceremony will begin promptly at 3:00 PM. We encourage guests to arrive by 2:30 PM to enjoy welcome refreshments, mingle, and be comfortably seated before the bridal processional begins."
  },
  {
    question: "What is the dress code for the wedding?",
    answer: "Our dress code is Formal / Semi-Formal Garden Cocktail. We invite our guests to wear shades of Deep Burgundy, Muted Olive, Warm Ivory, and Champagne Gold. Barong Tagalog or tailored suits for men, and midi or floor-length gowns for ladies. Please kindly refrain from wearing pure white or casual denim."
  },
  {
    question: "Is there parking available at Jade Resort?",
    answer: "Yes! Jade Resort provides ample secured parking and complimentary valet assistance for all our wedding guests."
  },
  {
    question: "Can I bring a plus-one or children?",
    answer: "Due to venue seating constraints and intimate dining capacity, our guest list is strictly allocated by invitation. Your specific guest allocation is indicated when you submit your RSVP name. If you have questions regarding your party, feel free to reach out to us directly."
  },
  {
    question: "Is the ceremony 'unplugged'?",
    answer: "Yes, we invite you to be fully present with us during our sacred ceremony. We kindly ask that you turn off or silence all mobile devices and leave the photography during the ceremony to our professional photo and video team. During the cocktail hour and reception, you are more than welcome to take as many photos and videos as you like!"
  },
  {
    question: "What should we give as a wedding gift?",
    answer: "Your presence and blessings on our special day mean the world to us. Should you wish to honor us with a gift, a monetary gift to support our new home and future journey together is warmly appreciated. Bank and GCash details are provided in our Registry section."
  },
  {
    question: "Who can I contact on the wedding day if I need assistance?",
    answer: "Our wedding coordinator team will be available at the resort entrance to guide and assist you. You may also contact our bridal concierge hotline at +63 917 555 4321."
  }
];

export const INITIAL_GUESTBOOK_MESSAGES = [
  {
    id: "msg-1",
    author: "Camille Stephanie Alcantara",
    relationship: "Maid of Honor & Sister",
    message: "To my dearest sister Angelika and my wonderful brother-in-law Cyrill: Watching your love grow has been one of my greatest joys. May your marriage be filled with endless warmth, laughter, and blessings!",
    stamp: "🥂",
    date: "August 2026",
    likes: 12
  },
  {
    id: "msg-2",
    author: "Adrian Dave Forte",
    relationship: "Best Man & Brother",
    message: "Bro, so proud of you and the man you've become. Angelika is the greatest blessing in your life, and I couldn't be happier for you both. See you at the altar in December!",
    stamp: "💍",
    date: "August 2026",
    likes: 9
  },
  {
    id: "msg-3",
    author: "Tita Elena & Tito Manuel",
    relationship: "Family Friends & Ninangs",
    message: "Dearest Angelika & Cyrill, wishing you a lifetime of happiness, shared dreams, and God's abundant grace. We cannot wait to celebrate your beautiful day at Jade Resort!",
    stamp: "💐",
    date: "August 2026",
    likes: 8
  }
];
