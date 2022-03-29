import Cat from '../Cat'
import React, {useCallback} from 'react'
import { useDispatch, useSelector } from 'react-redux'

const CatsList = () => {
    const dispatch = useDispatch()
    const items = useSelector(state => state.items)

    const onClickRemove = useCallback((item) => {

        dispatch({type: 'REMOVE_ITEM', payload: item})
    })
    
    return (
        <div>
            {items && items.map(i => <Cat key={i.item} {...i} onClickRemove={onClickRemove}></Cat>)}
        </div>
    )
}

export default CatsList