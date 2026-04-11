-- Lower Noire rating to be more believable
UPDATE services SET rating = 4.5 WHERE slug = 'noire';
