import React from 'react';

const validPoem = poem => {

  let lines = poem.split(/\r\n|\r|\n/).length;
  if (lines === 3) {
    let a = poem.split(/\r\n|\r|\n/)[0].split(' ').filter(n => n).length
    let b = poem.split(/\r\n|\r|\n/)[1].split(' ').filter(n => n).length
    let c = poem.split(/\r\n|\r|\n/)[2].split(' ').filter(n => n).length
    if (a === 5 && b === 3 && c === 5) {
      return true
    }
  } else {
    return false
  }
}
class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      content: '',
      isValid: true
    };
  }


  handleChange = event => {
    this.setState({
      content: event.target.value,
      isValid: validPoem(event.target.value)
    })
  }

  render() {
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          value={this.state.content}
          onChange={this.handleChange}

        />
        {!this.state.isValid && <div
          id="poem-validation-error"
          style={{color: 'red'}}
        >
          This poem is not written in the right structure!
        </div>}
      </div>
    );
  }
}

export default PoemWriter;
