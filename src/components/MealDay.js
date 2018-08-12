import React, { Component } from "react";
import Navb from './Navbar3';
import MealDayTable from './MealDayTable';
import Modal from './Modal';
import { connect } from  'react-redux';
import { getMenu } from '../actions/menu';
import { getMeals } from '../actions/meals';
import { updateMenu } from '../actions/updateMenu';
import { PropTypes } from 'prop-types';

class MealDay extends Component{
    constructor(props){
        super(props);
        this.state = {
            menu: [],
            mealList: [],
            isOpen: false

        }
    }

    componentWillMount(){
        this.props.getMenu(1);
        this.props.getMeals(localStorage.getItem('x-access-token'));   
    }

    componentDidMount() {

    }

    componentWillReceiveProps(data){
        let menuPlus = []
        for(let i = 0; i < data.menu[1].meal_ids.length; i++){
            for (let p = 0; p < data.mealList.length; p++) {
                if ((data.menu[1].meal_ids[i]) === data.mealList[p].id){
                        menuPlus.push(data.mealList[p])
                }
            }
        }
        this.setState({
            menu: menuPlus,
            mealList: data.mealList,
            meal_ids: data.menu[1].meal_ids
        }, () => {
        });
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
            user_id: 10
        }
        this.props.updateMenu(2, JSON.stringify(menuData))
    }

    render(){
        return(
            <div>
                <Navb />
                <div className="container">
                    <h1>Meals For the day</h1>
                </div>
                <MealDayTable menu={this.state.menu} meals={this.state.mealList} toggleModalButton={this.toggleModal.bind(this)}/>
                <Modal show={this.state.isOpen}
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
    getMenu: PropTypes.func.isRequired,
    getMeals: PropTypes.func.isRequired,
    updateMenu: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    menu: state.menu.menu,
    mealList: state.meals.meals
}) 



export default connect(mapStateToProps, { getMenu, getMeals, updateMenu })(MealDay);
