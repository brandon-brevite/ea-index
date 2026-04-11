-- Archive direct service review posts that create liability
-- These posts are too negative/specific about individual services
UPDATE blog_posts SET status = 'archived' WHERE slug IN (
  'belay-review-the-46-hour-ea-nobody-talks-about',
  'wing-assistant-at-999-per-month-what-youre-getting-and-what-youre-not',
  'athena-executive-assistant-contract-annual',
  'prialto-review-managed-ea-support-for-teams',
  'time-etc-39-hour-budget-ea-option-works'
);
