import { observable, computed, action } from 'mobx'

export default class TodoStore {
  @observable todos = ['buy milk', 'learn react']

  @computed get todoCount(): number {
    return this.todos.length
  }

  @action addTodo(title: string) {
    if (title === '') {
      return
    }
    this.todos.push(title)
  }

  @action deleteTodo(i: number) {
    this.todos.splice(i, 1)
  }
}
