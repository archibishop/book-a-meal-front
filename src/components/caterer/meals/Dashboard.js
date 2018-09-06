import React, { Component } from 'react';
import Navb from '../../navs/Navbar3';
import Meals from './Meals';
import '../../../css/Styles.css';
import Modal from '../../modal/Modal';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { getMeals } from '../../../actions/meals';
import { addMeal } from '../../../actions/addMeal';
import { updateMeal } from '../../../actions/updateMeal';
import { deleteMeal } from '../../../actions/deleteMeal';
import Notifications, { notify } from 'react-notify-toast';

export class Dashboard extends Component{

    constructor(props){
        super(props);
        this.state = {
            isOpen: false,
            isOpen1: false,
            isOpen2: false,
            editMeal:{
                meal_name: '',
                price:''
            }
        }
    }
    
    componentWillMount(){
        this.props.getMeals(localStorage.getItem("user_id"),localStorage.getItem("x-access-token"));
    }

    componentWillReceiveProps(data){
        if (JSON.stringify(this.props) !== JSON.stringify(data)) 
        {
            this.getMealList();
        }
    }

    getMealList = () => {
        this.props.getMeals(localStorage.getItem("user_id"),localStorage.getItem("x-access-token"));
    }


    toggleModal = (id) => {
        this.setState({
            isOpen: !this.state.isOpen,
            id: id
        });
    }

    toggleModal1 = (meal) => {
        this.setState({
            isOpen1: !this.state.isOpen1,
            editMeal: meal }, () => {
        });
    }

    toggleModal2 = () => {
        this.setState({
            isOpen2: !this.state.isOpen2,
        });
    }

    handleAdd = (e) => {
        e.preventDefault();
        this.toggleModal2();

    }

    handleAddMeal = (e) => {
        e.preventDefault();
        let mealData = {
            meal_name: e.target.elements.firstname.value,
            price: parseInt(e.target.elements.lastname.value),
            meal_type: e.target.elements.country.value,
            admin_id: parseInt(localStorage.getItem('user_id'))
        }
        this.props.addMeal(JSON.stringify(mealData))
        this.toggleModal2();
    }

    handleEditMeal = (e) => {
        e.preventDefault();
        let meal = {
            meal_name: e.target.elements.firstname.value,
            meal_type: e.target.elements.country.value,
            price: parseInt(e.target.elements.lastname.value),
            admin_id: parseInt(localStorage.getItem('user_id'))
        }
        this.props.updateMeal(this.state.editMeal.id, JSON.stringify(meal))
        this.toggleModal1(meal)
    }

    handleDeleteMeal = (e) => {
        e.preventDefault();
        this.props.deleteMeal(parseInt(this.state.id))
        this.toggleModal(this.state.id)
    }

    render(){
        return(
            <div className="dashboard">
                <Notifications />
                <Navb />
                <div className="container">
                    <h1>MEALS</h1>
                    <a className="button-add" onClick={this.handleAdd}>Add Meal</a>
                    <br />
                </div>
                <Meals 
                    // Meals Component
                    meals={this.props.mealList} toggleEditButton={this.toggleModal1.bind(this)} 
                    toggleDeleteButton={this.toggleModal.bind(this)} 
                />
                <Modal 
                    onClose={this.toggleModal}
                    show={this.state.isOpen}
                    orderList={this.props.orderList}>
                    Are you sure you want delete the Meal.
                    <br />
                    <br />
                    <button id="btn-delete" className="button" onClick={this.handleDeleteMeal}>
                        Delete
                    </button>
                </Modal>
                <Modal 
                    // Add meal modal
                    show={this.state.isOpen2} 
                    orderList={this.props.orderList} 
                    onClose={this.toggleModal2}>
                    <h1>Add Meal</h1>

                    <div >
                        <form id="form-add" onSubmit={this.handleAddMeal}>
                            <label htmlFor="fname">Meal</label>
                            <input type="text" id="fname" name="firstname" placeholder="Meal Name..."  />

                            <label htmlFor="lname">Price</label>
                            <input type="number" id="lname" name="lastname" placeholder="Price 2000UGX..." />

                            <label htmlFor="country">Type</label>
                            <select id="country" name="country">
                                <option value="breakfast">Breakfast</option>
                                <option value="lunch">Lunch</option>
                                <option value="supper">Supper</option>
                            </select>

                            <input type="submit" value="Submit" />
                        </form>
                    </div>
                </Modal>
                <Modal 
                    // Edit form
                    show={this.state.isOpen1}
                    onClose={this.toggleModal1}
                    orderList={this.props.orderList}>
                    <h1>Edit Meal</h1>
                    <div >
                        <form id="form-edit" onSubmit={this.handleEditMeal}>
                            <label htmlFor="fname">Meal</label>
                            <input type="text" id="fname" name="firstname" placeholder={this.state.editMeal.meal_name} />

                            <label htmlFor="lname">Price</label>
                            <input type="text" id="lname" name="lastname" placeholder={this.state.editMeal.price} />

                            <label htmlFor="country">Type</label>
                            <select id="country" name="country">
                                <option disabled selected value> -- select an option -- </option>
                                <option value="breakfast">Breakfast</option>
                                <option value="lunch">Lunch</option>
                                <option value="supper">Supper</option>
                            </select>

                            <input type="submit" value="Submit"/>
                        </form>
                    </div>
                </Modal>
            </div>
        );
    }
}

Dashboard.propTypes = { 
    // actions
    getMeals: PropTypes.func.isRequired,
    addMeal: PropTypes.func.isRequired,
    updateMeal: PropTypes.func.isRequired,
    deleteMeal: PropTypes.func.isRequired
}

const mapStateToProps = state => (
    {
        editMealInfo: state.updateMeal.message,
        mealList: state.meals.meals,
        addMealInfo: state.addMeal.message, 
        deleteMealInfo: state.deleteMeal.message
    }
)

export default connect(mapStateToProps, {getMeals, addMeal, updateMeal, deleteMeal})(Dashboard);
