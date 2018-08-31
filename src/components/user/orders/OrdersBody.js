import React, { Component } from 'react';
import TableRow from './OrdersTableRow'


class OrdersBody extends Component{

    renderOrders = () => this.props.orders.map((order, index) =>(
        <TableRow
            toggleButtonModal={this.toggle.bind(this)}
            toggleButtonModal1={this.toggle1.bind(this)}
            key={index}
            order={order}
        />
    ));

    componentWillMount(){
    }

    toggle = (z) => {
        this.props.toggleButton(z)
    }

    toggle1 = (x) => {
        this.props.toggleButton1(x)
    }
    render(){
        return(
            <div className="row">
                <div className="leftcolumn1">
                    <div className="cardx">
                        <h1><strong>Your Orders</strong></h1>
                        <div id="all_meals" >
                            <br/>
                                <div className="row">
                                    <table className="table">
                                        <tbody>
                                            <tr>
                                                {/* <th></th> */}
                                                <th>Date Ordered</th>
                                                <th>Meal</th>
                                                <th>Price</th>
                                                <th>Edit</th>
                                                <th>Delete</th>
                                            </tr>
                                            {this.renderOrders()}
                                        </tbody>    
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}

export default OrdersBody;
