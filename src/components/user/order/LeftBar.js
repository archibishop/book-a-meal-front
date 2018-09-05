import React, { Component } from 'react';
import MealItem from './MealItem';
import { getCaterer } from '../../../actions/caterer';
import { getCatererMenu } from '../../../actions/catererMenu';
import { getMeals } from '../../../actions/meals';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

export class LeftBar extends Component{

    constructor(props) {
        super(props)
        this.state = {
            menuList: [],
            catererId: null,
            ids: []
        };
    }

    componentWillMount(){
        this.props.getCaterer(localStorage.getItem("x-access-token"));
        this.props.getMeals(localStorage.getItem("user_id"), localStorage.getItem("x-access-token"));
        // this.props.getCatererMenu(2, localStorage.getItem("x-access-token"))
    }

    componentDidMount() {
    }

    handleOrderList(meal){
        this.props.getOrder(meal)
    }

    renderOptions = () => {
        return this.props.caterer.map((caterer, index) => (
            //caterers dropdown
            <option key={index} value={caterer.id}>{caterer.business_name}</option>
        ));
    }
    
    renderMenu = () => this.props.catererMenu.map((meal,index) => (
        <MealItem
        orderList={this.handleOrderList.bind(this)}
        key={index}
        meal={meal}/>
    )); 

    componentWillReceiveProps(data){
    }

    getCatererMenu = (e) => {
        this.props.getCatererMenu(e.target.value, localStorage.getItem("x-access-token"))
    }

    render(){
        return(
            <div>
                <div className="leftcolumn">
                    <div className="cardp">
                        <p>
                            <strong>You can make an order now:</strong>
                        </p>
                        <p>    
                            Select caterer
                                <select id="caterer" name="caterer" onChange={this.getCatererMenu}>
                                    <option disabled selected value> -- select an option -- </option>
                                    {this.renderOptions()}
                                </select>
                        </p>

                        <div className="tab">
                            <button className="tablinks">All Meals</button>
                        </div>

                        <div id="all_meals" className="tabcontent">
                            <div className="row">
                                <div className="col2">
                                    <strong>Meal Name</strong>
                                </div>
                                <div className="col3">
                                    <strong>Type</strong>
                                </div>
                                <div className="col">
                                    <strong>Price</strong>(shs/=)
                                </div>
                            </div>
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
    // store state
    caterer: state.caterer.caterers,
    catererMenu: state.catererMenu.menu,
    mealList: state.meals.meals
})

export default connect(mapStateToProps, { getCaterer, getCatererMenu, getMeals })(LeftBar);
