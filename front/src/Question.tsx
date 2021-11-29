/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { QuestionData } from './QuestionsData';
import { gray2, gray3 } from './Styles';

interface Props {
  data: QuestionData;
  showContent?: boolean;
}

export const Question = ({ data, showContent = true }: Props) => (
  <div
    css={css`
      padding: 10px 0px;
      font-size: 19px;
    `}
  >
    <Link
      css={css`
        text-decoration: none;
        color: ${gray2};
      `}
      to={`/questions/${data.questionId}`}
    >
      {data.title}
    </Link>
    {showContent && (
      <div>
        {data.content.length > 50
          ? `${data.content.substring(0, 50)}...`
          : data.content}
      </div>
    )}
    <div
      css={css`
        font-size: 12px;
        font-style: italic;
        color: ${gray3};
      `}
    >
      {`Asked by ${data.userName} on 
        ${data.created.toLocaleDateString()} ${data.created.toLocaleTimeString()}`}
    </div>
  </div>
);
