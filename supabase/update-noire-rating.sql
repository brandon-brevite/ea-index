-- Lower Noire rating to be fair alongside ranked services
UPDATE services SET rating = 4.4 WHERE slug = 'noire';
