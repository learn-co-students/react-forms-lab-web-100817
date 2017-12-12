import React from 'react';

const poemValidate = poem => {
  let lines = poem.split('\n')
  let words = line => line.split(' ').filter(word => word)

  if ((lines.length === 3) && (words(lines[0]).length===5) && (words(lines[1]).length===3) && (words(lines[2]).length===5)) {
    return true
  } else {
    return false
  }
}

class PoemWriter extends React.Component {
  constructor() {
    super();
    this.state = {
      isValid: true,
      content: ''
    };
  }

  onChangeHandle = event => {
    this.setState({
      content: event.target.value,
      isValid: poemValidate(event.target.value)
    })
  }
  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.content} onChange={this.onChangeHandle}/>
        {!this.state.isValid ?
        <div id="poem-validation-error" style={{color: 'red'}}>
          This poem is not written in the right structure!
        </div> : null}
      </div>
    );
  }
}

export default PoemWriter;
