#!/usr/bin/env bash
# Start the dev server. Loads nvm if available so npm is on PATH.
cd "$(dirname "$0")"
[ -s "$HOME/.nvm/nvm.sh" ] && . "$HOME/.nvm/nvm.sh"
[ -s "$HOME/.nvm/nvm.sh" ] && nvm use default 2>/dev/null || true
npm run dev
