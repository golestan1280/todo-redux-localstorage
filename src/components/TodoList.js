// rafce
import React from 'react'
import TodoInput from './TodoInput'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { useSelector, useDispatch } from 'react-redux'
import { completeTodo } from '../redux/action'
import './TodoList.css'

const TodoList = () => {
    const s = useSelector((state) => ({...state.todos}))


    return (
        <div className='TodoList'>
            <h1>Todo App with React Redux</h1>
            <TodoInput />
            <ul>
                <TransitionGroup className='todo-list'>
                    {s.todos && s.todos.map((todo) => {
                        return (
                            <CSSTransition timeout={500} key={todo.id} classNames='todo' >
                                <h2>
                                    {todo.task}
                                </h2>
                            </CSSTransition>
                        )
                    })}
                </TransitionGroup>
            </ul>
        </div>
    )
}

export default TodoList
