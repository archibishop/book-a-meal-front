import React, { Component } from  'react';
import MealDayTr from './MealBayTr';
import { connect } from 'react-redux';
import { createMenu } from '../../../actions/menuCreate';
import { updateMenu } from '../../../actions/updateMenu';
import { getMenu } from '../../../actions/menu';
import { PropTypes } from 'prop-types';
import Notifications, { notify } from 'react-notify-toast';

export class MealDayTable extends Component{

    renderMenu = () => this.props.menu.map((menu, index)=>(
        <MealDayTr
            toggleBtn={this.props.toggleModalButton}
            menu={menu}
            key={index}
        />

    ));

    populateOptions(meals){
        return meals.map((meal, index) => (
            <option key={index} value={meal.id}>{meal.meal_name}</option>
        ));
    }

    populateDayOptions(days) {
        return days.map((day, index) => (
            <option key={day.day} value={day.val}>{day.day}</option>
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
            user_id: parseInt(localStorage.getItem("user_id")),
            menu_date: parseInt((6 - e.target.day.value))
        }
        let menuCheck = false
        let menuId = false
        console.log("Run this")
        console.log(this.props.dates)
        console.log(e.target.day.value)
        if (this.props.dates.length > 0){
            for (let i = 0; i < this.props.dates.length; i++){
                if ((6 - e.target.day.value) == this.props.dates[i].day) {
                    menuCheck = true
                    menuId = this.props.dates[i].id
                    console.log("spread the love")
                }
            }
        }
        if (menuCheck === false){
            this.props.createMenu(JSON.stringify(menuData))
        } else {
            this.props.updateMenu(menuId, JSON.stringify(menuData))
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
                        <th>Name</th>
                        <th>Type</th>
                        <th>Action</th>
                    </tr>
                    {this.renderMenu()}
                    </tbody>
                </table>

                <br/>
                    <form onSubmit={this.createMenu}>
                        <label><span>Select Day </span></label>
                        <select id="day" name="day" >
                            {this.populateDayOptions(this.props.days)}
                        </select>
                        <label><span>Select Meals </span></label>
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
