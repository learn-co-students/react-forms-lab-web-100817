import React from 'react';


class PoemWriter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      errorId: "poem-validation-error",
      error: false
    };
  }

  handleChange = event => {
    let errorDivId = this.valid(event) ? "" : "poem-validation-error";
    this.setState({
      value: event.target.value,
      error: this.valid(event),
      errorId: errorDivId
    })
  }

  valid = (event)=>{
    let poem = event.target.value.split('\n')
    if (poem.length === 3){
      let line1 = poem[0].split(" ")
      let line2 = poem[1].split(" ")
      let line3 = poem[2].split(" ")
      if ((line1 && line2 && line3) !== null) {
        console.log(line1.filter(String).length,line2.filter(String).length,line3.filter(String).length)
          return ((line1.filter(String).length === 5) &&
            (line2.filter(String).length === 3) &&
            (line3.filter(String).length === 5)
          )
        }
      }
      return false;
  }



  render() {
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          onChange={this.handleChange}
        />
        <div
          id={this.state.errorId}
          style={{color: 'red'}}
          hidden={this.state.error}
        >
          "This poem is not written in the right structure!"
        </div>
      </div>
    );
  }
}

export default PoemWriter;
