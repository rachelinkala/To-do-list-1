import React from 'react';

class Form extends React.Component {
  defaultValues = { title: '', description: '' }
  state = {...this.defaultValues}

  handleSubmit = (e) => {
    e.preventDefault();
    const note = { ...this.state }
    this.props.submit(note)
    this.setState({ ...this.defaultValues })
  }

  handleChange = (e) => {
    const { target: { name, value }} = e;
    this.setState({ [name]: value })
  }

  render() {
    const { title, description } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="title"
          placeholder="Title"
          value={title}
          onChange={this.handleChange}
          required
        />
        <input
          name="description"
          placeholder="Description"
          value={description}
          onChange={this.handleChange}
        />
        <button>Submit</button>
      </form>
    )
  }
}

export default Form;
