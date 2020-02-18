import React, {Component} from 'react';
import { Button} from 'react-bootstrap';
import axios from 'axios';



export default class ShippedProduct extends Component {
    
    constructor(props) {
        super(props);
        this.state = {products: []}
    }


    componentDidMount() {
        const prod1 = {name:localStorage.getItem('userid')}
        axios.post('http://localhost:4000/product/shipped',prod1)
             .then(response => {
                 this.setState({products: response.data});
                 console.log(response)
             })
             .catch(function(error) {
                 console.log(error);
             })
    }

 

    render() {
        return (
            <div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Bundle Quantity</th>
                            <th>Bundly Cost</th>
                            <th>Rating</th>
                        </tr>
                    </thead>
                    <tbody>
                    { 
                        this.state.products.map((currentproduct, i) => {
                            return (
                                <tr>
                                    <td>{currentproduct.Name}</td>
                                    <td>{currentproduct.BundleQuantity}</td>
                                    <td>{currentproduct.BundleCost}</td>
                                    <td>{currentproduct.Rating}</td>
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