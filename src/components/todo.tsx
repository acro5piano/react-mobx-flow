import * as React from 'react'
import { observer } from 'mobx-react'
import { observable, action } from 'mobx'

export interface TodoStore {
  addTodo: (title: string) => void;
  deleteTodo: (i: number) => void;
  todoCount: number;
  todos: string[];
}

export interface TodoProps {
  todoStore: TodoStore;
}

@observer
export default class Todo extends React.Component<TodoProps> {
  @observable newTodo = ''

  handleKeyPress(e: any): void {
    if (e.key === 'Enter') {
      this.addTodo()
    }
  }

  @action addTodo() {
    this.props.todoStore.addTodo(this.newTodo)
    this.newTodo = ''
  }

  deleteTodo(index: number) {
    this.props.todoStore.deleteTodo(index)
  }

  render() {
    const submitClassName = this.newTodo === '' ? 'button-default' : 'button-primary'
    const { todoStore } = this.props

    return (
      <div className="input">
        <h1>TODO</h1>
        <p>{todoStore.todoCount} tasks remaining</p>
        {todoStore.todos.map((todo, i) =>
          <div className="todo-list" key={i}>
            {todo}
            <span
              className="todo-list-delete"
              onClick={action(() => todoStore.deleteTodo(i))}>
              delete
            </span>
          </div>
        )}
        <div className="todo-add">
          <input
            type="text"
            autoFocus
            className="todo-add-input"
            value={this.newTodo}
            onChange={action((event: any) => { this.newTodo = event.target.value })}
            onKeyPress={event => this.handleKeyPress(event)}
          >
          </input>
          <button
            className={'todo-add-submit ' + submitClassName}
            onClick={event => this.addTodo()}>Add</button>
        </div>
      </div>
    )
  }
}
