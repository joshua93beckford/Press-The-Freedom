import React from "react";
import RateScale from './RateScale';
import dashboard from '../../assets/css/Dashboard.module.css';

class RateModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      source: props.source,
      credible: 0,
      accurate: 0,
      relevant: 0
    }
  }

  render() {
    return (
      <div className={dashboard.modalWrapper}>
        <section className={dashboard.section}>
          <h2>Rate This Article</h2>
  
          <div className={dashboard.ratingField}>
            <span>This article is <b>credible</b>.</span>
            <RateScale 
              category='credible' currentValue={this.state.credible} 
              ratingClick={clickValue => this.setState({credible: clickValue})} 
            />
          </div>
  
          <div className={dashboard.ratingField}>
            <span>This article is <b>accurate</b>.</span>
            <RateScale 
              category='accurate' currentValue={this.state.accurate}
              ratingClick={clickValue => this.setState({accurate: clickValue})}
            />
          </div>
  
          <div className={dashboard.ratingField}>
            <span>This article is <b>relevant</b>.</span> 
            <RateScale 
              category='relevant' currentValue={this.state.relevant}
              ratingClick={clickValue => this.setState({relevant: clickValue})}
            />
          </div>
   
          <div>
            <span className='button' onClick={e => {
              this.props.submitRating(this.state);
            }}>Submit Rating</span>
            <span className='button' onClick={e => {
              this.props.closeModal();
            }}>Cancel</span>
          </div>
  
        </section>
      </div>
    )
  }

}

export default RateModal;
