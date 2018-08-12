import React, { Component } from 'react';
import rolex from '../img/rolex.jpg';
import ricebeans from '../img/ricebeans.jpg';
import lasagna from '../img/lasagna.jpg';
import MealItem from './MealItem';

class LeftBar extends Component{

    constructor(props) {
        super(props)
        this.state = {
            menu: [
                {
                    'id': 1,
                    'meal_name': "frenchbeans",
                    "price": 3000,
                    "description": "Best meal ever",
                    "total": 0
                },
                {
                    'id': 2,
                    'meal_name': "beef",
                    "price": 7000,
                    "description": "Tasty",
                    "total": 0
                },
                {
                    'id': 3,
                    'meal_name': "chicken",
                    "price": 5000,
                    "description": "Sweet",
                    "total": 0
                }
            ],
            orders: []
        };
    }

    handleOrderList(meal){
        this.props.getOrder(meal)
    }
    
    renderMenu = () => this.state.menu.map((meal,index) => (
        <MealItem
        orderList={this.handleOrderList.bind(this)}
        key={index}
        meal={meal}/>
    )); 

    render(){
        return(
            <div>
                <div className="leftcolumn">
                    <div className="card">
                        <p><strong>You can make an order now:</strong></p>

                        <div className="tab">
                            <button className="tablinks">All Meals</button>
                        </div>

                        <div id="all_meals" className="tabcontent">
                            <br />
                                {this.renderMenu()}
                            <br />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LeftBar;
