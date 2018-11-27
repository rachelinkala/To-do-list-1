import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Dashboard extends React.Component {
  state = { notes: [] }

  componentDidMount() {
    axios.get('/api/notes')
      .then( res => this.setState({ notes: res.data }) )
  }

  render() {
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
}

export default Dashboard;
