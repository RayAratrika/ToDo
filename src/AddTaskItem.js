import React from 'react';

class AddTaskItem extends React.Component {

    constructor(props) {
      super(props);
  
      this.addEntry = this.addEntry.bind(this);
    }
  
    addEntry(entries) {
      return (
        <li key={entries.id}>
          <p className='text'>{entries.string}</p>
          <p className='date'>{entries.DATE}</p>
          <p className='del' onClick={() => this.props.remove(entries.id)}>DEL</p>
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