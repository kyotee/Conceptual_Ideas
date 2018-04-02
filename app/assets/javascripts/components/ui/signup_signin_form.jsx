window.SignupSigninForm = createReactClass({
	signupEventListener(element, eventsList, action) {
		var events = eventsList.split(' ');

		for (var counter = 0, eventsList = events.length; counter < eventsList; counter++) {
			document.getElementById(element).addEventListener(events[counter], action);
		}
	},
	componentDidMount() {
		this.signupEventListener('verify-name-input', 'click keyup paste', function() {
			this.style.borderColor = "#00aced";
			document.getElementsByClassName('verify-name')[0].style.color = "#0080ff";
			document.getElementsByClassName('verify-name')[1].style.display = "inline";

			var nameLength = document.getElementById('verify-name-input').value.length;

			if (nameLength > 0 && nameLength <= 12) {
				this.style.borderColor = "#32CD32";
				document.getElementsByClassName('verify-name')[0].style.color = "#32CD32";
				document.getElementsByClassName('verify-name')[1].style.display = "none";
			}
		});
		this.signupEventListener('verify-email-input', 'click keyup paste', function() {
			this.style.borderColor = "#00aced";
			document.getElementsByClassName('verify-email')[0].style.color = "#0080ff";
			document.getElementsByClassName('verify-email')[1].style.display = "inline";

			var emailValue = document.getElementById('verify-email-input').value;
			var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    	
    		if (re.test(String(emailValue).toLowerCase()) && emailValue.length > 0 && emailValue.length < 40) {
				this.style.borderColor = "#32CD32";
				document.getElementsByClassName('verify-email')[0].style.color = "#32CD32";
				document.getElementsByClassName('verify-email')[1].style.display = "none";
    		}
		});
		this.signupEventListener('verify-password-input', 'click keyup paste', function() {
			this.style.borderColor = "#00aced";
			document.getElementsByClassName('verify-password')[0].style.color = "#0080ff";
			document.getElementsByClassName('verify-password')[1].style.display = "inline";
		});
		this.signupEventListener('verify-password-confirm-input', 'click keyup paste', function() {
			this.style.borderColor = "#00aced";
			document.getElementsByClassName('verify-password-confirm')[0].style.color = "#0080ff";
			document.getElementsByClassName('verify-password-confirm')[1].style.display = "inline";
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
							<td><button id="accept-button">Submit</button></td>
						</tr>
					</tbody>
				</table>
			</div>
		)
	}
})
