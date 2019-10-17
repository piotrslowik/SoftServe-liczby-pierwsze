import React, { Component } from 'react'

class ThirdPartyRegisterButton extends Component {

    colour = {
        background: this.props.colour
    }

    render() {
        return (
            <button className="third-party-reg-btn" onClick={() => this.props.registerWith(this.props.site)} style={this.colour}>{this.props.text}</button>
    );
  }

}
  
export default ThirdPartyRegisterButton;