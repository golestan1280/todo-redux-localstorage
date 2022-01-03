import React, { useState } from 'react'
import './Todo.css'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { FaTrashAlt, FaEdit } from "react-icons/fa";


function Todo({toggleTodo, completed, task, id, removeTodo}) {
    return (
        <TransitionGroup className={completed ? 'Todo completed':'Todo'}>
            <CSSTransition key="normal" timeout={500} classNames='task-text' >
                <li className='Todo-task' onClick={toggleTodo} >
                    {task}
                </li>
            </CSSTransition>
            <div className="Todo-buttons">
                <button onClick={removeTodo}>
                    <FaTrashAlt />
                </button>
                <button onClick={removeTodo}>
                    <FaEdit />
                </button>
            </div>
        </TransitionGroup>
    )
}

export default Todo
