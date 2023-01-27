import { TQuestionAPI } from "./context.types";

export enum ActionTypes {
  SET_LOADING = "SET_LOADING",
  SET_ERROR = "SET_ERROR",
  SET_QUIZ_SETUP = "SET_QUIZ_SETUP",
  SET_IS_QUIZ_LOBBY = "SET_IS_QUIZ_LOBBY",
  SET_QUESTIONS = "SET_QUESTIONS",
  SET_INDEX_QUESTION = "SET_INDEX_QUESTION",
  SET_SCORE = "SET_SCORE",
  SET_IS_MODAL_OPEN = "SET_IS_MODAL_OPEN",
  SET_IS_PAGE_ANSWERS = "SET_IS_PAGE_ANSWERS",
}

type LoadingActionType = { type: ActionTypes.SET_LOADING; payload: boolean };

type ErrorActionType = { type: ActionTypes.SET_ERROR; payload: boolean };

type QuestionActionType = {
  type: ActionTypes.SET_QUESTIONS;
  payload: TQuestionAPI[];
};

type QuizSetupActionType = {
  type: ActionTypes.SET_QUIZ_SETUP;
  payload: [string, string];
};

type IndexQuestionActionType = {
  type: ActionTypes.SET_INDEX_QUESTION;
  payload?: "reset";
};

type ResetScoreActionType = {
  type: ActionTypes.SET_SCORE;
  payload?: "reset";
};

type IsModalOpenActionType = {
  type: ActionTypes.SET_IS_MODAL_OPEN;
  payload: boolean;
};

type IsPageAnsActionType = {
  type: ActionTypes.SET_IS_PAGE_ANSWERS;
  payload: boolean;
};

type IsQuizLobbyActionType = {
  type: ActionTypes.SET_IS_QUIZ_LOBBY;
  payload: boolean;
};

export type TReducerAction =
  | LoadingActionType
  | ErrorActionType
  | IndexQuestionActionType
  | IsModalOpenActionType
  | IsPageAnsActionType
  | IsQuizLobbyActionType
  | QuestionActionType
  | QuizSetupActionType
  | ResetScoreActionType;
