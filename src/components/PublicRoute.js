import React from 'react';
import { Navigate } from 'react-router-dom';
const PublicRoute = ({ children, ...routeProps }) => {
  const profile = false;
  if (profile) {
    return <Navigate to="/" />;
  }
  return <Route {...routeProps}>{children}</Route>;
};
export default PublicRoute;
