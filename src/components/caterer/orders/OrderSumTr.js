import React, { Component} from 'react';


export class OrderSumTr extends Component {

    handleRemoveOrder = (e) => {
        e.preventDefault();
        this.props.toggleBtn(this.props.order.id);
    }
    render(){
        return(
            <tr>
                {/* <td>{this.props.order.id}</td> */}
                <td>{this.props.order.meal_name}</td>
                <td>{this.props.order.price}</td>
                <td><button className="button" onClick={this.handleRemoveOrder} >Delete</button></td>
            </tr>
        );
    }
}

export default OrderSumTr;
