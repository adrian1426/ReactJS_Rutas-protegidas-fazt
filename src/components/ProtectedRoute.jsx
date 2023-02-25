import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { routes } from '../constants/routesConstants';

const ProtectedRoute = (props) => {
  const { user, chidren } = props;

  if (!user) {
    return <Navigate to={`/${routes.landing}`} />;
  }

  return chidren ? chidren : <Outlet />;
};

export default ProtectedRoute;