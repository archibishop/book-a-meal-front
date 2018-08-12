import React, { Component } from 'react';
import  NavBar from './Navbar2';
import OrdersBody from './OrdersBody';
import { connect } from 'react-redux';
import { getOrders } from '../actions/orders';
import { updateOrder } from '../actions/updateOrder';
import { deleteOrder } from '../actions/deleteOrder';
import { PropTypes } from 'prop-types';
import Modal from './Modal';
// import DeleteOrderModal from './DeleteOrderModal';


class Orders extends Component{
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         orders: [
    //             {
    //                 'id': 1,
    //                 'meal_name': 'katogo',
    //                 'price': 3000,
    //                 'type': 'breakfast'
    //             },
    //             {
    //                 'id': 2,
    //                 'meal_name': 'fish',
    //                 'price': 7000,
    //                 'type': 'lunch'
    //             },
    //             {
    //                 'id': 3,
    //                 'meal_name': 'maize',
    //                 'price': 300,
    //                 'type': 'breakfast'
    //             },
    //             {
    //                 'id': 4,
    //                 'meal_name': 'bread',
    //                 'price': 3000,
    //                 'type': 'breakfast'
    //             }
    //         ]
    //     }
    // }
    
    // componentWillReceiveProps(recievedData)
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
        console.log(id)
        console.log(this.state.isOpen1)
    }

    componentWillMount(){
        this.props.getOrders()
    }

    handleUpdate = (e) => {
        e.preventDefault();
        console.log("You clicked the update button");
        let data = {
            meal_name: "rolex"
        }
        console.log(this.props.orderData)
        console.log(this.state.id)
        this.props.updateOrder(this.state.id, JSON.stringify(data));
        this.toggleModal1()
    }

    handleDelete = (e) => {
        e.preventDefault();
        console.log("You clicked the delete button")
        this.props.deleteOrder(this.state.id)
        this.toggleModal()
    }

    render(){
        return(
            <div>
                <NavBar />
                <OrdersBody orders={this.props.orderData} toggleButton={this.toggleModal.bind(this)}
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
                            <select>
                                <option value="australia">Rolex</option>
                                <option value="canada">Rice And Beans</option>
                                <option value="usa">Lasagna</option>
                            </select>

                            {/* <label htmlFor="quantity">Quantity</label>
                            <input type="number" name="quantity" value="0" min="0" max="99" className="qtyinput"/>

                            <label htmlFor="lname">Price(each)</label>
                            <input type="text" id="lname" name="lastname" value="2000" disabled/> */}

                            <input type="submit" value="Edit"/>
                        </form>
                    </div>
                </Modal>
                {/* <Modal show={this.state.isOpen}
                    onClose={this.toggleModal} 
                    orderList={this.props.orderList}>
                    {/* Are you sure you want to delete the order. */}
                    {/* <div className="form-meal">
                        <form action="./dashboard.html">
                            <label htmlFor="fname">Meal</label>
                            <select>
                                <option value="australia">Rolex</option>
                                <option value="canada">Rice And Beans</option>
                                <option value="usa">Lasagna</option>
                            </select>

                            <label htmlFor="quantity">Quantity</label>
                            <input type="number" name="quantity" value="0" min="0" max="99" className="qtyinput"/>

                            <label htmlFor="lname">Price(each)</label>
                            <input type="text" id="lname" name="lastname" value="2000" disabled/>

                            <input type="submit" value="Submit"/>
                        </form>
                    </div> */}
                {/* </Modal> */} 
                {/* <DeleteOrderModal show={this.state.isOpen}>
                    Are you sure you want to make an order.
                </DeleteOrderModal> */}
            </div>
        );
    }
}

Orders.propTypes = {
    getOrders: PropTypes.func.isRequired,
    updateOrder: PropTypes.func.isRequired,
    deleteOrder: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    orderData: state.orders.orders,
    updateOrder: state.updateOrder.message,
    deleteOrder: state.deleteOrder.message
}) 

export default connect(mapStateToProps , {getOrders, updateOrder, deleteOrder})(Orders);
