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
  tiers: { id: string; label: string; price: number | null; hotels: { place: string; name: string; room: string; nights: number }[]; note: string }[];
  days: { heading: string; title: string; description: string }[];
  included: string[];
  excluded: string[];
  faqs: { question: string; answer: string }[];
  optionalExperiences?: { name: string; detail: string }[];
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
    src: '/images/excursions/bangkok-temples-riverside.webp',
    alt: 'Illustration of Bangkok temples and historic riverside landmarks',
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
    { heading: 'DAY 1', title: 'Your journey begins', description: 'Depart London Gatwick for Bangkok on your international flight. Flight operator and timings will be reconfirmed when quoting.' },
    { heading: 'DAY 2', title: 'Welcome to Bangkok', description: 'Arrive in Bangkok and meet your driver for a private transfer to your city hotel. Settle in and spend the rest of the day at leisure. Early check-in is not included, but can be requested for an additional cost.' },
    { heading: 'DAY 3', title: 'The temples of the Old City', description: 'Enjoy a privately guided half-day visit to the Grand Palace, Wat Phra Kaew, Wat Pho and Wat Arun. The remainder of the day is yours to explore.' },
    { heading: 'DAY 4', title: 'Markets with a difference', description: 'An early start for your private full-day excursion to Damnoen Saduak Floating Market and Mae Klong Railway Market. A breakfast box can be arranged with the hotel.' },
    { heading: 'DAY 5', title: 'From city to sea', description: 'Private transfer to Bangkok airport, then fly to Phuket. Meet your driver for a private transfer to your beach hotel, where seven nights of relaxation begin. If your confirmed flight is operated by Bangkok Airways, enjoy complimentary access to its Boutique Lounge before departure, including when travelling in Economy Class.' },
    { heading: 'DAYS 6–11', title: 'Phuket, at your own pace', description: 'Six full days at leisure. Spend them on the beach, by the pool or discovering more of Phuket. Optional excursions can be tailored to your interests.' },
    { heading: 'DAY 12', title: 'Homeward bound', description: 'Early private transfer to Phuket airport for your flight to London Gatwick. Breakfast boxes may be arranged for the early departure. Flight schedules are subject to reconfirmation.' },
  ],
  included: [
    'Return economy international flights, proposed with 23 kg checked baggage per person',
    'Bangkok–Phuket internal flight, proposed with 20 kg checked baggage per person',
    'Three nights in Bangkok and seven nights in Phuket, sharing a twin or double room',
    'Daily breakfast, with breakfast boxes where arranged',
    'Private air-conditioned airport transfers',
    'Private English-speaking guided Bangkok excursions and listed entrance fees',
    'Complimentary Bangkok Airways Boutique Lounge access for all passengers, including Economy Class, when travelling on a confirmed Bangkok Airways flight',
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
    'Complimentary Bangkok Airways Boutique Lounge access for all passengers, including Economy Class, if the confirmed Bangkok departure is operated by Bangkok Airways',
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


export const vietnamTwinCentre: TripIdea = {
  slug: 'hanoi-ho-chi-minh-city-twin-centre',
  country: 'Vietnam',
  title: 'Hanoi & Ho Chi Minh City: heritage, flavours and vibrant streets',
  eyebrow: 'VIETNAM · TWO-CENTRE JOURNEY',
  summary: 'Experience the contrasts of Vietnam, from Hanoi’s historic streets and northern landscapes to the energy of Ho Chi Minh City, the Mekong Delta and southern coast. Ten nights, guided sightseeing and two hotel styles.',
  duration: '12 days',
  nights: '10 nights',
  introEyebrow: 'ONE JOURNEY, TWO DISTINCTIVE CITIES',
  introTitle: 'Northern charm. Southern energy.',
  introText: 'Begin with five nights in Hanoi and discover Ninh Binh and Ha Long City. Fly south for five nights in Ho Chi Minh City, with guided city touring, a Mekong Delta and Cu Chi Tunnels excursion and a day beside the sea at Vung Tau. The same experiences are proposed for both hotel options.',
  journeyTitle: 'From Hanoi to Ho Chi Minh City.',
  journeyAside: 'Five nights in each city, with private airport transfers and a mixture of private and shared excursions. Day-trip timings and inclusions will be confirmed when quoting.',
  hero: { src: '/images/excursions/hanoi-street-food-discovery.webp', alt: 'Illustrative Hanoi Old Quarter street scene with lanterns and historic architecture', credit: '', creditUrl: '' },
  secondImage: { src: '/images/excursions/vung-tau-beach-excursion.webp', alt: 'Illustrative view of Vung Tau beach on Vietnam’s southern coast', credit: '', creditUrl: '' },
  tiers: [
    { id: 'essential', label: 'Essential escape', price: 1949, hotels: [
      { place: 'Hanoi', name: 'Pullman Hanoi', room: 'Deluxe room · breakfast', nights: 5 },
      { place: 'Ho Chi Minh City', name: 'Pullman Saigon Centre', room: 'Superior room · breakfast', nights: 5 },
    ], note: 'Two well-located Pullman hotels with the proposed sightseeing programme, flights and transfers.' },
    { id: 'premium', label: 'Premium escape', price: 2449, hotels: [
      { place: 'Hanoi', name: 'Grand Mercure Hanoi', room: 'Grand Deluxe room · breakfast', nights: 5 },
      { place: 'Ho Chi Minh City', name: 'La Siesta Premium Saigon Central', room: 'Deluxe room · breakfast', nights: 5 },
    ], note: 'An upgraded hotel selection with the same proposed excursions, flights and transfers.' },
  ],
  days: [
    { heading: 'DAY 1', title: 'Depart London', description: 'Depart London Gatwick on the proposed international flight to Bangkok, where you will connect onwards to Vietnam. The example routing uses Norse Atlantic Airways; airline, baggage and timings require reconfirmation.' },
    { heading: 'DAY 2', title: 'Via Bangkok to Hanoi', description: 'Arrive in Bangkok and connect to Hanoi on the proposed regional flight, with a separate check-in potentially required. During a sufficiently long connection, the airport food court or museum may be an option, subject to opening times and entry/transit formalities. Arrive in Hanoi, meet your driver and transfer privately to your hotel for five nights.' },
    { heading: 'DAY 3', title: 'Discover Hanoi', description: 'Enjoy a privately guided full-day city tour exploring Hanoi’s historic and cultural highlights. Exact stops and entrance arrangements will be confirmed in your final itinerary.' },
    { heading: 'DAY 4', title: 'Ninh Binh landscapes', description: 'A private full-day excursion to Ninh Binh, known for limestone scenery, rivers and rural landscapes. Your route and activities can be tailored to your interests.' },
    { heading: 'DAY 5', title: 'A day by the sea at Ha Long City', description: 'Private return transfers to Ha Long City for time by the coast. You can discuss your preferred time there and arrange a suitable return pickup. A bay cruise is not included unless specified in your final quotation.' },
    { heading: 'DAY 6', title: 'Hanoi at leisure', description: 'A free day to explore Hanoi’s cafés, shops and neighbourhoods or simply relax. Ask us about additional experiences if you would like a fuller programme.' },
    { heading: 'DAY 7', title: 'Fly south to Ho Chi Minh City', description: 'Private transfer to Hanoi airport for your domestic flight to Ho Chi Minh City. Meet your driver on arrival and transfer privately to your hotel for five nights. The rest of the day is at leisure.' },
    { heading: 'DAY 8', title: 'Ho Chi Minh City highlights', description: 'Discover the city on a privately guided full-day tour, with an itinerary shaped around its architecture, neighbourhoods and history.' },
    { heading: 'DAY 9', title: 'Mekong Delta and Cu Chi Tunnels', description: 'A proposed shared full-day excursion combining the Mekong Delta and Cu Chi Tunnels. This is a substantial day of travel; routing, visit duration and group arrangements will be confirmed when quoting.' },
    { heading: 'DAY 10', title: 'Vung Tau coastal escape', description: 'Join a shared full-day excursion to Vung Tau for a change of pace by the coast. Beach time and activities depend on the final excursion schedule.' },
    { heading: 'DAY 11', title: 'A final day at leisure', description: 'Enjoy a relaxed day in Ho Chi Minh City, perhaps exploring local food, markets or independent sights.' },
    { heading: 'DAY 12', title: 'Return to London', description: 'An early private airport transfer for the proposed flight to Bangkok and onward international flight to London Gatwick. Separate check-in may be required in Bangkok. Breakfast boxes can be requested from the hotel for the early departure.' },
  ],
  included: [
    'Proposed return economy flights from London via Bangkok, with 23 kg checked baggage on the international sectors, subject to final airline confirmation',
    'Proposed regional and domestic flights, with 20 kg checked baggage per person, subject to final airline confirmation',
    'Five nights in Hanoi and five nights in Ho Chi Minh City, sharing a twin or double room',
    'Daily breakfast, with breakfast boxes where arranged',
    'Private air-conditioned airport and scheduled ground transfers as described',
    'English-speaking guides and listed entrance fees for included excursions',
    'Private full-day Hanoi city tour, Ninh Binh excursion and Ha Long City return transfers',
    'Private Ho Chi Minh City tour; shared Mekong Delta/Cu Chi Tunnels and Vung Tau excursions',
  ],
  excluded: ['Visa or entry fees where applicable, including any Thailand transit/entry requirements', 'Travel insurance', 'Tips and gratuities', 'Extra tours and excursions beyond those listed', 'Personal expenses and meals not specified'],
  entryAdviceUrl: 'https://www.gov.uk/foreign-travel-advice/vietnam/entry-requirements',
  faqs: [
    { question: 'Are these fixed March departure dates?', answer: 'No. The supplied itinerary is a March–April example, not a confirmed departure or live fare. We can plan your holiday for different dates and confirm flights, transfers and prices when quoting.' },
    { question: 'Which excursions are private?', answer: 'The Hanoi city tour, Ninh Binh visit, Ha Long City transfers and Ho Chi Minh City tour are proposed as private. The combined Mekong Delta and Cu Chi Tunnels excursion and Vung Tau day trip are proposed as shared group experiences.' },
    { question: 'Can I change hotels or extend the trip?', answer: 'Yes. Both hotel options are starting points. We can change room categories, accommodation, trip duration and touring arrangements to suit your preferences.' },
    { question: 'Is the Bangkok connection protected?', answer: 'The example route may involve separate flight bookings and check-in. Connection time, baggage collection, immigration rules and disruption protection must be assessed and confirmed before any booking.' },
    { question: 'Are the advertised prices guaranteed?', answer: 'No. £1,949 and £2,449 per person are indicative examples based on two people sharing, not confirmed offers. A personalised quotation will confirm availability and current costs.' },
  ],
};


export const laosTwinCentre: TripIdea = {
  slug: 'luang-prabang-vientiane-twin-centre',
  country: 'Laos',
  title: 'Luang Prabang & Vientiane: temples, traditions and riverside life',
  eyebrow: 'LAOS · TWO-CENTRE JOURNEY',
  summary: 'Explore the cultural heart of Luang Prabang before travelling south to laid-back Vientiane. Ten nights, guided sightseeing, private airport transfers and two accommodation styles, with time to discover Laos at your own pace.',
  duration: '12 days',
  nights: '10 nights',
  introEyebrow: 'ONE JOURNEY, TWO SIDES OF LAOS',
  introTitle: 'Timeless temples. Unhurried discovery.',
  introText: 'Spend five nights in UNESCO-listed Luang Prabang, with a privately guided city tour and time to enjoy the Mekong and surrounding countryside. Then fly to Vientiane for five nights, including a guided city tour and days at leisure.',
  journeyTitle: 'From Luang Prabang to Vientiane.',
  journeyAside: 'Five nights in each destination, with a private Luang Prabang tour, a shared Vientiane tour and plenty of time to explore independently.',
  hero: { src: '/images/excursions/luang-prabang-heritage.webp', alt: 'Illustration of Luang Prabang temple architecture and local Buddhist traditions', credit: '', creditUrl: '' },
  secondImage: { src: '/images/excursions/pha-that-luang-temples.webp', alt: 'Illustration of the golden Pha That Luang stupa in Vientiane', credit: '', creditUrl: '' },
  tiers: [
    { id: 'essential', label: 'Essential escape', price: 1999, hotels: [
      { place: 'Luang Prabang', name: 'MyBanLao', room: 'Courtyard Suite · breakfast', nights: 5 },
      { place: 'Vientiane', name: 'Crowne Plaza Vientiane', room: 'Standard King room · breakfast', nights: 5 },
    ], note: 'A distinctive Luang Prabang stay and a comfortable Vientiane hotel, with the same proposed touring and transfers.' },
    { id: 'premium', label: 'Premium escape', price: 2299, hotels: [
      { place: 'Luang Prabang', name: 'Avani+ Luang Prabang', room: 'Deluxe room · breakfast', nights: 5 },
      { place: 'Vientiane', name: 'Avani+ Lanexang Vientiane', room: 'Deluxe room · breakfast', nights: 5 },
    ], note: 'Upgraded accommodation in both cities, retaining the same itinerary and included experiences.' },
  ],
  days: [
    { heading: 'DAY 1', title: 'Depart London', description: 'Depart London Gatwick for Bangkok on the proposed international flight. The example routing names Norse Atlantic Airways; schedules and airline availability must be reconfirmed when quoting.' },
    { heading: 'DAY 2', title: 'Connect to Luang Prabang', description: 'Arrive in Bangkok and connect onwards to Luang Prabang on the proposed Bangkok Airways service. A separate check-in, baggage collection and immigration formalities may be required. Meet your driver in Laos for a private air-conditioned transfer to your hotel for five nights. Bangkok Airways passengers, including those travelling in Economy Class, enjoy complimentary access to the airline’s Boutique Lounge before departure.' },
    { heading: 'DAY 3', title: 'Luang Prabang heritage', description: 'Explore Luang Prabang on a private full-day city tour with an English-speaking guide. Lunch is included. Exact temples, museums and other stops will be confirmed in your personalised itinerary.' },
    { heading: 'DAYS 4–6', title: 'Luang Prabang at leisure', description: 'Three days to explore at your own pace. Wander through local markets, discover riverside cafés or ask us about optional waterfalls, Mekong River and countryside experiences.' },
    { heading: 'DAY 7', title: 'Fly to Vientiane', description: 'Private transfer from your Luang Prabang hotel to the airport for the proposed Lao Airlines domestic flight to Vientiane. Meet your driver on arrival for a private transfer to your hotel, where you will stay for five nights.' },
    { heading: 'DAY 8', title: 'Discover Vientiane', description: 'Join a shared full-day city tour with an English-speaking guide, visiting key cultural and historical landmarks. The final route and entrance arrangements will be confirmed when quoting.' },
    { heading: 'DAYS 9–11', title: 'Vientiane at your own pace', description: 'Three days at leisure to enjoy the capital’s relaxed atmosphere, temples, markets and Mekong riverside. Optional excursions can be tailored to your interests.' },
    { heading: 'DAY 12', title: 'Return to London', description: 'Early private transfer to Vientiane airport for the proposed Thai Airways flight to Bangkok and onward international flight to London Gatwick. The Bangkok connection may require separate check-in and immigration. Breakfast boxes can be requested for the early departure.' },
  ],
  included: [
    'Proposed return economy international flights from London via Bangkok, with 23 kg checked baggage per person, subject to confirmation',
    'Proposed regional and domestic flights, including 20 kg checked baggage where applicable; the example Thai Airways sector proposes one 23 kg piece',
    'Complimentary Bangkok Airways Boutique Lounge access in Bangkok for all passengers, including Economy Class, when travelling on the confirmed Bangkok Airways flight',
    'Five nights in Luang Prabang and five nights in Vientiane in twin/double accommodation',
    'Breakfast daily, with breakfast boxes where arranged, plus lunch during the Luang Prabang city tour',
    'Private air-conditioned airport transfers in Laos',
    'Private full-day guided Luang Prabang city tour',
    'Shared full-day guided Vientiane city tour',
    'English-speaking guides and specified entrance fees for the included tours',
  ],
  excluded: ['Visa or entry fees where applicable, including any Thailand transit/entry requirements', 'Travel insurance', 'Tips and gratuities', 'Optional tours and excursions', 'Personal expenses and meals not specified'],
  entryAdviceUrl: 'https://www.gov.uk/foreign-travel-advice/laos/entry-requirements',
  faqs: [
    { question: 'Are these fixed departure dates?', answer: 'No. The March–April schedule is an example itinerary rather than a confirmed departure. We can plan around your preferred dates, with flight and hotel availability checked at quotation.' },
    { question: 'Which tours are private?', answer: 'The proposed full-day Luang Prabang city tour is private, while the proposed full-day Vientiane city tour is shared. Airport transfers in Laos are private.' },
    { question: 'Can I customise the hotels or number of nights?', answer: 'Yes. Both accommodation options are starting points. We can change the hotels, room types, touring programme and length of stay to suit you.' },
    { question: 'Are the Bangkok flight connections guaranteed?', answer: 'No. The example routing may involve separate bookings and check-in. Connection times, baggage arrangements, entry formalities and disruption protection need to be assessed before booking.' },
    { question: 'Are the advertised prices guaranteed?', answer: 'No. £1,999 and £2,299 per person are indicative examples based on two adults sharing. Your personalised quotation will confirm current fares, availability and package arrangements.' },
    { question: 'Do I need a visa for Laos?', answer: 'Requirements depend on your nationality and can change. Check official Laos entry guidance before travel and discuss the route and passport details when planning.' },
  ],
};

/** Flexible 13-night, three-country itinerary. The premium option is quotation-only. */
export const singaporeBatamJohor: TripIdea = {
  slug: 'singapore-batam-johor-three-country',
  country: 'Singapore, Indonesia & Malaysia',
  title: 'Singapore, Batam & Johor Bahru: three countries, one remarkable journey',
  eyebrow: 'SINGAPORE · INDONESIA · MALAYSIA',
  summary: 'Combine seven nights in vibrant Singapore, three nights at a relaxed Batam island resort and three nights in Johor Bahru. Travel between countries by ferry, with private transfers and time to explore at your own pace.',
  duration: '16 days',
  nights: '13 nights',
  introEyebrow: 'THREE COUNTRIES, ONE JOURNEY',
  introTitle: 'City discoveries. Island downtime. Malaysian flavours.',
  introText: 'Begin near Singapore’s Orchard Road with a private city and Sentosa tour, then unwind on Batam in Indonesia before crossing to Johor Bahru in Malaysia. Your hotels and activities can be tailored to your interests.',
  journeyTitle: 'From Singapore to Batam and Johor Bahru.',
  journeyAside: 'Seven nights in Singapore, three nights in Batam and three nights in Johor Bahru — with transfers and two international ferry crossings.',
  hero: { src: '/images/inspiration/singapore-marina-bay-hero.webp', alt: 'Illustrative skyline of Singapore Marina Bay at dusk with Gardens by the Bay', credit: '', creditUrl: '' },
  secondImage: { src: '/images/inspiration/batam-island-resort.webp', alt: 'Illustrative tropical coastal resort and ferry scene inspired by Batam, Indonesia', credit: '', creditUrl: '' },
  tiers: [
    { id: 'essential', label: 'Essential escape', price: 2749, hotels: [
      { place: 'Singapore', name: 'Holiday Inn Singapore Orchard City Centre', room: 'King Standard Room · breakfast', nights: 7 },
      { place: 'Batam, Indonesia', name: 'Holiday Inn Resort Batam', room: 'Standard Room · breakfast', nights: 3 },
      { place: 'Johor Bahru, Malaysia', name: 'Holiday Inn Johor Bahru City Centre', room: 'King Standard City View · breakfast', nights: 3 },
    ], note: 'The proposed 13-night itinerary, including flights, ferry crossings, private transfers and the specified Singapore sightseeing.' },
    { id: 'premium', label: 'Premium escape', price: 3749, hotels: [
      { place: 'Singapore', name: 'Hilton Singapore Orchard', room: 'Five-star accommodation · room category and breakfast to be confirmed', nights: 7 },
      { place: 'Batam, Indonesia', name: 'Montigo Resorts Nongsa', room: 'Five-star resort villa · room category and breakfast to be confirmed', nights: 3 },
      { place: 'Johor Bahru, Malaysia', name: 'Amari Johor Bahru', room: 'Five-star accommodation · room category and breakfast to be confirmed', nights: 3 },
    ], note: 'Five-star alternatives selected for location and experience.' },
  ],
  days: [
    { heading: 'DAY 1', title: 'Fly from London', description: 'Proposed Saturday 1 May 2027 departure from London Gatwick at 13:15 on Singapore Airlines SQ313. The published seasonal schedule matches this timing; individual flight availability and fare remain subject to confirmation.' },
    { heading: 'DAY 2', title: 'Welcome to Singapore', description: 'Sunday 2 May 2027: proposed 09:30 arrival at Singapore Changi. After immigration, baggage and customs, meet your named driver for a private air-conditioned transfer to your hotel near Orchard Road. Begin your seven-night stay and enjoy the rest of the day at leisure.' },
    { heading: 'DAY 3', title: 'Singapore at your own pace', description: 'A full leisure day. Explore Orchard Road, nearby shopping and dining, or relax after your journey.' },
    { heading: 'DAY 4', title: 'Private Singapore city and Sentosa tour', description: 'A proposed full-day private city tour, including a half-day on Sentosa Island. Hotel pickup and drop-off are included; the exact visits, admissions and timings will be confirmed when quoting.' },
    { heading: 'DAYS 5–6', title: 'Two days for further discovery', description: 'Days at leisure. Optional ideas include Gardens by the Bay, the Botanic Gardens or a guided food walk through Singapore’s neighbourhoods. These activities are not included in the advertised price.' },
    { heading: 'DAY 7', title: 'Explore with the Big Bus', description: 'Enjoy proposed Big Bus Singapore hop-on, hop-off tickets for its two routes. This is a shared sightseeing service, not a private tour. Confirm current stops, timetable, ticket coverage and the closest Orchard Road stop before travelling.' },
    { heading: 'DAY 8', title: 'A final Singapore leisure day', description: 'Enjoy more time to explore the city independently before tomorrow’s island crossing.' },
    { heading: 'DAY 9', title: 'Singapore to Batam, Indonesia', description: 'Private late-morning transfer to the ferry terminal for a crossing to Batam in the Riau Islands. After arrival formalities, meet your driver for a private transfer to your resort for three nights.' },
    { heading: 'DAYS 10–11', title: 'Batam island relaxation', description: 'Two days at leisure at your resort. Enjoy the pool, wellness facilities and island atmosphere. Optional activities are available by request at additional cost.' },
    { heading: 'DAY 12', title: 'Batam to Johor Bahru, Malaysia', description: 'Private transfer to the Batam ferry terminal and ferry crossing to Johor Bahru, subject to operating schedules. Meet your driver after arrival formalities for a private transfer to your city-centre hotel near the Singapore Causeway. Stay three nights.' },
    { heading: 'DAYS 13–14', title: 'Discover Johor Bahru', description: 'Two days at leisure to enjoy Johor Bahru’s food, shopping and local culture, with optional guided experiences on request.' },
    { heading: 'DAY 15', title: 'Road transfer to Changi and flight home', description: 'Saturday 15 May 2027: proposed 18:00 private pickup from your Johor Bahru hotel for an international road transfer across the Singapore border to Changi Airport. Proposed Singapore Airlines departure at 23:00; allow for immigration and variable border queues.' },
    { heading: 'DAY 16', title: 'Arrive in London', description: 'Sunday 16 May 2027: proposed 05:55 arrival at London Heathrow. Airports, flight numbers and timings will be confirmed in your personalised quotation.' },
  ],
  included: [
    'Proposed return Singapore Airlines economy flights between the UK and Singapore, with 25 kg checked baggage per person, subject to airline fare confirmation',
    'Seven nights in Singapore, three nights in Batam and three nights in Johor Bahru, sharing a twin or double room',
    'Breakfast at the proposed hotels, with breakfast boxes where arranged',
    'Private air-conditioned airport, hotel and ferry-terminal transfers described in the itinerary',
    'Ferry crossings Singapore–Batam and Batam–Johor Bahru, subject to confirmed sailings',
    'International road transfer from Johor Bahru to Singapore Changi Airport',
    'Private Singapore city and Sentosa excursion, subject to confirmed itinerary and admission inclusions',
    'Big Bus Singapore hop-on, hop-off sightseeing tickets, subject to route and ticket confirmation',
  ],
  excluded: ['Visas, entry permits or immigration fees where applicable', 'Travel insurance', 'Tips and gratuities', 'Optional tours and excursions', 'Personal expenses and meals not specified'],
  entryAdviceUrl: 'https://www.gov.uk/foreign-travel-advice/singapore/entry-requirements',
  faqs: [
    { question: 'Is £2,749 per person a live offer?', answer: 'No. It is an indicative starting price supplied for two people sharing twin/double accommodation, subject to flight, ferry and hotel availability and a final personalised quotation.' },
    { question: 'How much is the premium five-star option?', answer: 'The indicative premium price is £3,749 per person based on two adults sharing and is not a guaranteed offer. The final price must be verified for your travel dates. The suggested alternatives are Hilton Singapore Orchard, Montigo Resorts Nongsa and Amari Johor Bahru; hotel availability, room types, breakfast and the total supplement must be confirmed.' },
    { question: 'Are Singapore tours and transfers private?', answer: 'The Singapore city and Sentosa excursion and the stated road transfers are proposed as private. Big Bus sightseeing is shared and follows its published routes and operating times.' },
    { question: 'Can I choose different dates or hotels?', answer: 'Yes. This is a flexible tailor-made itinerary, not a fixed dated departure. We can revise the hotels, travel dates, length of stay and optional experiences.' },
    { question: 'What entry formalities apply across the three countries?', answer: 'Immigration and visa rules differ across Singapore, Indonesia and Malaysia, and depend on nationality. Check the relevant UK government travel advice for all three countries before travel; ferry and road crossings require passport formalities.' },
    { question: 'Are the proposed flight and ferry timings confirmed?', answer: 'No. Flight schedules, ferry ports, sailings, border-crossing time and transport arrangements are subject to reconfirmation for your chosen travel dates.' },
  ],
};


export const mumbaiWinterSunshine: TripIdea = {
  slug: 'mumbai-winter-sunshine',
  country: 'India',
  title: 'Mumbai: winter sunshine in India’s Maximum City',
  eyebrow: 'INDIA · BEACH & CITY ESCAPE',
  summary: 'Swap the winter chill for warm Arabian Sea sunsets and the energy of Mumbai. Stay on Juhu Beach, with the freedom to relax by the sea, explore the city’s celebrated landmarks or discover the neighbourhoods and hidden gems known to a planner with deep family roots in Mumbai.',
  duration: '10 days',
  nights: '8 nights',
  introEyebrow: 'A WINTER CITY ESCAPE WITH A BEACHFRONT BASE',
  introTitle: 'Maximum City. Your own pace.',
  introText: 'Mumbai is a city of contrasts: grand colonial-era landmarks, lively markets, creative neighbourhoods, extraordinary food and a coastline that comes alive at sunset. Your base is Juhu, one of the city’s best-known seaside neighbourhoods, where you can enjoy six nights by the Arabian Sea. The winter months are generally among the more comfortable times to explore, with drier weather and warm daytime temperatures. This itinerary deliberately leaves your days in Mumbai open, so you can decide how much sightseeing, local discovery and time by the pool or beach feels right.',
  journeyTitle: 'London to Amsterdam, Mumbai and back.',
  journeyAside: 'Two separate one-night Amsterdam stopovers—one outbound and one on the return—break up the rail and air journey, with six nights on Juhu Beach in Mumbai.',
  hero: {
    src: '/images/inspiration/mumbai-juhu-beach-hero.webp',
    alt: 'Golden-hour view across Juhu Beach and the Arabian Sea in Mumbai',
    credit: '',
    creditUrl: '',
  },
  secondImage: {
    src: '/images/inspiration/mumbai-gateway-of-india-sunset.webp',
    alt: 'Gateway of India and the Mumbai harbour in warm evening light',
    credit: '',
    creditUrl: '',
  },
  tiers: [
    {
      id: 'essential',
      label: 'Essential escape',
      price: 1499,
      hotels: [
        { place: 'Amsterdam', name: 'ibis Amsterdam City Centre', room: 'Cosy Room · breakfast · one night on each side of the journey', nights: 2 },
        { place: 'Mumbai · Juhu Beach', name: 'Novotel Mumbai Juhu Beach', room: 'Superior Ocean View room · breakfast', nights: 6 },
      ],
      note: 'A beachfront Juhu stay with an ocean-view room, plus convenient overnight stops in central Amsterdam.',
    },
    {
      id: 'premium-jw-marriott',
      label: 'Premium escape',
      price: 2629,
      hotels: [
        { place: 'Amsterdam', name: 'Hotel Boat & Co.', room: 'Premium room · breakfast · one night on each side of the journey', nights: 2 },
        { place: 'Mumbai · Juhu Beach', name: 'JW Marriott Mumbai Juhu', room: 'Premier Club Room · breakfast', nights: 6 },
      ],
      note: 'A design-led Amsterdam stay at Hotel Boat & Co., paired with six nights in a Premier Club Room at JW Marriott Mumbai Juhu.',
    },
  ],
  days: [
    { heading: 'DAY 1', title: 'London to Amsterdam', description: 'Depart London St Pancras International by Eurostar in the morning and arrive at Amsterdam Centraal around lunchtime. Check in for one night at your selected Amsterdam hotel. Essential uses ibis Amsterdam City Centre beside Amsterdam Centraal; Premium uses Hotel Boat & Co. in the Houthavens district. The remainder of the day is at leisure, with hotel connections arranged to suit your selected stay.' },
    { heading: 'DAY 2', title: 'Amsterdam to Mumbai', description: 'Check out in the morning and make your way to Amsterdam Centraal for the direct train to Schiphol Airport, usually around 15–20 minutes from the station. Allow additional time for the transfer from your selected hotel. Fly to Mumbai with IndiGo, with the proposed service departing in the early afternoon. Flight schedules and baggage arrangements will be reconfirmed when quoting.' },
    { heading: 'DAY 3', title: 'Arrive in Mumbai · welcome to Juhu', description: 'Arrive at Mumbai Chhatrapati Shivaji Maharaj International Airport in the early hours. After immigration, baggage collection and customs, meet your driver, who will be holding a name board, for a private air-conditioned transfer to your Juhu beachfront hotel. Your six-night stay begins, with early-morning room access planned on arrival so you can settle in and rest. The rest of the day is at leisure.' },
    { heading: 'DAYS 4–8', title: 'Mumbai, your way', description: 'Five full days to enjoy Mumbai at your own pace. Relax by the pool, stroll along Juhu Beach and watch the sun set over the Arabian Sea, or ask us to arrange private sightseeing, food experiences, cultural visits and excursions. We will shape the balance of relaxation and exploration around you; no sightseeing tours are included unless added to your personalised quotation.' },
    { heading: 'DAY 9', title: 'Mumbai to Amsterdam', description: 'A very early private transfer takes you to Mumbai airport for your return IndiGo flight to Amsterdam, proposed to depart in the early morning and arrive around late morning. After arrival formalities, take the train from Schiphol Airport to Amsterdam Centraal and continue to your selected Amsterdam hotel for your second one-night stopover. Essential uses ibis Amsterdam City Centre; Premium uses Hotel Boat & Co. If your room is not yet ready, ask the hotel to store your luggage and enjoy the afternoon in the city. The rest of the day is at leisure.' },
    { heading: 'DAY 10', title: 'Amsterdam to London', description: 'Check out in the morning and allow time to travel from your selected hotel to Amsterdam Centraal for your return Eurostar journey to London St Pancras International, arriving in the early afternoon. Flight and train schedules are indicative and will be checked for your chosen dates.' },
  ],
  included: [
    'Return Eurostar train travel between London St Pancras International and Amsterdam Centraal, including two large pieces of luggage per person',
    'Two separate one-night stays at the selected Amsterdam hotel with breakfast: one night before the outbound flight and one night after the return flight from Mumbai. Essential uses ibis Amsterdam City Centre; Premium uses Hotel Boat & Co. Breakfast boxes can be requested for early departures, subject to hotel availability',
    'Six nights in Mumbai in a twin or double room, with breakfast, at the selected Essential or Premium hotel',
    'Return economy flights between Amsterdam and Mumbai with IndiGo, proposed with 30 kg checked baggage per person',
    'Train transfers between Amsterdam Centraal and Amsterdam Schiphol Airport Station in both directions',
    'Private chauffeur-driven, air-conditioned airport transfers in Mumbai',
    'Meet-and-greet on arrival at Mumbai airport',
    'Early-morning room access at the Mumbai hotel on arrival, as proposed and subject to hotel confirmation',
  ],
  excluded: [
    'Indian visa or e-visa fees, where applicable',
    'Travel insurance',
    'Tips and gratuities',
    'Optional tours, excursions, guides and entrance fees',
    'Any meals or drinks not specified',
    'Personal expenses',
  ],
  optionalExperiences: [
    { name: 'Mumbai highlights with a private local guide', image: '/images/excursions/mumbai-highlights-gateway-of-india.webp', detail: 'Explore signature sights such as the Gateway of India, the historic Fort district, Chhatrapati Shivaji Maharaj Terminus and the Kala Ghoda arts quarter, with the route shaped around your interests.' },
    { name: 'Elephanta Caves and the harbour', image: '/images/excursions/mumbai-elephanta-caves.webp', detail: 'Take a boat across Mumbai Harbour to the UNESCO-listed Elephanta Caves, known for their remarkable rock-cut temples and sculptures. Boat operations and island access are subject to conditions and opening arrangements.' },
    { name: 'A taste of Mumbai', image: '/images/excursions/mumbai-street-food.webp', detail: 'Discover the city through its food, from much-loved street-food specialities to traditional cafés and regional dishes, with a knowledgeable guide and carefully chosen stops.' },
    { name: 'Markets, shopping and hidden lanes', image: '/images/excursions/mumbai-markets-shopping.webp', detail: 'Explore the colour and character of Mumbai’s markets and neighbourhoods, from historic bazaars to independent boutiques and local shopping streets.' },
    { name: 'Dharavi community-led experience', image: '/images/excursions/mumbai-markets-shopping.webp', detail: 'If of interest, consider a responsible, locally led visit that focuses on the area’s enterprise and community life, with a respectful approach to residents and photography.' },
    { name: 'Bollywood behind the scenes', image: '/images/excursions/mumbai-bollywood-behind-the-scenes.webp', detail: 'Discover Mumbai’s film heritage with a studio or Bollywood-themed experience, subject to access, schedules and availability.' },
    { name: 'Bandra, the seafront and city viewpoints', image: '/images/excursions/mumbai-highlights-gateway-of-india.webp', detail: 'Explore Bandra’s cafés, street art and heritage corners, and take in views across the coastline and the Bandra–Worli Sea Link.' },
    { name: 'A slower day in Juhu', image: '/images/excursions/mumbai-juhu-beach-sunset.webp', detail: 'Keep a day free for the beach, hotel pool and spa, a sunset stroll and dinner overlooking the Arabian Sea.' },
  ],
  entryAdviceUrl: 'https://www.gov.uk/foreign-travel-advice/india/entry-requirements',
  faqs: [
    { question: 'Is this a fixed-date package?', answer: 'No. This is a flexible itinerary idea based on an example set of travel arrangements. We can check your preferred dates and confirm current Eurostar, flight and hotel options in a personalised quotation.' },
    { question: 'Why is there an overnight stay in Amsterdam in both directions?', answer: 'The proposed routing includes one night in Amsterdam before the outbound flight and another night after the return flight from Mumbai. The Essential option uses ibis Amsterdam City Centre; Premium uses Hotel Boat & Co. Hotel location and transfer arrangements will be reconfirmed in your quotation.' },
    { question: 'What is the difference between Essential and Premium?', answer: 'The Essential option is based on Novotel Mumbai Juhu Beach in a Superior Ocean View room, with ibis Amsterdam City Centre for both stopovers. Premium is £2,629pp and pairs Hotel Boat & Co. in Amsterdam with a Premier Club Room at JW Marriott Mumbai Juhu, including breakfast, based on two sharing.' },
    { question: 'Are sightseeing tours included?', answer: 'No. The Mumbai stay is intentionally left open so you can choose how much time to spend relaxing and how much exploring. The experiences shown are ideas that can be added to your personalised itinerary and quotation.' },
    { question: 'Can the hotel or room category be changed?', answer: 'Yes. The listed hotels and room categories are proposed starting points. We can discuss alternatives, subject to availability and a revised quotation.' },
    { question: 'Do I need a visa for India?', answer: 'Entry requirements depend on your nationality and can change. Check the latest UK government entry guidance and the official Indian visa portal before travel. Any visa or e-visa application and fee is not included in the example price.' },
    { question: 'Are the flight and train times guaranteed?', answer: 'No. The times supplied are an example for costing purposes. Airline schedules, Eurostar services, hotel availability, baggage allowances and transfer arrangements must all be reconfirmed for your chosen dates.' },
  ],
};
