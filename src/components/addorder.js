import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';



function updateProduct(var1, var2) {
    console.log("function called")
    localStorage.setItem('item',var1)
    localStorage.setItem('vendor',var2)
    window.location = '/placeorder';
}


export default class Orders extends Component {


    constructor(props) {
        super(props);

        this.state = {
            Products: [],
            Query: [],
            SearchString: '',
        }

        this.onChangeSearch = this.onChangeSearch.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChangeSearch(event) {
        this.setState({ SearchString: event.target.value });
    }

    onSubmit(e) {

        e.preventDefault();

        console.log(this.SearchString);

        this.setState({ SearchString: e.target.value });
        this.state.Query = [];
        console.log(this.SearchString);
        if (this.state.SearchString.length > 1) {
            console.log(this.SearchString)
            for (let i = 0; i < this.state.Products.length; i++) {
                if (this.state.Products[i].Name == (this.state.SearchString)) {
                    //check if room is already in the result
                    this.state.Query.push(this.state.Products[i]);
                }

            }
            console.log(this.Query)
        }

        //window.location = '/';
    }


    componentDidMount() {
        const prod1 = { name: localStorage.getItem('userid') }
        axios.post('http://localhost:4000/product/showall', prod1)
            .then(response => {
                this.setState({ Products: response.data });
                this.setState({ Query: response.data });
                console.log(response)
            })
            .catch(function (error) {
                console.log(error);
            })
    }



    render() {


        return (
            
            <div>
                <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Name Of Product: </label>
                    <input type="text"
                        className="form-control"
                        value={this.state.SearchString}
                        onChange={this.onChangeSearch}
                    />
                </div>
                <div className="form-group">
                        <input type="submit" value="Search" className="btn btn-primary" />
                    </div>
            </form>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Vendor</th>
                            <th>Vendor Rating</th>
                            <th>Bundle Quantity</th>
                            <th>Bundle Cost</th>
                            <th>Left</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.Query.map((currentproduct, i) => {
                                return (
                                    <tr>
                                        <td>{currentproduct.Name}</td>
                                        <td>{currentproduct.User}</td>
                                        <td>{currentproduct.VendorRating}</td>
                                        <td>{currentproduct.BundleQuantity}</td>
                                        <td>{currentproduct.BundleCost}</td>
                                        <td>{currentproduct.BundleQuantity - currentproduct.DispatchQuantity}</td>
                                        <td><Button variant="danger" onClick={() => updateProduct(currentproduct.Name, currentproduct.User)}>Place Order</Button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}