import React from 'react';
import ReactDOM from 'react-dom';
import logo from './todoLogo.png';
import * as serviceWorker from './serviceWorker';

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

var id = 0;
class Task extends React.Component {

  constructor() {
    super();

    this.state = {
      entries: [],
    }

    this.addTask = this.addTask.bind(this);
    this.remove = this.remove.bind(this);
  }

  async componentDidMount() {
    var ent = localStorage.getItem('entries');
    ent = JSON.parse(ent) || [];
    this.setState({ entries: ent })
    // console.log(ent);
    return (<AddTaskItem entry={ent} remove={this.remove} />)
  }

  addTask(e) {

    var val = this._inputElement.value;
    var date = new Date().toLocaleDateString('es-CL');

    var newEntry = {
      string: val,
      id: ++id,
      DATE: date,
    }
    if (val !== "") {
      this.setState((prevSate) => {
        return {
          entries: prevSate.entries.concat(newEntry)
        };
      },
        () => {
          //console.log(this.state.entries);
          localStorage.setItem('entries', JSON.stringify(this.state.entries));
        }
      );

      this._inputElement.value = "";
      e.preventDefault();
    }
    else alert('Please enter a Task to do');
  }

  remove(id) {
    this.setState(
      { entries: this.state.entries.filter((entry) => id !== entry.id) }, () => {
        localStorage.setItem('entries', JSON.stringify(this.state.entries));
        // console.log(JSON.parse(localStorage.getItem('entries')));
      });
  }

  render() {
    return (
      <div>
        <div id='logo'>
          <img src={logo} alt='To-Do Logo' />
          <p id='head'>Make your To-Do List!</p>
        </div>
        <div className='addTask'>
          <form onSubmit={this.addTask}>
            <input type='text' placeholder='What is your task?'
              ref={(val) => { this._inputElement = val }} />
            <button type='submit' className='add'>
              ADD
            </button>
          </form>
        </div>
        <AddTaskItem entry={this.state.entries} remove={this.remove} />
      </div>
    );
  }
}

ReactDOM.render(
  <div>
    <Task />
  </div>,
  document.getElementById('root'),
)
serviceWorker.unregister();