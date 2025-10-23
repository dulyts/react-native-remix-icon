#!/usr/bin/env bash

# Exit on error. Append "|| true" if you expect an error.
set -o errexit
# Exit on error inside any functions or subshells.
set -o errtrace
# Do not allow use of undefined vars. Use ${VAR:-} to use an undefined VAR
set -o nounset
# Catch the error in case mysqldump fails (but gzip succeeds) in `mysqldump | gzip`
set -o pipefail
# Print command traces before executing command.
set -o xtrace

OWNER=Remix-Design
REPO=RemixIcon
SVG_PREFIX=RemixIcon_Svg_

version=$(curl -s "https://api.github.com/repos/$OWNER/$REPO/releases" \
  | jq -r '.[].tag_name' \
  | grep -E '^v?[0-9]+\.[0-9]+\.[0-9]+$' \
  | sort -V \
  | tail -n 1)

echo "Latest version: $version"

url=https://github.com/$OWNER/$REPO/releases/download/$version/$SVG_PREFIX$version.zip


wget $url
unzip $SVG_PREFIX$version.zip -d tmp
rm -rf icons
mkdir icons
find tmp/ -type f -name '*.svg' -exec cp '{}' icons/ ';'
rm -rf src/icons/*
npx  --yes @svgr/cli --filename-case kebab --native -d src/icons icons
npm version $version --allow-same-version --no-git-tag-version
rm -rf tmp icons/*
rm $SVG_PREFIX$version.zip

