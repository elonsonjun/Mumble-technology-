#!/bin/bash
set -e
cd "$(dirname "$0")"
NODE_VERSION="v22.22.0"
NODE_DIR=".node"

# Pick tarball by architecture
case "$(uname -m)" in
  arm64|aarch64) TAR="node-${NODE_VERSION}-darwin-arm64.tar.gz" ;;
  *)             TAR="node-${NODE_VERSION}-darwin-x64.tar.gz" ;;
esac
URL="https://nodejs.org/dist/${NODE_VERSION}/${TAR}"

# Use system node if available
if command -v node &>/dev/null; then
  echo "Using system Node.js"
  npm install
  exit 0
fi

# Download and extract Node.js into project
if [ ! -f "${NODE_DIR}/bin/node" ]; then
  echo "Downloading Node.js ${NODE_VERSION} (one-time, ~50MB)..."
  mkdir -p "${NODE_DIR}"
  curl -fsSL "$URL" | tar -xzf - -C "${NODE_DIR}" --strip-components=1
  echo "Node.js installed in ${NODE_DIR}/"
fi

export PATH="$(pwd)/${NODE_DIR}/bin:$PATH"
echo "Installing project dependencies..."
npm install
echo "Setup complete. You can run the app with Run.command"
