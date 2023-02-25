import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Navigation from './components/Navigation';
import ProtectedRoute from './components/ProtectedRoute';
import { routes } from './constants/routesConstants';
import AdminPage from './pages/AdminPage';
import AnalityctsPage from './pages/AnalityctsPage';
import DashboardPage from './pages/DashboardPage';
import HomePage from './pages/HomePage';
import LandingPage from './pages/LandingPage';

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = () => {
    setUser({
      id: 1,
      name: 'Adrian',
      roles: ['analize', 'support']
    });
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <BrowserRouter>
      <Navigation />

      <Login
        handleLogin={handleLogin}
        handleLogout={handleLogout}
        user={user}
      />

      <Routes>
        <Route index element={<LandingPage />} />
        <Route path={`/${routes.landing}`} element={<LandingPage />} />
        <Route
          element={
            <ProtectedRoute
              isAllowed={!!user}
              redirectTo={`/${routes.landing}`}
            />}
        >
          <Route path={`/${routes.home}`} element={<HomePage />} />
          <Route path={`/${routes.dashboard}`} element={<DashboardPage />} />
        </Route>
        <Route
          path={`/${routes.analitycs}`}
          element={
            <ProtectedRoute
              isAllowed={!!user && user.roles.includes('analize')}
              redirectTo={`/${routes.home}`}
            >
              <AnalityctsPage />
            </ProtectedRoute>
          } />
        <Route
          path={`/${routes.admin}`}
          element={
            <ProtectedRoute
              isAllowed={!!user && user.roles.includes('admin')}
              redirectTo={`/${routes.home}`}
            >
              <AdminPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
