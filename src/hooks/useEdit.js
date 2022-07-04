import { useState } from "react"

const useEdit = () => {
  const [isEdit, setIsEdit] = useState("");
  const handleEdit = (id) => {
    setIsEdit(id);
  };
  return { isEdit, setIsEdit, handleEdit }
}

export default useEdit
