import React from "react";
import { Provider } from "react-redux";

import store from "./redux/store";
import FirstNavigation from "./src/Navigations/FirstNavigation";

const App = () => {
  return (
    <Provider store={store}>
      <FirstNavigation />
    </Provider>
  );
};

export default App;
