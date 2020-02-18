import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

class NavBar extends Component {
  logOut(e) {
    e.preventDefault()
    localStorage.removeItem('userid')
    localStorage.removeItem('seller')
    localStorage.removeItem('buyer')
    this.props.history.push('/')
  }

  render() {
    const loginRegLink = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/register" className="nav-link">
            Register
          </Link>
        </li>
      </ul>
    )

    const VendorView = (
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/showproduct" className="nav-link">
              My Product
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/addproduct" className="nav-link">
              Add Product
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/dispatchproduct" className="nav-link">
              Ready To Dispatch
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/shippedproduct" className="nav-link">
              Shipped Product
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/reviews" className="nav-link">
              Reviews
            </Link>
          </li>
          <li className="nav-item">
          <a href="" onClick={this.logOut.bind(this)} className="nav-link">
            Logout
          </a>
        </li>
        </ul>
      )

      const UserView = (

        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/orders" className="nav-link">
              Product
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/showorder" className="nav-link">
              Your Order
            </Link>
          </li>
          <li className="nav-item">
          <a href="" onClick={this.logOut.bind(this)} className="nav-link">
            Logout
          </a>
        </li>
        </ul>
      )

    const userLink = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/profile" className="nav-link">
            User
          </Link>
        </li>
        <li className="nav-item">
          <a href="" onClick={this.logOut.bind(this)} className="nav-link">
            Logout
          </a>
        </li>
      </ul>
    )

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExample10"
          aria-controls="navbarsExample10"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div
          className="collapse navbar-collapse justify-content-md-center"
          id="navbarsExample10"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
          </ul>
          {localStorage.userid ? (localStorage.type == "Seller" ? VendorView: UserView):loginRegLink }
        </div>
      </nav>
    )
  }
}

export default withRouter(NavBar)