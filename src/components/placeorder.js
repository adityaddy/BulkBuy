import React, { Component } from 'react';
import axios from 'axios';

export default class PlaceOrder extends Component {

    constructor(props) {
        super(props);

        this.state = {
            Quantity: '',
            Name: localStorage.getItem('item'),
            Vendor: localStorage.getItem('vendor'),
            User: localStorage.getItem('userid'),

        }
        localStorage.removeItem('vendor')
        localStorage.removeItem('item')
        this.onChangeQuantity = this.onChangeQuantity.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChangeQuantity(event) {
        this.setState({ Quantity: event.target.value });
    }
    onSubmit(e) {
        
        e.preventDefault();

        const newOrder = {
            Name: this.state.Name,
            Vendor: this.state.Vendor,
            User: this.state.User,
            Quantity: this.state.Quantity
        }

        console.log(newOrder);

        axios.post('http://localhost:4000/orders/add', newOrder)
            .then(res => console.log("Hello "+res.data.status));
            alert('Order Placed')
        window.location = '/';
       this.setState({
           Quantity : ''
       })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Quantity: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Quantity}
                            onChange={this.onChangeQuantity}
                        />
                    </div>
                    <div>
        <p>{this.Name}</p>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Place Order" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}