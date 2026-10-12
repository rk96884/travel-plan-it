export type TripIdea = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  duration: string;
  nights: string;
  hero: { src: string; alt: string; credit: string; creditUrl: string };
  secondImage: { src: string; alt: string; credit: string; creditUrl: string };
  tiers: { id: string; label: string; price: number; hotels: { place: string; name: string; room: string; nights: number }[]; note: string }[];
  days: { heading: string; title: string; description: string }[];
  included: string[];
  excluded: string[];
  faqs: { question: string; answer: string }[];
};

export const bangkokPhuket: TripIdea = {
  slug: 'bangkok-phuket-twin-centre',
  title: 'Bangkok & Phuket: temples, markets and tropical shores',
  eyebrow: 'THAILAND · TWO-CENTRE JOURNEY',
  summary: 'Discover Bangkok’s palaces, temples and lively markets with your own guide, then slow the pace with seven nights by the Andaman Sea. One thoughtfully planned journey, with a choice of accommodation styles.',
  duration: '12 days',
  nights: '10 nights',
  hero: {
    src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Templo%20Wat%20Arun%2C%20Bangkok%2C%20Tailandia%2C%202013-08-22%2C%20DD%2037.jpg?width=1400',
    alt: 'Wat Arun temple in Bangkok, Thailand, photographed in warm evening light',
    credit: 'Diego Delso / delso.photo · CC BY-SA 3.0',
    creditUrl: 'https://commons.wikimedia.org/wiki/File:Templo_Wat_Arun,_Bangkok,_Tailandia,_2013-08-22,_DD_37.jpg',
  },
  secondImage: {
    src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Thailand%2C%20Phuket%20-%20Karon%20Beach%20WMID2669793.jpg?width=1400',
    alt: 'Sunny Karon Beach in Phuket with blue sky and turquoise water',
    credit: 'SpitfireMK14 / Wikimapia via Wikimedia Commons · CC BY-SA 3.0',
    creditUrl: 'https://commons.wikimedia.org/wiki/File:Thailand,_Phuket_-_Karon_Beach_WMID2669793.jpg',
  },
  tiers: [
    { id: 'essential', label: 'Essential escape', price: 1599, hotels: [
      { place: 'Bangkok', name: 'ibis Bangkok Sathorn', room: 'Superior room · breakfast', nights: 3 },
      { place: 'Phuket', name: 'ibis Phuket Patong', room: 'Superior room · breakfast', nights: 7 },
    ], note: 'Comfortable bases with the same private guided experiences and transfers.' },
    { id: 'premium', label: 'Premium escape', price: 1999, hotels: [
      { place: 'Bangkok', name: 'Amari Bangkok', room: 'Club Premium room · breakfast', nights: 3 },
      { place: 'Phuket', name: 'Amari Phuket', room: 'Ocean Front Wing Superior Balcony room · breakfast', nights: 7 },
    ], note: 'An upgraded stay; ocean-facing room requests are subject to confirmation.' },
  ],
  days: [
    { heading: 'DAY 1 · SUN 21 MAR 2027', title: 'Your journey begins', description: 'Depart London Gatwick for Bangkok on your international flight. Flight operator and timings will be reconfirmed when quoting.' },
    { heading: 'DAY 2 · MON 22 MAR', title: 'Welcome to Bangkok', description: 'Arrive in Bangkok and meet your driver for a private transfer to your city hotel. Settle in and spend the rest of the day at leisure. Early check-in is not included, but can be requested for an additional cost.' },
    { heading: 'DAY 3 · TUE 23 MAR', title: 'The temples of the Old City', description: 'Enjoy a privately guided half-day visit to the Grand Palace, Wat Phra Kaew, Wat Pho and Wat Arun. The remainder of the day is yours to explore.' },
    { heading: 'DAY 4 · WED 24 MAR', title: 'Markets with a difference', description: 'An early start for your private full-day excursion to Damnoen Saduak Floating Market and Mae Klong Railway Market. A breakfast box can be arranged with the hotel.' },
    { heading: 'DAY 5 · THU 25 MAR', title: 'From city to sea', description: 'Private transfer to Bangkok airport, then fly to Phuket. Meet your driver for a private transfer to your beach hotel, where seven nights of relaxation begin. Bangkok Airways lounge access is included with the proposed internal flight, subject to final flight confirmation.' },
    { heading: 'DAYS 6–11 · FRI 26–WED 31 MAR', title: 'Phuket, at your own pace', description: 'Six full days at leisure. Spend them on the beach, by the pool or discovering more of Phuket. Optional excursions can be tailored to your interests.' },
    { heading: 'DAY 12 · THU 1 APR 2027', title: 'Homeward bound', description: 'Early private transfer to Phuket airport for your flight to London Gatwick. Breakfast boxes may be arranged for the early departure. Flight schedules are subject to reconfirmation.' },
  ],
  included: [
    'Return economy international flights, proposed with 23 kg checked baggage per person',
    'Bangkok–Phuket internal flight, proposed with 20 kg checked baggage per person',
    'Three nights in Bangkok and seven nights in Phuket, sharing a twin or double room',
    'Daily breakfast, with breakfast boxes where arranged',
    'Private air-conditioned airport transfers',
    'Private English-speaking guided Bangkok excursions and listed entrance fees',
    'Bangkok Airways lounge access where included with the confirmed internal flight',
  ],
  excluded: ['Travel insurance', 'Tips and gratuities', 'Optional excursions', 'Personal expenses', 'Any visa or entry costs where applicable'],
  faqs: [
    { question: 'Can I change the hotels or number of nights?', answer: 'Absolutely. This is an itinerary idea rather than a fixed package. We can adjust the route, accommodation and pace to suit your preferences.' },
    { question: 'Are the prices guaranteed?', answer: 'No. The per-person prices are indicative examples based on two adults sharing, and are subject to availability, travel dates, flight schedules and a personalised quotation.' },
    { question: 'Are the Bangkok tours private?', answer: 'The proposed Grand Palace and temple tour, and the floating and railway markets excursion, are privately guided rather than shared group tours.' },
    { question: 'What do I need to enter Thailand?', answer: 'Passport, visa and digital arrival requirements can change. Check current official guidance before travel, including the Thailand Digital Arrival Card (TDAC) where required.' },
  ],
};
