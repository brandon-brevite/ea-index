-- The EA Index: Seed Data
-- Run this after migration.sql

-- Services
insert into services (name, slug, website_url, affiliate_url, tagline, description, price_range_low, price_range_high, pricing_note, service_model, assistant_location, min_commitment, onboarding_speed, best_for, pros, cons, rating, is_editors_pick, is_featured, display_order) values

('Noire', 'noire', 'https://noireea.com', null,
 'Boutique executive assistant service for founders who want white-glove support',
 'Noire is a boutique EA service built specifically for founders and executives who need high-touch, reliable support without the overhead of a full-time hire. The service pairs you with a US-based assistant who is trained to handle the particular chaos of running a company: calendar management, travel booking, inbox triage, vendor coordination, and the hundred small tasks that eat your day.

What sets Noire apart is the onboarding process. Instead of matching you with whoever is available, they spend time understanding how you work, what your priorities are, and what you actually need delegated. The result is an assistant who can operate with minimal oversight from day one.

Noire is not the cheapest option on this list. It is the most personal.',
 null, null, 'Contact for pricing', 'managed', 'us', 'Month-to-month', '3-5 days',
 array['founders', 'executives'],
 array['White-glove onboarding tailored to your workflow', 'Remote Executive Partners with years of experience', 'No long-term contracts required', 'Direct communication with your assistant'],
 array['Smaller team means less redundancy'],
 4.4, false, true, 12),

('Athena', 'athena', 'https://www.athenago.com', null,
 'Philippines-based managed EA service popular with tech founders',
 'Athena has built a strong reputation in the founder community, particularly among Y Combinator alumni and tech executives. They recruit assistants from the Philippines, put them through a training program, and match them with clients based on working style and needs.

The service runs on an annual contract at around $3,000 per month, which gets you a dedicated full-time assistant. The training pipeline is their main selling point: Athena claims to accept fewer than 1% of applicants.

The annual commitment is the main friction point. If your assistant does not work out, Athena will rematch you, but you are still locked into the contract.',
 3000, 3600, 'Starts at ~$3,000/mo for full-time dedicated assistant', 'managed', 'philippines', 'Annual contract', '2-3 weeks',
 array['founders', 'executives'],
 array['Rigorous assistant selection (less than 1% acceptance)', 'Strong founder community and referral network', 'Dedicated full-time assistant', 'Structured training program'],
 array['Annual contract required', 'Philippines timezone can cause delays', 'Rematch process takes time'],
 4.5, false, true, 1),

('Boldly', 'boldly', 'https://boldly.com', null,
 'Premium fractional EAs based in the US with Fortune 500 experience',
 'Boldly positions itself as the premium option for executives who need experienced, US-based support on a fractional basis. Their assistants are W2 employees (not contractors), which means better retention and accountability than most staffing-model competitors.

Pricing starts at $2,520 per month for 40 hours, which is on the higher end. What you get for that price is an assistant who has typically worked in corporate environments and can handle complex executive support without much hand-holding.

Boldly works best for executives at mid-to-large companies who need polished, professional support and have the budget for it.',
 2520, 5040, 'Starts at $2,520/mo for 40 hours', 'fractional', 'us', '40 hours/month', '1-2 weeks',
 array['enterprise', 'executives'],
 array['W2 employees with benefits (better retention)', 'US-based assistants with corporate experience', 'Professional, polished service quality', 'Flexible hour packages'],
 array['Premium pricing', 'Minimum 40 hours/month commitment', 'May be overqualified for simple tasks'],
 4.4, false, true, 2),

('BELAY', 'belay', 'https://belaysolutions.com', null,
 'US-based fractional EAs and bookkeepers for growing businesses',
 'BELAY is one of the larger players in the virtual assistant space, offering US-based fractional assistants along with bookkeeping and social media management services. They have been around since 2010 and have a well-established matching process.

Pricing ranges from roughly $2,070 to $3,910 per month depending on hours. BELAY does not publish exact rates on their website, which is a common (and annoying) practice in this industry.

The service works well for small businesses and mid-market companies that need reliable, US-based support. BELAY is not trying to be the cheapest or the most premium. They are the dependable middle option.',
 2070, 3910, 'Packages from 45-85 hrs/month', 'fractional', 'us', '45-85 hours/month', '1-2 weeks',
 array['enterprise', 'small business'],
 array['Established company (since 2010)', 'US-based assistants', 'Also offers bookkeeping services', 'Good matching process'],
 array['Pricing not transparent on website', 'Minimum hours relatively high', 'Less startup-focused'],
 4.0, false, true, 3),

('Prialto', 'prialto', 'https://prialto.com', null,
 'Managed EA teams for organizations that need process-driven support',
 'Prialto takes a different approach than most EA services. Instead of giving you one dedicated assistant, they assign a primary assistant backed by a team. If your assistant is out sick or on vacation, someone else picks up. This makes them better suited for companies than individuals.

Pricing starts at $1,350 per month for a part-time engagement, scaling up to about $4,050 for heavier usage. Assistants are based in mixed locations including Asia and Central America.

The team model means you sacrifice some personal rapport for reliability and consistency. If your business needs process-oriented support (CRM updates, report generation, data entry), Prialto is a strong option. If you want someone who feels like your personal assistant, look elsewhere.',
 1350, 4050, 'From $1,350/mo (part-time) to $4,050/mo', 'managed', 'mixed', '55 hours/month', '2-4 weeks',
 array['enterprise', 'teams'],
 array['Team-based model (backup coverage)', 'Good for process-driven tasks', 'Scalable for organizations', 'Structured workflows and SOPs'],
 array['Less personal than dedicated assistant', 'Longer onboarding period', 'Not ideal for individual founders'],
 3.8, false, true, 4),

('Wing Assistant', 'wing-assistant', 'https://getwing.com', null,
 'Budget-friendly managed EA service with month-to-month flexibility',
 'Wing is the most accessible option on this list. Starting at $999 per month with no annual contract, they are positioned for solopreneurs and small businesses who want to try an EA without a major financial commitment.

Assistants are based globally, which means quality and timezone alignment can vary. Wing compensates for this with a managed service layer: if something goes wrong, their operations team steps in.

At this price point, you are not getting a former Fortune 500 executive assistant. You are getting someone who can handle scheduling, email, research, and basic admin tasks competently. For many founders, that is exactly enough.',
 999, 2499, 'From $999/mo (month-to-month, no contract)', 'managed', 'global', 'Month-to-month', '1-3 days',
 array['solopreneurs', 'small business'],
 array['Most affordable managed service', 'No long-term contract', 'Fast onboarding (1-3 days)', 'Operations team backup'],
 array['Global assistants (variable quality)', 'Not suited for complex executive tasks', 'Less experienced assistants overall'],
 3.6, false, true, 5),

('Time Etc', 'time-etc', 'https://web.timeetc.com', null,
 'Budget fractional EA option with experienced US-based assistants',
 'Time Etc is the best budget option if you specifically want a US-based assistant. Starting at $390 per month for 10 hours, it is the lowest financial commitment on this list for domestic support.

Their assistants are experienced (average 12 years) and work as independent contractors. The pricing is remarkably competitive for US-based talent. The catch is that you are buying hours in blocks, and unused hours do not roll over.

Time Etc is ideal for founders who need 10-20 hours per month of support and do not want to deal with offshore time zones. It is not a full-time EA solution, and it is not trying to be.',
 390, 1560, 'From $390/mo for 10 hours', 'fractional', 'us', '10 hours/month', '1-3 days',
 array['solopreneurs', 'founders'],
 array['Very affordable for US-based support', 'Experienced assistants (avg 12 years)', 'Low minimum commitment (10 hrs/mo)', 'Quick setup'],
 array['Hours do not roll over', 'Independent contractors (less oversight)', 'Limited to part-time support'],
 4.2, false, true, 6),

('Viva Talent', 'viva-talent', 'https://vivatalent.com', null,
 'Nearshore direct-hire EAs from Latin America for full-time roles',
 'Viva Talent is a staffing firm that places full-time assistants from Latin America with US-based companies. This is not a managed service: they find the person, you hire them directly. Viva handles recruiting and vetting; you handle management.

Pricing is not published, but nearshore rates from LatAm typically run $1,500-$2,500 per month for a full-time assistant. The value proposition is clear: same timezone as the US, strong English skills, and significant cost savings compared to domestic hires.

Viva claims to get you matched and working within 24 hours, which is aggressive but reflects the direct-hire model. The assistant works for you, not for Viva.',
 null, null, 'Not published (nearshore pricing, typically $1,500-$2,500/mo)', 'direct_hire', 'latam', 'Full-time', 'Under 24 hours',
 array['enterprise', 'founders'],
 array['Same timezone as US clients', 'Full-time dedicated assistant', 'Fast matching (under 24 hours claimed)', 'Cost-effective nearshore talent'],
 array['Pricing not transparent', 'You manage the assistant directly', 'No managed service layer'],
 3.7, false, true, 7),

('Magic', 'magic', 'https://getmagic.com', null,
 'On-demand managed EA service for founders and solopreneurs',
 'Magic started as an on-demand assistant service and has evolved into a more traditional managed EA offering. Pricing runs from $1,080 to $2,160 per month depending on hours, with assistants based globally.

The service is positioned for founders and solopreneurs who need flexible support. Magic handles matching and management, and you can scale hours up or down as needed.

Magic works fine for routine tasks: scheduling, research, travel booking, data entry. Where it struggles is with anything that requires deep context about your business or nuanced judgment calls. That is the tradeoff at this price point with globally-sourced assistants.',
 1080, 2160, 'From $1,080/mo for 20 hrs/week', 'managed', 'global', '20 hours/week', '~2 days',
 array['founders', 'solopreneurs'],
 array['Flexible hour scaling', 'Quick onboarding', 'Good for routine tasks', 'Managed service with oversight'],
 array['Global assistants (quality varies)', 'Weak on tasks requiring business context', 'Less personal than boutique options'],
 3.5, false, true, 8),

('Wishup', 'wishup', 'https://wishup.co', null,
 'India and US-based managed EAs with instant onboarding claims',
 'Wishup offers managed virtual assistant services with teams based in India and the US. Their headline claim is onboarding in under one hour, which sounds impressive but really means they have pre-vetted assistants ready to start immediately.

Pricing ranges from $1,299 to $2,599 per month with month-to-month flexibility. At the lower end, you are getting an India-based assistant; the higher end gets you US-based support.

Wishup works for small businesses and solopreneurs who need affordable support and are comfortable with a mix of timezone and cultural contexts. The instant start is genuinely useful if you need help tomorrow.',
 1299, 2599, 'From $1,299/mo (month-to-month)', 'managed', 'mixed', 'Month-to-month', 'Under 1 hour (claimed)',
 array['small business', 'solopreneurs'],
 array['Very fast onboarding', 'Month-to-month flexibility', 'Both India and US assistant options', 'Pre-vetted assistant pool'],
 array['Quality gap between India and US tiers', 'Less experienced than premium options', '"Instant onboarding" is mostly marketing'],
 3.4, false, true, 9),

('Delegated', 'delegated', 'https://delegated.com', null,
 'W2 executive assistants for demanding executives at premium prices',
 'Delegated provides W2 executive assistants based in the US, similar to Boldly but with a slightly different positioning. They focus on executives who need high-caliber support and are willing to pay premium rates for it.

Pricing runs approximately $2,200 to $4,200 per month for 25-75 hours. Like Boldly, the W2 model means their assistants get benefits and have more incentive to stick around, which reduces the churn problem that plagues the VA industry.

Delegated is best for executives who have worked with assistants before and know exactly what they need. It is not a good entry point for first-time EA users because the investment is substantial.',
 2200, 4200, '~$2,200-$4,200/mo for 25-75 hours', 'fractional', 'us', '25-75 hours/month', '1-2 weeks',
 array['executives', 'enterprise'],
 array['W2 employees (better retention)', 'US-based experienced assistants', 'Strong executive support focus', 'Flexible hour packages'],
 array['Premium pricing', 'Not ideal for first-time EA users', 'Smaller company (less redundancy)'],
 3.8, false, true, 10),

('Near', 'near', 'https://hirewithnear.com', null,
 'Full-time Latin American EAs at startup-friendly prices',
 'Near (formerly Hire With Near) is a staffing platform that places full-time talent from Latin America with US companies. Like Viva Talent, this is a direct-hire model: Near finds and vets the candidates, you hire them.

Pricing typically runs $1,500-$2,500 per month for a full-time assistant, which is competitive for the quality level. Near assistants are in similar timezones to US clients and generally have strong English skills.

The onboarding takes 3-5 days, and then the assistant works for you directly. Near provides some ongoing support but this is fundamentally a placement service, not a managed EA operation. You need to be comfortable managing someone.',
 1500, 2500, '~$1,500-$2,500/mo for full-time', 'direct_hire', 'latam', 'Full-time', '3-5 days',
 array['founders', 'small business'],
 array['Competitive pricing for quality talent', 'Same timezone as US', 'Full-time dedicated support', 'Strong vetting process'],
 array['Direct-hire model (you manage)', 'No managed service backup', 'Limited to Latin American talent pool'],
 3.7, false, true, 11);


-- Blog Queue (30 topics)
insert into blog_queue (topic, target_keyword, category, status) values
('Athena vs Boldly: what $3,000 a month actually gets you', 'athena vs boldly', 'comparison', 'queued'),
('Every EA service''s real pricing in April 2026', 'executive assistant service pricing', 'pricing', 'queued'),
('BELAY review: the mid-range EA nobody talks about', 'belay executive assistant review', 'review', 'queued'),
('The difference between a managed EA and a direct hire', 'managed vs direct hire executive assistant', 'guide', 'queued'),
('Wing Assistant at $999/month: what you''re getting and what you''re not', 'wing assistant review', 'review', 'queued'),
('Why most founders fire their first executive assistant', 'hiring executive assistant mistakes', 'opinion', 'queued'),
('How long it actually takes to onboard an EA', 'executive assistant onboarding time', 'guide', 'queued'),
('Athena''s annual contract: when it makes sense and when it doesn''t', 'athena executive assistant contract', 'review', 'queued'),
('The offshore EA math most people get wrong', 'offshore executive assistant cost', 'pricing', 'queued'),
('Prialto review: managed EA support for teams', 'prialto review', 'review', 'queued'),
('What to ask before signing with any EA service', 'questions to ask executive assistant service', 'guide', 'queued'),
('Time Etc review: the budget EA option that works', 'time etc review', 'review', 'queued'),
('$1,500 vs $3,500 per month: what the price difference buys', 'executive assistant cost comparison', 'pricing', 'queued'),
('Latin American EAs: the real quality and cost tradeoffs', 'latin america virtual assistant quality', 'guide', 'queued'),
('Boldly review: premium fractional EAs for demanding execs', 'boldly executive assistant review', 'review', 'queued'),
('The delegation problem nobody writes about', 'how to delegate to executive assistant', 'opinion', 'queued'),
('US-based vs offshore EA: it depends on exactly one thing', 'us based vs offshore executive assistant', 'guide', 'queued'),
('Wishup review: the $1,299/month option from India', 'wishup review', 'review', 'queued'),
('How to evaluate an EA service in 15 minutes', 'how to choose executive assistant service', 'guide', 'queued'),
('The hidden cost of a bargain-priced virtual assistant', 'cheap virtual assistant hidden costs', 'pricing', 'queued'),
('Magic review: the subscription EA for solopreneurs', 'magic virtual assistant review', 'review', 'queued'),
('When you don''t need an EA service and when you do', 'do i need an executive assistant', 'opinion', 'queued'),
('Viva Talent review: nearshore EAs for startup founders', 'viva talent review', 'review', 'queued'),
('What actually happens in the first week with a new EA', 'first week with executive assistant', 'guide', 'queued'),
('I looked at every EA comparison blog online and they''re all ads', 'best executive assistant service comparison', 'opinion', 'queued'),
('Delegated review: W2 assistants at premium prices', 'delegated virtual assistant review', 'review', 'queued'),
('The real reason EA services charge $2,500+ per month', 'why executive assistant expensive', 'pricing', 'queued'),
('How to tell if your EA is actually good', 'executive assistant performance', 'guide', 'queued'),
('Near review: full-time Latin American EAs at startup prices', 'hire with near review', 'review', 'queued'),
('Three months without an EA versus three months with one', 'executive assistant roi', 'opinion', 'queued');
