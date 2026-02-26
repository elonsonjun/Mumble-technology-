# Welcome to your Lovable project

## Run the project (fresh from scratch)

**Prerequisite:** [Node.js](https://nodejs.org/) (includes npm). If you use [nvm](https://github.com/nvm-sh/nvm): run `nvm use` or `nvm install` in the project folder first.

**One command – install deps and start dev server:**

```bash
cd mumble-tech-solutions-main   # or your project folder
npm run fresh
```

Or step by step:

```bash
cd mumble-tech-solutions-main
npm install
npm run dev
```

Then open **http://localhost:5173** (or **http://localhost:8080** if 5173 is in use) in your browser.

**If you still see old content (e.g. “IoT” instead of “Custom ERP”):**
1. Stop the dev server (Ctrl+C in the terminal).
2. Run: `npm run dev:fresh` (clears cache and starts the server). Use the URL Vite prints (e.g. http://localhost:5173).
3. In Safari: **Develop → Empty Caches** (or **Cmd+Option+E**), then **Cmd+Shift+R** to hard refresh. Or open the site in a **Private Window** (Cmd+Shift+N).

**On Mac:** You can double‑click **Run.command** in Finder (same folder as this README). It will install dependencies, start the dev server, and open the app in Safari. Keep the terminal window open while using the app.

---

## App flow

- **Home (/**)**  
  Hero → Service cards (4) → Solutions in focus (6) → About → Tech → Stats → Clients → Our Services (incl. Custom ERP) → Process → Industries → Testimonials → FAQ → CTA.

- **Solution detail (/featured/:slug)**  
  Click any “Video Analytics”, “Private ChatGPT”, “Computer Vision”, “Generative AI”, “AI Strategy”, or “Intelligent Systems” card (hero, 4 cards, or 6 cards) → opens a **new page** with full description and image gallery. Back link returns to home and scrolls to Solutions.

- **Services (/services/:slug)**  
  “What we do” in navbar or “Our Services” grid → e.g. **Custom ERP** → `/services/custom-erp` shows ERP content and images. Other services (AI & ML, SaaS, Web Dev, etc.) open their detail pages.

- **Contact (/contact)**  
  Navbar “Contact Us” or any “Get in touch” button → contact page.

### Share via HTTP (send link to others)

To let others on your **same Wi‑Fi/network** open the app:

```bash
npm run share
```

In the terminal, Vite will show something like:
- **Local:** http://localhost:8080
- **Network:** http://192.168.x.x:8080

**Send the Network URL** (e.g. `http://192.168.1.5:8080`) to anyone on the same network; they can open it in their browser.

To share with **anyone on the internet** (not just your Wi‑Fi), use a tunnel (one-time setup):

```bash
npx ngrok http 8080
```

Then share the `https://xxxx.ngrok.io` URL ngrok gives you.

---

## Project info

**URL**: https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
