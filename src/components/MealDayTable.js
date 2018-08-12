import React, { Component } from  'react';
import MealDayTr from './MealBayTr';
import { connect } from 'react-redux';
import { createMenu } from '../actions/menuCreate';
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
            user_id: 10
        }
        this.props.createMenu(JSON.stringify(menuData))
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
    createMenu: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    menu: state.menuCreate.message
})

export default connect(null, {createMenu})(MealDayTable);
