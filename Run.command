#!/bin/bash
cd "$(dirname "$0")"
ROOT="$(pwd)"

# Load shell profile so node/npm are on PATH when double-clicked from Finder
for f in "$HOME/.zprofile" "$HOME/.zshrc" "$HOME/.bash_profile" "$HOME/.bashrc"; do
  [ -s "$f" ] && source "$f" 2>/dev/null && break
done

# Node: project .node first, then PATH (nvm/fnm/homebrew from profile)
if [ -x "$ROOT/.node/bin/node" ]; then
  export PATH="$ROOT/.node/bin:$PATH"
fi
export PATH="/usr/local/bin:/opt/homebrew/bin:$PATH"

if ! command -v npm &>/dev/null; then
  echo "Node/npm not in PATH. Installing Node into project (one-time)..."
  [ -x "$ROOT/setup-and-run.sh" ] || chmod +x "$ROOT/setup-and-run.sh"
  "$ROOT/setup-and-run.sh"
  export PATH="$ROOT/.node/bin:$PATH"
fi

if ! command -v npm &>/dev/null; then
  echo ""
  echo "ERROR: npm not found. Install Node from https://nodejs.org then run Run.command again."
  echo "Press Enter to close this window."
  read -r
  exit 1
fi

echo "Installing dependencies (fresh)..."
npm install --no-audit --no-fund

echo "Starting dev server (http://localhost:5173 or 8080) ..."
npm run dev &
PID=$!

# Wait for server to listen (try 5173 first, then 8080)
echo "Waiting for server to be ready..."
for i in {1..60}; do
  if curl -s -o /dev/null -f http://127.0.0.1:5173 2>/dev/null; then
    echo "Server is ready at http://localhost:5173"
    APP_URL="http://localhost:5173"
    break
  fi
  if curl -s -o /dev/null -f http://127.0.0.1:8080 2>/dev/null; then
    echo "Server is ready at http://localhost:8080"
    APP_URL="http://localhost:8080"
    break
  fi
  sleep 1
done
APP_URL="${APP_URL:-http://localhost:5173}"

echo "Opening Safari..."
open -a Safari "$APP_URL"

echo ""
echo "=========================================="
echo "  App: $APP_URL"
echo "  Keep this window open. Close it to stop the server."
echo "=========================================="
wait $PID 2>/dev/null || wait
