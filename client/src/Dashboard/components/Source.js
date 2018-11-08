import React from 'react';
import dashboard from '../../assets/css/Dashboard.module.css';

const Source = props => {
  let description = props.src.description.split('. ');
  description = Boolean(description[1]) ? description[0] + '.' : description[0];
  if(description.length > 125) description = description.slice(0, 126) + '...';

  return (
    <div className={dashboard.source}>
      <div>
        <h3>{`${props.num}. ${props.src.name}`}</h3>
        <div>{description}</div>
      </div>
      <div>
        <span>Credible: {props.src.credibleScore.toFixed(1)}</span>
        <span>Accurate: {props.src.accurateScore.toFixed(1)}</span>
        <span>Relevant: {props.src.relevantScore.toFixed(1)}</span>
      </div>
    </div>
  )
}

export default Source;