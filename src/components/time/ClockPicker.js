import 'rc-time-picker/assets/index.css';

import React from 'react';
import moment from 'moment';
import TimePicker from 'rc-time-picker';

const format = 'h:mm a';

class ClockPicker extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      value: moment()
    };

    this.clear = this.clear.bind(this);
    this.handleValueChange = this.handleValueChange.bind(this);
  }

  handleValueChange(value) {
    // console.log(value && value.format('HH:mm:ss'));
    this.setState({value});
  }

  clear(){
    this.setState({
      value: undefined
    });
  }

  render() {
    return (
      <div>
        <TimePicker
          showSecond={false}
          defaultValue={this.state.value}
          onChange={this.handleValueChange}
          format={format}
        />
        <button onClick={this.clear}>clear</button>
      </div>
    );
  }
}

export default ClockPicker;
