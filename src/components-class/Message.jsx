import { MessageFunc } from '../components-func/Message'
import { Component } from 'react'

export class MessageClass extends Component {
  state = {
    messageList: [
        'Class_props_1 ',
        'Class_props_2 ',
        'Class_props_3 '
    ]
  }

  render() {
    return (
      <div style = {{
            backgroundColor: 'LightBlue',
            fontSize: '20px'
            }}>
        <div style = {{fontWeight: 'bold'}}>App props message:</div>
        <div>{this.props.messageList}</div>
        <MessageFunc messageList = {this.state.messageList} />
        <hr/>
      </div>
    );
  }
}
