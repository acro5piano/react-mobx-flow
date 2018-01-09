import * as React from 'react'
import * as ReactDOM from 'react-dom'
import TodoStore from './stores/TodoStore'
import Todo from './components/todo'
import { useStrict } from 'mobx'
import './css'
useStrict(true)

ReactDOM.render(
  <Todo todoStore={new TodoStore()} />,
  document.getElementById('app')
)
