-- Fix Noire: remote (not US), $3000-3500 pricing, 2-3 weeks onboarding, correct pros/cons
UPDATE services SET
  assistant_location = 'global',
  price_range_low = 3000,
  price_range_high = 3500,
  onboarding_speed = '2-3 weeks',
  pros = array['White-glove onboarding tailored to your workflow', 'Remote Executive Partners with years of experience', 'No long-term contracts required', 'Direct communication with your assistant'],
  cons = array['Smaller team means less redundancy']
WHERE slug = 'noire';
