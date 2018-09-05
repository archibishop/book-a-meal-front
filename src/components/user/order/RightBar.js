import React, { Component } from 'react';
import OrderItem from './OrderItem';
import Modal from '../../modal/Modal';

export class RightBar extends Component{

    constructor(props) {
        super(props)
        this.state = { 
            isOpen: false,
            orderList: this.props.orderList
        };
    }
    
    handleDelete(order) {
        this.props.deleteOrder(order)
    }

    handleOrders = () => {
        this.props.handleAddOrder(this.props.orderList)
        this.props.clearList()
        this.toggleModal()
    }

    componentWillReceiveProps(data){
    }

    toggleModal = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    renderOrderList = () => this.state.orderList.map((order, index) => (
        // Orders
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
                    <div className="cardz">
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
                    <button id="btn-order" className="button-edit" onClick={this.handleOrders.bind(this)}>
                        Order
                    </button>
                </Modal>
            </div>
        );
    }
}

export default RightBar;
