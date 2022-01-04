// rafce
import React from 'react'
import TodoInput from './TodoInput'
import { useSelector, useDispatch } from 'react-redux'
import { completeTodo, addTodo, removeTodo, updateTodo } from '../redux/action'
import './TodoList.css'
import Todo from './Todo'


const TodoList = () => {
    const stateTodo = useSelector((state) => ({...state.todos}))

    let dispatch = useDispatch()

    const create = (newTodo) => {
        dispatch(addTodo(newTodo))
    }

    const update = (id, updatedTask) => {
        dispatch(updateTodo({id, updatedTask}))
    }

    return (
        <div className='TodoList'>
            <h1>
                Todo (with React Redux Localstorage)
            </h1>
            <TodoInput createTodo={create} />
            <ul>
                <div className='todo-list'>
                    {stateTodo.todos && stateTodo.todos.map((todo) => {
                        return (
                            <div key={todo.id} className='todo'>
                                <Todo 
                                    key={todo.id}
                                    id={todo.id}
                                    task={todo.task}
                                    completed={todo.completed}
                                    toggleTodo={() => dispatch(completeTodo(todo))}
                                    removeTodo= {() => dispatch(removeTodo(todo))}
                                    updateTodo= { update }
                                />
                            </div>
                        )
                    })}
                </div>
            </ul>
        </div>
    )
}

export default TodoList
