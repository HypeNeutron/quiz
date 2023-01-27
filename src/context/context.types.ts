export type TQuizCategory =
  | "GeneralKnowledge"
  | "Computers"
  | "Mathematics"
  | "Gadgets"
  | "Politics"
  | "Books";

export type TQuestionAPI = {
  category: string;
  type: "multiple" | "boolean";
  difficulty: "easy" | "medium" | "hard";
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};

export type TQuizState = {
  loading: boolean;
  error: boolean;
  isModalOpen: boolean;
  isPageAnswers: boolean;
  isQuizLobby: boolean;
  quizSetup: {
    amount: number;
    category: TQuizCategory;
    difficulty: "easy" | "medium" | "hard";
  };
  questions: TQuestionAPI[];
  indexQuestion: number;
  score: number;
};

export type TContext = {
  inputChange: (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => void;
  quizSubmit: (e: React.FormEvent) => void;
  backToLobby: () => void;
  closeModal: () => void;
  lookAnswers: () => void;
  nextQuestion: () => void;
  checkAnswer: (answer: boolean) => void;
} & TQuizState;
