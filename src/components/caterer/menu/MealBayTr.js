import React, { Component } from 'react';

export class MealDayTr extends Component{
    
    handleRemove = (e) => {
        // Remve meal from menu
        e.preventDefault();
        this.props.toggleBtn(this.props.menu.id);
    }

    render(){
        return(
            <tr>
                <td>{this.props.menu.meal_name}</td>
                <td>{this.props.menu.meal_type}</td>
                <td><button className="button" onClick={this.handleRemove}>Remove</button></td>
            </tr>
        );
    }
    
}
export default MealDayTr;
