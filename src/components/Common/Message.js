import React, {Component} from 'react';

class Message extends Component {
  render(){
    return (
      <div>
        {this.props.message.message}
        {this.props.message.chatId}
      </div>
    )
  }
}
export default Message;