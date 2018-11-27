import React from 'react';
import axios from 'axios';

class Note extends React.Component {
  state = { note: [] }

  componentDidMount() {
    axios.get(`/api/notes/${this.props.match.params.id}`)
    .then( res => this.setState({ note: res.data }) )
  }

  render() {
    const { note: { title, description }} = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <h2>{description}</h2>
      </div>
    )
  }
}

export default Note;
