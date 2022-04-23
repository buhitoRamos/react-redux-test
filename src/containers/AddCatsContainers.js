import React, { Component } from 'react'
import { connect } from 'react-redux'
import AddCats from '../components/AddCats'
import {addItem} from '../actions/index'


class AddCatsContainers extends Component {
  
    handleAddCat = cat => {
        this.props.addItem(cat)
    }
    render() {
        return (
            <AddCats
            handleAddCat={this.handleAddCat}
            />
        )
    }
}
const mapDispatchToProps = dispatch => ({
    addItem: value => dispatch(addItem(value))
})
export default connect(null, mapDispatchToProps)(AddCatsContainers)