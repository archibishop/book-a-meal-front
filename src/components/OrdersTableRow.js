import React, { Component } from 'react';

class TableRow extends Component{
    componentWillMount(){
    }

    handleDeleteToggle = () => {
        console.log(this.props.order.id)
        this.props.toggleButtonModal(this.props.order.id)
    }

    handleEditToggle = () => {
        console.log(this.props.order.id)
        this.props.toggleButtonModal1(this.props.order.id)
    }
    render(){
        return(
                <tr>
                    <td>{this.props.order.id}</td>
                    <td>{this.props.order.created_at}</td>
                    <td>{this.props.order.meal_name}</td>
                    <td>{this.props.order.price}</td>
                <td><button className="button-edit" onClick={this.handleEditToggle}>Edit</button></td>
                <td><button className="button" onClick={this.handleDeleteToggle}>Delete</button></td>
                </tr>
        );
    }
}

export default TableRow;
