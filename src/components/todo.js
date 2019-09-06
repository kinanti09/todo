import React from 'react';
import './style.css';


class Todo extends React.Component {
  constructor(){
    super();

    this.state = {
      newTodo: 'handle',
    };
    
    this.state = {
      todos: [{
        id: 1,
        name: "Play golf" 
      },{
        id: 2,
        name: "Buy some clothes"
      },{
        id: 3,
        name: "Write some code"
      },{
        id: 4,
        name: "Watch bahdcasts"
      }]
    };


    this.addTodo = this.addTodo.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      newTodo: event.target.value
    });
  }


  addTodo() {
    const newTodo = {
      name: this.state.newTodo,
      id: this.state.todos[this.state.todos.length - 1].id + 1
    };
    const Todos = this.state.todos;
    Todos.push(newTodo);


    this.setState({
      todos: Todos
    })
  }

 
  render(){
    
    return (
      <div className="App">
        <header className="App-header">
          <div className="container">
            <h2 className="text-center">Todos App</h2>
            <input 
              type="text" 
              name="todo" 
              className="form-control"
              placeholder="Add a new todo" 
              onChange={this.handlechange}
              value={this.state.newTodo}
            />
            <button onClick={this.addTodo} className="btn-info form-control">
              Add Todo
            </button>
            <ul className="list-group">
             {this.state.todos.map((item, index) => {
               return <li key={item.id} className="list-groub-item">{item.name}</li>
             })}
             
            </ul>
          </div>
        </header>    
      </div>
    );
  } 
}

export default Todo;
