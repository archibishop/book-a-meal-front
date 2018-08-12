import React, { Component } from 'react';
import OrderItem from './OrderItem';
import Modal from './Modal';

class RightBar extends Component{

    constructor(props) {
        super(props)
        this.state = { isOpen: false };
    }
    
    handleDelete(order) {
        this.props.deleteOrder(order)
    }

    handleOrders(orders){
        // this.props.handleAddOrder(orders)
        this.props.handleAddOrder(this.props.orderList)
    }

    componentWillMount(){
        console.log(this.state.isOpen);
    }

    toggleModal = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
        console.log(this.state.isOpen);
    }

    renderOrderList = () => this.props.orderList.map((order, index) => (
        <OrderItem
            orderDeleteByName={this.handleDelete.bind(this)}
            key={index}
            order={order}
        />
    ));
    render(){
        return(
            <div>
                <div className="rightcolumn">
                    <div className="card">
                        <h2>Your Order</h2>
                        <div id='cart'>
                            {this.renderOrderList()}
                            <div><p>Final Total:</p></div>
                        </div>
                        <p><button id="myBtn" className="button-edit" onClick={this.toggleModal}>ORDER NOW</button></p>
                    </div>
                </div>
                <Modal show={this.state.isOpen}
                    onClose={this.toggleModal} onHandleAddOrders={this.handleOrders.bind(this)}
                    orderList={this.props.orderList}> 
                    Are you sure you want to make an order.
                    <br />
                    <br />
                    <button className="button-edit" onClick={this.handleOrders}>
                        Order
                    </button>
                </Modal>
            </div>
        );
    }
}

export default RightBar;
