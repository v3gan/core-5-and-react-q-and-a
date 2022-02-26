import React from 'react';
import { QuestionList } from './QuestionsList';
import { getUnansweredQuestions } from './QuestionsData';
import { Page } from './Page';
import { PageTitle } from './PageTitle';

export const HomePage = () => {
  return (
    <Page>
      <div>
        <div>
          <PageTitle>Unanswered Questions</PageTitle>
          <button>Ask a question</button>
        </div>
        {/* <QuestionList data={getUnansweredQuestions()} /> */}
      </div>
    </Page>
  );
};
