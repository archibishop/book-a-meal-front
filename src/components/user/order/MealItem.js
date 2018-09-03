import React, {Component} from 'react';

export class MealItem extends Component{

    constructor(props){
        super(props);
    }
    
    componentDidMount(){
    }

    // handleChange = (e) => {
    //     const new_price = e.target.value * this.props.meal.price;
    //     let test_value = e.target.value * this.props.meal.price;
    //     this.props.meal.total = e.target.value * this.props.meal.price;
    // }

    handleSubmit = (e) =>{
        this.props.orderList(this.props.meal)
    }
    
    render(){
        return(
            <div>
                <div className="row">
                    <div className="col2">
                        <p id="dishname1">{this.props.meal.meal_name}</p>
                    </div>
                    <div className="col3">
                        <p>{this.props.meal.meal_type}</p>
                    </div>
                    <div className="col">
                        <p><span id="testValue1" name='testValue1'>{this.props.meal.price}</span></p>
                    </div>
                    <div className="col4">
                        <button className="buttons" onClick={this.handleSubmit}>Add  To Cart</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default MealItem;
