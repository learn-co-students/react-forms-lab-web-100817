import React from 'react';

const countWords = line => line.split(' ').filter(l => l).length;
const isValidFunc = (value) => {
  var lines = value.split(/\r*\n/);
  if (lines.length === 3) {
    var lineOne = countWords(lines[0]);
    var secondLine = countWords(lines[1]);
    var thirdLine = countWords(lines[2]);
    if ( lineOne === 5 && secondLine === 3 && thirdLine === 5) {
      return true
    } else {
      false
    }
  } else {
    false
  }
}

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value:'' ,
      isValid: true
    };
  }
  inputChange = (event) => {
    this.setState({
      value:event.target.value,
      isValid: isValidFunc(event.target.value)
    })
  }

  render() {
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          value={this.state.value}
          onChange={this.inputChange}
        />
        <div
          id="poem-validation-error"
          style={{color: 'red'}}
        >
          {!this.state.isValid ? "This poem is not written in the right structure!": "" }
        </div>
      </div>
    );
  }
}

export default PoemWriter;
