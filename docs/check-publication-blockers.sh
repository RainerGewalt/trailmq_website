#!/usr/bin/env bash
# Publication guard.
#
# noindex is not a substitute for a correct imprint: it keeps a page out of a
# search index, it does not make the page lawful to serve. This script fails
# while a legal blocker is still open, so the branch cannot be merged or
# deployed by accident.
#
#   ./docs/check-publication-blockers.sh
#
# Exit 0 = no automated blocker found.  Exit 1 = do not publish.
#
# Scope, deliberately narrow: it checks the BUILT site for strings that are
# wrong in every context. Phrases like "GMP compliant" or "tamper-proof" are
# NOT checked, because the site uses them inside explicit denials ("Does
# TrailMQ provide tamper-proof records? No.") and a guard that cries wolf gets
# ignored. Claim review beyond this list is manual — see
# docs/website-findings.md and the claim gate at the top of index.html.

set -uo pipefail
cd "$(dirname "$0")/.."

fail=0
note() { printf '  %s\n' "$1"; }

if [ ! -d _site ]; then
  echo "No _site/ — building first…"
  bundle exec jekyll build >/dev/null 2>&1 || { echo "BLOCKED  build failed"; exit 1; }
fi

echo "Checking publication blockers…"
echo

# 1 — LEGAL-BLOCKER markers in source pages that ship.
#     Checked in source, because these are HTML/Liquid comments.
hits=$(grep -rln 'LEGAL-BLOCKER' --include='*.md' --include='*.html' . \
        | grep -v '^\./docs/' | grep -v '^\./_site/' || true)
if [ -n "$hits" ]; then
  echo "BLOCKED  unresolved LEGAL-BLOCKER markers in:"
  while IFS= read -r f; do note "$f"; done <<< "$hits"
  note "see docs/legal-findings.md (L1, L2, L6, L8)"
  fail=1
else
  echo "ok       no LEGAL-BLOCKER markers in shipping pages"
fi

# 2 — strings that are wrong wherever they appear, checked in the BUILT output
#     so Liquid comments and excluded docs cannot trigger a false alarm.
declare -a bad=(
  'acl_role_not_in_topic_scope'          # denial reason the product never emits
  'Publish error: Not authorized'        # not what a client actually prints
  'Anton-Bartl'                          # unconfirmed postal address
  '82327 Tutzing'                        # unconfirmed postal address
  'No personal data is collected'        # overbroad privacy claim
  'TrailMQ Team'                         # no such team exists
)
found=0
for pat in "${bad[@]}"; do
  if grep -rqF "$pat" _site --include='*.html' 2>/dev/null; then
    echo "BLOCKED  present in built site: \"$pat\""
    grep -rlF "$pat" _site --include='*.html' 2>/dev/null | head -5 | while IFS= read -r f; do note "$f"; done
    found=1; fail=1
  fi
done
[ "$found" -eq 0 ] && echo "ok       no known-bad strings in built output"

# 3 — a page marked noindex must not also sit in the sitemap
if [ -f _site/sitemap.xml ] && grep -q '/imprint/' _site/sitemap.xml; then
  echo "BLOCKED  imprint is noindex but still listed in sitemap.xml"
  fail=1
else
  echo "ok       noindex pages excluded from sitemap"
fi

echo
if [ "$fail" -ne 0 ]; then
  echo "DO NOT PUBLISH — resolve the items above and re-run."
else
  echo "No automated blocker found."
fi
echo "This script never grants approval. Owner sign-off is required before"
echo "merge or deploy; see docs/legal-findings.md."
exit "$fail"
