import React, { Component } from 'react';
import '../../../css/Order.css'
import Navbar from '../../navs/Navbar2';
import LeftBar from './LeftBar';
import RightBar from './RightBar';
import { connect } from 'react-redux';
import { getMeals } from '../../../actions/meals'
import { makeOrder } from '../../../actions/order'
import { PropTypes } from 'prop-types'
import Notifications, { notify } from 'react-notify-toast';

class Order extends Component {
    constructor(props) {
        super(props)
        this.state = {
            orders: []
        };
    }

    componentWillMount() {
        this.props.getMeals(localStorage.getItem("user_id"), localStorage.getItem("x-access-token"));
    }

    componentWillReceiveProps(newData) {
        if (newData.orderInfo === "Transacrtion Successfully Made"){
            // notify.show("Order has been made.", 'success', 5000);
        }
    }

    handleOrders(order) {
        let orders = this.state.orders;
        orders.push(order)
        this.setState({ orders: orders })
    }

    handleRemoveOrder = order => {
        let orders = this.state.orders
        let index = orders.findIndex(x => x === order)
        orders.splice(index, 1);
        this.setState({ orders: orders })
    }

    handleAddOrder = (orders) => {
        let length = orders.length
       
        for (let i = 0; i < length; i++) {
            console.log(orders[i].admin_id)
            let orderData = {
                meal_name: orders[i].meal_name,
                user_id: parseInt(localStorage.getItem("user_id")),
                admin_id: orders[i].admin_id
            }
            
            this.props.makeOrder(JSON.stringify(orderData))
            
        }
    }

    handleClearOrderList = () => {
        let orders = this.state.orders
        orders.length = 0
        this.setState({ orders: orders })
        
    }


    render() {
        return (
            <div>
                <Navbar />
                <Notifications />
                <div className="row">
                    <LeftBar getOrder={this.handleOrders.bind(this)} />
                    <RightBar orderList={this.state.orders} deleteOrder={this.handleRemoveOrder.bind(this)}
                        handleAddOrder={this.handleAddOrder.bind(this)} clearList={this.handleClearOrderList.bind(this) } />
                </div>
            </div>
        );
    }
}

Order.propTypes = {
    getMeals: PropTypes.func.isRequired,
    makeOrder: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    mealData: state.meals.meals,
    orderInfo: state.order.message
})

export default connect(mapStateToProps, { getMeals, makeOrder })(Order);
