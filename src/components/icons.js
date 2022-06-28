import { PropTypes } from 'prop-types'
import React from 'react'

const Icons = (props) => {
    const { handleEdit, type, id } = props
    return (
        <>
            <i
                className={`fas mx-2  ${
                    type === 'edit' ? 'fa-edit' : 'fa-trash-alt'
                } `}
                onClick={() => {
                    handleEdit(id)
                }}
            ></i>
        </>
    )
}
Icons.protoTypes = {
    handleEdit: PropTypes.func,
    type: PropTypes.string,
    id: PropTypes.number,
}
Icons.defaultProp = {
    handleEdit: () => {},
    type: '',
    id: 0,
}
export default Icons
