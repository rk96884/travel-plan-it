"use client";

import { useState } from 'react';
import type { TripIdea } from '../lib/trip-ideas';
import WeatherClimate from './weather-climate';
import styles from './mumbai-options.module.css';

type Props = Pick<TripIdea, 'tiers' | 'optionalExperiences'>;

const hotelImages: Record<string, { src: string; alt: string }> = {
  'Hotel Boat & Co.': { src: '/images/hotels/hotel-boat-and-co-room.webp', alt: 'Guest room at Hotel Boat & Co. in Amsterdam' },
  'ibis Amsterdam City Centre': { src: '/images/hotels/ibis-amsterdam-city-centre-room.webp', alt: 'Guest room at ibis Amsterdam City Centre' },
  'Novotel Mumbai Juhu Beach': { src: '/images/hotels/novotel-mumbai-juhu-beach-room.webp', alt: 'Guest room at Novotel Mumbai Juhu Beach' },
  'JW Marriott Mumbai Juhu': { src: '/images/hotels/jw-marriott-mumbai-premier-club-room.webp', alt: 'Premier Club Room at JW Marriott Mumbai Juhu' },
};

export default function MumbaiOptions({ tiers, optionalExperiences = [] }: Props) {
  const [activeTab, setActiveTab] = useState<'hotels' | 'weather' | 'experiences'>('hotels');

  return (
    <section className={styles.section} aria-labelledby="options-heading">
      <header className={styles.header}>
        <p className={styles.eyebrow}>EXPLORE YOUR OPTIONS</p>
        <h2 id="options-heading">More to discover, your way.</h2>
        <p>Explore the proposed hotels, seasonal climate and experiences we can add to your itinerary.</p>
      </header>

      <div className={styles.tabs} role="tablist" aria-label="Explore itinerary options">
        <button id="tab-hotels" type="button" role="tab" aria-selected={activeTab === 'hotels'} aria-controls="panel-hotels" onClick={() => setActiveTab('hotels')}>Your hotels</button>
        <button id="tab-weather" type="button" role="tab" aria-selected={activeTab === 'weather'} aria-controls="panel-weather" onClick={() => setActiveTab('weather')}>Year-round weather</button>
        <button id="tab-experiences" type="button" role="tab" aria-selected={activeTab === 'experiences'} aria-controls="panel-experiences" onClick={() => setActiveTab('experiences')}>Optional experiences</button>
      </div>

      {activeTab === 'hotels' && (
        <div id="panel-hotels" role="tabpanel" aria-labelledby="tab-hotels" className={styles.panel}>
          <p className={styles.disclaimer}>These are proposed hotels, not confirmed reservations. Room types and availability will be reconfirmed in your personalised quotation.</p>
          <div className={styles.hotelGrid}>
            {tiers.flatMap((tier) => tier.hotels.map((hotel) => {
              const image = hotelImages[hotel.name];
              return (
                <article className={styles.hotelCard} key={tier.id + hotel.name}>
                  <div className={styles.hotelCopy}>
                    <p className={styles.hotelLabel}>{tier.label} · {tier.price === null ? "Price on request" : `£${tier.price.toLocaleString("en-GB")}pp`} · {hotel.place}</p>
                    <h3>{hotel.name}</h3>
                    <p className={styles.hotelDescription}>{hotel.name === 'Hotel Boat & Co.'
                      ? 'A stylish waterfront hotel in Amsterdam’s Houthavens district, with a relaxed design-led feel.'
                      : hotel.name === 'ibis Amsterdam City Centre'
                        ? 'A practical central base beside Amsterdam Centraal, convenient for the city and onward airport train.'
                        : hotel.name === 'Novotel Mumbai Juhu Beach'
                          ? 'A beachfront stay in Juhu, with an ocean-view room proposed for your Mumbai escape.'
                          : 'A refined beachfront hotel on Juhu, with resort facilities and a Premier Club Room proposed.'}</p>
                    <p className={styles.hotelMeta}>{hotel.nights} {hotel.nights === 1 ? 'night' : 'nights'} · {hotel.room}</p>
                  </div>
                  <div className={styles.hotelImage}>
                    {image ? <img src={image.src} alt={image.alt} loading="lazy" /> : <div className={styles.imagePlaceholder}>{hotel.name}</div>}
                    <span>Room category and availability subject to confirmation</span>
                  </div>
                </article>
              );
            }))}
          </div>
        </div>
      )}

      {activeTab === 'weather' && (
        <div id="panel-weather" role="tabpanel" aria-labelledby="tab-weather" className={styles.panel}>
          <WeatherClimate compact />
        </div>
      )}

      {activeTab === 'experiences' && (
        <div id="panel-experiences" role="tabpanel" aria-labelledby="tab-experiences" className={styles.panel}>
          <p className={styles.disclaimer}>Your days in Mumbai are deliberately left flexible. These experiences can be added to your personalised itinerary and quotation.</p>
          <div className={styles.experienceGrid}>
            {optionalExperiences.map((item) => (
              <article className={styles.experienceCard} key={item.name}>
                <h3>{item.name}</h3>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
          <p className={styles.disclaimer}>Optional experiences are not included in the package price. Any guiding, transport, tickets and additional costs will be confirmed before you decide.</p>
        </div>
      )}
    </section>
  );
}
