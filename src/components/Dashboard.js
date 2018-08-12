import React, { Component } from 'react';
import Navb from './Navbar3';
import Meals from './Meals';
import '../css/Styles.css';
import Modal from './Modal';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { getMeals } from '../actions/meals';
import { addMeal } from '../actions/addMeal';
import { updateMeal } from '../actions/updateMeal';
import { deleteMeal } from '../actions/deleteMeal';

class Dashboard extends Component{

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
        console.log("test")
        console.log(this.state)
        console.log(this.props)
        this.props.getMeals(localStorage.getItem("x-access-token"));
    }

    toggleModal = (id) => {
        this.setState({
            isOpen: !this.state.isOpen,
            id: id
        });
    }

    toggleModal1 = (meal) => {
        // this.setState({
        //     isOpen1: !this.state.isOpen1,
        //     editMeal: meal
        // });
        this.setState({
            isOpen1: !this.state.isOpen1,
            editMeal: meal }, () => {
            console.log(this.state.editMeal)
        });
        console.log(meal.meal_name)
        console.log("Edit modal")
        console.log(this.state)
        console.log(this.state.isOpen1)
    }

    toggleModal2 = () => {
        this.setState({
            isOpen2: !this.state.isOpen2,
        });
        console.log(this.state.isOpen1)
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
            meal_type: e.target.elements.country.value
        }
        console.log(mealData)
        this.props.addMeal(JSON.stringify(mealData))
    }

    handleEditMeal = (e) => {
        e.preventDefault();
        let mealData = {
            meal_name: e.target.elements.firstname.value,
            price: parseInt(e.target.elements.lastname.value),
            meal_type: e.target.elements.country.value
        }
        console.log(mealData)
        console.log("Current state")
        console.log(this.state.editMeal.meal_name)
        console.log(this.state.editMeal.id)
        this.props.updateMeal(this.state.editMeal.id, JSON.stringify(mealData))
        this.toggleModal()
    }

    handleDeleteMeal = (e) => {
        e.preventDefault();
        console.log("Current state")
        console.log(this.state.id)
        this.props.deleteMeal(this.state.id)
    }

    render(){
        return(
            <div className="dashboard">
                <Navb />
                <div className="container">
                    <h1>MEALS</h1>
                    <a className="button-add" onClick={this.handleAdd}>Add Meal</a>
                    <br />
                </div>
                <Meals meals={this.props.mealList} toggleEditButton={this.toggleModal1.bind(this)} 
                toggleDeleteButton={this.toggleModal.bind(this)} />
                <Modal show={this.state.isOpen}
                    onClose={this.toggleModal}
                    orderList={this.props.orderList}>
                    Are you sure you want delete an Meal.
                    <br />
                    <br />
                    <button className="button" onClick={this.handleDeleteMeal}>
                        Delete
                    </button>
                </Modal>
                <Modal show={this.state.isOpen2}
                    onClose={this.toggleModal2}>
                    <h1>Add Meal</h1>

                    <div >
                        <form action="./dashboard.html" onSubmit={this.handleAddMeal}>
                            <label htmlFor="fname">Meal</label>
                            <input type="text" id="fname" name="firstname" placeholder="Your name.."  />

                            <label htmlFor="lname">Price</label>
                            <input type="number" id="lname" name="lastname" placeholder="Your last name.." />

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
                <Modal show={this.state.isOpen1}
                    onClose={this.toggleModal1}
                    orderList={this.props.orderList}>
                    <h1>Edit Meal</h1>
                    <div >
                        <form onSubmit={this.handleEditMeal}>
                            <label htmlFor="fname">Meal</label>
                            <input type="text" id="fname" name="firstname" placeholder={this.state.editMeal.meal_name} />

                            <label htmlFor="lname">Price</label>
                            <input type="text" id="lname" name="lastname" placeholder={this.state.editMeal.price} />

                            <label htmlFor="country">Type</label>
                            <select id="country" name="country">
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
    getMeals: PropTypes.func.isRequired,
    addMeal: PropTypes.func.isRequired,
    updateMeal: PropTypes.func.isRequired,
    deleteMeal: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    mealList: state.meals.meals
})

export default connect(mapStateToProps, {getMeals, addMeal, updateMeal, deleteMeal})(Dashboard);
