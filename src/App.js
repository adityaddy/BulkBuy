import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import UsersList from './components/users-list.component'
import CreateUser from './components/create-user.component'
import Landing from './components/landing'
import Login from './components/login'
import NavBar from './components/navbar'
import Profile from './components/profile'
import AddProduct from './components/addproduct'
import ShowProduct from './components/showproduct'
import DispatchProduct from './components/dispatch'
import ShippedProduct from './components/shipped'
import Orders from './components/addorder'
import PlaceOrder from './components/placeorder'
import ShowOrder from './components/yourorder'
import ReviewOrder from './components/revieworder'
import ShowReview from './components/reviews'
function App() {
  return (
    <Router>
      <div className="container">
        {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/" className="navbar-brand">Home</Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/Login" className="nav-link">Login</Link>
              </li>
              <li className="navbar-item">
                <Link to="/Register" className="nav-link">Create User</Link>
              </li>
            </ul>
          </div>
        </nav> */}
        <NavBar />

        <br/>
        <Route path="/" exact component={Landing}/>
        <div className="container"></div>
        <Route path="/Login" exact component={Login}/>
        <Route path="/Profile" exact component={Profile}/>
        <Route path="/Register" component={CreateUser}/>
        <Route path="/addproduct" component={AddProduct}/>
        <Route path="/showproduct" component={ShowProduct}/>
        <Route path="/dispatchproduct" component={DispatchProduct}/>
        <Route path="/shippedproduct" component={ShippedProduct}/>
        <Route path="/orders" component={Orders}/>
        <Route path="/placeorder" component={PlaceOrder}/>
        <Route path="/showorder" component={ShowOrder}/>
        <Route path="/reviewproduct" component={ReviewOrder}/>
        <Route path="/reviews" component={ShowReview}/>
      </div>
    </Router>


  );
}

export default App;
