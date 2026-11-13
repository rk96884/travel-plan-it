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

const hotelImages: Record<string,string> = {
  'Holiday Inn Singapore Orchard City Centre': '/images/hotels/originals/holiday-inn-singapore-orchard-original.webp',
  'Hilton Singapore Orchard': '/images/hotels/originals/hilton-singapore-orchard-original.webp',
  'Holiday Inn Resort Batam': '/images/hotels/originals/holiday-inn-resort-batam-original.webp',
  'Montigo Resorts Nongsa': '/images/hotels/originals/montigo-resorts-nongsa-original.webp',
  'Holiday Inn Johor Bahru City Centre': '/images/hotels/originals/holiday-inn-johor-bahru-original.webp',
  'Amari Johor Bahru': '/images/hotels/originals/amari-johor-bahru-original.webp',
};

const excursionImages: Record<string,string> = {
  'Gardens by the Bay': '/images/excursions/singapore-gardens-by-the-bay.webp',
  'Singapore Botanic Gardens': '/images/excursions/singapore-botanic-gardens.webp',
  'Hawker food discovery': '/images/excursions/singapore-hawker-food.webp',
  'Wellness and spa': '/images/excursions/batam-spa-wellness.webp',
  'Coastal and local discovery': '/images/excursions/batam-coastal-discovery.webp',
  'Johor Bahru heritage and food': '/images/excursions/johor-bahru-heritage-food.webp',
};

type Climate = {
  place: string; intro: string; low: number[]; high: number[]; rain: number[]; source: string; sourceLabel: string; period: string;
};

// Climate normals for each destination, not forecasts; all three datasets are
// published sources and each uses its own observation/reference period.
const weather: Climate[] = [
  {
    place: 'Singapore',
    intro: 'Warm and humid throughout the year, with the highest average temperatures around April to June. The wettest months are generally November to January.',
    low: [24.3,24.6,24.9,25.3,25.7,25.7,25.4,25.3,25.2,25.0,24.6,24.3],
    high:[30.6,31.5,32.2,32.4,32.3,31.9,31.4,31.4,31.6,31.8,31.2,30.5],
    rain:[221.6,105.1,151.7,164.3,164.3,135.3,146.6,146.9,124.9,168.3,252.3,331.9],
    source: 'https://www.weather.gov.sg/climate-climate-of-singapore/',
    sourceLabel: 'Meteorological Service Singapore', period: '1991–2020',
  },
  {
    place: 'Batam',
    intro: 'Batam stays tropical throughout the year. Historical averages show hot days and regular showers; rainfall varies significantly between individual years.',
    low: [25,25,25,25,25,25,25,25,24,24,24,25],
    high:[30,31,32,32,32,32,32,31,32,32,31,31],
    rain:[130.3,55.0,67.8,114.1,157.9,124.5,108.1,112.3,127.2,114.0,175.4,154.3],
    source: 'https://www.timeanddate.com/weather/indonesia/batam/climate',
    sourceLabel: 'Time and Date (Batam/Hang Nadim station)', period: '2012–2021',
  },
  {
    place: 'Johor Bahru',
    intro: 'Johor Bahru is hot and humid throughout the year. Showers and thunderstorms are possible in every month, with rainfall often higher late in the year.',
    low:[21.9,22.0,22.4,22.9,23.1,22.9,22.4,22.4,22.4,22.6,22.7,22.4],
    high:[31.0,32.0,32.5,32.8,32.5,32.1,31.5,31.5,31.5,31.8,31.3,30.6],
    rain:[162.6,139.8,203.4,232.8,215.3,148.1,177.0,185.9,190.8,217.7,237.6,244.5],
    source: 'https://worldweather.wmo.int/en/city.html?cityId=78',
    sourceLabel: 'World Meteorological Organization / Malaysian Meteorological Department', period: '1974–2000',
  },
];

const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
const convert = (n:number, unit:'C'|'F') => unit === 'C' ? n : n*9/5 + 32;

function YearRoundClimate({ climate, unit }: { climate: Climate; unit: 'C'|'F' }) {
  const layout = { left: 55, right: 760, top: 24, bottom: 280 };
  const x = (index: number) => layout.left + (layout.right-layout.left)*(index+.5)/12;
  const y = (value: number) => layout.bottom-(value-20)/15*(layout.bottom-layout.top);
  const rainHeight = (value: number) => value/400*(layout.bottom-layout.top);
  const averages = climate.low.map((low,index) => (low+climate.high[index])/2);
  const series = [
    { name: 'Min', values: climate.low, color:'#1555b5' },
    { name: 'Average', values: averages, color:'#e5a10a' },
    { name: 'Max', values: climate.high, color:'#c42a25' },
  ];
  return <div className={styles.climateChart}>
    <div className={styles.chartLegend} aria-hidden="true">
      {series.map(item => <span key={item.name}><i style={{backgroundColor:item.color}}/>{item.name} temp</span>)}
      <span><i style={{backgroundColor:'#9dd9e8'}}/>Rainfall (mm)</span>
    </div>
    <svg viewBox="0 0 845 350" role="img" aria-label={`Monthly minimum, midpoint average and maximum temperature in degrees ${unit === 'C' ? 'Celsius' : 'Fahrenheit'}, with monthly rainfall in millimetres for ${climate.place}`} className={styles.climateSvg}>
      {[0,1,2,3,4,5].map(i => { const v=20+i*3; const yy=y(v); return <g key={v}><line x1={layout.left} x2={layout.right} y1={yy} y2={yy} stroke="#d4ded9"/><text x={layout.left-10} y={yy+4} textAnchor="end" fontSize="12" fill="#526b63">{Math.round(convert(v,unit))}°</text></g>; })}
      {climate.rain.map((v,i) => <g key={months[i]}><rect x={x(i)-15} y={layout.bottom-rainHeight(v)} width="30" height={rainHeight(v)} fill="#9dd9e8" opacity=".78"/><text x={x(i)} y="303" textAnchor="middle" fontSize="12" fill="#526b63">{months[i]}</text></g>)}
      {series.map(item => <g key={item.name}><polyline points={item.values.map((v,i) => `${x(i)},${y(v)}`).join(' ')} fill="none" stroke={item.color} strokeWidth="3" strokeLinejoin="round"/>{item.values.map((v,i) => <circle key={i} cx={x(i)} cy={y(v)} r="3.5" fill={item.color}/>)}</g>)}
      <text x="15" y="152" transform="rotate(-90 15 152)" fontSize="12" fill="#526b63">Temperature (°{unit})</text>
      <text x="813" y="152" transform="rotate(90 813 152)" fontSize="12" textAnchor="middle">Rainfall (mm)</text>
      {[0,100,200,300,400].map(v => <text key={v} x="770" y={layout.bottom-rainHeight(v)+4} fontSize="11" fill="#526b63">{v}</text>)}
    </svg>
    <div className={styles.chartTableScroll}>
      <table className={styles.chartTable}><caption>Monthly climate averages for {climate.place}</caption>
        <thead><tr><th>Month</th><th>Min</th><th>Average*</th><th>Max</th><th>Rain</th></tr></thead>
        <tbody>{months.map((month,i) => <tr key={month}><th>{month}</th><td>{Math.round(convert(climate.low[i],unit))}°</td><td>{Math.round(convert(averages[i],unit))}°</td><td>{Math.round(convert(climate.high[i],unit))}°</td><td>{Math.round(climate.rain[i])} mm</td></tr>)}</tbody>
      </table>
    </div>
  </div>;
}

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
  const [unit,setUnit]=useState<'C'|'F'>('C');
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
        <p className={styles.note}>Hotels and room types are proposed, not booked. Premium pricing, breakfast arrangements, availability and terminal-to-resort transfers will be confirmed in a personalised quotation. Photographs are supplied for illustration; the room pictured may differ from the room quoted. Please ensure permission for commercial reuse before publishing.</p>
        <div className={styles.hotels}>{trip.tiers.flatMap(tier=>tier.hotels.map(hotel=><article className={styles.hotel} key={tier.id+hotel.name}>
          <div className={styles.hotelText}><span className={styles.tag}>{tier.label} · {hotel.place}</span><h3>{hotel.name}</h3><p>{hotelSummaries[hotel.name]}</p><p className={styles.room}>{hotel.nights} nights · {hotel.room}</p></div>
          <div className={styles.hotelVisual}>{/* eslint-disable-next-line @next/next/no-img-element */}<img src={hotelImages[hotel.name]} alt={`Photograph provided for ${hotel.name}; room category subject to confirmation`} loading="lazy" /><span>Room category subject to confirmation</span></div>
        </article>))}</div>
      </>}
      {tab==='weather' && <>
        <p className={styles.note}>Explore historical monthly climate averages in Singapore, Batam and Johor Bahru. These are not forecasts for May 2027.</p>
        <div className={styles.citySwitch}>{weather.map((item,i)=><button type="button" key={item.place} className={city===i?styles.selected:''} aria-pressed={city===i} onClick={()=>setCity(i)}>{item.place}</button>)}</div>
        <h3>{weather[city].place} throughout the year</h3>
        <p className={styles.weatherIntro}>{weather[city].intro}</p>
        <div className={styles.unitSwitch} role="group" aria-label="Temperature unit"><button type="button" className={unit==='C'?styles.selected:''} aria-pressed={unit==='C'} onClick={()=>setUnit('C')}>°C Celsius</button><button type="button" className={unit==='F'?styles.selected:''} aria-pressed={unit==='F'} onClick={()=>setUnit('F')}>°F Fahrenheit</button></div>
        <YearRoundClimate climate={weather[city]} unit={unit}/>
        <p className={styles.note}>Historical climate averages, not a forecast. Minimum and maximum temperatures are sourced; the middle line is the calculated midpoint of those values (not the official 24-hour mean). Rainfall is the average monthly total. Source: <a href={weather[city].source} rel="noopener noreferrer" target="_blank">{weather[city].sourceLabel}</a> ({weather[city].period}). Data periods vary by destination.</p>
      </>}
      {tab==='excursions' && <>
        <p className={styles.note}>These are suggested additional experiences, not included in the £2,749pp itinerary. Availability, tickets and guide fees will be confirmed on request.</p>
        <div className={styles.excursions}>{experiences.map(item=><article key={item.title}>
          <div className={styles.excursionVisual}>{/* eslint-disable-next-line @next/next/no-img-element */}<img src={excursionImages[item.title]} alt={`AI-generated illustration representing ${item.title} in ${item.place}`} loading="lazy" /></div>
          <div className={styles.excursionBody}><span className={styles.tag}>{item.place}</span><h3>{item.title}</h3><p>{item.detail}</p></div>
        </article>)}</div>
      </>}
    </div>
  </section>;
}
