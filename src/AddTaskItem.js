import React from 'react';

class AddTaskItem extends React.Component {

  constructor(props) {
    super(props);

    this.addEntry = this.addEntry.bind(this);
  }

  addEntry(props) {
    return (
      <li key={props.id}>
        <p className='text'>{props.string}</p>
        <p className='date'>{props.DATE}</p>
        <p className='del' onClick={() => this.props.remove(props.id)}>DEL</p>
      </li>
    );
  }

  render() {
    var todoEntry = this.props.entry;
    var listItem = todoEntry.map(this.addEntry);

    return (
      <ul className='list'>
        {listItem}
      </ul>
    );
  }
}

export default AddTaskItem;