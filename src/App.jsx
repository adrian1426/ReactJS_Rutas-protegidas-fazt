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
      name: 'Adrian'
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
          path={`/${routes.home}`}
          element={
            <ProtectedRoute user={user}>
              <HomePage />
            </ProtectedRoute>
          }
        />
        <Route
          path={`/${routes.dashboard}`}
          element={
            <ProtectedRoute user={user}>
              <DashboardPage />
            </ProtectedRoute>
          }
        />
        <Route
          path={`/${routes.analitycs}`}
          element={<AnalityctsPage />}
        />
        <Route
          path={`/${routes.admin}`}
          element={<AdminPage />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
