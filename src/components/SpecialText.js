import React from 'react';
import store from "../store";

class SpecialText extends React.Component {
  state = { text: "" }

  componentDidMount() {
    let specialText = store.getState().specialText
    this.setState({ text: specialText })
    store.subscribe(() => {
      let specialText = store.getState().specialText
      this.setState({ text: specialText })
    })
  }

  render() {
    const {
      props,
    } = this;

    return (
      <div>
        Special Text: {this.state.text}
      </div>
    );
  }
}

export default SpecialText;