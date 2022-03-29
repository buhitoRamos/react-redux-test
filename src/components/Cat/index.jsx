import React from 'react'
import '../Cat/Cat.css'
export default function Cat({item, onClickRemove}) {
    const {name, color, age} = item
    return (
        <div key={`${name}-${age}`} className="card cat">
            <ul className="list-group list-group-flush">
                <li className="list-group-item">{name}</li>
                <li className="list-group-item">{color}</li>
                <li className="list-group-item">{age}</li>
                <li className="list-group-item">
                <button className='btn btn-danger' onClick={() => onClickRemove(item)}>x</button>
                </li>
            </ul>
        </div>
    )
}