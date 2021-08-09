import React, { useState } from "react"
import Task from "./Task"

type TaskList = {
    todo: string,
    done: number,
    item: number
}

const Todo = () => {
    const [task, setTask] = useState<TaskList[]>([])
    const [current, setCurrent] = useState<string>('')
    const [doneTask, setDoneTask] = useState<TaskList[]>([])

    const addTask = (tsk: string) => {
        if(tsk === '') {
            alert('The Task Box CANNOT Be Empty!')
        } else {
            const newItem = new Date()
            const newTask = [{todo: tsk, done: 0, item: newItem.getTime()}, ...task]
            setTask(newTask)
        }
    }

    const createNewTask = (t: TaskList[]) => {
        if(t === []) {
            return ''
        } else {
            return t.map(x => <Task todo = {x.todo} done = {x.done} item = {x.item} doneFn = {done} delFn = {del}></Task>)
        }
    }

    const onKeyDownCallback = (ev: React.KeyboardEvent<HTMLInputElement>) => {
        if(ev.code === "Enter") {
            ev.preventDefault()
            addTask(current)
        }
    }

    const change = (ev: React.ChangeEvent<HTMLInputElement>) => {
        setCurrent(ev.target.value)
    }

    const addBtn = (ev: React.MouseEvent<HTMLButtonElement>) => {
        if(ev) {
            console.log(current)
            ev.preventDefault()
            addTask(current)
        }
    }

    const del = (item: number) => {
        const newTask = task.filter(x => x.item !== item)
        setTask(newTask)
    }

    const done = (item: number) => {
        const newItem = new Date()
        for(let i = 0; i < task.length; i++) {
            if(task[i].item === item) {
                const fin = task[i].todo
                const newDoneTask = [{todo: fin, done: 1, item: newItem.getTime()}, ...doneTask]
                setDoneTask(newDoneTask)
                const newTask = task.filter(x => x.item !== item)
                setTask(newTask)
            }
        }
    }

    return (
        <div id = 'todoList' className='mx-auto max-w-4xl'>
            <div id = 'todo' className='flex space-x-1'>
                <input id = 'input' className='border border-gray-400 w-full text-2xl' onKeyDown = {onKeyDownCallback} onChange = {change}></input>
                <button className='border border-gray-400 w-8 font-bold' onClick = {addBtn}>+</button>
            </div>
            {createNewTask(task)}
            {doneTask.map(x => <Task todo = {x.todo} done = {x.done} item = {x.item} doneFn = {() => null} delFn = {() => null}></Task>)}
        </div>
    )
}

export default Todo