import React, { Component } from  'react';
import MealDayTr from './MealBayTr';
import { connect } from 'react-redux';
import { createMenu } from '../actions/menuCreate';
import { updateMenu } from '../actions/updateMenu';
import { getMenu } from '../actions/menu';
import { PropTypes } from 'prop-types';
import Notifications, { notify } from 'react-notify-toast';

class MealDayTable extends Component{

    renderMenu = () => this.props.menu.map((menu, index)=>(
        <MealDayTr
            toggleBtn={this.props.toggleModalButton}
            menu={menu}
            key={index}
        />

    ));

    componentWillMount(){
    }

    componentWillReceiveProps(data){
        // if (!this.isEmpty(data.menuMessage.message)) {
        //     notify.show(data.addMealInfo.message, 'success', 5000);
        // } 
    }

    isEmpty = (str) => {
        return (!str || 0 === str.length);
    }

    populateOptions(meals){
        return meals.map((meal, index) => (
            <option key={index} value={meal.id}>{meal.meal_name}</option>
        ));
    }

    createMenu = (e) => {
        e.preventDefault();
        let newMenu = []
        Array.from(e.target.meals.selectedOptions).map( o => 
            newMenu.push(o.value)
        )
        let menuData = {
            meal_ids: newMenu,
            user_id: parseInt(localStorage.getItem("user_id"))
        }
        if (this.props.menuCheck === false){
            this.props.createMenu(JSON.stringify(menuData))
        } else {
            this.props.updateMenu(this.props.menuId, JSON.stringify(menuData))
        }
        this.props.getMenu(localStorage.getItem("user_id"));
    }

    render(){
        return(
            <div>
                <Notifications />
                <table >
                    <tbody>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Action</th>
                    </tr>
                    {this.renderMenu()}
                    </tbody>
                </table>

                <br/>
                    <form onSubmit={this.createMenu}>
                        <label><span>Select Meals for the day</span></label>
                        <select multiple="multiple" id="meals" name="meals" size="2">
                            {this.populateOptions(this.props.meals)}
                        </select>
                        <input type="submit" readOnly="Submit" />
                    </form>
            </div>
        );
    }
}

MealDayTable.propType = {
    createMenu: PropTypes.func.isRequired,
    updateMenu: PropTypes.func.isRequired,
    getMenu: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    menuMessage: state.menuCreate.message
})

export default connect(mapStateToProps, { createMenu, updateMenu, getMenu})(MealDayTable);
