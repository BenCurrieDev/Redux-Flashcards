import { configureStore } from "@reduxjs/toolkit";
import TopicsReducer from '../features/topics/topicsSlice';

export default configureStore({
  reducer: {topics: TopicsReducer},
});
