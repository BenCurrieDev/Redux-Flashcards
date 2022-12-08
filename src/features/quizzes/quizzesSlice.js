import { createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { addQuizId } from "../topics/topicsSlice";
const dispatch = useDispatch()

const initialState = { quizzes: {} };

const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState,
    reducers: {
        addQuiz(state, action) {
            state.quizzes[action.payload.id] = action.payload;
        }
    }
})

export const selectQuizzes = (state) => state.quizzes.quizzes;
export const { addQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;


export const createNewQuiz = (payload) => {
    return (dispatch) => {
        dispatch(addQuiz(payload));
        dispatch(addQuizId({quizId: payload.id, topicId: payload.topicId}));
    }
}