import React from 'react';
import { bindAll } from 'lodash';

class SubSearch extends React.Component {
  constructor(props){
    super(props);
    this.state = {query: ""};
    bindAll(this, "_handleChange");
  }

  _handleChange(e){
    const query = e.currentTarget.value;
    this.setState({query});
    this.props.requestSubs(query);
  }

  render(){
    return (
      <div>
        <input onChange={this._handleChange}
          value={this.state.query}
          placeholder="Find A Subreddit!"/>
      </div>
    );
  }
}

export default SubSearch;
