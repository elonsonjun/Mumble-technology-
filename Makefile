# Install dependencies (run once: make install or npm install)
install:
	npm install

# Run development server. Uses run.sh so nvm is loaded if available.
# First time: make install && make run  (or: npm install && ./run.sh)
run:
	./run.sh

# Build for production
build:
	npm run build

# Preview production build
preview:
	npm run preview

.PHONY: install run build preview
