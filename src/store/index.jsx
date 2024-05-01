import { configureStore } from "@reduxjs/toolkit";
import cohortReducer from "./cohortSlice";

const store = configureStore({
    reducer: {
        cohorts: cohortReducer,
    },
});

export default store;