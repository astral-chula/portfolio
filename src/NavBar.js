import React, { Component } from 'react';

export class NavBar extends Component {

  render() {
      return (
        <div className="container">
            <nav className="NavBar row">
              <i className="fa fa-address-card-o col" aria-hidden="true"></i>
              <h2 className="col-11">Namenamename</h2>
              <i className="fa fa-bars col" aria-hidden="true"></i>
            </nav>
        </div>
      );
  }
}
