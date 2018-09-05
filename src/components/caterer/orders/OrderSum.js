import React, { Component } from 'react';
import OrderSumTr from './OrderSumTr';

export class OrderSum extends Component {
    

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
            <h1>Total For The Day: {this.props.total} UGX </h1>
            <h1>Orders</h1>

            <table >
                <tbody>
                <tr>
                    {/* <th>Id</th> */}
                    <th>Date Ordered</th>
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
