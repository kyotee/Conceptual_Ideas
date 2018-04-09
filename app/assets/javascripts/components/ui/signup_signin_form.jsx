window.SignupSigninForm = createReactClass({
	signupEventListener(element, eventsList, action) {
		var events = eventsList.split(' ');

		for (var counter = 0, eventsList = events.length; counter < eventsList; counter++) {
			document.getElementById(element).addEventListener(events[counter], action);
		}
	},
	componentDidMount() {
		function buttonValidChecker() {
			var passColor = "rgb(50, 205, 50)";
			var nameCheck = document.getElementsByClassName('verify-name')[0].style.color == passColor;
			var emailCheck = document.getElementsByClassName('verify-email')[0].style.color == passColor;
			var passCheck = document.getElementsByClassName('verify-password')[0].style.color == passColor;
			var passVerCheck = document.getElementsByClassName('verify-password-confirm')[0].style.color == passColor;

			var buttonColor = document.getElementById('accept-button');

			if (nameCheck && emailCheck && passCheck && passVerCheck) {
				buttonColor.style.color = "#FFFFFF";
				buttonColor.style.backgroundColor = "#32CD32";
				buttonColor.addEventListener('mouseover', function() {
					buttonColor.style.transition = "transform .0.5s";
					buttonColor.style.transform = "scale(1.1)";
				});
				buttonColor.addEventListener('mouseout', function() {
					buttonColor.style.transition = "transform .0.5s";
					buttonColor.style.transform = "scale(1)";
				});
				buttonColor.addEventListener('click', function() {
					userCredentials = {
						user: {
							  name: document.getElementById('verify-name-input').value,
							  email: document.getElementById('verify-email-input').value,
							  password: document.getElementById('verify-password-input').value,
							  password_confirmation: document.getElementById('verify-password-confirm-input').value
							}
					};

					$.ajax({
						type: "POST",
						url: "/signup",
						data: userCredentials,
						success: function(data, textStatus, jqXHR) {
							console.log("Submission successful.");
						},
						error: function(jqXHR, textStatus, errorThrown) {
							console.log("Submission unsuccessful.");
						}
					});
				});
			}
			else {
				buttonColor.style.color = "#68838B";
				buttonColor.style.backgroundColor = "#D3D3D3";
				buttonColor.addEventListener('mouseover', function() {
					buttonColor.style.transition = "";
					buttonColor.style.transform = "";
				});
				buttonColor.addEventListener('mouseout', function() {
					buttonColor.style.transition = "";
					buttonColor.style.transform = "";
				});
			}
		}

		this.signupEventListener('verify-name-input', 'click keyup paste', function() {
			this.style.borderColor = "#00aced";

			var verifyNameColor = document.getElementsByClassName('verify-name')[0];
			var verifyNameDisplay = document.getElementsByClassName('verify-name')[1];

			verifyNameColor.style.color = "#0080ff";
			verifyNameDisplay.style.display = "inline";

			var nameLength = document.getElementById('verify-name-input').value.length;

			if (nameLength > 0 && nameLength <= 12) {
				this.style.borderColor = "#32CD32";

				verifyNameColor.style.color = "#32CD32";
				verifyNameDisplay.style.display = "none";

				buttonValidChecker();
			}
			else
				buttonValidChecker();
		});
		this.signupEventListener('verify-email-input', 'click keyup paste', function() {
			this.style.borderColor = "#00aced";

			var verifyEmailColor = document.getElementsByClassName('verify-email')[0];
			var verifyEmailDisplay = document.getElementsByClassName('verify-email')[1];

			verifyEmailColor.style.color = "#0080ff";
			verifyEmailDisplay.style.display = "inline";

			var emailValue = document.getElementById('verify-email-input').value;
			var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    	
    		if (re.test(String(emailValue)) && emailValue.length > 0 && emailValue.length < 40) {
				this.style.borderColor = "#32CD32";

				verifyEmailColor.style.color = "#32CD32";
				verifyEmailDisplay.style.display = "none";

				buttonValidChecker();
    		}
    		else
    			buttonValidChecker();
		});
		this.signupEventListener('verify-password-input', 'click keyup paste', function() {
			this.style.borderColor = "#00aced";

			var verifyPasswordColor = document.getElementsByClassName('verify-password')[0];
			var verifyPasswordDisplay = document.getElementsByClassName('verify-password')[1];

			verifyPasswordColor.style.color = "#0080ff";
			verifyPasswordDisplay.style.display = "inline";

			var passwordLength = document.getElementById('verify-password-input').value.length;

			if (document.getElementById('verify-password-input').value != document.getElementById('verify-password-confirm-input').value
				&& document.getElementsByClassName('verify-password-confirm')[0].style.color == "rgb(50, 205, 50)") {
				document.getElementsByClassName('verify-password-confirm')[0].style.color = "#0080ff";
				document.getElementById('verify-password-confirm-input').style.borderColor = "#00aced";
			}

			if(passwordLength >= 6 && passwordLength <= 12) {
				this.style.borderColor = "#32CD32";

				verifyPasswordColor.style.color = "#32CD32";
				verifyPasswordDisplay.style.display = "none";

				buttonValidChecker();				
			}
			else
				buttonValidChecker();
		});
		this.signupEventListener('verify-password-confirm-input', 'click keyup paste', function() {
			this.style.borderColor = "#00aced";
			buttonValidChecker();

			var verifyPasswordConfColor = document.getElementsByClassName('verify-password-confirm')[0];
			var verifyPasswordConfDisplay = document.getElementsByClassName('verify-password-confirm')[1];

			verifyPasswordConfColor.style.color = "#0080ff";
			verifyPasswordConfDisplay.style.display = "inline";

			var passwordValue = document.getElementById('verify-password-input').value;
			var passwordVerValue = document.getElementById('verify-password-confirm-input').value;

			if (passwordValue == passwordVerValue) {
				this.style.borderColor = "#32CD32";
				
				verifyPasswordConfColor.style.color = "#32CD32";
				verifyPasswordConfDisplay.style.display = "none";

				buttonValidChecker();			
			}
			else
				buttonValidChecker();
		});
	},

	render: function () {
		if(this.props.formType == "Sign up")
			// keep all fields; else only e-mail and password fields

		return (
			<div id="signup-table-rails">
				<table id="signup-table">
					<tbody>
						<tr>
							<th><h2 id="signup-title">Sign up</h2></th>
						</tr>

						<tr>
							<th><p className="verify-name">User Name</p></th>
						</tr>
						<tr>
							<td>
								<input id="verify-name-input" type="text" name="name"></input>
								<p className="verify-name">1 to 12 letters</p>
							</td>
						</tr>
						<tr>
							<th><p className="verify-email">E-mail</p></th>
						</tr>
						<tr>
							<td>
								<input id="verify-email-input" type="text" name="email"></input>
								<p className="verify-email">valid e-mail under 40 characters</p>
							</td>
						</tr>
						<tr>
							<th><p className="verify-password">Password</p></th>
						</tr>
						<tr>
							<td>
								<input id="verify-password-input" type="password" name="password"></input>
								<p className="verify-password">between 6 to 12 characters</p>
							</td>
						</tr>
						<tr>
							<th><p className="verify-password-confirm">Password Confirmation</p></th>
						</tr>
						<tr>
							<td>
								<input id="verify-password-confirm-input" type="password" name="verify-password"></input>
								<p className="verify-password-confirm">matches password</p>
							</td>
						</tr>
						<tr>
							<td><button id="accept-button">Sign up</button></td>
						</tr>
					</tbody>
				</table>
			</div>
		)
	}
})
