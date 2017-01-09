import React from 'react';
import { bindAll } from 'lodash';

class SubSearch extends React.Component {
  constructor(props){
    super(props);
    this.state = {query: ""};
    bindAll(this, "_handleChange", "_addSub");
  }

  _handleChange(e){
    const query = e.currentTarget.value;
    this.setState({query});
    this.props.requestSubs(query);
  }

  _renderResults(){
    return this.props.subSearchResults.map(
      subName => <div key={subName} data-sub-name={subName}>{subName}</div>
    );
  }

  _addSub(e){
    this.props.addSub(e.target.dataset.subName);
  }

  render(){
    return (
      <div>
        <input onChange={this._handleChange}
          value={this.state.query}
          placeholder="Find A Subreddit!"/>
        <div onClick={this._addSub}>
          {this._renderResults()}
        </div>
      </div>
    );
  }
}

export default SubSearch;
