import React, { Component } from  'react';
import MealDayTr from './MealBayTr';
import { connect } from 'react-redux';
import { createMenu } from '../actions/menuCreate';
import { updateMenu } from '../actions/updateMenu';
import { PropTypes } from 'prop-types';

class MealDayTable extends Component{

    renderMenu = () => this.props.menu.map((menu, index)=>(
        <MealDayTr
            toggleBtn={this.props.toggleModalButton}
            menu={menu}
            key={index}
        />

    ));

    componentWillMount(){
        console.log("Meal Day Table")
        console.log(this.props)
    }

    componentWillReceiveProps(data){
        console.log("Component will recieve props")
        console.log(data.menu)
        console.log(data.menuCheck)
        console.log("user_id")
        console.log(localStorage.getItem("user_id"))
    }

    populateOptions(meals){
        return meals.map((meal, index) => (
            <option key={index} value={meal.id}>{meal.meal_name}</option>
        ));
    }

    createMenu = (e) => {
        e.preventDefault();
        let newMenu = []
        console.log("You clicked me Hoooray")
        console.log(e.target.meals.selectedOptions)
        console.log(Array.from(e.target.meals.selectedOptions))
        Array.from(e.target.meals.selectedOptions).map( o => 
            newMenu.push(o.value)
        )
        console.log(newMenu)
        console.log("crazy stuff happening here")
        let menuData = {
            meal_ids: newMenu,
            user_id: parseInt(localStorage.getItem("user_id"))
        }
        console.log(menuData)
        if (this.props.menuCheck === false){
            this.props.createMenu(JSON.stringify(menuData))
        } else {
            console.log("An update has to be done")
            this.props.updateMenu(this.props.menuId, JSON.stringify(menuData))
        }
    }

    render(){
        return(
            <div>
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
                            {/* <option value="rolex">Rolex</option>
                            <option value="canada">Rice and beans</option>
                            <option value="usa">Katogo</option> */}
                            {this.populateOptions(this.props.meals)}
                        </select>
                        {/* <button className="button-addmeal">Select Meals For the day</button> */}
                        <input type="submit" readOnly="Submit" />
                    </form>
            </div>
        );
    }
}

MealDayTable.propType = {
    createMenu: PropTypes.func.isRequired,
    updateMenu: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    menuMessage: state.menuCreate.message
})

export default connect(mapStateToProps, { createMenu, updateMenu})(MealDayTable);
