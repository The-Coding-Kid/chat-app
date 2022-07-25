import { configureStore } from "@reduxjs/toolkit";
import { createStore } from "redux";
import { UserReducer } from "../reducers/UserFunctions";

const store = createStore(UserReducer);

export default store;
