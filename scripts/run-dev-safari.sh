#!/usr/bin/env bash
# Start Vite dev server and open the app in Safari once ready.
cd "$(dirname "$0")/.."
echo "Starting dev server..."
npm run dev &
PID=$!
echo "Waiting for server..."
for i in {1..60}; do
  if curl -s -o /dev/null -f http://127.0.0.1:5173 2>/dev/null; then
    APP_URL="http://localhost:5173"
    break
  fi
  if curl -s -o /dev/null -f http://127.0.0.1:8080 2>/dev/null; then
    APP_URL="http://localhost:8080"
    break
  fi
  sleep 1
done
APP_URL="${APP_URL:-http://localhost:5173}"
echo "Opening Safari at $APP_URL"
open -a Safari "$APP_URL"
echo "Keep this terminal open. Press Ctrl+C to stop the server."
wait $PID 2>/dev/null || wait
