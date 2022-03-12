import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import * as SecureStore from "expo-secure-store";

import AuthNavigation from "./AuthNavigation";
import MainNavigation from "./MainNavigation";

const FirstNavigation = () => {
  const { id } = useSelector((state) => state.user);

  return <>{id ? <MainNavigation /> : <AuthNavigation />}</>;
};

export default FirstNavigation;
