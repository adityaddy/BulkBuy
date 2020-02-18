import React, { Component } from 'react'

class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: localStorage.getItem('type'),
        }
    }
  
    render() {

    return (
      <div className="container">
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
          <h1 className="text-center"> This is Given ID</h1>
            <h1 className="text-center"> {this.id} </h1>
          </div>
        </div>
      </div>
    )
  }
}

export default Profile