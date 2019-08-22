import React from 'react';
import List from '../Common/SearchResult';
class StateHolder extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        var name = this.props.name;
      return (
        <div>
            {name}
        </div>
      );
    }
  }
export default StateHolder;
