import { useState } from "react"

const useListType = () => {
    const [listType, setListType] = useState("");


    const clear = () => {
        setListType('')
    }

    return { clear, listType, setListType }
}

export default useListType