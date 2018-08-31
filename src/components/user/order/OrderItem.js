import React, { Component } from 'react';

class OrderItem extends Component{
    handleSubmit = (e) => {
        this.props.orderDeleteByName(this.props.order)
    }

    componentWillMount(){
    }

    render(){
        return(
            <div>
                <div className="row">
                    <div className="colt1">
                        <p><button className="buttonx" onClick={this.handleSubmit}>Delete</button></p>
                    </div>
                    <div className="colt1"><p id="dishname1">{this.props.order.meal_name}</p></div>
                    <div className="colt1"><p id="dishname1"><span id="testValue1" name="testValue1">{this.props.order.price}</span></p></div>   
                </div>
                
            </div>   
        );
    }
}

export default OrderItem;
