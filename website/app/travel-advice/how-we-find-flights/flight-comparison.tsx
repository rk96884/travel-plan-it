'use client';

import { useState } from 'react';
import styles from './flight-comparison.module.css';

type Option = { id: 'headline' | 'overall'; name: string; fare: number; baggage: number; seat: number; transfer: number; hours: number; connections: string };

const options: Option[] = [
  { id: 'headline', name: 'Lowest advertised fare', fare: 620, baggage: 75, seat: 25, transfer: 45, hours: 19, connections: 'Two connections' },
  { id: 'overall', name: 'More convenient option', fare: 735, baggage: 0, seat: 0, transfer: 0, hours: 14, connections: 'One connection' },
];

const format = (amount: number) => '£' + amount.toLocaleString('en-GB');
const total = (item: Option) => item.fare + item.baggage + item.seat + item.transfer;

export default function FlightComparison() {
  const [selected, setSelected] = useState<Option['id']>('overall');
  const option = options.find(item => item.id === selected) ?? options[1];
  return (
    <div className={styles.widget}>
      <div className={styles.intro}>
        <div><p className={styles.eyebrow}>THE FULL-FARE TEST</p><h3>Which flight is better value?</h3></div>
        <p>Choose an example itinerary to see how additional costs can change the comparison.</p>
      </div>
      <div className={styles.choices} role="group" aria-label="Choose an illustrative flight option">
        {options.map(item => (
          <button key={item.id} type="button" className={selected === item.id ? styles.selected : styles.choice} onClick={() => setSelected(item.id)} aria-pressed={selected === item.id}>
            <span className={styles.name}>{item.name}</span>
            <strong>{format(item.fare)}</strong>
            <small>{item.hours} hours · {item.connections}</small>
          </button>
        ))}
      </div>
      <div className={styles.details} aria-live="polite" aria-atomic="true">
        <div><p className={styles.eyebrow}>ILLUSTRATIVE TOTAL PER PERSON</p><strong className={styles.total}>{format(total(option))}</strong><p>{option.hours} hours · {option.connections}</p></div>
        <dl>
          <div><dt>Advertised fare</dt><dd>{format(option.fare)}</dd></div>
          <div><dt>Checked baggage</dt><dd>{format(option.baggage)}</dd></div>
          <div><dt>Seat selection</dt><dd>{format(option.seat)}</dd></div>
          <div><dt>Additional airport transport</dt><dd>{format(option.transfer)}</dd></div>
        </dl>
      </div>
      <p className={styles.caveat}>Illustrative figures only, not searched fares or a Travel Plan It quotation. Real costs, flight times, baggage rules and connection protection vary by booking.</p>
      <p className={styles.takeaway}>In this example, the £620 advertised fare becomes £765 — £30 more than the £735 alternative, despite taking five hours longer.</p>
    </div>
  );
}
