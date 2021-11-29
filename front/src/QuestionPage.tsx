/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { gray3, gray5, gray6 } from './Styles';

import React from 'react';
import { useParams } from 'react-router';

import { QuestionData, getQuestion } from './QuestionsData';
import { Page } from './Page';

export const QuestionPage = () => {
  const [question, setQuestion] = React.useState<QuestionData | null>(null);
  const { questionId } = useParams();
  React.useEffect(() => {
    const doGetQuestion = async (questionId: number) => {
      const foundQuestion = await getQuestion(questionId);
      setQuestion(foundQuestion);
    };
    if (questionId) {
      doGetQuestion(Number(questionId));
    }
  }, [questionId]);
  return (
    <Page>
      <div
        css={css`
          background-color: white;
          padding: 15px 20px 20px 20px;
          border-radius: 4px;
          border: 1px solid ${gray5};
          box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.16);
        `}
      >
        <div
          css={css`
            font-size: 19px;
            font-weight: bold;
            margin: 10px 0px 5px;
          `}
        >
          {question === null ? '' : question.title}
        </div>
      </div>
    </Page>
  );
};
