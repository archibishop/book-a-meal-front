import React, { Component } from 'react';
import MealTr from './MealTableRow';


export class Meals extends Component{

    componentWillMount(){
    }

    renderMeals = () => this.props.meals.map((meal, index)=>(
        <MealTr
            toggleEdit={this.props.toggleEditButton}
            toggleDelete={this.props.toggleDeleteButton}
            key={index}
            meal={meal}
        />
    ));
    render(){
        return(
            <div>
                <table >
                    <tbody>
                    <tr>
                        {/* <th>Id</th> */}
                        <th>Name</th>
                        <th>Type</th>
                        <th>Price</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                    {this.renderMeals()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Meals;
