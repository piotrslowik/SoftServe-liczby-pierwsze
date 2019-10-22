import React, { Component } from 'react'

import Modal from '..'
import ThirdPartyRegisterButton from '../../Shared/Fields/ThirdPartyRegisterButton'
import TextBetweenLines from '../../Shared/TextBetweenLines'
import LabelledInput from '../../Shared/Fields/LabelledInput';
import Button from '../../Shared/Fields/Button';

class Modal_Login extends Component {

    state = {
        email: '',
        password: '',
        passwordRepeat: ''
    }
    render() {
        return (
          <Modal onCloseModal={this.props.onCloseModal} header={this.props.header}>
            <div className="registration flex-column-center">
                <div className="third-party-buttons flex-column-center">
                    <ThirdPartyRegisterButton text="zarejestruj przez facebooka" registerWith={this.handleThirdPartyRegister} site="facebook" colour="#3B5998" />
                    <ThirdPartyRegisterButton text="zarejestruj przez google" registerWith={this.handleThirdPartyRegister} site="google" colour="#D62D20" />
                    <ThirdPartyRegisterButton text="zarejestruj przez twittera" registerWith={this.handleThirdPartyRegister} site="twitter" colour="#00ACED" />
                </div>

                <TextBetweenLines width="800px" fontSize="16px" text="LUB" />

                <div className="register-form flex-column-center">
                    <LabelledInput label="E-Mail" type="email" value={this.state.email} onChange={this.handleInputEmail} />
                    <LabelledInput label="Hasło" type="password" value={this.state.password} onChange={this.handleInputPassword} />
                    <LabelledInput label="Powtórz hasło" type="password" value={this.state.passwordRepeat} onChange={this.handleInputPasswordRepeat} />
                    <Button modifier="blue" onClick={this.handleRegister} text="Załóż konto" />
                </div>
                
            </div>
          </Modal>
    );
  }

  handleThirdPartyRegister = (site) => {
    alert(`Rejestracja poprzez ${site}`)
  }

  handleRegister = () => {
      this.state.password === this.state.passwordRepeat ? 
        alert(`Zakładam nowe konto: ${this.state.email} - hasło: ${this.state.password}`) :
        alert('Podane hasło musi być takie samo w obu polach.')
  }

  handleInputEmail = e => {
    this.setState({
        email: e.target.value
    })
  }
  handleInputPassword = e => {
    this.setState({
        password: e.target.value
    })
  }
  handleInputPasswordRepeat = e => {
    this.setState({
        passwordRepeat: e.target.value
    })
  }

}
  
export default Modal_Login;