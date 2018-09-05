import React, { Component } from "react";
import Navb from '../../navs/Navbar3';
import MealDayTable from './MealDayTable';
import Modal from '../../modal/Modal';
import { connect } from  'react-redux';
import { getMenu } from '../../../actions/menu';
import { getMeals } from '../../../actions/meals';
import { updateMenu } from '../../../actions/updateMenu';
import { getCatererMenu } from '../../../actions/catererMenu';
import { getDays } from '../../../actions/getDays';
import { getMenuDays } from '../../../actions/getMenuDays';
import { PropTypes } from 'prop-types';

export class MealDay extends Component{
    constructor(props){
        super(props);
        this.state = {
            menu: [],
            mealList: [],
            menuListCheck: false,
            menuId: null,
            isOpen: false

        }
    }

    componentWillMount(){
        // this.props.getMenu(localStorage.getItem("user_id"));
        this.props.getMeals(localStorage.getItem("user_id"), localStorage.getItem("x-access-token"));  
        this.props.getCatererMenu(localStorage.getItem("user_id"), localStorage.getItem("x-access-token"));
        this.props.getDays(localStorage.getItem("x-access-token"))
        this.props.getMenuDays(localStorage.getItem("user_id"))
    }

    componentDidMount() {
    }

    componentWillReceiveProps(data){
        let menuPlus = []
        let menuArray = []
        let menuCheck = false
        let idMenu = null
        let menu_pos = null
        for(let i = 0; i < data.menu.length; i++){
            if (data.menu[i].user_id === parseInt(localStorage.getItem('user_id'))){
                menuCheck = true
                menuArray = data.menu[i]  
                idMenu = data.menu[i].id
                menu_pos = i
            }
        }
        if (menuArray.meal_ids != null){
        for (let i = 0; i < menuArray.meal_ids.length; i++){
            for (let p = 0; p < data.mealList.length; p++) {
                if ((menuArray.meal_ids[i]) === data.mealList[p].id){
                        menuPlus.push(data.mealList[p])
                }
        }}  
        this.setState({
            menu: menuPlus,
            mealList: data.mealList,
            meal_ids: data.menu[menu_pos].meal_ids,
            menuListCheck: menuCheck,
            menuId: idMenu
        });}
        else{
            this.setState({
                mealList: data.mealList,
                menuListCheck: menuCheck,
                menuId: idMenu
            });
        }
    }

    populateDayOptions(days) {
        return days.map((day, index) => (
            // load days
            <option key={index} value={day.val}>{day.day}</option>
        ));
    }

    toggleModal = (x) => {
        this.setState({
            isOpen: !this.state.isOpen,
            id: x
        });
    }
  
    handleDelete = () => {
        let index = this.state.meal_ids.indexOf(this.state.id)
        if (index !== -1) this.state.meal_ids.splice(index, 1)
        let menuData = {
            meal_ids: this.state.meal_ids,
            user_id: parseInt(localStorage.getItem("user_id"))
        }
        this.props.updateMenu(this.state.menuId, JSON.stringify(menuData))
        this.props.getMenu(localStorage.getItem("user_id"));
        this.toggleModal()
    }

    getDayMenu = (e) => {
        let menuData = {
            value: parseInt(localStorage.getItem("user_id"))
        }
        this.props.getMenu(e.target.value, JSON.stringify(menuData));
    }

    render(){
        return(
            <div>
                <Navb />
                <div className="container">
                    <h1>Meals For the day</h1>
                </div>
                <label><span>Select Menu</span></label>
                <select id="day" name="day" onChange={this.getDayMenu}>
                    <option disabled selected value> -- select an option -- </option>
                    {this.populateDayOptions(this.props.days)}
                </select>
                <MealDayTable dates={this.props.dateList} days={this.props.days} menu={this.props.menu} menuId={this.state.menuId} menuCheck={this.state.menuListCheck} meals={this.state.mealList} toggleModalButton={this.toggleModal.bind(this)}/>
                <Modal 
                    //Delete Modal
                    show={this.state.isOpen}
                    onClose={this.toggleModal}>
                    Are you sure you want remove meal from menu.
                    <br />
                    <br />
                    <button className="button" onClick={this.handleDelete}>
                        Delete Meal
                    </button>
                </Modal>
            </div>
        );
    }

}


MealDay.propTypes = {
    //actions
    getMenu: PropTypes.func.isRequired,
    getMeals: PropTypes.func.isRequired,
    getCatererMenu: PropTypes.func.isRequired,
    updateMenu: PropTypes.func.isRequired,
    getDays: PropTypes.func.isRequired,
    getMenuDays: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    menu: state.menu.menu,
    dateList: state.menuDays.menu_days,
    menuId: state.menu.menuId,
    catererMenu: state.catererMenu.menu,
    mealList: state.meals.meals,
    days: state.days.days,
}) 



export default connect(mapStateToProps, { getMenu, getMeals, updateMenu, getCatererMenu, getDays, getMenuDays })(MealDay);
