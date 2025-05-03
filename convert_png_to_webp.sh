#!/usr/bin/env bash
set -euo pipefail

SRC_DIR="assets/images"           # PNGs liegen hier (rekursiv)
DEST_DIR="assets/images/webp"     # WebP-Ziel
QUALITY=85                        # WebP-Qualität (0–100)

echo "🧭 Konvertiere PNG → WebP unter $SRC_DIR …"

shopt -s globstar nullglob
for png in "$SRC_DIR"/**/*.png; do
  rel="${png#$SRC_DIR/}"                            # relativer Pfad
  webp="${DEST_DIR}/${rel%.png}.webp"               # Zielpfad
  mkdir -p "$(dirname "$webp")"

  if [[ -f "$webp" && "$webp" -nt "$png" ]]; then
    echo "⏩  Überspringe (bereits aktuell): $rel"
    continue
  fi

  echo "⚙️   $rel → ${webp#$DEST_DIR/}"
  cwebp -quiet -q "$QUALITY" "$png" -o "$webp"
done

echo "✅  Alle PNGs konvertiert. WebP-Dateien in: $DEST_DIR"
