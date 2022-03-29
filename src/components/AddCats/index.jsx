import React, { useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'

const AddCats = ({ addItem }) => {
    const [cat, setCat] = useState({
        name:'',
        age: '',
        color: ''
    })
    const dispatch = useDispatch()

    const onSubmit = useCallback(
        (e) => {
            e.preventDefault() 

            dispatch({ type: 'ADD_ITEM', payload: { item: cat } })
            setCat({
                name: '',
                age: '',
                color: ''
            })
        }
    )

    const _setValues = (e) => {
        const {id, value} = e.target
        setCat({
          ...cat, [id]: value
        })
    }    

    return (
        <form className='container'>
            <div className='mb-3'>
                <label className='form-label'>Nombre</label>
                <input value={cat.name} id="name" className='form-control' onChange={_setValues} />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Edad</label>
                <input value={cat.age} id="age" className='form-control' onChange={_setValues} />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Color</label>
                <input value={cat.color} className='form-control' id="color" onChange={_setValues} />
            </div>
            <button className='btn btn-primary' onClick={onSubmit}>Guardar</button>
        </form>
    )
}

export default AddCats