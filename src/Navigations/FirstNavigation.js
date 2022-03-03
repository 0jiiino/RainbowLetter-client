import React from "react";
import { useSelector } from "react-redux";

import AuthNavigation from "./AuthNavigation";
import MainNavigation from "./MainNavigation";

const FirstNavigation = () => {
  const { id } = useSelector((state) => state.user);

  return <>{id ? <MainNavigation /> : <AuthNavigation />}</>;
};

export default FirstNavigation;
