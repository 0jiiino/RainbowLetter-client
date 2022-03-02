import React from "react";
import { Provider } from "react-redux";

import AuthNavigation from "./src/Navigations/AuthNavigation";
import store from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <AuthNavigation />
    </Provider>
  );
};

export default App;
