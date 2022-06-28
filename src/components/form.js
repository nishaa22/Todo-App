import React from 'react'
import PropTypes from 'prop-types'
import Input from './input'

const Form = (props) => {
    const { handleSubmit, task, setTask } = props
    return (
        <>
            <form onSubmit={handleSubmit}>
                <h3>Todo</h3>
                <div className="input-group">
                    <Input value={task} handleInputChange={setTask} />
                </div>
                <button
                    type="submit"
                    className="btn btn-light btn-outline-dark my-3"
                >
                    Submit
                </button>
            </form>
        </>
    )
}
Form.propTypes = {
    handleSubmit: PropTypes.func,
    task: PropTypes.string,
    setTask: PropTypes.func,
}
Form.defaultProp = {
    handleSubmit: () => {},
    task: '',
    setTask: () => {},
}
export default Form
