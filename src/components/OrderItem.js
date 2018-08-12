import React, { Component } from 'react';

class OrderItem extends Component{
    handleSubmit = (e) => {
        this.props.orderDeleteByName(this.props.order)
    }

    render(){
        return(
            <div>
                <div className="row">
                    <div className="colt1">
                        <p><button className="buttons" onClick={this.handleSubmit}>Delete</button></p>
                    </div>
                    <div className="colt1"><p id="dishname1">{this.props.order}</p></div>
                    <div className="colt2">
                        <p>Price : <span id="testValue1" name="testValue1">1000</span></p>
                        <p>Quantity : <span name="testVal1">10000</span></p>
                    </div>
                </div>
                
            </div>   
        );
    }
}

export default OrderItem;
