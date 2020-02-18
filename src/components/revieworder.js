import React, {Component} from 'react';
import { Button, Container} from 'react-bootstrap';
import axios from 'axios';




export default class ReviewOrder extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            rate: '1',
            review:'',
            orderid:localStorage.getItem('orderid'),
            VendorRate:'1',
            status:localStorage.getItem('status')
        }
        //localStorage.removeItem('status')
        this.onChangeRate = this.onChangeRate.bind(this);
        this.onChangeVendorRate = this.onChangeVendorRate.bind(this);
        this.onChangeReview = this.onChangeReview.bind(this);
        this.onSubmit1 = this.onSubmit1.bind(this);
        this.onSubmit2 = this.onSubmit2.bind(this);
    }

    onChangeRate(event) {
        this.setState({ rate: event.target.value });
    }
    onChangeVendorRate(event) {
        this.setState({ VendorRate: event.target.value });
    }
    onChangeReview(event) {
        this.setState({ review : event.target.value });
    }
    onSubmit1(e) {
        
        e.preventDefault();

        const newreview = {
            Rate: this.state.rate,
            Review: this.state.review,
            OrderId: this.state.orderid,
        }

        console.log(newreview);

        
        if(localStorage.getItem('status') == 'Dispatched')
        {
            localStorage.removeItem('status')
        axios.post('http://localhost:4000/orders/review', newreview)
            .then(res => console.log(res.data));
            alert('Review Posted')
        }else{
            alert('Order is Not yet Dispatched' )
            //alert(localStorage.getItem('status'))
        }
        this.setState({
            rate: '1',
            review: '',
        });
        localStorage.removeItem('orderid')
        window.location = '/';
    }

    onSubmit2(e) {
        
        e.preventDefault();

        const vendor = {
            id: localStorage.getItem('vendorid'),
            rate: this.state.VendorRate,
        }

        console.log(vendor);

        if(localStorage.getItem('status')=='Placed' || localStorage.getItem('status')=='Dispatched'){
            localStorage.removeItem('status')
           axios.post('http://localhost:4000/users/rate', vendor)
            .then(res => console.log(res.data));
            alert('Review Posted')
        }else{
            alert('Order is not yet placed')
            //alert(localStorage.getItem('status'))
        }
        this.setState({
            VendorRate: '1',
        });
        localStorage.removeItem('vendorid')
        window.location = '/';
    }
 

    render() {
        return (
            <div>
                    <form onSubmit={this.onSubmit1}>
                    <div className="form-group">
                        <label>Review: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.review}
                            onChange={this.onChangeReview}
                        />
                    </div>
                    <div className="form-group">
                        <label>Rating :
                               <select className="form-control" value={this.state.rate} onChange={this.onChangeRate}
                            >
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </label>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Review" className="btn btn-primary" />
                    </div>
                </form>
                <Container>
                <h1>Rate Vendor</h1>
                </Container>


                <form onSubmit={this.onSubmit2}>
                    <div className="form-group">
                        <label>Rating :
                               <select className="form-control" value={this.state.VendorRate} onChange={this.onChangeVendorRate}
                            >
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </label>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Review" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}