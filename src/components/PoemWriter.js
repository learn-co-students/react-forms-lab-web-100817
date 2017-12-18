import React from 'react';

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      poem: ''
    };
  }

  handleChange = (event) =>{
    this.setState({poem:event.target.value})
  }

  validatePoem = event =>{
    let poem = event.target.value
    poem = poem.trim
  }

  render() {
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          value={this.state.poem}
          onChange={this.handleChange}
          name="poem"
        />
        <div
          id="poem-validation-error"
          style={{color: 'red'}}
        >
          This poem is not written in the right structure!
        </div>
      </div>
    );
  }
}

export default PoemWriter;
