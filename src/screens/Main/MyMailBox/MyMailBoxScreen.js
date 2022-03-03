import React from "react";
import { useSelector } from "react-redux";

import Angel from "./AngelScreen";
import NewAngel from "./NewAngelScreen";

const MyMailBox = () => {
  const { angel } = useSelector((state) => state.user);

  return <>{!Object.keys(angel).length ? <NewAngel /> : <Angel />}</>;
};

export default MyMailBox;
