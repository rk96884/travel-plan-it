# Trip-idea pages

The dedicated listing is `/tailor-made-holidays/` (linked in the main navigation and sitemap). New multi-centre trips can be added to its `journeys` collection. The first reusable editorial trip idea is `/inspiration/bangkok-phuket-twin-centre/`.

## Structure

- `website/lib/trip-ideas.ts` holds typed itinerary content and accommodation tiers. Add another typed object for future journeys.
- `website/components/trip-idea-page.tsx` and `trip-idea.module.css` render the responsive editorial layout.
- A route imports the data and supplies page-specific SEO metadata.
- The inspiration hub links to the route; `app/sitemap.ts` includes it.
- Enquiry CTAs link to `/plan-my-trip/?trip=bangkok-phuket-twin-centre&tier=essential|premium`. The existing enquiry form recognises this allowlisted trip ID and prefills fields without changing the server-side schema. Enquiry submission still uses existing validation, anti-spam and delivery.

## Editorial and commercial safeguards

- The partner-provided itinerary is a **12-day / 10-night indicative example** for 21 March–1 April 2027. Day 12 was corrected from an erroneous October date to **Thursday 1 April 2027**. The supplied weekday labels for March 2027 were already correct.
- Essential £1,599pp: ibis Bangkok Sathorn and ibis Phuket Patong, superior rooms, breakfast.
- Premium £1,999pp: Amari Bangkok Club Premium and Amari Phuket Ocean Front Wing Superior Balcony, breakfast.
- Both based on two adults sharing; no live inventory, guaranteed price, payment or booking capability. Reconfirm international and domestic flights, room names, lounge inclusion, check-in arrangements, transfers, tours and prices before quoting.
- **Do not** publish a claim that Travel Plan It holds ABTA or ATOL licences; protection details must be given accurately at quotation stage after membership/arrangements are verified.
- Entry rules are linked to current official guidance rather than a static 30-day visa statement.

## Images and rights

The destination photos are loaded from Wikimedia Commons' `Special:FilePath` thumbnail redirects. They are CC BY-SA 3.0 and credited visibly on the itinerary page with links to their original file descriptions:
- Templo Wat Arun, Bangkok, Tailandia, 2013-08-22, DD 37.jpg — Diego Delso / delso.photo, CC BY-SA 3.0, [source](https://commons.wikimedia.org/wiki/File:Templo_Wat_Arun,_Bangkok,_Tailandia,_2013-08-22,_DD_37.jpg).
- Thailand, Phuket - Karon Beach WMID2669793.jpg — SpitfireMK14 / Wikimapia, CC BY-SA 3.0, [source](https://commons.wikimedia.org/wiki/File:Thailand,_Phuket_-_Karon_Beach_WMID2669793.jpg). This image depicts Karon Beach, elsewhere on Phuket, not Patong.

Attribution and share-alike obligations must be preserved; if modifying these photos, review licence obligations first. The inspiration hub uses the same licensed Karon Beach photograph, with a visible photographer/licence credit. The itinerary page links to its source file.

## Pre-publish checklist

- Run `npm ci`, `npm run build`, `npx tsc --noEmit` in `website/`.
- Visually review desktop and mobile, verify Commons image URLs load and check attribution.
- Test tier-specific enquiry prefilling, submission and email delivery.
- Confirm flight schedule/airline details, hotel room labels and inclusion wording with the partner.
- Confirm the site should publish this as an indexed trip idea, not a bookable departure.
