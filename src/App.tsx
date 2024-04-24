import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { Suspense, useId } from 'react';
import { ThemeSwitcherProvider } from './themes/ThemeSwitcher';
import routes from './routes/AppRoutes';
import ErrorBoundary from './hoc/ErrorBoundary';
import Spinner from './components/atoms/Spinner';

function App() {
  const generateId = useId();
  return (
    <ErrorBoundary>
      <ThemeSwitcherProvider>
        <Router>
          <div>
            <Suspense fallback={<Spinner />}>
              <Routes>
                <Route path="/" element={<MainLayout />}>
                  {routes.map(({ path, component: Component, name }) => (
                    <Route key={generateId} path={path} element={<Component />} />
                  ))}
                </Route>
              </Routes>
            </Suspense>
          </div>
        </Router>
      </ThemeSwitcherProvider>
    </ErrorBoundary>
  );
}

export default App;
