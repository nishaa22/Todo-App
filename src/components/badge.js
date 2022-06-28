import React from 'react'
import PropTypes from 'prop-types'

const Badge = (props) => {
    const { isCompleted = false } = props
    return (
        <>
            <span className="mx-5">{isCompleted ? '' : ''}</span>
            {isCompleted && (
                <div id="badge" className="float-end">
                    <span className="badge bg-secondary">Completed</span>
                </div>
            )}
        </>
    )
}
Badge.propTypes = {
    isCompleted: PropTypes.bool,
}
Badge.defaultProp = {
    isCompleted: false,
}
export default Badge
