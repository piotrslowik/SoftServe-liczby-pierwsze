import React, { Component } from 'react'

class TextBetweenLines extends Component {
    style = {
        wrapper: {
            width: this.props.width
        },
        container: {
            display: 'flex',
            'align-items': 'center',
            width: '100%'
        },
        line: {
            width: '100%'
        },
        text: {
            margin: '0 20px',
            'font-size': this.props.fontSize
        }
    }
    render() {
        return (
            <div style={this.style.wrapper}>
                <div style={this.style.container}>
                    <hr style={this.style.line} />
                    <p style={this.style.text}>{this.props.text}</p>
                    <hr style={this.style.line} />
                </div>
            </div>
        );
    }
}
  
export default TextBetweenLines;