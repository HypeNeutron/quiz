import axios from "axios";
import React, { useCallback, useContext, useReducer } from "react";

import { ActionTypes } from "./action.types";
import {
  TContext,
  TQuestionAPI,
  TQuizCategory,
  TQuizState,
} from "./context.types";
import reducer from "./reducer";

const API_ENDPOINT = "https://opentdb.com/api.php?";

const AppContext = React.createContext<TContext | null>(null);

const initialState: TQuizState = {
  loading: false,
  error: false,
  isModalOpen: false,
  isPageAnswers: false,
  isQuizLobby: true,
  quizSetup: { amount: 10, category: "GeneralKnowledge", difficulty: "easy" },
  questions: [],
  indexQuestion: 0,
  score: 0,
};

const table: Record<TQuizCategory, number> = {
  GeneralKnowledge: 9,
  Computers: 18,
  Mathematics: 19,
  Gadgets: 30,
  Politics: 24,
  Books: 10,
};

function AppContextProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { quizSetup, questions, indexQuestion } = state as TQuizState;

  const fetchQuestions = async (quizUrlCall: string) => {
    dispatch({ type: ActionTypes.SET_LOADING, payload: true });
    dispatch({ type: ActionTypes.SET_IS_QUIZ_LOBBY, payload: false });
    try {
      const { data } = await axios(quizUrlCall);
      const result = (await data.results) as TQuestionAPI[];
      dispatch({ type: ActionTypes.SET_QUESTIONS, payload: result });
      dispatch({ type: ActionTypes.SET_LOADING, payload: false });
      dispatch({ type: ActionTypes.SET_IS_QUIZ_LOBBY, payload: false });
      dispatch({ type: ActionTypes.SET_ERROR, payload: false });
    } catch (err) {
      dispatch({ type: ActionTypes.SET_ERROR, payload: true });
      dispatch({ type: ActionTypes.SET_IS_QUIZ_LOBBY, payload: true });
    }
  };

  const inputChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
      const { name, value } = e.target;
      dispatch({ type: ActionTypes.SET_QUIZ_SETUP, payload: [name, value] });
    },
    []
  );

  const quizSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      const { amount, category, difficulty } = quizSetup;

      const url = `${API_ENDPOINT}amount=${amount}&category=${table[category]}&difficulty=${difficulty}`;
      fetchQuestions(url);
    },
    [quizSetup]
  );

  const backToLobby = () => {
    dispatch({ type: ActionTypes.SET_IS_QUIZ_LOBBY, payload: true });
    dispatch({ type: ActionTypes.SET_IS_PAGE_ANSWERS, payload: false });
    dispatch({ type: ActionTypes.SET_SCORE, payload: "reset" });
  };

  const closeModal = () => {
    dispatch({ type: ActionTypes.SET_SCORE, payload: "reset" });
    dispatch({ type: ActionTypes.SET_IS_QUIZ_LOBBY, payload: true });
    dispatch({ type: ActionTypes.SET_IS_MODAL_OPEN, payload: false });
  };

  const lookAnswers = () => {
    dispatch({ type: ActionTypes.SET_IS_PAGE_ANSWERS, payload: true });
    dispatch({ type: ActionTypes.SET_IS_MODAL_OPEN, payload: false });
  };

  const nextQuestion = useCallback(() => {
    if (indexQuestion > questions.length - 2) {
      dispatch({ type: ActionTypes.SET_IS_MODAL_OPEN, payload: true });
      dispatch({ type: ActionTypes.SET_INDEX_QUESTION, payload: "reset" });
    } else dispatch({ type: ActionTypes.SET_INDEX_QUESTION });
  }, [questions.length, indexQuestion]);

  const checkAnswer = useCallback(
    (answer: boolean) => {
      if (answer) {
        dispatch({ type: ActionTypes.SET_SCORE });
      }
      nextQuestion();
    },
    [nextQuestion]
  );

  const valueMemo = React.useMemo(() => {
    return {
      ...state,
      nextQuestion,
      checkAnswer,
      closeModal,
      inputChange,
      quizSubmit,
      lookAnswers,
      backToLobby,
    };
  }, [checkAnswer, inputChange, nextQuestion, quizSubmit, state]);

  return (
    <AppContext.Provider value={valueMemo}>{children}</AppContext.Provider>
  );
}

const useGlobalContext = () => {
  return useContext(AppContext) as TContext;
};

export { AppContextProvider, useGlobalContext };
