React & App Notes (for viva)

- useState: used to keep component-local state (forms, toggles).
- useEffect: used for side-effects (persisting to localStorage, loading data on mount).
- useContext: used to consume `AuthContext`, `BookingContext` and `TravelContext` for global state.
- Custom hooks: `useLocalStorage` encapsulates pattern of syncing state with localStorage. `useFetch` encapsulates loading/error/retry pattern for API calls.
- Code splitting: `React.lazy` + `Suspense` used in `App.jsx` to lazy-load pages and show fallback `Spinner`.
- Routing: `react-router-dom` v6 is used with `<Routes>` and `<Route>`; `ProtectedRoute` demonstrates authentication gating.
- Persistence: Bookings and auth are stored in localStorage to simulate backend persistence for the demo.
- Optimistic updates: Booking CRUD operations update UI state immediately and persist to localStorage.

Files of interest:
- `src/context/AuthContext.jsx` — auth flows (login/register/logout)
- `src/context/BookingContext.jsx` — create/update/delete bookings
- `src/hooks/useLocalStorage.js` — small hook for durable state
- `src/api/api.js` — lightweight API wrapper using `src/data/cities.js`

Testing and run:
1. `npm install`
2. `npm run dev`
