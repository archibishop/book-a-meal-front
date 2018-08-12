import React, { Component } from 'react';
import '../css/Order.css'
import Navbar from './Navbar2';
import LeftBar from './LeftBar';
import RightBar from './RightBar';
import { connect } from 'react-redux';
import { getMeals } from '../actions/meals'
import { makeOrder } from '../actions/order'
import { PropTypes } from 'prop-types'

class Order extends Component {
    constructor(props) {
        super(props)
        this.state = {
            orders: []
        };
    }

    componentWillMount() {
        console.log("Order Page Loading")
        console.log(localStorage.getItem('x-access-token'))
        console.log(this.props)
        this.props.getMeals(localStorage.getItem("x-access-token"))
    }

    componentWillReceiveProps(newData) {
        // console.log(newData)
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

    handleAddOrder(orders) {
        let length = orders.length
        for (let i = 0; i < length; i++) {
            let orderData = {
                meal_name: "frenchbeans",
                user_id: 1
            }
            this.props.makeOrder(JSON.stringify(orderData))
        }
    }
    render() {
        return (
            <div>
                <Navbar />
                <div className="row">
                    <LeftBar getOrder={this.handleOrders.bind(this)} />
                    <RightBar orderList={this.state.orders} deleteOrder={this.handleRemoveOrder.bind(this)}
                        handleAddOrder={this.handleAddOrder.bind(this)} />
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
    mealData: state.meals.meals
})

export default connect(mapStateToProps, { getMeals, makeOrder })(Order);
