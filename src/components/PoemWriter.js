import React from 'react';

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      textareaValue: ""
    };
  }

  handleInputChange = (event) => {
    this.setState({
      textareaValue: event.target.value
    })
  }

  validatePoem = () => {
    //get value, split into lines and words
    let value = this.state.textareaValue
    let lines = value.split('\n')
    lines = lines.map(line => {
      let split = line.split(/\s+/)
      return split.filter(elem => elem.length > 0)
    })

    if(lines.length === 3 && lines[0].length === 5 && lines[1].length === 3 && lines[2].length === 5) {
      // document.getElementById('poem-validation-error').style.visibility = 'hidden'
      return null
    } else {
      // document.getElementById('poem-validation-error').style.visibility = 'visible'
      return <div
        id="poem-validation-error"
        style={{color: 'red'}}
      >
        This poem is not written in the right structure!
      </div>
    }
  }

  render() {

    let errorDiv = this.validatePoem()

    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          value={this.state.value}
          onChange={this.handleInputChange}
        />
        {errorDiv}
      </div>
    );
  }
}

export default PoemWriter;
