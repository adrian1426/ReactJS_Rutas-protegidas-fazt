import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = (props) => {
  const { isAllowed, children, redirectTo = '/' } = props;

  if (!isAllowed) {
    return <Navigate to={redirectTo} />;
  }

  return children ? children : <Outlet />;
};

export default ProtectedRoute;