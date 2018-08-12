import React, {Component} from 'react';
import rolex from '../img/rolex.jpg'

class MealItem extends Component{

    constructor(props){
        super(props);
        console.log("test")
        console.log(this.props.meal.id)
    }
    
    componentDidMount(){
        // console.log(this.props)
    }

    handleChange = (e) => {
        const new_price = e.target.value * this.props.meal.price;
        let test_value = e.target.value * this.props.meal.price;
        this.props.meal.total = e.target.value * this.props.meal.price;
    }

    handleSubmit = (e) =>{
        this.props.orderList(this.props.meal.meal_name)
    }
    
    render(){
        return(
            <div>
                <div className="row">
                    <div className="col">
                        <img src={rolex} className="fakeimg" />
                    </div>
                    <div className="col2">
                        <p id="dishname1"><strong>{this.props.meal.meal_name}</strong></p>
                        <p>{this.props.meal.description}</p>
                    </div>
                    <div className="col3">
                        <input type="number" id="Thing1" name="Thing" min="0" max="99" defaultValue={0} className="qtyinput" onChange={this.handleChange} />
                    </div>
                    <div className="col">
                        <p>Price : <span id="testValue1" name='testValue1'>{this.props.meal.price}</span></p>
                        <p>Total : <span name='testVal1'>{this.props.meal.total}</span></p>
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