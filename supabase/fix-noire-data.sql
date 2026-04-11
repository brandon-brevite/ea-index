-- Fix Noire: remote (not US), $3000-3500 pricing, 2-3 weeks onboarding
UPDATE services SET
  assistant_location = 'global',
  price_range_low = 3000,
  price_range_high = 3500,
  onboarding_speed = '2-3 weeks'
WHERE slug = 'noire';
