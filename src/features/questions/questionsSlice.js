import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addQuestionToUser, updateUsers } from "../users/UsersSlice";
import { _getQuestions, _saveQuestion, _saveQuestionAnswer } from "../_DATA";

const initialState = {
  questions: {},
  status: "idle",
};

export const getAllQuestions = createAsyncThunk(
  "questions/getAll",
  async () => {
    const questions = await _getQuestions();
    return questions;
  }
);
export const addQuestionthunk = createAsyncThunk(
  "questions/add",
  async (question) => {
    const newquestion = await _saveQuestion(question);
    return newquestion;
  }
);
export const saveAnswer = createAsyncThunk("questions/answer", async (data) => {
  await _saveQuestionAnswer(data);
  return data;
});

export const saveAnswerandUpdate = (data) => async (dispatch, getState) => {
  await dispatch(saveAnswer(data));
  dispatch(updateUsers(data));
};
export const addQuestion = (question) => async (dispatch) => {
  let {payload}=await dispatch(addQuestionthunk(question));
  dispatch((addQuestionToUser(payload.id)));
};
export const questionsSlice = createSlice({
  name: "questionsSlice",
  initialState,
  reducers: {},
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder
      .addCase(getAllQuestions.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllQuestions.fulfilled, (state, action) => {
        state.status = "idle";
        state.questions = action.payload;
      })
      .addCase(addQuestionthunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addQuestionthunk.fulfilled, (state, action) => {
        state.status = "idle";
        state.questions[action.payload.id] = action.payload;
      })
      .addCase(saveAnswer.pending, (state) => {
        state.status = "loading";
      })
      .addCase(saveAnswer.fulfilled, (state, action) => {
        state.status = "idle";
        let { authedUser, qid, answer } = action.payload;

        state.questions[qid][answer] = {
          ...state.questions[qid][answer],
          votes: state.questions[qid][answer].votes.concat([authedUser]),
        };
      });
  },
});

export const answered = (user) => (state) => {
  let answers = user.answers,
    questions = state.questions.questions,
    answered = [];
  if (questions) {
    for (let key in answers) {
      answered.push(questions[key]);
    }
  }
  return answered;
};
export const unanswered = (user) => (state) => {
  let answers = user.answers,
    questions = state.questions.questions,
    notAnswered = [];
  if (questions) {
    for (let key in questions) {
      if (!answers.hasOwnProperty(key)) notAnswered.push(questions[key]);
    }
  }
  return notAnswered;
};

export const getQuestion = (id) => (state) => state.questions.questions[id];

export default questionsSlice.reducer;
