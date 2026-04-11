-- Add 10 new EA services to The EA Index
-- Run this in Supabase SQL editor

insert into services (name, slug, website_url, affiliate_url, tagline, description, price_range_low, price_range_high, pricing_note, service_model, assistant_location, min_commitment, onboarding_speed, best_for, pros, cons, rating, is_editors_pick, is_featured, display_order) values

('Zirtual', 'zirtual', 'https://www.zirtual.com', null,
 'College-educated, US-based virtual assistants for busy professionals',
 'Zirtual has been around since 2011 and offers US-based, college-educated virtual assistants on a managed model. They position themselves as the accessible option for professionals who want domestic support without paying premium executive rates.

Plans range from $549 per month for 12 hours to $1,249 for 36 hours. There is no setup fee, and you can upgrade or downgrade month to month. Every plan includes a dedicated assistant who learns your preferences over time.

The assistants work standard business hours (9am to 6pm ET or PT), which is fine for most professionals but limiting if you need evening or weekend coverage. Hours do not roll over, so you lose what you do not use each month.

Zirtual sits in a comfortable middle ground: more affordable than Boldly or Delegated, more structured than a freelance hire, and US-based unlike the budget offshore options. It works well for solopreneurs and small business owners who need 10 to 30 hours of reliable monthly support.',
 549, 1249, 'Plans from $549/mo (12 hrs) to $1,249/mo (36 hrs)', 'managed', 'us', 'Month-to-month', '1-2 days',
 array['solopreneurs', 'small business', 'founders'],
 array['US-based college-educated assistants', 'No setup fee', 'Flexible plan upgrades and downgrades', 'Dedicated assistant on all plans'],
 array['Limited to business hours (9am-6pm ET/PT)', 'Hours do not roll over', 'Per-hour rate is relatively high ($35-46/hr)'],
 3.7, false, true, 12),

('Fancy Hands', 'fancy-hands', 'https://www.fancyhands.com', null,
 'Per-task virtual assistant service for quick requests and light users',
 'Fancy Hands operates on a fundamentally different model than most EA services on this list. Instead of buying hours with a dedicated assistant, you buy tasks. Three tasks cost $35. Five cost $55. Fifteen cost $125. Each task is capped at 20 minutes.

This works for people who need occasional help with discrete, well-defined requests: making a phone call, researching a product, scheduling an appointment, or comparing prices. Tasks are routed to whichever assistant is available, so you do not get a consistent person.

Fancy Hands also offers dedicated assistant plans starting around $499 per month for users who want the convenience of task-based billing with the continuity of a single person. Unused tasks roll over to the next month, which is a nice touch.

The service is not suited for anything that requires ongoing context about your business, complex judgment calls, or relationship management. Think of it as a lightweight assist layer, not a true executive assistant. For solopreneurs who need help with five to ten small tasks per month, the price-to-value ratio is hard to beat.',
 35, 125, 'Per-task: 3 tasks/$35, 5/$55, 15/$125. Dedicated plans from ~$499/mo', 'marketplace', 'us', 'Month-to-month', 'Same day',
 array['solopreneurs', 'small business'],
 array['Very low entry price point', 'Per-task model great for light users', 'Unused tasks roll over', 'Fast turnaround on requests'],
 array['No dedicated assistant on basic plans', '20-minute cap per task on standard plans', 'Not suited for complex executive support'],
 3.3, false, true, 13),

('Double', 'double', 'https://withdouble.com', null,
 'Flexible remote executive assistants for busy founders and teams',
 'Double offers managed executive assistant services with a wide range of plans, from a Starter package at 10 hours for $549 per month up to an Enterprise tier at 100 hours for $5,099. The flexibility is the main draw: you can start small and scale up without switching providers or renegotiating contracts.

Assistants are remote and go through Double''s vetting and training process. You get a dedicated person who learns your workflow, and Double''s operations team provides backup if your assistant is unavailable.

The per-hour cost is steep at the lower tiers (around $55 per hour for Starter), but it improves as you scale up. The Enterprise tier at $51 per hour is competitive for managed service quality. No long-term contracts are required on any plan.

Double also offers team bundling, which makes it practical for companies that want to give multiple executives access to assistant support under one account. If you are a founder who needs 20 to 50 hours per month and values the ability to scale, Double is worth a look.',
 549, 5099, 'Starter 10hrs/$549, Build 30hrs/$1,599, Scale 50hrs/$2,599, Enterprise 100hrs/$5,099', 'managed', 'global', 'Month-to-month', '3 business days',
 array['executives', 'founders', 'teams'],
 array['No long-term contracts on any plan', 'Dedicated assistant with backup coverage', 'Wide plan range from 10-100 hours', 'Team bundling options available'],
 array['High per-hour cost at lower tiers (~$55/hr)', 'Hours do not roll over', 'Premium pricing compared to offshore options'],
 4.0, false, true, 14),

('MyOutDesk', 'myoutdesk', 'https://www.myoutdesk.com', null,
 'Full-time managed virtual assistants for businesses that need dedicated support',
 'MyOutDesk is one of the larger virtual assistant companies, focusing on full-time placements with a managed service layer on top. Pricing is straightforward: $1,988 per month for month-to-month, $1,848 on a six-month commitment, or $1,788 on an annual plan. That gets you a full-time, 40-hour-per-week assistant.

Assistants are primarily based in the Philippines. MyOutDesk runs what they describe as FBI-grade background checks on all candidates, which is a marketing claim but does indicate a structured vetting process. You also get a dedicated success manager who handles any issues or rematch needs.

The full-time-only model is the main limitation. If you need 15 or 20 hours per month, MyOutDesk is not the right fit. But if you have enough work for a full-time assistant and want the cost savings of offshore talent with the reliability of a managed provider, the value proposition is strong. The price-per-hour works out to roughly $12, which is among the lowest on this list for a managed service.',
 1788, 1988, 'Full-time 40hrs/week. $1,988/mo (month-to-month), $1,788/mo (annual)', 'managed', 'philippines', 'Month-to-month (discounts for 6-12 month)', '1-2 weeks',
 array['small business', 'executives', 'enterprise'],
 array['Full-time dedicated VA at competitive rate (~$12/hr)', 'Structured background checks', 'Dedicated success manager included', 'Free replacement if not a fit'],
 array['Full-time only (no part-time plans)', 'Philippines-based only', 'Longer onboarding than some competitors'],
 3.9, false, true, 15),

('Stealth Agents', 'stealth-agents', 'https://stealthagents.com', null,
 'Tiered virtual assistant service with experience-level pricing',
 'Stealth Agents offers managed virtual assistants at three tiers based on experience level: Bronze (4+ years, $1,600/month), Gold (7+ years, $2,400/month), and Diamond (10+ years, $3,000/month). All tiers are full-time at 160 hours per month.

The tiered model is useful because it lets you match the cost to your actual needs. If you need someone to handle scheduling, email, and basic admin, Bronze is probably fine. If you need someone who can manage projects, coordinate teams, and exercise independent judgment, the higher tiers make more sense.

There is a $997 setup fee and a three-month minimum commitment, which is worth noting. Assistants are based in the Philippines. Each client gets a dedicated account manager in addition to their assistant.

Stealth Agents includes AI tool access and activity monitoring for all tiers, which is a differentiator if you care about productivity tracking. The three-month lock-in and setup fee are real friction points, but the per-hour rate ($10-19/hr) is competitive for managed service quality.',
 1600, 3000, 'Bronze $1,600/mo, Gold $2,400/mo, Diamond $3,000/mo. All full-time 160 hrs', 'managed', 'philippines', '3 months', '1-2 weeks',
 array['founders', 'executives', 'small business'],
 array['Tiered experience levels to match needs', 'Full-time dedicated support', 'AI tool access and activity monitoring included', 'Dedicated account manager'],
 array['$997 setup fee', '3-month minimum commitment', 'Philippines-based only'],
 3.6, false, true, 16),

('Persona', 'persona', 'https://www.personatalent.com', null,
 'Highly selective remote executive assistants from the top 0.1% of talent',
 'Persona positions itself at the premium end of the market with a claim that is hard to ignore: they accept the top 0.1% of applicants through an eight-step vetting process. Whether or not that number is exact, the result is a curated pool of experienced remote assistants.

Pricing is custom and not published on their website. Based on market research, expect $3,000 to $5,000 per month for a full-time assistant. You will need to get on a call to get a quote, which is standard at this price tier.

The onboarding process takes about three weeks, which is slower than most competitors. Persona uses that time to understand your workflow and match you with someone who fits. If the match does not work, they will rematch you. No long-term contract is required.

Persona is best suited for founders and executives who have the budget for premium support and have been burned by lower-quality options. If you have tried a cheaper service and found the assistant could not keep up with the complexity of your role, Persona is designed to solve that problem.',
 3000, 5000, 'Custom pricing, typically $3,000-$5,000/mo for full-time', 'direct_hire', 'global', 'Month-to-month', '~3 weeks',
 array['founders', 'executives', 'enterprise'],
 array['Extremely selective hiring (top 0.1% claimed)', '8-step vetting process', 'Custom role matching', 'No long-term commitment required'],
 array['Premium pricing', 'No transparent pricing (must request quote)', 'Slower onboarding (~3 weeks)'],
 4.1, false, true, 17),

('ProAssisting', 'proassisting', 'https://proassisting.com', null,
 'Elite US-based executive assistants on a fractional retainer model',
 'ProAssisting operates on a retainer model where you buy a fraction of an assistant''s bandwidth: one-third, one-half, or two-thirds. Pricing starts at $3,300 per month and goes up to $6,000 depending on the allocation.

What makes ProAssisting different is their compensation transparency. They claim 75% or more of your retainer goes directly to the assistant, which means they attract and retain experienced talent. The assistants are US-based, available during business hours (9-5), and many have corporate EA backgrounds.

The fractional model means your assistant also works with one or two other clients, but at a higher bandwidth allocation than typical fractional services. You are not sharing 10% of someone''s time; you are getting a meaningful chunk of their workweek.

ProAssisting is designed for executives who want the quality of a full-time EA hire without the full-time cost or HR overhead. It is not cheap, and there is no hourly or part-time option. But if you need 15 to 30 hours per week of high-caliber US-based support, the retainer model makes sense.',
 3300, 6000, 'Retainer: 1/3, 1/2, or 2/3 bandwidth. From $3,300/mo', 'fractional', 'us', 'Month-to-month', '1-2 weeks',
 array['executives', 'founders'],
 array['US-based elite-level assistants', 'Transparent compensation (75%+ to assistant)', 'Fractional model with flexible bandwidth', 'No long-term contracts'],
 array['Premium pricing starts at $3,300/mo', 'No part-time or hourly options', 'Smaller company with less scale'],
 4.2, false, true, 18),

('OkayRelax', 'okayrelax', 'https://okayrelax.com', null,
 'Affordable task-credit assistant service for everyday personal and business tasks',
 'OkayRelax is the most affordable option on this list that uses real human assistants. Their credit-based model starts at $100 per month for 25 credits (roughly 12.5 hours of work) and goes up to $400 for 100 credits.

The credit system is flexible: a 30-minute task uses one credit, a 2.5-hour task uses five. You submit requests through their app or email, and an assistant handles them. Unlike Fancy Hands, OkayRelax assigns you a primary assistant so there is some continuity between tasks.

The service handles everyday tasks well: travel research, appointment scheduling, gift shopping, data entry, email drafting, and event planning. It is not built for complex executive-level work or anything that requires deep business context.

OkayRelax is best for solopreneurs and small business owners who need affordable, occasional help with clearly defined tasks. At $100 per month, the barrier to entry is lower than almost any other managed service. The tradeoff is that you get task execution, not strategic partnership.',
 100, 400, 'Credit model: 25 credits/$100, 100 credits/$400. ~30 min per credit', 'managed', 'global', 'Month-to-month', '1 business day',
 array['solopreneurs', 'small business'],
 array['Very affordable entry point ($100/mo)', 'No contracts required', 'Fast onboarding (1 day)', 'Flexible task credit system'],
 array['Credit model can feel limiting for ongoing work', 'Not suited for executive-level support', 'No dedicated assistant on lower tier'],
 3.4, false, true, 19),

('TaskBullet', 'taskbullet', 'https://taskbullet.com', null,
 'Pay-as-you-go virtual assistants with hour buckets and no subscriptions',
 'TaskBullet uses a bucket system instead of monthly subscriptions. You buy a bucket of hours upfront (20 hours for $210, 60 for $525, 130 for $980, or 200 for $1,450), use them at your own pace, and buy another bucket when you run out. Hours roll over for 90 days.

The per-hour rate ranges from $7.25 to $10.50 depending on the bucket size, making TaskBullet one of the cheapest options available. Assistants are based in the Philippines. There is also a 60-day money-back guarantee, which is unusually generous for this industry.

The bucket model works well for people with variable workloads. Some months you might use 30 hours, other months five. You are not paying for time you do not use, and the 90-day rollover gives you breathing room.

TaskBullet is not for someone who needs a polished, executive-level assistant. It is for someone who needs affordable, competent help with routine tasks and wants the flexibility to use it on their own schedule without a recurring subscription.',
 210, 1450, 'Buckets: 20hrs/$210, 60hrs/$525, 130hrs/$980, 200hrs/$1,450. 90-day rollover', 'managed', 'philippines', 'None (pay per bucket)', '1-3 business days',
 array['solopreneurs', 'small business'],
 array['No contracts or subscriptions', '90-day hour rollover', '60-day money-back guarantee', 'Very competitive hourly rate ($7.25-$10.50/hr)'],
 array['Philippines-based VAs only', 'No dedicated account manager on starter tier', 'Bucket system requires upfront payment'],
 3.5, false, true, 20),

('Virtalent', 'virtalent', 'https://virtalent.com', null,
 'UK-based virtual assistants with flexible plans and personal success coaching',
 'Virtalent is the leading UK-based option on this list. They offer managed virtual assistants starting at roughly $340 per month (GBP 270) for 10 hours, scaling to about $1,260 (GBP 1,000) for 40 hours. Pricing is in British pounds, so the dollar equivalent fluctuates.

Two things stand out. First, unused hours roll over month to month, which is rare in this industry and genuinely useful. Second, every client gets a dedicated Client Success Coach who helps with onboarding, delegation strategy, and ongoing optimization. The coaching layer adds real value if you have never worked with an assistant before.

Assistants are UK-based with native English skills. The quality is generally high, though the pool is smaller than US-based services. Plan switching requires just seven days notice, and there are no long-term contracts.

Virtalent is the obvious choice for UK-based founders and executives. For US-based clients, the timezone difference (5 to 8 hours ahead) could be a limitation or an advantage depending on your workflow. If you need tasks completed overnight US time, a UK-based assistant delivers them by your morning.',
 340, 1260, 'From ~$340/mo (10 hrs) to ~$1,260/mo (40 hrs). GBP pricing, USD approximate', 'managed', 'global', 'Month-to-month', '1-2 weeks',
 array['founders', 'small business', 'executives'],
 array['UK-based assistants with native English', 'Hours roll over month to month', 'Dedicated Client Success Coach included', 'Flexible plan switching (7 days notice)'],
 array['UK-focused (may not suit US timezone needs)', 'GBP pricing adds currency risk', 'Smaller assistant pool than US-based services'],
 3.8, false, true, 21);
