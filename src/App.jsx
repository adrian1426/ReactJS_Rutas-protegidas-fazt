import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import { routes } from './constants/routesConstants';
import AdminPage from './pages/AdminPage';
import AnalityctsPage from './pages/AnalityctsPage';
import DashboardPage from './pages/DashboardPage';
import HomePage from './pages/HomePage';
import LandingPage from './pages/LandingPage';

function App() {

  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path={`/${routes.landing}`} element={<LandingPage />} />
        <Route path={`/${routes.home}`} element={<HomePage />} />
        <Route path={`/${routes.dashboard}`} element={<DashboardPage />} />
        <Route path={`/${routes.analitycs}`} element={<AnalityctsPage />} />
        <Route path={`/${routes.admin}`} element={<AdminPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
