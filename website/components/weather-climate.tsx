'use client';

import { useState } from 'react';
import styles from './weather-climate.module.css';

type ClimateMonth = { month: string; high: number; low: number; rain: number };
type Destination = { name: string; source: string; period: string; summary: string; months: ClimateMonth[] };

const destinations: Destination[] = [
  {
    name: 'Amsterdam',
    source: 'Time and Date · Amsterdam Schiphol Airport',
    period: '1992–2021 climate averages',
    summary: 'Cool winters and mild summers, with rainfall possible throughout the year. Late spring and summer generally bring the warmest temperatures.',
    months: [
      { month: 'Jan', high: 6, low: 1, rain: 69.4 }, { month: 'Feb', high: 7, low: 1, rain: 59.4 },
      { month: 'Mar', high: 10, low: 3, rain: 54.5 }, { month: 'Apr', high: 14, low: 5, rain: 41.8 },
      { month: 'May', high: 18, low: 9, rain: 62.7 }, { month: 'Jun', high: 21, low: 11, rain: 69.4 },
      { month: 'Jul', high: 22, low: 14, rain: 78.2 }, { month: 'Aug', high: 22, low: 13, rain: 103.0 },
      { month: 'Sep', high: 19, low: 11, rain: 77.6 }, { month: 'Oct', high: 15, low: 8, rain: 90.3 },
      { month: 'Nov', high: 10, low: 4, rain: 83.9 }, { month: 'Dec', high: 7, low: 2, rain: 82.1 },
    ],
  },
  {
    name: 'Mumbai',
    source: 'Time and Date · Bombay / Colaba weather station',
    period: '1992–2021 climate averages',
    summary: 'Warm to hot for much of the year. The drier, more comfortable travel period is generally November to February, while the summer monsoon brings very heavy rainfall.',
    months: [
      { month: 'Jan', high: 31, low: 17, rain: 0.8 }, { month: 'Feb', high: 32, low: 18, rain: 0.3 },
      { month: 'Mar', high: 33, low: 21, rain: 2.1 }, { month: 'Apr', high: 33, low: 24, rain: 4.7 },
      { month: 'May', high: 34, low: 27, rain: 26.5 }, { month: 'Jun', high: 32, low: 26, rain: 472.2 },
      { month: 'Jul', high: 31, low: 25, rain: 839.4 }, { month: 'Aug', high: 30, low: 25, rain: 471.7 },
      { month: 'Sep', high: 31, low: 25, rain: 355.2 }, { month: 'Oct', high: 34, low: 24, rain: 99.7 },
      { month: 'Nov', high: 34, low: 22, rain: 12.9 }, { month: 'Dec', high: 33, low: 19, rain: 2.5 },
    ],
  },
];

function fahrenheit(value: number) { return Math.round(value * 9 / 5 + 32); }

export default function WeatherClimate({ compact = false }: { compact?: boolean }) {
  const [city, setCity] = useState<'Amsterdam' | 'Mumbai'>('Amsterdam');
  const [units, setUnits] = useState<'C' | 'F'>('C');
  const destination = destinations.find((item) => item.name === city)!;
  const width = 900, height = 370, left = 62, right = 64, top = 34, bottom = 48;
  const plotW = width - left - right, plotH = height - top - bottom;
  const tMin = units === 'C' ? 0 : 32, tMax = units === 'C' ? 40 : 104;
  const rMax = city === 'Mumbai' ? 900 : 120;
  const x = (i: number) => left + (plotW * i / 11);
  const y = (v: number) => top + plotH - ((v - tMin) / (tMax - tMin)) * plotH;
  const ry = (v: number) => top + plotH - (v / rMax) * plotH;
  const series = [
    { key: 'low', label: 'Min temp', colour: '#2462bd', values: destination.months.map((m) => units === 'C' ? m.low : fahrenheit(m.low)) },
    { key: 'average', label: 'High/low midpoint', colour: '#e69a00', values: destination.months.map((m) => { const v=(m.high+m.low)/2; return units === 'C' ? v : fahrenheit(v); }) },
    { key: 'high', label: 'Max temp', colour: '#cf3028', values: destination.months.map((m) => units === 'C' ? m.high : fahrenheit(m.high)) },
  ];
  const pathFor = (values: number[]) => values.map((v,i) => `${i===0?'M':'L'} ${x(i)} ${y(v)}`).join(' ');
  const ticks = units === 'C' ? [0,5,10,15,20,25,30,35,40] : [32,41,50,59,68,77,86,95,104];

  return (
    <section className={`${styles.section} ${compact ? styles.compact : ''}`} aria-labelledby="climate-heading">
      <div className={styles.heading}>
        <p className={styles.eyebrow}>WHEN TO GO</p>
        <h2 id="climate-heading">Find your best time to go.</h2>
        <p>Explore typical monthly temperatures and rainfall for each stop on your journey.</p>
      </div>
      <div className={styles.cityTabs} role="tablist" aria-label="Choose a city">
        {destinations.map((item) => <button key={item.name} type="button" role="tab" aria-selected={city===item.name} onClick={() => setCity(item.name as 'Amsterdam'|'Mumbai')}>{item.name}</button>)}
      </div>
      <div className={styles.chartHeading}>
        <div><h3>{city} throughout the year</h3><p>{destination.summary}</p></div>
        <div className={styles.controls} role="group" aria-label="Temperature units">
          <button type="button" aria-pressed={units==='C'} onClick={() => setUnits('C')}>°C Celsius</button>
          <button type="button" aria-pressed={units==='F'} onClick={() => setUnits('F')}>°F Fahrenheit</button>
        </div>
      </div>
      <div className={styles.legend}>
        {series.map((item) => <span key={item.key}><i style={{background:item.colour}} />{item.label}</span>)}
        <span><i className={styles.rainKey} />Rainfall (mm)</span>
      </div>
      <div className={styles.chartWrap}>
        <svg className={styles.chart} viewBox={`0 0 ${width} ${height}`} role="img" aria-label={`Monthly average minimum, midpoint and maximum temperatures and rainfall for ${city}`}>
          {ticks.map((tick) => <g key={tick}><line x1={left} x2={width-right} y1={y(tick)} y2={y(tick)} stroke="#d5ded8" strokeWidth="1"/><text x={left-12} y={y(tick)+4} textAnchor="end">{tick}°</text></g>)}
          {[0, rMax/4, rMax/2, rMax*3/4, rMax].map((tick) => <text key={tick} x={width-right+12} y={ry(tick)+4}>{Math.round(tick)}</text>)}
          {destination.months.map((item,i) => <rect key={item.month} x={x(i)-17} y={ry(item.rain)} width="34" height={top+plotH-ry(item.rain)} fill="#9ed9e7" opacity=".82" />)}
          {series.map((item) => <g key={item.key}><path d={pathFor(item.values)} fill="none" stroke={item.colour} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>{item.values.map((v,i)=><circle key={i} cx={x(i)} cy={y(v)} r="4" fill={item.colour}/>)}</g>)}
          {destination.months.map((item,i) => <text key={item.month} x={x(i)} y={height-16} textAnchor="middle">{item.month}</text>)}
          <text transform={`translate(16 ${top+plotH/2}) rotate(-90)`} textAnchor="middle">Temperature ({units==='C'?'°C':'°F'})</text>
          <text transform={`translate(${width-10} ${top+plotH/2}) rotate(90)`} textAnchor="middle">Rainfall (mm)</text>
        </svg>
      </div>
      <p className={styles.source}>Source: <a href={`https://www.timeanddate.com/weather/${city==='Mumbai'?'india/mumbai':'netherlands/amsterdam'}/climate`} target="_blank" rel="noreferrer">{destination.source}</a>. {destination.period}. Figures are historical climate averages, not a forecast. Average temperature line is the midpoint of the displayed monthly high and low.</p>
    </section>
  );
}
