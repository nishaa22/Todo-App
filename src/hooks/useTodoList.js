import { useState } from "react"

const useTodoList = () => {
    const [todoList, setTodoList] = useState({
        taskList: [],
        completedList: [],
        incompletedList: [],
      });     
  return { setTodoList,todoList }
}

export default useTodoList