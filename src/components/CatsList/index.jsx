import Cat from '../Cat'
import React from 'react'

const CatsList = ({items, handleRemove}) => {
    

    const onClickRemove = (item) => {

        handleRemove(item)
    }
    
    return (
        <div>
            {items && items.map(i => <Cat key={i.item} {...i} onClickRemove={onClickRemove}></Cat>)}
        </div>
    )
}

export default CatsList