import React, { Component } from 'react'
import CatsList from '../components/CatsList'
import { removeItem } from '../actions/index'
import { connect } from 'react-redux';
class CatsListContainers extends Component {

 handleRemove = items => {
            this.props.removeItem(items)
        }
    render() {
        
        return (
            <CatsList
                items={this.props.items}
                handleRemove={this.handleRemove}
            />
        )
    }


}
const mapDispatchToProps = dispatch => ({
    removeItem: items => dispatch(removeItem(items))
}
)
const mapStateToProps = ({ items }) => ({ items })
export default connect(mapStateToProps, mapDispatchToProps)(CatsListContainers)