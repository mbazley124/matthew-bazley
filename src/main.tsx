import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import routes from 'virtual:generated-pages-react';
import Layout from './components/layout';
import DefaultPage from './artifacts/default';
import Projects from './artifacts/projects';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout><DefaultPage /></Layout>,
  },
  {
    path: '/projects',
    element: <Layout><Projects /></Layout>,
  },
  ...routes.map((route) => ({
    ...route,
    element: <Layout>{route.element}</Layout>,
  }))
], {
  basename: '/',
  future: {
    v7_relativeSplatPath: true,
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_skipActionErrorRevalidation: true
  }
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);