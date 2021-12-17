/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  AppState,
  searchingQuestionsAction,
  searchedQuestionsAction,
} from './store';

import { Page } from './Page';
import { useSearchParams } from 'react-router-dom';
import { QuestionList } from './QuestionList';
import { searchQuestions, QuestionData } from './QuestionsData';

export const SearchPage = () => {
  const dispatch = useDispatch();
  const questions = useSelector((state: AppState) => state.questions.searched);
  // const [questions, setQuestions] = React.useState<QuestionData[]>([]);
  const [searchParams] = useSearchParams();

  const search = searchParams.get('criteria') || '';

  React.useEffect(() => {
    const doSearch = async (critera: string) => {
      dispatch(searchingQuestionsAction());
      const foundResults = await searchQuestions(critera);
      dispatch(searchedQuestionsAction(foundResults));
    };
    doSearch(search);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  return (
    <Page title="Search Results">
      {search && (
        <p
          css={css`
            font-style: italic;
            font-size: 16px;
            margin-top: 0px;
          `}
        >
          for "{search}"
        </p>
      )}
      <QuestionList data={questions} />
    </Page>
  );
};
