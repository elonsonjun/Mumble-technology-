#!/usr/bin/env bash
# Run the dev server and open the app in Safari.
# Usage: ./open-in-safari.sh   (from the project folder, in your Terminal)

cd "$(dirname "$0")"

# Use project .node if present
if [ -x ".node/bin/npm" ]; then
  export PATH="$(pwd)/.node/bin:$PATH"
fi

echo "Starting dev server..."
npm run dev &
PID=$!

# Wait for server to be ready
for i in {1..20}; do
  if curl -s -o /dev/null http://localhost:8080 2>/dev/null; then
    echo "Opening Safari at http://localhost:8080"
    open -a Safari "http://localhost:8080"
    break
  fi
  sleep 1
done

wait $PID 2>/dev/null || true
