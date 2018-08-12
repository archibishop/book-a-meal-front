import React, { Component } from 'react';
import OrderSumTr from './OrderSumTr';

class OrderSum extends Component {
    

    renderOrder = () => this.props.orders.map((order, index)=>(
        <OrderSumTr
            toggleBtn={this.props.toggleModalBtn}
            key={index}
            order={order}
        />
    ));

    render(){
        return(
            <div>
            <h1>Orders For the day </h1>

            <table >
                <tbody>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Delete</th>
                </tr>
                {this.renderOrder()}
                </tbody>
            </table>
            </div>
        );
    }
}

export default OrderSum;
