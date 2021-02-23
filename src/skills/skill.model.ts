export interface QuestionModel {
  id: number;
  question: string;
  options: string[];
  response: number;
}

export interface ResponseModel {
  questionId: number;
  question: string;
  response: number;
  correct: number;
}

export interface QuizModel {
  id: number;
  name: string;
  description?: string;
  questions?: QuestionModel[];
}
