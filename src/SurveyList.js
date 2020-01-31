import React, {useState} from 'react';
import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';

import BarCharts from './BarCharts';

const SurveyList = ({surveys, selectedSurvey, handleSelection}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  const survey = surveys[selectedSurvey];

  return (
    <div className="surveys">
      <div className="surveys__dropdown">
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
    <DropdownToggle caret>
      Dropdown
    </DropdownToggle>
    <DropdownMenu>
      {surveys.map(survey => (<DropdownItem key={survey.surveyId} onClick={(e) => handleSelection(e)} value={survey.surveyId - 1}>{survey.title}</DropdownItem>))}
    </DropdownMenu>
  </Dropdown>
  </div>
  <div className="surveys__survey">
    <h2 className="survey__title">{survey.title}</h2>
    <BarCharts questions={survey.questions}/>
  </div>
</div>);
}

export default SurveyList;
