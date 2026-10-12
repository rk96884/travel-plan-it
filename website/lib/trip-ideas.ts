export type TripIdea = {
  slug: string;
  country?: string;
  introEyebrow?: string;
  introTitle?: string;
  introText?: string;
  journeyTitle?: string;
  journeyAside?: string;
  entryAdviceUrl?: string;
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
    src: '/images/inspiration/bangkok-wat-arun.webp',
    alt: 'Wat Arun temple beside the Chao Phraya River in Bangkok',
    credit: '',
    creditUrl: '',
  },
  secondImage: {
    src: '/images/inspiration/phuket-coast.webp',
    alt: 'Natural beach coastline with waves and forested hills in Phuket',
    credit: '',
    creditUrl: '',
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

export const cambodiaTwinCentre: TripIdea = {
  slug: 'phnom-penh-siem-reap-twin-centre',
  country: 'Cambodia',
  title: 'Phnom Penh & Siem Reap: Cambodia’s capital and ancient temples',
  eyebrow: 'CAMBODIA · TWO-CENTRE JOURNEY',
  summary: 'Combine the riverside capital of Phnom Penh with the remarkable temples of Angkor near Siem Reap. Ten nights, two distinctive destinations, private guided excursions and a choice of comfortable or luxury accommodation.',
  duration: '12 days',
  nights: '10 nights',
  introEyebrow: 'ONE JOURNEY, TWO SIDES OF CAMBODIA',
  introTitle: 'Living history. Timeless temples.',
  introText: 'Spend five nights discovering Phnom Penh and its complex history, then fly to Siem Reap for five nights near the extraordinary Angkor temples. Private transfers and guided visits are included, with free days to explore at your own pace.',
  journeyTitle: 'From Phnom Penh to Angkor.',
  journeyAside: 'Five nights in Siem Reap, with a private Angkor excursion and time to enjoy the city or simply unwind.',
  hero: { src: '/images/inspiration/phnom-penh.webp', alt: 'Illustrative AI-generated view inspired by the Phnom Penh Royal Palace and riverfront at sunset', credit: '', creditUrl: '' },
  secondImage: { src: '/images/inspiration/angkor-wat.webp', alt: 'Illustrative AI-generated image inspired by Angkor Wat at sunset', credit: '', creditUrl: '' },
  tiers: [
    { id: 'essential', label: 'Essential escape', price: 1699, hotels: [
      { place: 'Phnom Penh', name: 'ibis budget Phnom Penh Riverside', room: 'Standard room · breakfast', nights: 5 },
      { place: 'Siem Reap', name: 'ibis Styles Siem Reap', room: 'Standard room · breakfast', nights: 5 },
    ], note: 'Practical, comfortable stays with the same included private excursions, flights and transfers.' },
    { id: 'premium', label: 'Luxury escape', price: 2699, hotels: [
      { place: 'Phnom Penh', name: 'Sofitel Phnom Penh Phokeethra', room: 'Superior room · breakfast', nights: 5 },
      { place: 'Siem Reap', name: 'Sofitel Angkor Phokeethra Golf & Spa Resort', room: 'Luxury room · breakfast', nights: 5 },
    ], note: 'Two refined Sofitel stays, while retaining the same private touring and transfers.' },
  ],
  days: [
    { heading: 'DAY 1', title: 'Depart the UK', description: 'Depart London for your journey to Cambodia, travelling via Bangkok in the example routing. Airlines and connection times will be confirmed for your chosen dates.' },
    { heading: 'DAY 2', title: 'Arrive in Phnom Penh', description: 'Connect via Bangkok to Phnom Penh. Meet your driver after arrival for a private air-conditioned transfer to your hotel, where you will stay for five nights.' },
    { heading: 'DAY 3', title: 'Cambodia’s recent history', description: 'A privately guided half-day visit to the Killing Fields memorial site and Tuol Sleng Genocide Museum (S-21). These are emotionally challenging sites documenting atrocities committed under the Khmer Rouge. The rest of the day is at leisure.' },
    { heading: 'DAYS 4–6', title: 'Phnom Penh, your way', description: 'Three days at leisure. Discover riverside neighbourhoods, markets and local food, or ask us to tailor optional experiences to your interests.' },
    { heading: 'DAY 7', title: 'Fly to Siem Reap', description: 'Private transfer to Phnom Penh airport for your domestic flight to Siem Reap. Your driver will meet you on arrival and transfer you to your hotel for five nights. Breakfast boxes can be requested for an early start.' },
    { heading: 'DAY 8', title: 'Discover Angkor', description: 'Enjoy a full-day private guided excursion to the Angkor temple complex, including Angkor Wat, with entrance fees as specified in your final itinerary.' },
    { heading: 'DAYS 9–11', title: 'Siem Reap at your own pace', description: 'Three days at leisure to enjoy your resort, discover local culture or add further temple visits and experiences.' },
    { heading: 'DAY 12', title: 'Return to the UK', description: 'Private transfer to Siem Reap airport for your journey home via Bangkok. A breakfast box may be arranged for an early departure. Exact flight schedules are confirmed when quoting.' },
  ],
  included: [
    'Return economy flights from the UK via Bangkok, with proposed 23 kg checked baggage per person',
    'Regional and internal flights between Bangkok, Phnom Penh and Siem Reap as outlined, with baggage allowances subject to final confirmation',
    'Five nights in Phnom Penh and five nights in Siem Reap in a twin/double room',
    'Breakfast daily, with breakfast boxes where arranged',
    'Private air-conditioned airport transfers throughout Cambodia',
    'Private English-speaking guide and entrance fees for the specified Killing Fields, Tuol Sleng and Angkor excursions',
    'Bangkok airport lounge access where included with the final confirmed flight arrangement',
  ],
  excluded: ['Visa or entry fees where applicable', 'Travel insurance', 'Tips and gratuities', 'Optional tours and excursions', 'Personal expenses'],
  entryAdviceUrl: 'https://www.gov.uk/foreign-travel-advice/cambodia/entry-requirements',
  faqs: [
    { question: 'Can I travel at a different time of year?', answer: 'Yes. This is a tailor-made itinerary idea, not a fixed March departure. We can quote for your preferred dates, subject to availability and seasonal pricing.' },
    { question: 'Can I change the hotels or length of stay?', answer: 'Yes. We can adjust the number of nights, hotel standard, route and experiences to suit your plans.' },
    { question: 'Are the tours private?', answer: 'The proposed Killing Fields and Tuol Sleng half-day excursion and full-day Angkor excursion are privately guided rather than shared group tours.' },
    { question: 'Are the advertised prices guaranteed?', answer: 'No. £1,699 and £2,699 per person are indicative example prices based on two adults sharing. A personalised quotation will confirm current flights, hotel availability and costs.' },
    { question: 'Do I need a visa for Cambodia?', answer: 'Entry requirements depend on nationality and can change. Check official Cambodia entry guidance before travel and we can discuss the practical requirements when planning.' },
  ],
};
