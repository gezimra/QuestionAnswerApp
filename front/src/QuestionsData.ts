export interface QuestionData {
  questionId: number;
  title: string;
  content: string;
  userName: string;
  created: Date;
  answers: AnserData[];
}

export interface AnserData {
  answerId: number;
  content: string;
  userName: string;
  created: Date;
}

const questions: QuestionData[] = [
  {
    questionId: 1,
    title: 'Why should I learn TypeScript?',
    content: `TypeScript seems to be getting popular so I
             wondered whether it is worth my time learning it?
             What benifits does it give over JavaScript?`,
    userName: 'Bob',
    created: new Date(),
    answers: [
      {
        answerId: 1,
        content: `To catch problems earlier speeding
                        up your developments`,
        userName: 'Jane',
        created: new Date(),
      },
      {
        answerId: 2,
        content: `so, that you can use the JavaScript features
                            of tomorrow, today`,
        userName: 'Fred',
        created: new Date(),
      },
    ],
  },
  {
    questionId: 2,
    title: `Which state management tool should I use?`,
    content: `There seem to be fair few state management
                tools around for React - React, Unstated, ...
                Which one should I use?`,
    userName: 'Bob',
    created: new Date(),
    answers: [],
  },
];

export const getUnansweredQuestions = (): QuestionData[] => {
  return questions.filter((q) => q.answers.length === 0);
};
