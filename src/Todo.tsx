import React, { createElement, useState } from "react"
import Task from "./Task"

const Todo = () => {
    const [task, setTask] = useState<string[]>([])

    const addTask = (ev: any) => {
        if(ev.value === '') {
            alert('The Task Box CANNOT Be Empty!')
        } else {
            const newTask = [...task, ev.value]
            setTask(newTask)
            console.log(task)
        }
    }

    const createNewTask = (t: string[]) => {
        if(t === []) {
            return ''
        } else {
            return t.map(x => <Task todo = {x} done = {0}></Task>)
        }
    }

    const onKeyDownCallback = (ev: React.KeyboardEvent<HTMLInputElement>) => {
        if(ev.code === "Enter") {
            ev.preventDefault()
            addTask(ev.target)
        }
    }

    const addBtn = (ev: React.MouseEvent<HTMLButtonElement>) => {
        if(ev) {
            ev.preventDefault()
            addTask(ev.target)
        }
    }

    return (
        <div id = 'todoList' className='mx-auto max-w-4xl'>
            <div id = 'todo' className='flex space-x-1'>
                <input id = 'input' className='border border-gray-400 w-full text-2xl' onKeyDown = {onKeyDownCallback}></input>
                <button className='border border-gray-400 w-8 font-bold' onClick = {addBtn}>+</button>
            </div>
            {createNewTask(task)}
        </div>
    )
}

export default Todo