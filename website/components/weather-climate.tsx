'use client';

import { useState } from 'react';
import styles from './weather-climate.module.css';

type ClimateMonth = { month: string; high: number; low: number; rain: number };

const destinations: { name: string; source: string; period: string; months: ClimateMonth[] }[] = [
  {
    name: 'Amsterdam',
    source: 'Time and Date · Amsterdam Schiphol Airport',
    period: '1992–2021 climate averages',
    months: [
      { month: 'Jan', high: 6, low: 1, rain: 69.4 },
      { month: 'Feb', high: 7, low: 1, rain: 59.4 },
      { month: 'Mar', high: 10, low: 3, rain: 54.5 },
      { month: 'Apr', high: 14, low: 5, rain: 41.8 },
      { month: 'May', high: 18, low: 9, rain: 62.7 },
      { month: 'Jun', high: 21, low: 11, rain: 69.4 },
      { month: 'Jul', high: 22, low: 14, rain: 78.2 },
      { month: 'Aug', high: 22, low: 13, rain: 103.0 },
      { month: 'Sep', high: 19, low: 11, rain: 77.6 },
      { month: 'Oct', high: 15, low: 8, rain: 90.3 },
      { month: 'Nov', high: 10, low: 4, rain: 83.9 },
      { month: 'Dec', high: 7, low: 2, rain: 82.1 },
    ],
  },
  {
    name: 'Mumbai',
    source: 'Time and Date · Bombay / Colaba weather station',
    period: '1992–2021 climate averages',
    months: [
      { month: 'Jan', high: 31, low: 17, rain: 0.8 },
      { month: 'Feb', high: 32, low: 18, rain: 0.3 },
      { month: 'Mar', high: 33, low: 21, rain: 2.1 },
      { month: 'Apr', high: 33, low: 24, rain: 4.7 },
      { month: 'May', high: 34, low: 27, rain: 26.5 },
      { month: 'Jun', high: 32, low: 26, rain: 472.2 },
      { month: 'Jul', high: 31, low: 25, rain: 839.4 },
      { month: 'Aug', high: 30, low: 25, rain: 471.7 },
      { month: 'Sep', high: 31, low: 25, rain: 355.2 },
      { month: 'Oct', high: 34, low: 24, rain: 99.7 },
      { month: 'Nov', high: 34, low: 22, rain: 12.9 },
      { month: 'Dec', high: 33, low: 19, rain: 2.5 },
    ],
  },
];

function toFahrenheit(value: number) {
  return Math.round((value * 9) / 5 + 32);
}

export default function WeatherClimate() {
  const [units, setUnits] = useState<'C' | 'F'>('C');
  return (
    <section className={styles.section} aria-labelledby="climate-heading">
      <div className={styles.heading}>
        <p className={styles.eyebrow}>WHEN TO GO</p>
        <h2 id="climate-heading">Weather throughout the year.</h2>
        <p>Compare typical monthly daytime highs, overnight lows and rainfall in both stopover and destination cities.</p>
        <div className={styles.controls} role="group" aria-label="Temperature units">
          <button type="button" aria-pressed={units === 'C'} onClick={() => setUnits('C')}>°C</button>
          <button type="button" aria-pressed={units === 'F'} onClick={() => setUnits('F')}>°F</button>
        </div>
      </div>
      <div className={styles.destinations}>
        {destinations.map((destination) => (
          <article className={styles.card} key={destination.name}>
            <div className={styles.cardHeading}>
              <h3>{destination.name}</h3>
              <span>{destination.period}</span>
            </div>
            <div className={styles.legend}>
              <span><i className={styles.highKey} /> Average high</span>
              <span><i className={styles.lowKey} /> Average low</span>
              <span><i className={styles.rainKey} /> Rainfall</span>
            </div>
            <div className={styles.months}>
              {destination.months.map((item) => {
                const high = units === 'C' ? item.high : toFahrenheit(item.high);
                const low = units === 'C' ? item.low : toFahrenheit(item.low);
                const tempMin = units === 'C' ? 0 : 32;
                const tempMax = units === 'C' ? 40 : 104;
                const highWidth = Math.max(2, ((high - tempMin) / (tempMax - tempMin)) * 100);
                const lowWidth = Math.max(2, ((low - tempMin) / (tempMax - tempMin)) * 100);
                const rainWidth = (item.rain / (destination.name === 'Mumbai' ? 850 : 110)) * 100;
                return (
                  <div className={styles.month} key={item.month}>
                    <span className={styles.monthName}>{item.month}</span>
                    <div className={styles.temperatures}>
                      <div className={styles.tempTrack}><span className={styles.highBar} style={{ width: highWidth + '%' }} /></div>
                      <strong>{high}°</strong>
                      <div className={styles.tempTrack}><span className={styles.lowBar} style={{ width: lowWidth + '%' }} /></div>
                      <strong>{low}°</strong>
                    </div>
                    <div className={styles.rainfall}>
                      <span className={styles.rainTrack}><i style={{ width: Math.min(100, rainWidth) + '%' }} /></span>
                      <small>{item.rain.toFixed(1)} mm</small>
                    </div>
                  </div>
                );
              })}
            </div>
            <p className={styles.source}>Source: <a href={`https://www.timeanddate.com/weather/${destination.name === 'Mumbai' ? 'india/mumbai' : 'netherlands/amsterdam'}/climate`} target="_blank" rel="noreferrer">{destination.source}</a>. Figures are historical climate averages, not a forecast.</p>
          </article>
        ))}
      </div>
      <p className={styles.note}>The charts use the same long-term reference period for both cities. Monthly values describe typical conditions; actual weather can vary from year to year.</p>
    </section>
  );
}
