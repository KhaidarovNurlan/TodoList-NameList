import React, { Component } from 'react';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      title: '',
      description: ''
    };
  }

  TitleChange = (event) => {
    this.setState({ title: event.target.value });
  };
  DescriptionChange = (event) => {
    this.setState({ description: event.target.value });
  };

  addTask = () => {
    const { title, description } = this.state;
    if (title && description) {
      const newTask = { title, description };
      this.setState((prevState) => ({
        tasks: [...prevState.tasks, newTask],
        title: '',
        description: ''
      }));
    }
  };
  deleteTask = (index) => {
    this.setState((prevState) => {
      const tasks = prevState.tasks.filter((_, i) => i !== index);
      return { tasks };
    });
  };

  render() {
    return (
      <div className="todo-list">
        <h1>TodoList</h1>
        <div className="task-create">
          <input type="text" placeholder="Название задачи" value={this.state.title} onChange={this.TitleChange}/>
          <textarea placeholder="Описание задачи" value={this.state.description} onChange={this.DescriptionChange}/>
          <button onClick={this.addTask}>Добавить задачу</button>
        </div>
        <ul className="task-list">
          {this.state.tasks.map((task, index) => (
            <li key={index} className="task-item">
              <div className="task-content">
                <h2>{task.title}</h2>
                <p>{task.description}</p>
              </div>
              <button className="delete-button" onClick={() => this.deleteTask(index)}>✔</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;