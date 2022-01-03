// rafce
import React from 'react'
import TodoInput from './TodoInput'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { useSelector, useDispatch } from 'react-redux'
import { completeTodo, addTodo, removeTodo } from '../redux/action'
import './TodoList.css'
import Todo from './Todo'


const TodoList = () => {
    const stateTodo = useSelector((state) => ({...state.todos}))

    let dispatch = useDispatch()

    const create = (newTodo) => {
        dispatch(addTodo(newTodo))
    }

    return (
        <div className='TodoList'>
            <h1>Todo App with React Redux</h1>
            <TodoInput createTodo={create} />
            <ul>
                <TransitionGroup className='todo-list'>
                    {stateTodo.todos && stateTodo.todos.map((todo) => {
                        return (
                            <CSSTransition timeout={500} key={todo.id} classNames='todo' >
                                <Todo 
                                    key={todo.id}
                                    id={todo.id}
                                    task={todo.task}
                                    completed={todo.completed}
                                    toggleTodo={() => dispatch(completeTodo(todo))}
                                    removeTodo= {() => dispatch(removeTodo(todo))}
                                />
                            </CSSTransition>
                        )
                    })}
                </TransitionGroup>
            </ul>
        </div>
    )
}

export default TodoList
