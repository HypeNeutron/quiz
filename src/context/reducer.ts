import { ActionTypes, TReducerAction } from "./action.types";
import { TQuizState } from "./context.types";

type ReducerFcTypes = (state: TQuizState, action: TReducerAction) => TQuizState;

const reducer: ReducerFcTypes = (state, { type, payload: load }) => {
  switch (type) {
    case ActionTypes.SET_LOADING:
      return { ...state, loading: load };

    case ActionTypes.SET_ERROR:
      return { ...state, error: load };

    case ActionTypes.SET_IS_QUIZ_LOBBY:
      return { ...state, isQuizLobby: load };

    case ActionTypes.SET_QUIZ_SETUP: {
      const [name, value] = load;
      return {
        ...state,
        quizSetup: { ...state.quizSetup, [name]: value },
      };
    }

    case ActionTypes.SET_QUESTIONS:
      return { ...state, questions: load };

    case ActionTypes.SET_INDEX_QUESTION: {
      if (load) return { ...state, indexQuestion: 0 };
      return {
        ...state,
        indexQuestion: state.indexQuestion + 1,
      };
    }

    case ActionTypes.SET_IS_MODAL_OPEN:
      return { ...state, isModalOpen: load };

    case ActionTypes.SET_SCORE: {
      if (load) return { ...state, score: 0 };
      return { ...state, score: state.score + 1 };
    }

    case ActionTypes.SET_IS_PAGE_ANSWERS:
      return { ...state, isPageAnswers: load };

    default:
      return state;
  }
};
export default reducer;
