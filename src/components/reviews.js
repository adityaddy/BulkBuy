import React, {Component} from 'react';
import { Button} from 'react-bootstrap';
import axios from 'axios';




export default class ShowReview extends Component {
    
    constructor(props) {
        super(props);
        this.state = {reviews: []}
    }


    componentDidMount() {
        const prod1 = {name:localStorage.getItem('userid')}
        axios.post('http://localhost:4000/orders/showreviews',prod1)
             .then(response => {
                 this.setState({reviews: response.data});
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
                            <th>Product</th>
                            <th>User</th>
                            <th>Review</th>
                            <th>Rating</th>
                        </tr>
                    </thead>
                    <tbody>
                    { 
                        this.state.reviews.map((currentproduct, i) => {
                            return (
                                <tr>
                                    <td>{currentproduct.Name}</td>
                                    <td>{currentproduct.User}</td>
                                    <td>{currentproduct.Review}</td>
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