-- Fix Persona: service model should be managed, not direct_hire
UPDATE services SET service_model = 'managed' WHERE slug = 'persona';
