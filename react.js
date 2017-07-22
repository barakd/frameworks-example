import React, {Component, PropTypes} from 'react'

export default class InputButtonComponent extends Component {
  static propTypes = {
      value: PropTypes.string.isRequired,
      buttonText: PropTypes.string.isRequired,
      buttonAction: PropTypes.func.isRequired
  }
  constructor(props) {
      super(props);
      this.state = {
       innerValue: props.value
    };  
  }

  componentWillReceiveProps(nextProps) {
      if (nextProps.value) {
          this.setState({ innerValue: nextProps.value });
      }
  }

  render() {
      const { buttonAction, buttonText, value } = this.props;  
    return (
        <div>
            <input type="text" defaultValue={this.state.innerValue} ref={elm => this.input = elm} />
        <button onClick={() => buttonAction(this.input.value)}>{buttonText}</button>
       </div>
    );
  }
}

/*
   Usage
  <InputComponent value="a" buttonText="Send" buttonAction={ (value) => alert(value)}  />
  */