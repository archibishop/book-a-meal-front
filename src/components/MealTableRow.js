import React, { Component} from 'react';


class MealTr extends Component{

    componentWillMount() {
        console.log(this.props)
    }
    
    handleEdit = (e) => {
        e.preventDefault();
        console.log("Clicked Me")
        this.props.toggleEdit(this.props.meal);
    }

    handleDelete = (e) => {
        e.preventDefault();
        console.log("Clicked Me Delete")
        this.props.toggleDelete(this.props.meal.id);
    }
    render(){
        return(
            <tr>
                <td>{ this.props.meal.id }</td>
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
