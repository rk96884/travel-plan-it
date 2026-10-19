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
      { place: 'Bangkok', name: 'Bangkok temples and riverside', detail: 'Discover the city’s historic temples and riverside landmarks with a local guide.' },
      { place: 'Phuket', name: 'Phuket scenic coastal tour', detail: 'Explore island viewpoints and coastal scenery at a relaxed pace.' },
    ],
    hotelCopy: {
      'ibis Bangkok Sathorn': 'A straightforward city base for Bangkok sightseeing, with a practical location for exploring the capital.',
      'ibis Phuket Patong': 'A convenient, good-value option for travellers who want easy access to Patong and its surrounding attractions.',
      'Amari Bangkok': 'An upscale Bangkok stay for travellers seeking a more polished city-hotel experience.',
      'Amari Phuket': 'A coastal resort option for a more relaxed Phuket stay, with room categories confirmed when quoting.',
    },
    image: '/images/inspiration/phuket-coast.webp',
  },
  Vietnam: {
    weather: [
      { city: 'Hanoi', intro: 'Northern Vietnam has distinct seasons: cooler, relatively drier winters and hot, humid summers. March can be mild, with occasional drizzle; summer rain peaks around July and August.', months: ['14–20','16–22','19–24','22–28','26–33','27–34','27–34','26–33','25–32','23–29','20–26','15–22'], wet: [39,22,55,110,185,196,299,381,244,158,46,28], source: 'https://www.timeanddate.com/weather/vietnam/hanoi/climate' },
      { city: 'Ho Chi Minh City', intro: 'Warm throughout the year. December to April is usually drier, while the wetter season typically runs from May to November. March and April can be especially hot.', months: ['22–32','23–33','24–34','26–35','26–34','25–33','24–33','24–33','24–32','24–32','23–32','22–32'], wet: [11,5,27,52,166,179,202,223,217,245,117,37], source: 'https://www.timeanddate.com/weather/vietnam/ho-chi-minh/climate' },
    ],
    excursions: [
      { place: 'Hanoi', name: 'Hanoi street food discovery', detail: 'Taste regional specialities and discover the city’s lively food culture with a local guide.' },
      { place: 'Hanoi', name: 'Ninh Binh river and countryside', detail: 'Explore limestone landscapes and riverside scenery, with boat-trip options depending on your interests.' },
      { place: 'Northern Vietnam', name: 'Ha Long Bay cruise upgrade', detail: 'Consider a boat experience among the bay’s dramatic limestone islands, subject to weather and availability.' },
      { place: 'Ho Chi Minh City', name: 'Ho Chi Minh City heritage', detail: 'Discover the city’s historic architecture, landmarks and neighbourhoods with a local guide.' },
      { place: 'Ho Chi Minh City', name: 'Cu Chi Tunnels private visit', detail: 'Explore this significant wartime site at your own pace with a private guide instead of the proposed shared tour.' },
      { place: 'Vung Tau', name: 'Vung Tau beach excursion', detail: 'Spend time by the sea and explore the coastal views of Vung Tau, with a private excursion upgrade available.' },
    ],
    hotelCopy: {
      'Pullman Hanoi': 'A comfortable city hotel for exploring Hanoi and returning to after northern Vietnam day trips.',
      'Pullman Saigon Centre': 'A contemporary city base for Ho Chi Minh City sightseeing and excursions.',
      'Grand Mercure Hanoi': 'An elegant, higher-end option with thoughtfully styled rooms for your Hanoi stay.',
      'La Siesta Premium Saigon Central': 'A boutique-style premium hotel option in the heart of Ho Chi Minh City.',
    },
    image: '/images/hotels/grand-mercure-hanoi.webp',
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
      { place: 'Phnom Penh', name: 'Phnom Penh heritage highlights', detail: 'A guided introduction to the capital’s architecture and cultural landmarks.' },
      { place: 'Siem Reap', name: 'Angkor temples discovery', detail: 'Explore the iconic temples of Angkor with a knowledgeable local guide.' },
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

const hotelImages: Record<string,string> = {
  'Pullman Hanoi': '/images/hotels/pullman-hanoi.webp',
  'Pullman Saigon Centre': '/images/hotels/pullman-saigon-centre.webp',
  'Grand Mercure Hanoi': '/images/hotels/grand-mercure-hanoi.webp',
  'La Siesta Premium Saigon Central': '/images/hotels/la-siesta-premium-saigon-central.webp',
  'ibis Bangkok Sathorn': '/images/hotels/ibis-bangkok-sathorn.jpg',
  'ibis Phuket Patong': '/images/hotels/ibis-phuket-patong.jpg',
  'Amari Bangkok': '/images/hotels/amari-bangkok.jpg',
  'Amari Phuket': '/images/hotels/amari-phuket.jpg',
  'ibis budget Phnom Penh Riverside': '/images/hotels/ibis-budget-phnom-penh-riverside.webp',
  'ibis Styles Siem Reap': '/images/hotels/ibis-styles-siem-reap.webp',
  'Sofitel Phnom Penh Phokeethra': '/images/hotels/sofitel-phnom-penh-phokeethra.webp',
  'Sofitel Angkor Phokeethra Golf & Spa Resort': '/images/hotels/sofitel-angkor-phokeethra.webp',
};

const excursionImages: Record<string,string> = {
  'Hanoi street food discovery': '/images/excursions/hanoi-street-food-discovery.webp',
  'Ninh Binh river and countryside': '/images/excursions/ninh-binh-river-countryside.webp',
  'Ha Long Bay cruise upgrade': '/images/excursions/ha-long-bay-cruise-upgrade.webp',
  'Ho Chi Minh City heritage': '/images/excursions/ho-chi-minh-city-heritage.webp',
  'Cu Chi Tunnels private visit': '/images/excursions/cu-chi-tunnels-visit.webp',
  'Vung Tau beach excursion': '/images/excursions/vung-tau-beach-excursion.webp',
  'Chao Phraya evening cruise': '/images/excursions/chao-phraya-evening-cruise.webp',
  'Thai food and neighbourhood walk': '/images/excursions/bangkok-food-walk.webp',
  'Phang Nga Bay by boat': '/images/excursions/phang-nga-bay-boat.webp',
  'Old Phuket Town and local culture': '/images/excursions/old-phuket-town.webp',
  'Royal Palace and Silver Pagoda': '/images/excursions/phnom-penh-royal-palace.webp',
  'Riverside food and market experience': '/images/excursions/phnom-penh-market-food.webp',
  'Tonlé Sap lake communities': '/images/excursions/tonle-sap-lake.webp',
  'Banteay Srei and countryside': '/images/excursions/banteay-srei.webp',
  'Bangkok temples and riverside': '/images/excursions/bangkok-temples-riverside.webp',
  'Phuket scenic coastal tour': '/images/excursions/phuket-coastal-tour.webp',
  'Phnom Penh heritage highlights': '/images/excursions/phnom-penh-heritage.webp',
  'Angkor temples discovery': '/images/excursions/angkor-temples-discovery.webp',
};

const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

const toUnit = (value: number, unit: 'C' | 'F') => unit === 'C' ? value : value * 9 / 5 + 32;

function ClimateChart({ weather, unit }: { weather: { city: string; months: readonly string[]; wet: readonly number[] }; unit: 'C' | 'F' }) {
  const temps = weather.months.map(range => range.split('–').map(Number));
  const averages = temps.map(([low, high]) => (low + high) / 2);
  const plot = { left: 55, right: 760, top: 24, bottom: 280 };
  const x = (i: number) => plot.left + (plot.right - plot.left) * (i + .5) / 12;
  const minC = weather.city === 'Hanoi' ? 10 : 15;
  const maxC = 40;
  const y = (temp: number) => plot.bottom - (temp - minC) / (maxC - minC) * (plot.bottom - plot.top);
  const points = (values: number[]) => values.map((value, i) => `${x(i)},${y(value)}`).join(' ');
  const series = [
    { name: 'Min', values: temps.map(t => t[0]), color: '#1555b5' },
    { name: 'Average', values: averages, color: '#e5a10a' },
    { name: 'Max', values: temps.map(t => t[1]), color: '#c42a25' },
  ];
  return <div className={styles.climateChart}>
    <div className={styles.chartLegend} aria-hidden="true">
      {series.map(s => <span key={s.name}><i style={{backgroundColor:s.color}}/>{s.name} temp</span>)}
      <span><i style={{backgroundColor:'#9dd9e8'}}/>Rainfall (mm)</span>
    </div>
    <svg viewBox="0 0 845 350" role="img" aria-label={`Monthly minimum, average and maximum temperatures in degrees ${unit === 'C' ? 'Celsius' : 'Fahrenheit'}, plus rainfall in millimetres, for ${weather.city}`} className={styles.climateSvg}>
      {[0,1,2,3,4,5].map(i => { const temp = Math.round(toUnit(minC + i*(maxC-minC)/5, unit)); const yy = plot.bottom - i*(plot.bottom-plot.top)/5; return <g key={i}><line x1={plot.left} x2={plot.right} y1={yy} y2={yy} stroke="#d4ded9"/><text x={plot.left-10} y={yy+4} textAnchor="end" fontSize="12" fill="#526b63">{temp}°</text></g>; })}
      {weather.wet.map((rain,i) => <g key={i}><rect x={x(i)-15} y={plot.bottom-rain/400*(plot.bottom-plot.top)} width="30" height={rain/400*(plot.bottom-plot.top)} fill="#9dd9e8" opacity=".78"/><text x={x(i)} y="303" textAnchor="middle" fontSize="12" fill="#526b63">{months[i]}</text></g>)}
      {series.map(s => <g key={s.name}><polyline points={points(s.values)} fill="none" stroke={s.color} strokeWidth="3" strokeLinejoin="round"/>{s.values.map((v,i)=><circle key={i} cx={x(i)} cy={y(v)} r="3.5" fill={s.color}/>)}</g>)}
      <text x="15" y="152" transform="rotate(-90 15 152)" fontSize="12" fill="#526b63">Temperature (°{unit})</text>
      <text x="813" y="152" transform="rotate(90 813 152)" fontSize="12" textAnchor="middle" fill="#526b63">Rainfall (mm)</text>
      {[0,100,200,300,400].map(r=><text key={r} x="770" y={plot.bottom-r/400*(plot.bottom-plot.top)+4} fontSize="11" fill="#526b63">{r}</text>)}
    </svg>
    <div className={styles.chartTableScroll}><table className={styles.chartTable}><caption>Monthly climate figures for {weather.city}</caption><thead><tr><th>Month</th><th>Min</th><th>Average</th><th>Max</th><th>Rain</th></tr></thead><tbody>{months.map((month,i)=><tr key={month}><th>{month}</th><td>{Math.round(toUnit(temps[i][0],unit))}°</td><td>{Math.round(toUnit(averages[i],unit))}°</td><td>{Math.round(toUnit(temps[i][1],unit))}°</td><td>{weather.wet[i]} mm</td></tr>)}</tbody></table></div>
  </div>;
}

export default function HolidayDetails({ trip }: { trip: TripIdea }) {
  const country = trip.country === 'Cambodia' ? 'Cambodia' : trip.country === 'Vietnam' ? 'Vietnam' : 'Thailand';
  const data = info[country];
  const [tab, setTab] = useState<'hotels'|'weather'|'excursions'>('hotels');
  const [city, setCity] = useState(0);
  const [unit, setUnit] = useState<'C' | 'F'>('C');
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
          <div className={styles.hotelText}><span className={styles.tag}>{tier.label} · {hotel.place}</span><h3>{hotel.name}</h3><p>{(data.hotelCopy as Record<string,string>)[hotel.name]}</p><p className={styles.room}>{hotel.nights} nights · {hotel.room}</p></div>
          <div className={styles.hotelVisual}><img src={hotelImages[hotel.name] || (hotel.place === 'Phnom Penh' ? '/images/inspiration/phnom-penh.webp' : '/images/inspiration/angkor-wat.webp')} alt={hotelImages[hotel.name] ? `Photograph supplied for ${hotel.name}; pictured room or facilities may differ from quoted category` : `Illustrative destination scenery in ${hotel.place}, not a photograph of ${hotel.name}`} loading="lazy"/><span>{hotelImages[hotel.name] ? "Room category subject to confirmation" : "Destination imagery · Hotel photographs to follow"}</span></div>
        </article>))}</div>
      </>}
      {tab==='weather' && <>
        <div className={styles.citySwitch}>{data.weather.map((item,i)=><button type="button" key={item.city} className={city===i?styles.selected:''} aria-pressed={city===i} onClick={()=>setCity(i)}>{item.city}</button>)}</div>
        <h3>{weather.city} throughout the year</h3><p className={styles.weatherIntro}>{weather.intro}</p>
        <div className={styles.unitSwitch} role="group" aria-label="Temperature unit"><button type="button" aria-pressed={unit==='C'} className={unit==='C'?styles.selected:''} onClick={()=>setUnit('C')}>°C Celsius</button><button type="button" aria-pressed={unit==='F'} className={unit==='F'?styles.selected:''} onClick={()=>setUnit('F')}>°F Fahrenheit</button></div>
        <ClimateChart weather={weather} unit={unit}/>
        <p className={styles.note}>Typical monthly minimum and maximum temperatures, calculated mid-point averages, and average monthly rainfall (mm), converted and rounded from historical weather-station observations. These are climate averages, not forecasts. Weather varies year to year. Source: <a href={weather.source} target="_blank" rel="noopener noreferrer">Time and Date climate averages</a> {country === 'Vietnam' ? '(2012–2021 for Hanoi; 1992–2021 for Ho Chi Minh City).' : '(2012–2021 for Phuket and Cambodia; 1992–2021 for Bangkok).'}</p>
      </>}
      {tab==='excursions' && <>
        <p className={styles.note}>Some experiences are included in your itinerary; others may cost extra. Your personalised quotation will confirm what's included and any additional charges.</p>
        <div className={styles.excursions}>{data.excursions.map(item=><article key={item.name}><div className={styles.excursionVisual}>{excursionImages[item.name] ? <img src={excursionImages[item.name]} alt={`Illustration of ${item.name} in ${item.place}`} loading="lazy"/> : <div className={styles.excursionPlaceholder} role="img" aria-label={`Photography for ${item.name} to follow`}><span>{item.place}</span></div>}</div><div className={styles.excursionBody}><span className={styles.tag}>{item.place}</span><h3>{item.name}</h3><p>{item.detail}</p></div></article>)}</div>
      </>}
    </div>
  </section>;
}
