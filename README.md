🧭 TravelNest – Homestays & Local Guide Services
🌍 Project Overview

TravelNest is a React-based front-end web application designed to help users discover and book homestays, flights, airport transfers, and local tours.
It provides a one-stop platform for travelers to plan their trips conveniently and explore destinations with comfort and ease.

This project was developed as part of the Front-End Development SDP Review at KL University, demonstrating the use of React, Vite, Git, and Netlify for modern web application development and deployment.

💡 Features

✅ Explore Homestays across major Indian cities
✅ Book Flights and Airport Transfers easily
✅ Discover Local Tours & Activities
✅ Responsive and modern UI with glowing theme
✅ Persistent data using LocalStorage
✅ Continuous Deployment using Netlify + GitHub

🧱 Tech Stack
Category	Technology
Frontend Framework	React (Vite)
Styling	CSS3, Responsive Design
State Management	React Hooks, Context API
Version Control	Git & GitHub
Deployment	Netlify (Continuous Integration)
⚙️ Installation & Setup

To run this project locally:

<<<<<<< HEAD
# Clone the repository
git clone https://github.com/Venumadhav-18/Travelnext.git

# Go into the project folder
cd Travelnext

# Install dependencies
npm install

# Start the development server
npm run dev


Then open 👉 http://localhost:5173 in your browser.

🚀 Deployment

This project is live and hosted on Netlify via continuous deployment from GitHub.
Visit the live site here:
🔗 https://travelnest-react.netlify.app

🧩 Project Structure
travelnest/
├─ public/               # Static assets and images
├─ src/
│  ├─ components/        # Reusable UI components
│  ├─ pages/             # Individual React pages (Home, Homestays, Guide, Contact)
│  ├─ context/           # Global Context (state management)
│  ├─ App.jsx            # Root app component
│  ├─ main.jsx           # Entry point for React
│  └─ styles.css         # Custom styling
├─ package.json
└─ vite.config.js

🧠 Challenges Faced

Git submodule issue in src/ folder during deployment
🔹 Resolved by removing nested .git folder and re-adding src as a normal directory

Netlify build error during first deployment
🔹 Fixed by reconfiguring Git integration and triggering a fresh deploy

🏆 Outcome

This project demonstrates:

Modern front-end development using React

Proper component design & routing

Version control using GitHub

Successful CI/CD deployment on Netlify

👨‍💻 Developed by

Venu madhav reddy
B.Tech CSE, KL University
=======
If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## TravelNest — Level-5 Upgrade Notes

This workspace has been extended with a Level-5 quality scaffold that includes:

- A small design system in `src/styles.css` with colors, shadows, responsive grid and micro-interactions.
- Reusable components in `src/components` (Navbar, Footer, Input, Spinner, ProtectedRoute).
- `AuthContext` and `BookingContext` in `src/context` for authentication and bookings CRUD persisted to `localStorage`.
- Custom hooks: `useLocalStorage`, `useFetch` in `src/hooks`.
- API wrapper `src/api/api.js` that reads `src/data/cities.js` and persists bookings to `localStorage`.
- React Router v6 lazy-loaded routes and a 404 page. Protected routes redirect to `/login`.

Run locally:

```cmd
npm install
npm run dev
```

Recommended Git branching strategy (Level-5):

- `main` : production-ready
- `feature/ui` : design updates and components
- `feature/auth` : authentication flows
- `feature/crud` : bookings CRUD and contexts
- `feature/api` : API wrapper & integration

Commit message examples:

- feat(ui): add responsive layout and design tokens
- feat(auth): add AuthContext and login/register pages
- feat(bookings): implement create/update/delete bookings (localStorage)

>>>>>>> 4a250bd (Updated project files)
