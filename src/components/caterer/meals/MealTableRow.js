import React, { Component} from 'react';


export class MealTr extends Component{

    componentWillMount() {
    }
    
    handleEdit = (e) => {
        e.preventDefault();
        this.props.toggleEdit(this.props.meal);
    }

    handleDelete = (e) => {
        e.preventDefault();
        this.props.toggleDelete(this.props.meal.id);
    }
    render(){
        return(
            <tr>
                {/* <td>{ this.props.meal.id }</td> */}
                <td>{ this.props.meal.meal_name }</td>
                <td>{ this.props.meal.meal_type }</td>
                <td>{ this.props.meal.price }</td>
                <td><a id="myBtn" href="./EditMeal.html" className="button-edit" onClick={this.handleEdit}>Edit</a></td>
                <td><button className="button" onClick={this.handleDelete} >Delete</button></td>
            </tr>
        );
    }
}

export default MealTr;
