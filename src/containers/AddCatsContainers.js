import React, { useState } from 'react'
import AddCats from '../components/AddCats'
import { useDispatch } from 'react-redux'
import { addItem } from '../actions/index'

const AddCatsContainers = () => {

    const dispatch = useDispatch();

    const handleDispatch = (cat) => {
        dispatch(addItem(cat))
    }

    const [cat, setCat] = useState({
        name: '',
        age: '',
        color: ''
    })

    return (
        <AddCats
            cat={cat}
            setCat={setCat}
            dispatch={handleDispatch}
        />
    )
}
export default AddCatsContainers