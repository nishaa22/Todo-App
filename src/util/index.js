export const getListType = (todoList, listType) => {
    const {completedList,incompletedList,taskList}=todoList
    let list = []
    if (listType === 'Completed') {
        list = completedList
        return list
    } else if (listType === 'Incompleted') {
        list = incompletedList
        return list
    } else return taskList
}
