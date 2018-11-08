import React from "react";
import dashboard from '../../assets/css/Dashboard.module.css';
import SearchResults from './SearchResults';
import {searchStatus} from '../../actions/searchArticles';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      searchInput: '',
      sourceInput: ''
    }
  }

  getOptions() {
    let options = [];
    for(let [id, name] of this.props.sources) {
      options.push(<option value={id} key={id}>{name}</option>)
    }
    return options;
  }

  componentDidMount() {
    this.props.getSources();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.clickSearch(this.state);
    this.setState({searchInput: ''});
  }
  
  render() {
    return (
      <section className={dashboard.section}>
        <h2>Search for Articles</h2>
  
        <form onSubmit={e => this.handleSubmit(e)}>
          <div>
            <input type="text" placeholder="Keywords"
              value={this.state.searchInput}
              onChange={e => {
                this.setState({searchInput: e.target.value})
              }}
            />
          </div>
          
          <div>
            <select onChange={e => {
              this.setState({sourceInput: e.target.options[e.target.options.selectedIndex].value});
            }}>
              {[<option value='' key={0}>News Source (optional)</option>, ...this.getOptions()]}
            </select>
          </div>
          
          <div className='button' onClick={e => this.handleSubmit(e)}>Search</div>
        </form>

        {this.props.searchStatus === searchStatus.IN_PROGRESS && (
          <div>Searching...</div>
        )}

        {Boolean(this.props.searchResults.length) && (
          <SearchResults results={this.props.searchResults} />
        )}
      </section>       
    )
  }
}

export default Search;
