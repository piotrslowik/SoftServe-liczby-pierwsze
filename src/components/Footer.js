import React, { Component } from 'react';
import '../stylesheets/Footer.css';


class Footer extends Component {

  render() {
    return (
      <div className="Footer">
        <p>Moto-Auto © {new Date().getFullYear()}</p>
      </div>
    );
  }
}

export default Footer;