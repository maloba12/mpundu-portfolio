/*
  App.tsx
  =======
  Application router configuration.

  Uses React Router v7's createBrowserRouter + RouterProvider (the
  modern data-router API). This is the preferred approach over the
  older <BrowserRouter> wrapper because it enables future use of
  data loading, actions and deferred rendering if needed.

  Route structure:
    /                     → HomePage
    /about                → AboutPage
    /work                 → WorkPage (landing)
    /work/software        → SoftwareWorkPage
    /work/design          → DesignWorkPage
    /ventures             → VenturesPage
    /experience           → ExperiencePage
    /insights             → InsightsPage
    /contact              → ContactPage
    *                     → NotFoundPage (catch-all)

  All routes share the Layout wrapper (Header + Footer).
  The Layout is applied as the root element's component so it
  renders once and all child routes render inside <Outlet />.
*/

import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { Layout } from '@/components/layout';
import { HomePage } from '@/pages/HomePage';
import { AboutPage } from '@/pages/AboutPage';
import { WorkPage } from '@/pages/WorkPage';
import { SoftwareWorkPage } from '@/pages/SoftwareWorkPage';
import { DesignWorkPage } from '@/pages/DesignWorkPage';
import { VenturesPage } from '@/pages/VenturesPage';
import { ExperiencePage } from '@/pages/ExperiencePage';
import { InsightsPage } from '@/pages/InsightsPage';
import { ContactPage } from '@/pages/ContactPage';
import { NotFoundPage } from '@/pages/NotFoundPage';

/* Root element — renders Layout with a nested Outlet for child routes */
function Root() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: (
      <Layout>
        <NotFoundPage />
      </Layout>
    ),
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'work', element: <WorkPage /> },
      { path: 'work/software', element: <SoftwareWorkPage /> },
      { path: 'work/design', element: <DesignWorkPage /> },
      { path: 'ventures', element: <VenturesPage /> },
      { path: 'experience', element: <ExperiencePage /> },
      { path: 'insights', element: <InsightsPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}
