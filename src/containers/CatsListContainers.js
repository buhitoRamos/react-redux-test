import React from 'react'
import CatsList from '../components/CatsList'
import { useSelector } from "react-redux";
import {removeItem} from '../actions/index'
import { useDispatch } from 'react-redux'



const CatsListContainers=() =>  {
const cats = useSelector((state) => state.items)
const dispatch = useDispatch()
const handleRemove = (item) => {
    dispatch(removeItem(item))
}
 
        return (
            <CatsList
            items={cats}
            handleRemove={handleRemove}
            />
        )

}

export default CatsListContainers