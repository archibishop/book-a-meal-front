import React, { Component } from 'react';
import NavBar from '../../navs/Navbar2';
import OrdersBody from './OrdersBody';
import { connect } from 'react-redux';
import { getMeals } from '../../../actions/meals';
import { getOrders } from '../../../actions/orders';
import { updateOrder } from '../../../actions/updateOrder';
import { deleteOrder } from '../../../actions/deleteOrder';
import { getOrdersUser } from '../../../actions/ordersUser';
import { PropTypes } from 'prop-types';
import Modal from '../../modal/Modal';
import Notifications, { notify } from 'react-notify-toast';


export class Orders extends Component{
    
    constructor(props) {
        super(props)
        this.state = { 
            isOpen: false,
            isOpen1: false,
            id: null 
        };
    }

    toggleModal = (id) => {
        this.setState({
            isOpen: !this.state.isOpen,
            id: id
        });
    }

    toggleModal1 = (id) => {
        this.setState({
            isOpen1: !this.state.isOpen1,
            id: id
        });
    }

    componentWillMount(){
        this.props.getOrders()
        this.props.getOrdersUser() 
        this.props.getMeals(localStorage.getItem("user_id"), localStorage.getItem("x-access-token"));
    }

    handleUpdate = (e) => {
        e.preventDefault();
        let data = {
            meal_name: e.target.meals.value
        }
        this.props.updateOrder(this.state.id, JSON.stringify(data));
        this.props.getOrders()
        this.props.getOrdersUser() 
        this.toggleModal1()
    }

    handleDelete = (e) => {
        e.preventDefault();
        this.props.deleteOrder(this.state.id)
        this.props.getOrders()
        this.props.getOrdersUser() 
        this.toggleModal()
    }

    populateOptions = () => this.props.mealList.map((meal, index) => (
        <option key={index} value={meal.meal_name}>{meal.meal_name}</option>
    ));

    render(){
        return(
            <div>
                <NavBar />
                <Notifications />
                <OrdersBody orders={this.props.ordersUser} toggleButton={this.toggleModal.bind(this)}
                    toggleButton1={this.toggleModal1.bind(this)}/>
                <Modal show={this.state.isOpen}
                    onClose={this.toggleModal} 
                    orderList={this.props.orderList}>
                    Are you sure you want delete an order.
                    <br />
                    <br />
                    <button className="button" onClick={this.handleDelete}>
                        Delete
                    </button>
                </Modal>
                <Modal show={this.state.isOpen1}
                    onClose={this.toggleModal1}
                    orderList={this.props.orderList}>
                    <h1>Edit An Order</h1>
                    <div className="form-meal">
                        <form onSubmit={this.handleUpdate}>
                            <label htmlFor="fname">Meal</label>
                            <select name="meals">
                                <option disabled selected value> -- select an option -- </option>
                                {this.populateOptions()}
                            </select>

                            <input type="submit" value="Edit"/>
                        </form>
                    </div>
                </Modal>
            </div>
        );
    }
}

Orders.propTypes = {
    getOrders: PropTypes.func.isRequired,
    updateOrder: PropTypes.func.isRequired,
    deleteOrder: PropTypes.func.isRequired,
    getOrdersUser: PropTypes.func.isRequired,
    getMeals: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    orderData: state.orders.orders,
    updateOrderInfo: state.updateOrder.message,
    deleteOrderInfo: state.deleteOrder.message,
    ordersUser: state.userOrders.orders,
    mealList: state.meals.meals,
}) 

export default connect(mapStateToProps , {getOrders, updateOrder, deleteOrder, getOrdersUser, getMeals})(Orders);
