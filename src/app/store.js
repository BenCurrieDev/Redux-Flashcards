import { configureStore } from "@reduxjs/toolkit";
import TopicsReducer from '../features/topics/topicsSlice';
import QuizzesReducer from '../features/quizzes/quizzesSlice';
import CardsReducer from '../features/cards/cardsSlice';

export default configureStore({
  reducer: {
    topics: TopicsReducer,
    quizzes: QuizzesReducer,
    cards: CardsReducer
  },
});
