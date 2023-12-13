import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { propertiesApi } from "./services/properties";

const store = configureStore({
  reducer: {
    [propertiesApi.reducerPath]: propertiesApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(propertiesApi.middleware),
});

setupListeners(store.dispatch);

export default store;
