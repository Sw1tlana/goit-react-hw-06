// import { configureStore } from "@reduxjs/toolkit";
// import { contactsReducer } from "./contactsSlice";
// import { filtersReducer } from "./filtersSlice";
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist";
// import storage from "redux-persist/lib/storage";

// const contactDetailsConfig = {
//   key: "contactsDetails",
//   storage,
//   whitelist: ["items"]
// //   blacklist: ['contacts', "isError", "isLoading", "productData"],
// };

// export const persistor = persistStore(store);

// export const store = configureStore ({
//   reducer: {
//     contacts: persistReducer(contactDetailsConfig, contactsReducer),
//     filters: filtersReducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//   getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
// });

