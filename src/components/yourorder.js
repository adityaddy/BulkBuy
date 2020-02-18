import React, {Component} from 'react';
import { Button} from 'react-bootstrap';
import axios from 'axios';



function updateProduct(id,status,vendor){
    if(status=='Dispatched' || status == 'Placed'){
    localStorage.setItem('orderid',id)
    localStorage.setItem('vendorid',vendor)
    localStorage.setItem('status',status)
         window.location = '/reviewproduct';
    }
}

export default class ShowOrder extends Component {
    
    constructor(props) {
        super(props);
        this.state = {products: []}
    }


    componentDidMount() {
        const prod1 = {name:localStorage.getItem('userid')}
        axios.post('http://localhost:4000/orders/show',prod1)
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
                            <th>Quantity</th>
                            <th>Status</th>
                            <th>Vendor</th>
                        </tr>
                    </thead>
                    <tbody>
                    { 
                        this.state.products.map((currentproduct, i) => {
                            return (
                                <tr>
                                    <td>{currentproduct.Name}</td>
                                    <td>{currentproduct.Quantity}</td>
                                    <td>{currentproduct.Status}</td>
                                    <td>{currentproduct.Vendor}</td>
                                    <td><Button variant="primary" onClick={() => updateProduct(currentproduct._id,currentproduct.Status,currentproduct.Vendor)}>Rate & Review</Button></td>
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