-- 2026-04-20: Equal-treatment editorial policy.
-- Noire was previously flagged as is_editors_pick=true with display_order=0,
-- which pinned it to the top of the comparison table regardless of user sort.
-- Per the editorial positioning decision, Noire is now treated identically to
-- every other listed EA service. Clear the flag and move it to the end of the
-- default display order so fallback sorts no longer favor it.
update services
set is_editors_pick = false,
    display_order = 12
where slug = 'noire';
