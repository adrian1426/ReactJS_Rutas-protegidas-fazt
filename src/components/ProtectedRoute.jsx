import React from 'react';
import { Navigate } from 'react-router-dom';
import { routes } from '../constants/routesConstants';

const ProtectedRoute = (props) => {
  const { children, user } = props;

  if (!user) {
    return <Navigate to={`/${routes.landing}`} />;
  }

  return children;
};

export default ProtectedRoute;