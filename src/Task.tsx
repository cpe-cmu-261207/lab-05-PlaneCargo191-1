import { useState } from "react"

type TaskList = {
    todo: string,
    done: number,
    item: number,
    doneFn: Function,
    delFn: Function
}

const Task = ({todo, done, item, doneFn, delFn}: TaskList) => {
    const [visible, setVisible] = useState<boolean>(false) 
    let doneBtn: string
    let delBtn: string
    let task = <span></span>

    if(done === 0) {
        task = <span className = 'text-2xl'>{todo}</span>
        doneBtn = 'bg-green-400 w-24 text-2xl'
        delBtn = 'bg-red-400 w-24 text-2xl'
    } else {
        task = <span className = 'text-2xl line-through'>{todo}</span>
        doneBtn = 'invisible'
        delBtn = 'text-white invisble'
    }

    return (
        <div className="flex justify-between h-8 items-center py-6 border-b" onMouseEnter = {() => setVisible(true)} onMouseLeave = {() => setVisible(false)}>
            {task}
            <div className="flex space-x-1 items-center">
                {visible ? <button id = 'doneBtn' className = {doneBtn} onClick = {() => doneFn(item)}>Done</button>: null}
                {visible ? <button id = 'delBtn' className = {delBtn} onClick = {() => delFn(item)}>Delete</button>: null}
            </div>
        </div>
    )
}

export default Task