import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Form from './Form';

class Dashboard extends React.Component {
  state = { notes: [], showForm: false }

  componentDidMount() {
    axios.get('/api/notes')
      .then( res => this.setState({ notes: res.data }) )
  }

  show() {
    let { notes } = this.state;
    return (
      <ul>
        { notes.map( n =>
            <li key={n.id}>
              <Link to={`/notes/${n.id}`}>{n.title}</Link>
            </li>
          )
        }
      </ul>
    )
  }

  form() {
    return <Form submit={this.submit}/>
  }

  submit = (note) => {
    const { notes } = this.state
    axios.post('/api/notes', { note } )
      .then( res => this.setState({ notes: [res.data, ...notes ], showForm: false }) )
  }

  toggleForm = () => {
    this.setState( state => {
      return { showForm: !state.showForm }
    })
  }

  render() {
    const { showForm } = this.state;
    return (
      <div>
        <h2>Notes</h2>
        <button onClick={this.toggleForm}>{ showForm ? 'Hide' : 'Show' } form</button>
        { showForm ? this.form() : this.show() }
      </div>
    )
  }
}

export default Dashboard;
