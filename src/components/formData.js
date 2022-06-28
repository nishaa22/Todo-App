import React from "react";
import Badge from "./badge";
import Icons from "./icons";
import PropTypes from "prop-types";
import Input from "./input";
import Checkbox from "./checkbox";

const FormData = (props) => {
  const {
    editId,
    handleCheck,
    handleDelete,
    handleEdit,
    handleEditList,
    setIsEdit,
    val: { isCompleted = false, id = "", name = "" } = {},
  } = props;

  return (
    <>
      <div className="container todo d-flex justify-content-between my-3">
        <div className="form-check py-2">
          <Checkbox
            handleCheck={handleCheck}
            isCompleted={isCompleted}
            id={id}
          />
          <label class="form-check-label">
            {id === editId ? (
              <>
                <Input
                  handleInputChange={handleEditList}
                  handleBlurChange={setIsEdit}
                  value={name}
                />
              </>
            ) : (
              <>{name}</>
            )}
          </label>
        </div>
        <div className="icons py-2 d-flex">
          <Badge isCompleted={isCompleted} />
          <Icons type="edit" handleEdit={handleEdit} id={id} />
          <Icons type="delete" handleEdit={handleDelete} id={id} />
        </div>
      </div>
    </>
  );
};
FormData.propTypes = {
  editId: PropTypes.number,
  handleCheck: PropTypes.func,
  handleDelete: PropTypes.func,
  handleEdit: PropTypes.func,
  handleEditList: PropTypes.func,
  setIsEdit: PropTypes.func,
  val: PropTypes.array,
};
FormData.defaultProp = {
  editId: 0,
  handleCheck: () => {},
  handleDelete: () => {},
  handleEdit: () => {},
  handleEditList: () => {},
  setIsEdit: () => {},
  val: [],
};
export default FormData;
