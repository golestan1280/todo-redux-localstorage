import React, { useState } from 'react'
import './Todo.css'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

function Todo({toggleTodo, completed, task, id}) {
    return (
        <TransitionGroup className={completed ? 'Todo completed':'Todo'}>
            <CSSTransition key="normal" timeout={500} classNames='task-text' >
                <li className='Todo-task' onClick={toggleTodo} >
                    {task}
                </li>
            </CSSTransition>
        </TransitionGroup>
    )
}

export default Todo
