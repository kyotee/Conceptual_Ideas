import React, { Component } from 'react';
import { sanitization } from '../input_sanitization.js';
import { eventListenerMacro } from '../helpers/event_listeners.js';

class SignupSigninForm extends Component {
	constructor(props) {
		super(props);

		this.buttonValidChecker = this.buttonValidChecker.bind(this);
		this.submission = this.submission.bind(this);
		this.submissionEnter = this.submissionEnter.bind(this);
	}
	componentDidMount() {

	}
	nameColor() {
		// let name = verifyNameInput.value;
		// let nameLength = verifyNameInput.value.length;
		// let reg = /^[a-zA-Z]+$/;

		// if (nameLength > 0 && nameLength <= 12 && reg.test(String(name)))
		// 	this.colorChanger(verifyNameInput, verifyNameColor, verifyNameDisplay, "Green");
	}
	emailColor() {
		// let emailValue = verifyEmailInput.value;
		// let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		//  		if (re.test(String(emailValue)) && emailValue.length > 0 && emailValue.length < 40)
		// 	this.colorChanger(verifyEmailInput, verifyEmailColor, verifyEmailDisplay, "Green");
	}
	passwordColor() {
		// let passwordLength = verifyPasswordInput.value.length;

		// // case were new password field != password confirm password
		// if (verifyPasswordInput.value != document.getElementById('verify-password-confirm-input').value
		// 	&& document.getElementsByClassName('verify-password-confirm')[0].style.color === "rgb(50, 205, 50)") {
		// 	document.getElementsByClassName('verify-password-confirm')[0].style.color = "#0080ff";
		// 	document.getElementById('verify-password-confirm-input').style.borderColor = "#00aced";
		// }

		// // case where new password field == password confirm password
		// if (verifyPasswordInput.value === document.getElementById('verify-password-confirm-input').value 
		// 	&& verifyPasswordInput.value !== "") {
		// 	document.getElementById('verify-password-confirm-input').style.borderColor = "#32CD32";
		// 	document.getElementsByClassName('verify-password-confirm')[0].style.color = "#32CD32";
		// 	document.getElementsByClassName('verify-password-confirm')[1].style.display = "none";
		// }

		// if(passwordLength >= 6 && passwordLength <= 12)
		// 	this.colorChanger(verifyPasswordInput, verifyPasswordColor, verifyPasswordDisplay, "Green");
	}
	verifyPasswordColor() {
		// let passwordLength = verifyPasswordInput.value.length;

		// // case were new password field != password confirm password
		// if (verifyPasswordInput.value != document.getElementById('verify-password-confirm-input').value
		// 	&& document.getElementsByClassName('verify-password-confirm')[0].style.color === "rgb(50, 205, 50)") {
		// 	document.getElementsByClassName('verify-password-confirm')[0].style.color = "#0080ff";
		// 	document.getElementById('verify-password-confirm-input').style.borderColor = "#00aced";
		// }

		// // case where new password field == password confirm password
		// if (verifyPasswordInput.value === document.getElementById('verify-password-confirm-input').value 
		// 	&& verifyPasswordInput.value !== "") {
		// 	document.getElementById('verify-password-confirm-input').style.borderColor = "#32CD32";
		// 	document.getElementsByClassName('verify-password-confirm')[0].style.color = "#32CD32";
		// 	document.getElementsByClassName('verify-password-confirm')[1].style.display = "none";
		// }

		// if(passwordLength >= 6 && passwordLength <= 12)
		// 	this.colorChanger(verifyPasswordInput, verifyPasswordColor, verifyPasswordDisplay, "Green");
	}
	submission() {
		if (this.props.formType === "Sign up") {
			let userCredentials = {
				user: {
					  name: sanitization(this.props.name),
					  email: sanitization(this.props.email),
					  password: sanitization(this.props.password),
					  password_confirmation: sanitization(this.props.verifyPassword)
				}
			};

			if (userCredentials.user.name === "" || 
				userCredentials.user.email === "" || 
				userCredentials.user.password === "" || 
				userCredentials.user.password_confirmation === "") 
				return;

			$.ajax({
				type: "POST",
				url: "/signup",
				data: userCredentials,
				success: function(data, textStatus, jqXHR) {
					console.log("User creation; submission successful.");
				},
				error: function(jqXHR, textStatus, errorThrown) {
					console.log("User creation; submission unsuccessful.");
				}
			});
		}
		else {
			let userCredentials = {
				userLogin: {
					  email: sanitization(this.props.email),
					  password: sanitization(this.props.password)
				}
			};

			if (userCredentials.userLogin.email === "" || userCredentials.userLogin.password === "")
				return;

			$.ajax({
				type: "POST",
				url: "/login",
				data: userCredentials,
				success: function(data, textStatus, jqXHR) {
					console.log("User login; submission successful.");
				},
				error: function(jqXHR, textStatus, errorThrown) {
					console.log("User login; submission unsuccessful.");
				}
			});
		}
	}
	submissionEnter(e) {
		let valueId = e.target.id;
		let valueString = e.target.value;

		// if else statement to enforce strict equality 
		if (valueId === 'verify-name-input') {
			this.props.setName(valueString);
			this.nameColor();
		}
		else if (valueId === 'verify-email-input') {
			this.props.setEmail(valueString);
			this.emailColor();
		}
		else if (valueId === 'verify-password-input') {
			this.props.setPassword(valueString);
			this.passwordColor();
		}
		else if (valueId === 'verify-password-confirm-input') {
			this.props.setVerifyPassword(valueString);
			this.verifyPasswordColor();
		}

		if (e.key === 'Enter')
			this.submission();
	}
	signUpForm() {
		return (
			<div id="signup-table-rails">
				<table id="signup-table">
					<tbody>
						<tr>
							<th><div className="idea-icon-form"></div><h2 className="form-title">{this.props.formType}</h2></th>
						</tr>
						<tr>
							<th><p className="verify-name">User Name</p></th>
						</tr>
						<tr>
							<td>
								<input id="verify-name-input" value={this.props.name} onChange={this.submissionEnter} onKeyPress={this.submissionEnter} type="text" name="name"></input><br/>
								<p className="verify-name">between 1 to 12 letters</p>
							</td>
						</tr>
						<tr>
							<th><p className="verify-email">E-mail</p></th>
						</tr>
						<tr>
							<td>
								<input id="verify-email-input" value={this.props.email} onChange={this.submissionEnter} onKeyPress={this.submissionEnter} type="text" name="email"></input><br/>
								<p className="verify-email">valid e-mail under 40 characters</p>
							</td>
						</tr>
						<tr>
							<th><p className="verify-password">Password</p></th>
						</tr>
						<tr>
							<td>
								<input id="verify-password-input" value={this.props.password} onChange={this.submissionEnter} onKeyPress={this.submissionEnter} type="password" name="password"></input><br/>
								<p className="verify-password">between 6 to 12 characters</p>
							</td>
						</tr>
						<tr>
							<th><p className="verify-password-confirm">Password Confirmation</p></th>
						</tr>
						<tr>
							<td>
								<input id="verify-password-confirm-input" value={this.props.verifyPassword} onChange={this.submissionEnter} onKeyPress={this.submissionEnter} type="password" name="verify-password"></input><br/>
								<p className="verify-password-confirm">matches password</p>
							</td>
						</tr>
						<tr>
							<td id="accept-button"><ActionButton onClick={this.submission} text={this.props.formType} /></td>
						</tr>
					</tbody>
				</table>
			</div>
		)
	}
	signInForm() {
		return (
			<div id="signup-table-rails">
				<table id="signup-table">
					<tbody>
						<tr>
							<th><div className="idea-icon-form"></div><h2 className="form-title">{this.props.formType}</h2></th>
						</tr>
						<tr>
							<th><p className="verify-email">E-mail</p></th>
						</tr>
						<tr>
							<td>
								<input id="verify-email-input" value={this.props.email} onChange={this.submissionEnter} onKeyPress={this.submissionEnter} type="text" name="email"></input>
							</td>
						</tr>
						<tr>
							<th><p className="verify-password">Password</p></th>
						</tr>
						<tr>
							<td>
								<input id="verify-password-input" value={this.props.password} onChange={this.submissionEnter} onKeyPress={this.submissionEnter} type="password" name="password"></input>
							</td>
						</tr>
						<tr>
							<td><div id="accept-button"><ActionButton id="accept-button" onClick={this.submission} text={this.props.formType} /></div></td>
						</tr>
						<p id="signup-now">No account? <a href="/signup">Sign up now!</a></p>
					</tbody>
				</table>
			</div>
		)
	}

	render() {
		const { formType } = this.props;

		// CSS styles:
		// BLUE:
		// id1.style.borderColor = "#00aced";
		// id2.style.color = "#0080ff";
		// id3.style.display = "inline";
		// GREEN:
		// id1.style.borderColor = "#32CD32";
		// id2.style.color = "#32CD32";
		// id3.style.display = "none";
		// <BUTTON>:
		// GREEN
		// 	buttonColor.style.color = "#FFFFFF";
		// 	buttonColor.style.backgroundColor = "#32CD32";
		//  GREY
		// 	buttonColor.style.color = "#68838B";
		// 	buttonColor.style.backgroundColor = "#D3D3D3";


		if(formType === "Sign up")
			return this.signUpForm();
		else
			return this.signInForm();
	}
}

SignupSigninForm.propTypes = {
	formType: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	email: PropTypes.string.isRequired,
	password: PropTypes.string.isRequired,
	verifyPassword: PropTypes.string.isRequired
};

export default SignupSigninForm;
