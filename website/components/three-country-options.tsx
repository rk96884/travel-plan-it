'use client';

import { useState } from 'react';
import type { TripIdea } from '../lib/trip-ideas';
import styles from './holiday-details.module.css';

const hotelSummaries: Record<string,string> = {
  'Holiday Inn Singapore Orchard City Centre': 'A convenient Orchard Road base for shopping and sightseeing.',
  'Hilton Singapore Orchard': 'A premium five-star base directly on Orchard Road.',
  'Holiday Inn Resort Batam': 'A comfortable island resort with leisure facilities and room to unwind.',
  'Montigo Resorts Nongsa': 'A resort of spacious villas overlooking the Singapore Strait; confirm ferry-terminal routing and room category.',
  'Holiday Inn Johor Bahru City Centre': 'Central city accommodation close to the causeway and transport links.',
  'Amari Johor Bahru': 'An upscale city-centre alternative with dining, spa and pool facilities.',
};

const weather = [
  { place: 'Singapore', title: 'Singapore in May', range: '26–32°C', detail: 'Hot and humid. The official Singapore climate normals show a May daily high around 32.3°C, low around 25.7°C and approximately 164 mm of monthly rainfall. Afternoon thunderstorms are common.', source: 'https://www.weather.gov.sg/climate-climate-of-singapore/', sourceLabel: 'Meteorological Service Singapore' },
  { place: 'Batam', title: 'Batam in May', range: 'Warm and tropical', detail: 'Expect heat, humidity and tropical showers in May. Ferry movements and waterside activities depend on sea conditions. Discuss the forecast shortly before travel.', source: 'https://www.bmkg.go.id/', sourceLabel: 'Indonesian BMKG weather service' },
  { place: 'Johor Bahru', title: 'Johor Bahru in May', range: '23–33°C', detail: 'Malaysian meteorological observations put typical May daily temperatures around 23.1–32.5°C and average monthly rainfall at about 215 mm. Showers and thunderstorms are possible.', source: 'https://worldweather.wmo.int/en/city.html?cityId=78', sourceLabel: 'World Meteorological Organization' },
];

const experiences = [
  { place: 'Singapore', title: 'Gardens by the Bay', detail: 'Discover the Supertree Grove and consider adding tickets for the climate-controlled conservatories.' },
  { place: 'Singapore', title: 'Singapore Botanic Gardens', detail: 'Enjoy a relaxed stroll through tropical gardens and the National Orchid Garden.' },
  { place: 'Singapore', title: 'Hawker food discovery', detail: 'Taste local favourites on a small-group or private food tour.' },
  { place: 'Batam', title: 'Wellness and spa', detail: 'Relax with an optional massage or wellness treatment at your resort.' },
  { place: 'Batam', title: 'Coastal and local discovery', detail: 'Explore local coastal scenery and markets with an optional guided excursion.' },
  { place: 'Johor Bahru', title: 'Johor Bahru heritage and food', detail: 'Discover the city’s historic neighbourhoods, cafés and traditional food with a local guide.' },
];

export default function ThreeCountryOptions({ trip }: { trip: TripIdea }) {
  const [tab,setTab]=useState<'hotels'|'weather'|'excursions'>('hotels');
  const [city,setCity]=useState(0);
  return <section className={styles.section} aria-labelledby="explore-heading">
    <div className={styles.heading}>
      <p className={styles.eyebrow}>EXPLORE YOUR OPTIONS</p>
      <h2 id="explore-heading">More to discover, your way.</h2>
      <p>Compare your hotels, explore the climate and choose optional experiences across three countries.</p>
    </div>
    <div className={styles.tabs} role="tablist" aria-label="Holiday details">
      {([['hotels','Your hotels'],['weather','Year-round weather'],['excursions','Optional experiences']] as const).map(([id,label])=><button key={id} id={`three-country-tab-${id}`} type="button" role="tab" aria-selected={tab===id} aria-controls="three-country-panel" className={tab===id?styles.active:''} onClick={()=>setTab(id)}>{label}</button>)}
    </div>
    <div id="three-country-panel" role="tabpanel" aria-labelledby={`three-country-tab-${tab}`} className={styles.panel}>
      {tab==='hotels' && <>
        <p className={styles.note}>Hotels and room types are proposed, not booked. Premium pricing, breakfast arrangements, availability and terminal-to-resort transfers will be confirmed in a personalised quotation. Photographs will be added once approved for commercial use.</p>
        <div className={styles.hotels}>{trip.tiers.flatMap(tier=>tier.hotels.map(hotel=><article className={styles.hotel} key={tier.id+hotel.name}>
          <div className={styles.hotelText}><span className={styles.tag}>{tier.label} · {hotel.place}</span><h3>{hotel.name}</h3><p>{hotelSummaries[hotel.name]}</p><p className={styles.room}>{hotel.nights} nights · {hotel.room}</p></div>
          <div className={styles.hotelVisual}><div className={styles.excursionPlaceholder} role="img" aria-label={`Hotel photo for ${hotel.name} to be added`}>{hotel.place}</div><span>Hotel photography to follow</span></div>
        </article>))}</div>
      </>}
      {tab==='weather' && <>
        <p className={styles.note}>Seasonal guidance for travel in May 2027, based on historical climate rather than a forecast. The weather tab is initially focused on the proposed travel month.</p>
        <div className={styles.citySwitch}>{weather.map((item,i)=><button type="button" key={item.place} className={city===i?styles.selected:''} aria-pressed={city===i} onClick={()=>setCity(i)}>{item.place}</button>)}</div>
        <h3>{weather[city].title} · {weather[city].range}</h3>
        <p className={styles.weatherIntro}>{weather[city].detail}</p>
        <p className={styles.note}>Source: <a href={weather[city].source} rel="noopener noreferrer" target="_blank">{weather[city].sourceLabel}</a>. Climate averages are not a forecast.</p>
      </>}
      {tab==='excursions' && <>
        <p className={styles.note}>These are suggested additional experiences, not included in the £2,749pp itinerary. Availability, tickets and guide fees will be confirmed on request.</p>
        <div className={styles.excursions}>{experiences.map(item=><article key={item.title}>
          <div className={styles.excursionVisual}><div className={styles.excursionPlaceholder} role="img" aria-label={`Photography for ${item.title} to follow`}>{item.place}</div></div>
          <div className={styles.excursionBody}><span className={styles.tag}>{item.place}</span><h3>{item.title}</h3><p>{item.detail}</p></div>
        </article>)}</div>
      </>}
    </div>
  </section>;
}
