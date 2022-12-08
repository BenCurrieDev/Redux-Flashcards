import { createSlice } from '@reduxjs/toolkit';

const initialState = { topics: {} };

const topicsSlice = createSlice({
    name: 'topics',
    initialState,
    reducers: {
        addTopic(state, action) {
            state.topics[action.payload.id] = action.payload;
            state.topics[action.payload.id]['quizIds'] = [];
        },
        addQuizId(state, action) {
            console.log('addQuizId recieved the following payload: ', action.payload);
            state.topics[action.payload.topicId].quizIds.push(action.payload.quizId);
    }
}})

export const selectTopics = (state) => state.topics.topics;
export const { addTopic, addQuizId } = topicsSlice.actions;
export default topicsSlice.reducer;