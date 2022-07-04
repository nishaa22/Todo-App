import React from "react";
import FormData from "./formData";
import { PropTypes } from "prop-types";

const List = (props) => {
  const {
    getListType,
    todolist,
    listType,
    handleCheck,
    editId,
    setIsEdit,
    handleDelete,
    handleEdit,
    handleEditList,
  } = props;

  let getData  = localStorage.getItem("todoList");
   console.log(getListType(todolist, listType),'asdfasdf',JSON.parse(getData))
  return (
    <>
      {JSON.parse(getData)?.map((val, index) => {
          console.log(val,'dataaaa')
        return (
          <FormData
            handleCheck={handleCheck}
            key={index}
            val={val}
            editId={editId}
            setIsEdit={setIsEdit}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            handleEditList={handleEditList}
          />
        );
      })}
    </>
  );
};
List.propTypes = {
  getListType: PropTypes.array,
  todolist: PropTypes.array,
  listType: PropTypes.string,
  handleCheck: PropTypes.func,
  editId: PropTypes.number,
  setIsEdit: PropTypes.number,
  handleDelete: PropTypes.func,
  handleEdit: PropTypes.func,
  handleEditList: PropTypes.func,
};
List.propTypes = {
  getListType: [],
  todolist: [],
  listType: "",
  handleCheck: () => {},
  editId: 0,
  setIsEdit: 0,
  handleDelete: () => {},
  handleEdit: () => {},
  handleEditList: () => {},
};

export default List;
