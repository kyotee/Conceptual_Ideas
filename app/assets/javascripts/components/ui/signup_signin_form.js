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
	nameColor() {
		let name = this.props.name;
		let nameLength = name.length;
		let reg = /^[a-zA-Z]+$/;

		if (nameLength > 0 && nameLength <= 12 && reg.test(String(name)))
			this.props.changeNameColor('Green');
		else
			this.props.changeNameColor('Blue');
	}
	emailColor() {
		let email = this.props.email;
		let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

 		if (re.test(String(email)) && email.length > 0 && email.length < 40)
			this.props.changeEmailColor('Green');
		else
			this.props.changeEmailColor('Blue');
	}
	passwordColor() {
		let password = this.props.password;
		let verifyPassword = this.props.verifyPassword;

		if (password == verifyPassword && password != "" && password >= 6 && password <= 12)
			this.props.changePassColor('Green');
		else
			this.props.changePassColor('Blue');
	}
	verifyPasswordColor() {
		let password = this.props.password;
		let verifyPassword = this.props.verifyPassword;

		if (password == verifyPassword && password !== "" && password >= 6 && password <= 12) 
			this.props.changeVpassColor('Green');
		else
			this.props.changeVpassColor('Blue');
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
	render() {
		const { formType,nameCurrentColor,emailCurrentColor,passCurrentColor,vPassCurrentColor } = this.props;
	    let colorName, colorNameBorder, colorNameDisplay;
	    let colorEmail, colorEmailBorder, colorEmailDisplay;	    
	    let colorPassword, colorPasswordBorder, colorPasswordDisplay;
	    let colorVpass, colorVpassBorder, colorVpassDisplay;
	    let colorButton;

	    let colorVariables = [[nameCurrentColor,colorName,colorNameBorder,colorNameDisplay],
	    					  [emailCurrentColor,colorEmail,colorEmailBorder,colorEmailDisplay],
	    					  [passCurrentColor,colorPassword,colorPasswordBorder,colorPasswordDisplay],
	    					  [vPassCurrentColor,colorVpass,colorVpassBorder,colorVpassDisplay]];

	    let blueTemplate = {
	    	color: "#0080ff"
	    };

	    let blueBorderTemplate = {
			borderColor: "#00aced"
	    };

	    let blueDisplayTemplate = {
	    	display: "inline"
	    };

	    let greenTemplate = {
	    	color: "#32CD32"
	    };

	    let greenBorderTemplate = {
			borderColor: "#32CD32"
	    };

	    let greenDisplayTemplate = {
	    	display: "none"
	    };

		for(let i = 0; i < colorVariables.length; i++) {
		    let inputField = colorVariables[i];

		    if (inputField[0] === 'Blue') {
		    	inputField[1] = blueTemplate;
		    	inputField[2] = blueBorderTemplate;
		    	inputField[3] = blueDisplayTemplate;	    	
		    } else if (inputField[0] === 'Green') {
		    	inputField[1] = greenTemplate;
		    	inputField[2] = greenBorderTemplate;
		    	inputField[3] = greenDisplayTemplate;
		    }
		}

	    if (nameCurrentColor === 'Green' && emailCurrentColor === 'Green' && passCurrentColor === 'Green' && vPassCurrentColor === 'Green') {
	    	colorButton = {

	    	};
	    }

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
								<th><p className="verify-name">User Name</p></th>
							</tr>
							<tr>
								<td>
									<input id="verify-name-input" value={this.props.name} onChange={this.submissionEnter} onKeyPress={this.submissionEnter} type="text" name="name"></input><br/>
									<p className="verify-name" style={colorNameDisplay}>between 1 to 12 letters</p>
								</td>
							</tr>
							<tr>
								<th><p className="verify-email">E-mail</p></th>
							</tr>
							<tr>
								<td>
									<input id="verify-email-input" value={this.props.email} onChange={this.submissionEnter} onKeyPress={this.submissionEnter} type="text" name="email"></input><br/>
									<p className="verify-email" style={colorEmailDisplay}>valid e-mail under 40 characters</p>
								</td>
							</tr>
							<tr>
								<th><p className="verify-password">Password</p></th>
							</tr>
							<tr>
								<td>
									<input id="verify-password-input" value={this.props.password} onChange={this.submissionEnter} onKeyPress={this.submissionEnter} type="password" name="password"></input><br/>
									<p className="verify-password" style={colorPasswordDisplay}>between 6 to 12 characters</p>
								</td>
							</tr>
							<tr>
								<th><p className="verify-password-confirm">Password Confirmation</p></th>
							</tr>
							<tr>
								<td>
									<input id="verify-password-confirm-input" value={this.props.verifyPassword} onChange={this.submissionEnter} onKeyPress={this.submissionEnter} type="password" name="verify-password"></input><br/>
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
