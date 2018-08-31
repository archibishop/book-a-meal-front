import React, { Component } from 'react';
import Navb from '../../navs/Navbar3';
import OrderSum from './OrderSum';
import Modal from '../../modal/Modal';
import { PropTypes } from 'prop-types';
import  { connect } from 'react-redux';
import { getOrders } from '../../../actions/orders';
import { deleteOrder } from '../../../actions/deleteOrder';
import Notifications, { notify } from 'react-notify-toast';

class Summary extends Component{
    constructor(props){
        super(props);
        this.state = {
            orders: [],
            isOpen: false
        }
    }

    componentWillMount(){
        this.props.getOrders(localStorage.getItem("user_id"));
    }

    componentWillReceiveProps(data){
        
    }

    toggleModal = (x) => {
        this.setState({
            isOpen: !this.state.isOpen,
            id: x
        });
    }

    handleDelete = () => {
        this.props.deleteOrder(this.state.id)
        this.props.getOrders(localStorage.getItem("user_id"));
        this.toggleModal()
    }

    render(){
        return(
            <div>
                <Navb />
                <Notifications />
                <br />
                <OrderSum orders={this.props.orderData} toggleModalBtn={this.toggleModal.bind(this)} />
                <Modal show={this.state.isOpen}
                    onClose={this.toggleModal}>
                    Are you sure you want delete an order.
                    <br />
                    <br />
                    <button className="button" onClick={this.handleDelete}>
                        Delete Order
                    </button>
                </Modal>
            </div>    
        );
    }
}

Summary.propTypes = {
    getOrders: PropTypes.func.isRequired,
    deleteOrder: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    orderData: state.orders.orders,
    deleteOrderInfo: state.deleteOrder.message
})

export default connect(mapStateToProps, { getOrders, deleteOrder })(Summary);
