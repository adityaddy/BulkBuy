import React, { Component } from 'react';
import axios from 'axios';

export default class AddProduct extends Component {

    constructor(props) {
        super(props);

        this.state = {
            Name: '',
            BundleQuantity: '',
            BundleCost: '',
            User: localStorage.getItem('userid')
        }

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeBundleQuantity = this.onChangeBundleQuantity.bind(this);
        this.onChangeBundleCost = this.onChangeBundleCost.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChangeName(event) {
        this.setState({ Name: event.target.value });
    }
    onChangeBundleCost(event) {
        this.setState({ BundleCost: event.target.value });
    }

    onChangeBundleQuantity(event) {
        this.setState({ BundleQuantity: event.target.value });
    }

    onSubmit(e) {
        
        e.preventDefault();

        const newProduct = {
            Name: this.state.Name,
            BundleCost: this.state.BundleCost,
            BundleQuantity: this.state.BundleQuantity,
            User: this.state.User
        }

        console.log(newProduct);

        axios.post('http://localhost:4000/product/add', newProduct)
            .then(res => console.log(res.data));

        this.setState({
            Name: '',
            BundleQuantity: '',
            BundleCost: '',
            User: localStorage.getItem('userid')
        });

        //window.location = '/';
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name Of Product: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Name}
                            onChange={this.onChangeName}
                        />
                    </div>
                    <div className="form-group">
                        <label>BundleQuantity: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.BundleQuantity}
                            onChange={this.onChangeBundleQuantity}
                        />
                    </div>
                    <div className="form-group">
                        <label>BundleCost: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.BundleCost}
                            onChange={this.onChangeBundleCost}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Add Product" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}