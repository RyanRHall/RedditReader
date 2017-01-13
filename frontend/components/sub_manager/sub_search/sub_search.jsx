import React from 'react';
import { bindAll } from 'lodash';
import FontAwesome from 'react-fontawesome';
require('../../_css/sub_search');


class SubSearch extends React.Component {
  constructor(props){
    super(props);
    this.state = {query: ""};
    bindAll(this, "_handleChange", "_addSub", "_handleClear");
  }

  _handleChange(e){
    const query = e.currentTarget.value;
    this.setState({query});
    this.props.requestSubs(query);
  }

  _handleClear(){
    this.setState({query: ""});
    this.props.clearSearch();
  }

  _renderSubList(){
    return this.props.subSearchResults.map(
      subName => <div key={subName} data-sub-name={subName}>{subName}</div>
    );
  }

  _renderResults(){
    if(this.props.subSearchResults.length === 0){ return; }
    return (
      <div id="search-results">
        <FontAwesome name='times-circle' onClick={this._handleClear}/>
        <div onClick={this._addSub}>
          {this._renderSubList()}
        </div>
      </div>
    );
  }

  _addSub(e){
    this.props.addSub(e.target.dataset.subName);
  }

  render(){
    return (
      <div id="sub-search">
        <input onChange={this._handleChange}
          value={this.state.query}
          placeholder="Find A Subreddit!"/>
        {this._renderResults()}
      </div>
    );
  }
}

export default SubSearch;
