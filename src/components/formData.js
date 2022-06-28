import React from 'react'
import Badge from './badge'
import Icons from './icons'
import PropTypes from 'prop-types'
import Input from './input'
import Checkbox from './checkbox'

const FormData = (props) => {
    const {
        editId,
        handleCheck,
        handleDelete,
        handleEdit,
        handleEditList,
        setIsEdit,
        val: { isCompleted = false, id = '', name = '' } = {},
    } = props

    return (
        <>
            <div className="form-check">
                <Checkbox
                    handleCheck={handleCheck}
                    isCompleted={isCompleted}
                    id={id}
                />

                <div className="d-flex justify-content-between">
                    <label
                        className="form-check-label d-flex"
                        htmlFor=""
                        style={{ width: '90%' }}
                    >
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
                        <Badge isCompleted={isCompleted} />
                    </label>

                    <div className="icons">
                        <Icons type="edit" handleEdit={handleEdit} id={id} />
                        <Icons
                            type="delete"
                            handleEdit={handleDelete}
                            id={id}
                        />
                    </div>
                </div>
                <hr />
            </div>
        </>
    )
}
FormData.propTypes = {
    editId: PropTypes.number,
    handleCheck: PropTypes.func,
    handleDelete: PropTypes.func,
    handleEdit: PropTypes.func,
    handleEditList: PropTypes.func,
    setIsEdit: PropTypes.func,
    val: PropTypes.array,
}
FormData.defaultProp = {
    editId: 0,
    handleCheck: () => {},
    handleDelete: () => {},
    handleEdit: () => {},
    handleEditList: () => {},
    setIsEdit: () => {},
    val: [],
}
export default FormData
