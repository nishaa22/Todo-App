import { useState } from "react"

const useTask = () => {
    const [task, setTask] = useState("");

    const change = (event) => {
        setTask(event.target.value)
    }
    const reset = () => {
        setTask('')
    }

    return { task, setTask, change, reset }
}

export default useTask