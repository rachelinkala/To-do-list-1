import React from 'react';
import axios from 'axios';
import Form from './Form';

class Note extends React.Component {
  state = { note: [], edit: false }

  componentDidMount() {
    axios.get(`/api/notes/${this.props.match.params.id}`)
    .then( res => this.setState({ note: res.data }) )
  }

  toggleEdit = () => {
    this.setState( state => {
      return { edit: !this.state.edit }
    });
  }

  submit = (note) => {
    axios.put(`/api/notes/${this.props.match.params.id}`, { note })
      .then( res => this.setState({ note: res.data, edit: false }) );
  }

  show() {
    const { note: { title, description }} = this.state;

    return (
      <div>
        <h1>{title}</h1>
        <h3>{description}</h3>
      </div>
    )
  }

  edit() {
    return <Form {...this.state.note} submit={this.submit} />
  }

  render() {
    const { edit } = this.state;
    return (
      <div>
        { edit ? this.edit() : this.show() }
        <button onClick={this.toggleEdit}>{ edit ? 'Cancel' : 'Edit' }</button>
      </div>
    )
  }
}

export default Note;
