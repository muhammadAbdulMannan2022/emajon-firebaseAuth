import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "./Loading";

const Privateroute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);
  if (loading) {
    return <Loading />;
  } else {
    return (
      <div>
        {user ? (
          children
        ) : (
          <Navigate to="/login" state={{ from: location }} replace />
        )}
      </div>
    );
  }
};

export default Privateroute;
