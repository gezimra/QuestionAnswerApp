/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

import { Page } from './Page';
import { PageTitle } from './PageTitle';
import { QuestionList } from './QuestionList';
import {
  getAnsweredQuestions,
  getUnansweredQuestions,
  QuestionData,
} from './QuestionsData';
import {
  AppState,
  gettingUnansweredQuestionsAction,
  gotUnansweredQuestionsAction,
} from './store';
import { PrimaryButton } from './Styles';

export const HomePage = () => {
  const dispatch = useDispatch();
  const questions = useSelector(
    (state: AppState) => state.questions.unanswered,
  );
  const questionLoading = useSelector(
    (state: AppState) => state.questions.loading,
  );
  // const [questions, setQuestions] = React.useState<QuestionData[]>([]);
  const [answered, setAnswered] = React.useState<QuestionData[]>([]);
  // const [questionLoading, setQuestionLoading] = React.useState(true);
  React.useEffect(() => {
    const doGetUnansweredQuestions = async () => {
      dispatch(gettingUnansweredQuestionsAction());
      const unansweredQuestions = await getUnansweredQuestions();
      dispatch(gotUnansweredQuestionsAction(unansweredQuestions));
      // setQuestions(unansweredQuestions);
      // setQuestionLoading(false);
    };
    doGetUnansweredQuestions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  React.useEffect(() => {
    const doGetAnsweredQuestions = async () => {
      const answeredQuestions = await getAnsweredQuestions();
      setAnswered(answeredQuestions);
    };
    doGetAnsweredQuestions();
  });
  const navigate = useNavigate();
  const handleAskQuestionClick = () => {
    navigate('ask');
  };
  return (
    <Page>
      <div
        css={css`
          display: flex;
          align-items: center;
          justify-content: space-between;
        `}
      >
        <PageTitle> Unanswered Question </PageTitle>
        <PrimaryButton onClick={handleAskQuestionClick}>
          Ask a question
        </PrimaryButton>
      </div>
      {questionLoading ? (
        <div>Loading...</div>
      ) : (
        <QuestionList data={questions || []} />
      )}
      <QuestionList data={answered || []} />
    </Page>
  );
};
