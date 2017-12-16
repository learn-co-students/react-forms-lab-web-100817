import React from 'react';

const countWords = line => line.split(' ').filter(l => l).length;

const validateText = poem => {
  if (poem) {
    const poemLines = poem.split('\n').filter(l => l);
    const isRightAmountOfLines = poemLines.length === 3;
    const hasRightAmountOfWords = countWords(poemLines[0]) === 5 && countWords(poemLines[1]) === 3 && countWords(poemLines[2]) === 5;
    return isRightAmountOfLines && hasRightAmountOfWords;
  }
  return false;
}

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value: "",
      isValid: true,
    };
  }


  handleTextArea=(event)=>{
    this.setState({
      value: event.target.value,
      isValid: validateText(event.target.value),
    });
  }


  render() {
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          value = {this.state.value}
          onChange = {this.handleTextArea}
        />
        {!this.state.isValid &&
          <div
            id="poem-validation-error"
            style={{color: 'red'}}
          >
            This poem is not written in the right structure!
          </div>
        }
      </div>
    );
  }
}

export default PoemWriter;
