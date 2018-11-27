import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import { isAuthenticated } from '../fakeAuth';
import axios from 'axios';

class Dashboard extends React.Component {
  state = { notes: [] }

  componentDidMount() {
    axios.get('/api/notes')
      .then( res => this.setState({ notes: res.data }) )
  }

  render() {
    const { notes } = this.state;
    if (isAuthenticated()) {
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
    } else {
      return <Redirect to="/login" />
    }
  }
}

export default Dashboard;
