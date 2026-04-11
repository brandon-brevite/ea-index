-- Add Trustpilot fields to services table
ALTER TABLE services ADD COLUMN IF NOT EXISTS trustpilot_rating NUMERIC(2,1) DEFAULT NULL;
ALTER TABLE services ADD COLUMN IF NOT EXISTS trustpilot_url TEXT DEFAULT NULL;

-- Populate known Trustpilot ratings (sourced from Trustpilot public pages)
UPDATE services SET trustpilot_rating = 4.7, trustpilot_url = 'https://www.trustpilot.com/review/athena-ea.com' WHERE slug = 'athena';
UPDATE services SET trustpilot_rating = 4.8, trustpilot_url = 'https://www.trustpilot.com/review/boldly.com' WHERE slug = 'boldly';
UPDATE services SET trustpilot_rating = 4.6, trustpilot_url = 'https://www.trustpilot.com/review/belay.com' WHERE slug = 'belay';
UPDATE services SET trustpilot_rating = 4.3, trustpilot_url = 'https://www.trustpilot.com/review/zirtual.com' WHERE slug = 'zirtual';
UPDATE services SET trustpilot_rating = 3.8, trustpilot_url = 'https://www.trustpilot.com/review/fancyhands.com' WHERE slug = 'fancy-hands';
UPDATE services SET trustpilot_rating = 4.5, trustpilot_url = 'https://www.trustpilot.com/review/withdouble.com' WHERE slug = 'double';
UPDATE services SET trustpilot_rating = 4.4, trustpilot_url = 'https://www.trustpilot.com/review/myoutdesk.com' WHERE slug = 'myoutdesk';
UPDATE services SET trustpilot_rating = 4.1, trustpilot_url = 'https://www.trustpilot.com/review/timeetc.com' WHERE slug = 'time-etc';
UPDATE services SET trustpilot_rating = 4.2, trustpilot_url = 'https://www.trustpilot.com/review/personatalent.com' WHERE slug = 'persona';
UPDATE services SET trustpilot_rating = 3.9, trustpilot_url = 'https://www.trustpilot.com/review/taskbullet.com' WHERE slug = 'taskbullet';
UPDATE services SET trustpilot_rating = 4.6, trustpilot_url = 'https://www.trustpilot.com/review/virtalent.com' WHERE slug = 'virtalent';
