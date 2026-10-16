'use client';

import { useState } from 'react';
import type { TripIdea } from '../lib/trip-ideas';
import styles from './holiday-details.module.css';

const info = {
  Thailand: {
    weather: [
      { city: 'Bangkok', intro: 'Hot throughout the year. November to February is generally drier and more comfortable for sightseeing; April is often especially hot. Rainfall increases during the southwest monsoon.', months: ['23–32','24–34','26–35','27–36','27–35','26–34','26–34','26–33','26–33','26–33','24–33','23–32'], wet: [24,14,60,119,203,210,189,200,317,200,43,18], source: 'https://www.timeanddate.com/weather/%401609348/climate' },
      { city: 'Phuket', intro: 'Warm year-round, with the generally drier beach season from around December to March. May to October tends to be wetter, with rougher seas possible; boat trips depend on conditions.', months: ['25–33','26–34','26–35','27–34','26–33','26–33','26–32','26–32','25–32','25–32','26–32','25–33'], wet: [113,67,99,163,275,320,263,341,395,354,239,94], source: 'https://www.timeanddate.com/weather/thailand/phuket/climate' },
    ],
    excursions: [
      { place: 'Bangkok', name: 'Chao Phraya evening cruise', detail: 'See the riverside skyline and illuminated temples from the water; private and small-group options can be explored.' },
      { place: 'Bangkok', name: 'Thai food and neighbourhood walk', detail: 'Explore local flavours and quieter streets with a knowledgeable guide.' },
      { place: 'Phuket', name: 'Phang Nga Bay by boat', detail: 'Limestone scenery, sheltered waterways and island views; routing depends on sea conditions.' },
      { place: 'Phuket', name: 'Old Phuket Town and local culture', detail: 'Colourful Sino-Portuguese architecture, cafés and neighbourhood markets.' },
    ],
    hotelCopy: {
      'ibis Bangkok Sathorn': 'A straightforward city base for Bangkok sightseeing, with a practical location for exploring the capital.',
      'ibis Phuket Patong': 'A convenient, good-value option for travellers who want easy access to Patong and its surrounding attractions.',
      'Amari Bangkok': 'An upscale Bangkok stay for travellers seeking a more polished city-hotel experience.',
      'Amari Phuket': 'A coastal resort option for a more relaxed Phuket stay, with room categories confirmed when quoting.',
    },
    image: '/images/inspiration/phuket-coast.webp',
  },
  Cambodia: {
    weather: [
      { city: 'Phnom Penh', intro: 'Warm to hot throughout the year. November to February is generally drier; March and April are typically the hottest months. Most rain falls during May to October.', months: ['23–32','23–33','25–35','26–36','27–36','26–34','26–34','26–34','25–33','25–32','25–32','23–31'], wet: [13,4,11,85,180,180,216,245,315,222,137,28], source: 'https://www.timeanddate.com/weather/cambodia/phnom-penh/climate' },
      { city: 'Siem Reap', intro: 'Dry-season months from November to February are popular for temple visits. March and April can be very hot, while the wetter season brings lush landscapes and occasional heavy showers.', months: ['22–31','22–33','25–35','26–36','27–36','26–33','26–33','26–32','26–31','25–31','24–31','22–31'], wet: [5,6,24,75,164,182,255,260,330,189,83,13], source: 'https://www.timeanddate.com/weather/%401822214/climate' },
    ],
    excursions: [
      { place: 'Phnom Penh', name: 'Royal Palace and Silver Pagoda', detail: 'Explore the capital’s royal heritage, subject to opening arrangements and dress requirements.' },
      { place: 'Phnom Penh', name: 'Riverside food and market experience', detail: 'Discover local flavours, markets and neighbourhood life with a guide.' },
      { place: 'Siem Reap', name: 'Tonlé Sap lake communities', detail: 'A guided visit exploring life around the lake; the experience varies by water level and season.' },
      { place: 'Siem Reap', name: 'Banteay Srei and countryside', detail: 'Visit an intricately carved Angkor-era temple and see rural landscapes beyond the main circuit.' },
    ],
    hotelCopy: {
      'ibis budget Phnom Penh Riverside': 'A simple, value-focused base for discovering the capital and its riverside neighbourhoods.',
      'ibis Styles Siem Reap': 'A comfortable base for exploring Siem Reap and arranging visits to the Angkor temples.',
      'Sofitel Phnom Penh Phokeethra': 'A refined, full-service hotel option for a more luxurious stay in Phnom Penh.',
      'Sofitel Angkor Phokeethra Golf & Spa Resort': 'A resort-style luxury choice for unwinding between temple visits in Siem Reap.',
    },
    image: '/images/inspiration/angkor-wat.webp',
  },
} as const;

const hotelGalleries: Record<string,string> = {
  'ibis Bangkok Sathorn': 'https://www.tripadvisor.co.uk/Hotel_Review-g293916-d1140504-Reviews-Ibis_Bangkok_Sathorn-Bangkok.html',
  'ibis Phuket Patong': 'https://www.tripadvisor.co.uk/Hotel_Review-g297930-d1055081-Reviews-Ibis_Phuket_Patong-Patong_Kathu_Phuket.html',
  'Amari Bangkok': 'https://www.tripadvisor.co.uk/Hotel_Review-g293916-d300434-Reviews-Amari_Bangkok-Bangkok.html',
  'Amari Phuket': 'https://www.tripadvisor.co.uk/Hotel_Review-g297930-d305178-Reviews-Amari_Phuket-Patong_Kathu_Phuket.html',
  'ibis budget Phnom Penh Riverside': 'https://www.tripadvisor.co.uk/Hotel_Review-g293940-d25164294-Reviews-Ibis_budget_Phnom_Penh_Riverside-Phnom_Penh.html',
  'ibis Styles Siem Reap': 'https://www.tripadvisor.co.uk/Hotel_Review-g297390-d13569015-Reviews-Ibis_Styles_Siem_Reap-Siem_Reap_Siem_Reap_Province.html',
  'Sofitel Phnom Penh Phokeethra': 'https://www.tripadvisor.co.uk/Hotel_Review-g293940-d1784730-Reviews-Sofitel_Phnom_Penh_Phokeethra-Phnom_Penh.html',
  'Sofitel Angkor Phokeethra Golf & Spa Resort': 'https://www.tripadvisor.co.uk/Hotel_Review-g297390-d299583-Reviews-Sofitel_Angkor_Phokeethra_Golf_and_Spa_Resort-Siem_Reap_Siem_Reap_Province.html',
};

const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

export default function HolidayDetails({ trip }: { trip: TripIdea }) {
  const country = trip.country === 'Cambodia' ? 'Cambodia' : 'Thailand';
  const data = info[country];
  const [tab, setTab] = useState<'hotels'|'weather'|'excursions'>('hotels');
  const [city, setCity] = useState(0);
  const weather = data.weather[city];

  return <section className={styles.section} aria-labelledby="explore-heading">
    <div className={styles.heading}><p className={styles.eyebrow}>EXPLORE YOUR OPTIONS</p><h2 id="explore-heading">More to discover, your way.</h2><p>Explore the proposed hotels, seasonal climate and experiences we can add to your itinerary.</p></div>
    <div className={styles.tabs} role="tablist" aria-label="Holiday details">
      {([['hotels','Your hotels'],['weather','Year-round weather'],['excursions','Optional experiences']] as const).map(([id,label])=><button key={id} id={`tab-${id}`} type="button" role="tab" aria-selected={tab===id} aria-controls="holiday-detail-panel" className={tab===id?styles.active:''} onClick={()=>setTab(id)}>{label}</button>)}
    </div>
    <div id="holiday-detail-panel" role="tabpanel" aria-labelledby={`tab-${tab}`} className={styles.panel}>
      {tab==='hotels' && <>
        <p className={styles.note}>These are proposed hotels, not confirmed reservations. Room types and availability will be reconfirmed in your personalised quotation.</p>
        <div className={styles.hotels}>{trip.tiers.flatMap(tier=>tier.hotels.map(hotel=><article className={styles.hotel} key={tier.id+hotel.name}>
          <div className={styles.hotelText}><span className={styles.tag}>{tier.label} · {hotel.place}</span><h3>{hotel.name}</h3><p>{(data.hotelCopy as Record<string,string>)[hotel.name]}</p><p className={styles.room}>{hotel.nights} nights · {hotel.room}</p><a href={hotelGalleries[hotel.name]} target="_blank" rel="noopener noreferrer">View real hotel photos on Tripadvisor ↗</a></div>
          <div className={styles.hotelVisual}><img src={hotel.place === 'Bangkok' ? '/images/inspiration/bangkok-wat-arun.webp' : hotel.place === 'Phuket' ? '/images/inspiration/phuket-coast.webp' : hotel.place === 'Phnom Penh' ? '/images/inspiration/phnom-penh.webp' : '/images/inspiration/angkor-wat.webp'} alt={`Destination scenery in ${hotel.place}, not a photograph of ${hotel.name}`} loading="lazy"/><span>Destination imagery · Hotel photographs to follow</span></div>
        </article>))}</div>
      </>}
      {tab==='weather' && <>
        <div className={styles.citySwitch}>{data.weather.map((item,i)=><button type="button" key={item.city} className={city===i?styles.selected:''} aria-pressed={city===i} onClick={()=>setCity(i)}>{item.city}</button>)}</div>
        <h3>{weather.city} throughout the year</h3><p className={styles.weatherIntro}>{weather.intro}</p>
        <div className={styles.weatherGrid} aria-label={`Typical temperature ranges and monthly average rainfall for ${weather.city}`}>{months.map((month,i)=><div className={styles.month} key={month}><div className={styles.barArea}><div className={styles.rainBar} style={{height:`${Math.round(weather.wet[i]/400*100)}%`}}/></div><strong>{month}</strong><span>{weather.months[i]}°C</span><span>{weather.wet[i]} mm</span></div>)}</div>
        <p className={styles.note}>Typical monthly low–high temperatures (°C) and average monthly rainfall (mm), converted and rounded from historical weather-station observations. These are climate averages, not forecasts. Weather varies year to year. Source: <a href={weather.source} target="_blank" rel="noopener noreferrer">Time and Date climate averages</a> (2012–2021 for Phuket and Cambodia; 1992–2021 for Bangkok).</p>
      </>}
      {tab==='excursions' && <>
        <p className={styles.note}>Optional experiences are not included in the advertised holiday price. We can discuss availability, suitability and costs when tailoring your itinerary.</p>
        <div className={styles.excursions}>{data.excursions.map(item=><article key={item.name}><span className={styles.tag}>{item.place}</span><h3>{item.name}</h3><p>{item.detail}</p></article>)}</div>
      </>}
    </div>
  </section>;
}
