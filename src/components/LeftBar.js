import React, { Component } from 'react';
import rolex from '../img/rolex.jpg';
import ricebeans from '../img/ricebeans.jpg';
import lasagna from '../img/lasagna.jpg';
import MealItem from './MealItem';
import { getCaterer } from '../actions/caterer';
import { getCatererMenu } from '../actions/catererMenu';
import { getMeals } from '../actions/meals';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

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
            catererMenu: [
                {
                    "id": 1,
                    "user_id": 1,
                    "meal_ids": [1, 3]
                },
                {
                    "id": 2,
                    "user_id": 2,
                    "meal_ids": [2, 3]
                },
                {
                    "id": 3,
                    "user_id": 3,
                    "meal_ids": [1, 2]
                }
            ],
            orders: [],
            caterers: [
                {
                    'id': 1,
                    "business_name": "Tasty Foods"
                },
                {
                    'id': 2,
                    "business_name": "Crunchy Foods"
                },
                {
                    'id': 3,
                    "business_name": "Fast Foods"
                }
            ],
            menuList: [
                {
                    'id': 1,
                    'meal_name': "frenchbeans",
                    "price": 3000,
                    "description": "Best meal ever",
                    "total": 0
                },
                {
                    'id': 3,
                    'meal_name': "chicken",
                    "price": 5000,
                    "description": "Sweet",
                    "total": 0
                }
            ]
        };
    }

    componentWillMount(){
        this.props.getCaterer(localStorage.getItem("x-access-token"));
        this.props.getMeals(localStorage.getItem("x-access-token"));
        this.props.getCatererMenu(2, localStorage.getItem("x-access-token"))
    }

    componentDidMount() {
        
    }

    handleOrderList(meal){
        this.props.getOrder(meal)
    }

    renderOptions = () => {
        return this.state.caterers.map((caterer, index) => (
            <option key={index} value={caterer.id}>{caterer.business_name}</option>
        ));
    }
    
    renderMenu = () => this.state.menuList.map((meal,index) => (
        <MealItem
        orderList={this.handleOrderList.bind(this)}
        key={index}
        meal={meal}/>
    )); 

    setMenuList = (x) => {
        let ids = []
        ids = this.props.catererMenu
        let mealx = [];
        for (let i = 0; i < this.props.mealList.length; i++) {
            for (let p = 0; p < ids.length; p++) {
                if (this.props.mealList[i].id === ids[p]) {
                    mealx.push(this.props.mealList[i])
                }
            }
        }

        this.setState({
            menuList: mealx
        }, () => {
        });
        this.props.getCaterer(localStorage.getItem("x-access-token"))
        this.props.getCatererMenu(2, localStorage.getItem("x-access-token"))
    }

    componentWillReceiveProps(data){
    }

    getCatererMenu = (e) => {
        this.setMenuList(e.target.value)
        // so at this point we get selected value and get the meal ids
    }

    render(){
        return(
            <div>
                <div className="leftcolumn">
                    <div className="card">
                        <p>
                            <strong>You can make an order now:</strong>
                        </p>
                        <p>    
                            Select caterer
                                <select id="caterer" name="caterer" onChange={this.getCatererMenu}>
                                    {this.renderOptions()}
                                </select>
                        </p>

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

LeftBar.propTypes = {
    getCaterer: PropTypes.func.isRequired,
    getCatererMenu: PropTypes.func.isRequired,
    getMeals: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    caterer: state.caterer.caterers,
    catererMenu: state.catererMenu.menu,
    mealList: state.meals.meals
})

export default connect(mapStateToProps, { getCaterer, getCatererMenu, getMeals })(LeftBar);
