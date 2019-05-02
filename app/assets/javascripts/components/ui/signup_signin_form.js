import React, { Component } from 'react';
import { sanitization } from '../input_sanitization.js';
import { eventListenerMacro } from '../helpers/event_listeners.js';

class SignupSigninForm extends Component {
	constructor(props) {
		super(props);

		this.submission = this.submission.bind(this);
		this.submissionEnter = this.submissionEnter.bind(this);
		this.nameColor = this.nameColor.bind(this);
		this.emailColor = this.emailColor.bind(this);
		this.passwordColor = this.passwordColor.bind(this);
		this.verifyPasswordColor = this.verifyPasswordColor.bind(this);
	}
	nameColor(e) {
		let name = e.target.value;
		let nameLength = name.length;
		let reg = /^[a-zA-Z]+$/;

		if (this.props.nameCurrentColor === 'Grey')
			this.props.changeNameColor('Blue');

		if (nameLength > 0 && nameLength <= 12 && reg.test(String(name)))
			this.props.changeNameColor('Green');
		else
			this.props.changeNameColor('Blue');

		this.props.setName(name);
	}
	emailColor(e) {
		let email = e.target.value;
		let emailLength = email.length; 
		let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		if (this.props.emailCurrentColor === 'Grey')
			this.props.changeEmailColor('Blue');

 		if (re.test(String(email)) && emailLength > 0 && emailLength < 40)
			this.props.changeEmailColor('Green');
		else
			this.props.changeEmailColor('Blue');

		this.props.setEmail(email);
	}
	passwordColor(e) {
		let password = e.target.value;
		let verifyPassword = this.props.verifyPassword;

		if (this.props.passCurrentColor === 'Grey')
			this.props.changePassColor('Blue');

		if (password == verifyPassword && password != "" && password >= 6 && password <= 12)
			this.props.changePassColor('Green');
		else
			this.props.changePassColor('Blue');

		this.props.setPassword(password);
	}
	verifyPasswordColor(e) {
		let password = this.props.password;
		let verifyPassword = e.target.value;

		if (this.props.vPassCurrentColor === 'Grey')
			this.props.changeVpassColor('Blue');

		if (password == verifyPassword && password != "" && password >= 6 && password <= 12) 
			this.props.changeVpassColor('Green');
		else
			this.props.changeVpassColor('Blue');

		this.props.setVerifyPassword(verifyPassword);
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
		if (e.key === 'Enter')
			this.submission();
	}
	render() {
		const { formType,nameCurrentColor,emailCurrentColor,passCurrentColor,vPassCurrentColor } = this.props;
	    let colorName, colorNameBorder, colorNameDisplay;
	    let colorEmail, colorEmailBorder, colorEmailDisplay;	    
	    let colorPassword, colorPasswordBorder, colorPasswordDisplay;
	    let colorVpass, colorVpassBorder, colorVpassDisplay;
	    let colorButton;

		if (nameCurrentColor === 'Blue') {
			colorName = {color: "#0080ff" };
			colorNameBorder = { borderColor: "#00aced" };
			colorNameDisplay = { display: "inline" };
		} else if (nameCurrentColor === 'Green') {
			colorName = {color: "#32CD32" };
			colorNameBorder = { borderColor: "#32CD32" };
			colorNameDisplay = { display: "none" };
		}

		colorNameBorder = {
			borderColor: "#00aced"
		};

		// style tag will be call by reference

	    // if (nameCurrentColor === 'Green' && emailCurrentColor === 'Green' && passCurrentColor === 'Green' && vPassCurrentColor === 'Green') {
	    // 	colorButton = {

	    // 	};
	    // }

		// <BUTTON>:
		// GREEN
		// 	buttonColor.style.color = "#FFFFFF";
		// 	buttonColor.style.backgroundColor = "#32CD32";
		//  GREY
		// 	buttonColor.style.color = "#68838B";
		// 	buttonColor.style.backgroundColor = "#D3D3D3";
		//  note: on click if grey will now be blue

		if(formType === "Sign up") {
			return (
				<div id="signup-table-rails">
					<table id="signup-table">
						<tbody>
							<tr>
								<th><div className="idea-icon-form"></div><h2 className="form-title">{this.props.formType}</h2></th>
							</tr>
							<tr>
								<th><p className="verify-name" style={colorName}>User Name</p></th>
							</tr>
							<tr>
								<td>
									<input id="verify-name-input" style={colorNameBorder} value={this.props.name} onKeyPress={this.submissionEnter} onChange={this.nameColor} onClick={this.nameColor} type="text" name="name"></input><br/>
									<p className="verify-name" style={colorNameDisplay}>between 1 to 12 letters</p>
								</td>
							</tr>
							<tr>
								<th><p className="verify-email">E-mail</p></th>
							</tr>
							<tr>
								<td>
									<input id="verify-email-input" value={this.props.email} onKeyPress={this.submissionEnter} onChange={this.emailColor} onClick={this.emailColor} type="text" name="email"></input><br/>
									<p className="verify-email" style={colorEmailDisplay}>valid e-mail under 40 characters</p>
								</td>
							</tr>
							<tr>
								<th><p className="verify-password">Password</p></th>
							</tr>
							<tr>
								<td>
									<input id="verify-password-input" value={this.props.password} onKeyPress={this.submissionEnter} onChange={this.passwordColor} onClick={this.passwordColor} type="password" name="password"></input><br/>
									<p className="verify-password" style={colorPasswordDisplay}>between 6 to 12 characters</p>
								</td>
							</tr>
							<tr>
								<th><p className="verify-password-confirm">Password Confirmation</p></th>
							</tr>
							<tr>
								<td>
									<input id="verify-password-confirm-input" value={this.props.verifyPassword} onKeyPress={this.submissionEnter} onChange={this.verifyPasswordColor} onClick={this.verifyPasswordColor} type="password" name="verify-password"></input><br/>
									<p className="verify-password-confirm" style={colorVpassDisplay}>matches password</p>
								</td>
							</tr>
							<tr>
								<td id="accept-button"><ActionButton onClick={this.submission} text={this.props.formType} /></td>
							</tr>
						</tbody>
					</table>
				</div>
			)
		} else {
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
	}
}

SignupSigninForm.propTypes = {
	formType: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	email: PropTypes.string.isRequired,
	password: PropTypes.string.isRequired,
	verifyPassword: PropTypes.string.isRequired,
	nameCurrentColor: PropTypes.string.isRequired,
	emailCurrentColor: PropTypes.string.isRequired,
	passCurrentColor: PropTypes.string.isRequired,
	vPassCurrentColor: PropTypes.string.isRequired,
	changeNameColor: PropTypes.func.isRequired,
	changeEmailColor: PropTypes.func.isRequired,
	changePassColor: PropTypes.func.isRequired,
	changeVpassColor: PropTypes.func.isRequired
};

export default SignupSigninForm;
