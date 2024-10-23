import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Loader from './components/Loader/Loader.jsx';

// Lazy-loaded components
const WebAndCreatives = lazy(() => import('./pages/TeamPage/SubTeams/WebAndCreatives/WebAndCreatives.jsx'));
const EventManagement = lazy(() => import('./pages/TeamPage/SubTeams/EventManagement/EventManagement.jsx'));
const DesignTeam = lazy(() => import('./pages/TeamPage/SubTeams/DesignTeam/DesignTeam.jsx'));
const Sponsorship = lazy(() => import('./pages/TeamPage/SubTeams/Sponsorship/Sponsorship.jsx'));
const FacultyCoordinators = lazy(() => import('./pages/TeamPage/SubTeams/FacultyCoordinators/FacultyCoordinators.jsx'));
const PublicRelations = lazy(() => import('./pages/TeamPage/SubTeams/PublicRelations/PublicRelations.jsx'));
const Events = lazy(() => import('./pages/Events/Events.jsx'));
const Team = lazy(() => import('./pages/Team/Team.jsx'));
const Sponsors = lazy(() => import('./pages/Sponsors/Sponsors.jsx'));
const EventsDay1 = lazy(() => import('./pages/Events/Day 1/EventsDay1.jsx'));
const EventsDay2 = lazy(() => import('./pages/Events/Day 2/EventsDay2.jsx'));
const Gallery = lazy(() => import('./pages/PastEvents/gallery.jsx'));

// Define the router with Suspense and Loader
const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<Loader />}>
        <App />
      </Suspense>
    ),
  },
  {
    path: '/teams',
    element: (
      <Suspense fallback={<Loader />}>
        <Team />
      </Suspense>
    ),
  },
  {
    path: '/teams/webAndCreatives',
    element: (
      <Suspense fallback={<Loader />}>
        <WebAndCreatives />
      </Suspense>
    ),
  },
  {
    path: '/teams/eventManagement',
    element: (
      <Suspense fallback={<Loader />}>
        <EventManagement />
      </Suspense>
    ),
  },
  {
    path: '/teams/design',
    element: (
      <Suspense fallback={<Loader />}>
        <DesignTeam />
      </Suspense>
    ),
  },
  {
    path: '/teams/sponsorship',
    element: (
      <Suspense fallback={<Loader />}>
        <Sponsorship />
      </Suspense>
    ),
  },
  {
    path: '/teams/faculty',
    element: (
      <Suspense fallback={<Loader />}>
        <FacultyCoordinators />
      </Suspense>
    ),
  },
  {
    path: '/teams/publicRelations',
    element: <Suspense fallback={<div><Loader/></div>}><PublicRelations /></Suspense>,
  },
  {
    path: '/gallery',
    element: (
      <Suspense fallback={<Loader />}>
        <Gallery />
      </Suspense>
    ),
  },
  {
    path: '/events',
    element: (
      <Suspense fallback={<Loader />}>
        <Events />
      </Suspense>
    ),
  },
  {
    path: '/sponsors',
    element: (
      <Suspense fallback={<Loader />}>
        <Sponsors />
      </Suspense>
    ),
  },
  {
    path: '/events/day1',
    element: (
      <Suspense fallback={<Loader />}>
        <EventsDay1 />
      </Suspense>
    ),
  },
  {
    path: '/events/day2',
    element: (
      <Suspense fallback={<Loader />}>
        <EventsDay2 />
      </Suspense>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
