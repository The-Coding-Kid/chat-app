import { configureStore } from "@reduxjs/toolkit";
import { UserReducer } from "./reducers/UserFunctions";

const store = createStore(UserReducer);

export default store;
