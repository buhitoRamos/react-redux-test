import React from "react";

const AddCats = ({ cat, setCat, dispatch }) => {

  const _onSubmit = () => {
    dispatch(cat)
    setCat({
      name: '',
      age: '',
      color: ''
    })
  }

  const _setValues = (e) => {
    const { id, value } = e.target
    setCat({
      ...cat, [id]: value
    })
  }

  return (
    <div className='container'>
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
      <button className='btn btn-primary' onClick={() => _onSubmit()}>Guardar</button>
    </div>
  )
}
export default AddCats