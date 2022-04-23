import React, { Component, useSelector } from 'react'
import { connect } from 'react-redux'
import CatsList from '../components/CatsList'
import {removeItem} from '../actions/index'



class CatsListContainers extends Component {

    handleRemove = cat => {
        this.props.removeItem(cat)
    }
    sendItem = () =>{
        const items = useSelector(state => state.items)
        return items
    }
    render() {
        return (
            <CatsList
            items={[]}
            handleRemove={this.handleRemove}
            />
        )
    }
}
const mapDispatchToProps = dispatch => ({
    removeItem: value => dispatch(removeItem(value))
})
export default connect(null, mapDispatchToProps)(CatsListContainers)