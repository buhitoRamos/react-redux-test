import React, { useState } from 'react'

const AddCats = ({ handleAddCat }) => {
  const [cat, addItem] = useState({
    name: '',
    age: '',
    color: ''
  })

  const onSubmit = () => {
    handleAddCat(cat);
    addItem({
      name: '',
      age: '',
      color: ''
    })
  }


  const _setValues = (e) => {
    const { id, value } = e.target
    addItem({
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