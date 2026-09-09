export const fields = [
  ['destination', 'Destination ideas', 500],
  ['style', 'Trip style and experiences', 800],
  ['dates', 'Dates and flexibility', 300],
  ['duration', 'Approximate duration', 100],
  ['adults', 'Adults', 3],
  ['children', 'Children and ages', 200],
  ['airport', 'Departure airport', 200],
  ['budget', 'Total party budget (GBP)', 100],
  ['accommodation', 'Accommodation and holiday preferences', 500],
  ['notes', 'Anything else', 1500],
  ['name', 'Your name', 120],
  ['email', 'Email', 254],
  ['phone', 'Telephone (optional)', 60],
] as const;
export type Field = (typeof fields)[number][0];
export type Enquiry = Record<Field, string>;
export const emptyEnquiry = Object.fromEntries(
  fields.map(([key]) => [key, '']),
) as Enquiry;
export function validateEnquiry(raw: unknown) {
  const errors: Partial<Record<Field, string>> = {};
  const data = { ...emptyEnquiry };
  const input =
    raw && typeof raw === 'object' ? (raw as Record<string, unknown>) : {};
  for (const [key, label, max] of fields) {
    if (input[key] !== undefined && typeof input[key] !== 'string')
      errors[key] = `Check ${label.toLowerCase()}.`;
    data[key] = typeof input[key] === 'string' ? input[key].trim() : '';
    if (data[key].length > max)
      errors[key] = `Please use ${max} characters or fewer.`;
  }
  if (!data.destination)
    errors.destination = 'Tell us a destination idea, or enter “Not sure yet”.';
  if (!data.name) errors.name = 'Enter your name.';
  if (!/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(data.email))
    errors.email = 'Enter a valid email address.';
  if (
    data.adults &&
    (!/^\d{1,3}$/.test(data.adults) ||
      Number(data.adults) < 1 ||
      Number(data.adults) > 100)
  )
    errors.adults = 'Enter between 1 and 100 adults.';
  return { data, errors, valid: Object.keys(errors).length === 0 };
}
export function emailText(data: Enquiry, reference: string) {
  return (
    `Travel Plan It — new holiday enquiry\nReference: ${reference}\n\n` +
    fields
      .map(([key, label]) => `${label}:\n${data[key] || 'Not provided'}`)
      .join('\n\n') +
    '\n\nThis is an enquiry, not a confirmed booking. No marketing subscription was requested.'
  );
}
