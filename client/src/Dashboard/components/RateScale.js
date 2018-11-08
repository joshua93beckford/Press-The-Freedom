import React from 'react';
import dashboard from '../../assets/css/Dashboard.module.css';

class RateScale extends React.Component {
  highlight(value) {
    return this.props.currentValue >= value ? dashboard.highlight : ''
  }

  handleClick(e, clickValue) {
    this.props.ratingClick(clickValue);
  }

  render() {
    let scale = [];
    for(let i = 1; i <= 10; i++) {
      scale.push(<span 
        className={this.highlight(i)} 
        onClick={e => this.handleClick(e, i)}
        key={i}
      >{i}</span>)
    }

    return (
      <div className={dashboard.ratingScale}>
        {scale}
      </div>
    )
  }
}

export default RateScale;