# WellNest — Health & Wellbeing Frontend

WellNest is a React frontend prototype for managing wellness activities, appointments, and personal progress.

## Features

- Dashboard with wellbeing summary
- Activity browsing, filtering, searching, and completion toggles
- Appointment list with booking modal and client-side validation
- Personal progress dashboard
- Editable user profile
- React Router multi-page navigation
- Shared state with React Context
- Mock asynchronous loading and loading/error UI
- Responsive desktop/tablet/mobile layouts
- Basic accessibility support: semantic landmarks, labels, focusable controls, skip link, contrast-conscious UI
- Light/dark theme toggle

## Technology Stack

- React
- React Router
- React Context + Hooks
- Vite
- Plain CSS

## Run Locally

```bash
npm install
npm run dev
```

Then open the local Vite URL in your browser.

## Production Build

```bash
npm run build
npm run preview
```

## Suggested Deployment

- Vercel
- Netlify
- GitHub Pages (with routing configuration)

## Key Screens for Assignment Screenshots

1. Dashboard — Desktop
2. Activities — Desktop
3. Appointments — Desktop
4. Progress — Desktop
5. Dashboard — Mobile
6. Appointment booking modal — Mobile or Desktop

## Project Structure

```text
src/
  components/
    layout/
    ui/
    features/
  context/
  data/
  hooks/
  pages/
  styles/
```

## Design Decisions

- A persistent sidebar is used on desktop for clear information hierarchy.
- Mobile uses a fixed bottom navigation to keep all key sections reachable with one tap.
- Feature components are separated from shared UI and layout components.
- App-wide state is stored in a Context provider to demonstrate shared state without adding unnecessary complexity.
- Mock data and a mock asynchronous hook demonstrate loading and error-state architecture suitable for later API integration.
- Forms use native inputs plus explicit validation feedback.

## Next Development Steps

- Replace mock data with a REST API
- Add authentication
- Persist user state to a backend
- Add real appointment provider availability
- Add automated testing
- Add ESLint/Prettier configuration
