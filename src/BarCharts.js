import React from 'react';

import BarChart from './BarChart';

export default function BarCharts ({questions}) {
    if(questions.length > 0) {
      return (
        <div className="survey__questions container">
          {questions.map(q => <BarChart question={q} key={q.questionId}/>)}
        </div>
      );
    } else {
      return (
        <h4>Loading...</h4>
      )
    }
}
