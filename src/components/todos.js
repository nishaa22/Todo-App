import React, { useEffect } from "react";
import Button from "./button";
import Form from "./form";
import List from "./list";
import { getListType } from "../util";
import { BUTTON_NAME } from "../constant/index";
import useEdit from "../hooks/useEdit";
import useTask from "../hooks/useTask";
import useListType from "../hooks/useListType";
import useTodoList from "../hooks/useTodoList";
import useLocalStorage from "../hooks/useLocalStorage";

const Todos = () => {
  const { task, change, reset } = useTask("");
  const { clear, listType, setListType } = useListType("");
  const { todoList, setTodoList } = useTodoList([])
  const {setValue}= useLocalStorage("todoList",todoList.taskList)
  const { isEdit, setIsEdit, handleEdit } = useEdit("");

  // useEffect(() => {
  //   if (localStorage.getItem("todoList")) {
  //     setTodoList(JSON.parse(localStorage.getItem("todoList")));
  //   }
  // }, []);
  // if (localStorage.getItem("todoList")) {
  //       setTodoList(JSON.parse(localStorage.getItem("todoList")));
  //     }
  const handleSubmit = (e) => {
    e.preventDefault()
    setTodoList((prev) => {
        return {
            ...prev,
            taskList: [
                ...prev.taskList,
                { id: Math.random(), name: task, isCompleted: false }
            ],
            
        }
    })
    reset();
    clear();
}

useEffect(() => {
  setValue(todoList.taskList)
 },[todoList.taskList])

  const handleDelete = (id) => {
    const afterDeleteList = todoList.taskList
      .filter((val) => val.id !== id)
      .map((val) => {
        return val;
      });
    setTodoList((prev) => {
      return {
        ...prev,
        taskList: afterDeleteList,
      };
    });
    clear();
  };

  const handleEditList = (e) => {
    const updatedList = todoList.taskList.map((val) => {
      if (val.id === isEdit) {
        return {
          ...val,
          name: e.target.value,
        };
      } else return val;
    });

    setTodoList((prev) => {
      return {
        ...prev,
        taskList: updatedList,
      };
    });
  };
  const handleCheck = (id) => {
    const updatedList = todoList.taskList.map((val) => {
      if (val.id === id) {
        return {
          ...val,
          isCompleted: !val.isCompleted,
        };
      } else return val;
    });
    setTodoList((prev) => {
      return {
        ...prev,
        taskList: updatedList,
      };
    });
    clear();
  };
  const handleShowList = ({ type }) => {
    if (type === "Completed" || "Incompleted") {
      const completedList = todoList.taskList
        .filter((val) =>
          type === "Completed" ? val.isCompleted : !val.isCompleted
        )
        .map((val) => {
          return val;
        });
      let update = type === "Completed" ? "completedList" : "incompletedList";
      setTodoList((prev) => {
        return {
          ...prev,
          [update]: completedList,
        };
      });
      setListType(type);
      return;
    } else {
      setTodoList((prev) => {
        return {
          ...prev,
        };
      });
      clear();
    }
  };
  return (
    <>
      <div className="container my-5">
        <h1>Todo App</h1>
        <hr className="mb-5" />
        <Form
          handleSubmit={handleSubmit}
          task={task}
          setTask={change}
        />
        <List
          setIsEdit={setIsEdit}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          editId={isEdit}
          handleCheck={handleCheck}
          todolist={todoList}
          listType={listType}
          getListType={getListType}
          handleEditList={handleEditList}
        />

        <div className="filterTask my-3">
          {BUTTON_NAME.map((value, index) => {
            return (
              <Button
                key={index}
                name={value.name}
                handleShowList={handleShowList}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Todos;
