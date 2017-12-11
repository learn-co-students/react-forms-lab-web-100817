import React from "react";

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      textAreaValue: "",
      validation: false
    };
  }

  textAreaChangeHandler = event => {
    this.setState(prevState => {
      return {
        ...prevState,
        textAreaValue: event.target.value
      };
    });
  };

  render() {

    const errorMessageDisplay = () => {
      const copy = this.state.textAreaValue;
      // lineSplit should be an array of three lines
      const lineSplit = copy.split("\n")
      // wordSplit should be an array of arrays
      const wordSplit = lineSplit.reduce((arr, currentLine) => { 
        const w = currentLine.trim().split(" ");
        arr.push(w);
        return arr
      }, [])
      if (
        wordSplit.length === 3 &&
        wordSplit[0].length === 5 &&
        wordSplit[1].length === 3 &&
        wordSplit[2].length === 5
      ) {
        return null
      } else {
        return (
          <div id="poem-validation-error" style={{ color: "red" }}>
            This poem is not written in the right structure!
          </div>
        );
      }
    }

    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          value={this.state.textAreaValue}
          onChange={this.textAreaChangeHandler}
        />
        {errorMessageDisplay()}
      </div>
    );
  }
}

export default PoemWriter;
