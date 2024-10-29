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

version=4.5.0

url=https://github.com/Remix-Design/RemixIcon/releases/download/v$version/RemixIcon_Svg_v$version.zip


wget $url
unzip RemixIcon_Svg_v$version.zip -d tmp
find tmp/ -type f -name '*.svg' -exec cp '{}' icons/ ';'
rm -rf src/icons/*
npx  --yes @svgr/cli --filename-case kebab --native -d src/icons icons
npm version $version --allow-same-version --no-git-tag-version
rm -rf tmp icons/*
rm RemixIcon_Svg_v$version.zip

