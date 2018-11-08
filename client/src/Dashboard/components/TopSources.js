import React from "react";
import Source from './Source';
import dashboard from '../../assets/css/Dashboard.module.css';

class TopSources extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {
            showNumber: props.showLess
        }
    }

    componentDidMount() {
        this.props.getTopSources();
    }

    handleClick(e) {
        if(this.state.showNumber === this.props.showLess) {
            this.setState({showNumber: this.props.showMore});
        } else {
            this.setState({showNumber: this.props.showLess})
        }
    }

    render() {
        let showNumber = this.state.showNumber;

        let sources = Boolean(this.props.sources.length) ?
        <div className={dashboard.scoreboard}>
            {this.props.sources
                .map((src, i) => {
                    return <Source src={src} num={i+1} key={i} />;
                })
                .slice(0, showNumber)}
        </div> :
        <div className='msg'>Loading...</div>;

        return (
            <section className={dashboard.section}>
                <h2>Top Sources</h2>
                {sources}
                <div className='button' onClick={e => this.handleClick()}>
                    {this.state.showNumber === this.props.showMore ? 'Show Less' : 'Show More'}
                </div>
            </section>       
        )
    }

}

export default TopSources;