window.Post = createReactClass({
	render: function() {
		return <h1>{this.props.title}</h1>
	}
})


window.SignupSigninForm = createReactClass({
	signupEventListener(element, eventsList, action) {
		var events = eventsList.split(' ');

		for (var counter = 0, eventsList = events.length; counter < eventsList; counter++) {
			document.getElementById('verify-name').addEventListener(events[counter], action);
		}
	},
	highlight() {
		this.signupEventListener('verify-name', 'keypress paste', function() {alert("hello");});
	},

	render: function () {
		if(this.props.formType == "Sign up")
			alert("This is the signup form.");

		return (
			<div id="signup-table-rails">
				<table id="signup-table">
					<tbody>
					<tr>
						<th><p>User Name</p></th>
					</tr>
					<tr>
						<td id="verify-name" onChange={this.highlight} >
							<input type="text" name="name"></input>
							<p>1 to 12 letters</p>
						</td>
					</tr>
					<tr>
						<th><p>E-mail</p></th>
					</tr>
					<tr>
						<td id="verify-email">
							<input type="text" name="email"></input>
							<p>valid e-mail under 40 characters</p>
						</td>
					</tr>
					<tr>
						<th><p>Password</p></th>
					</tr>
					<tr>
						<td id="verify-password">
							<input type="password" name="password"></input>
							<p>between 6 to 12 characters</p>
						</td>
					</tr>
					<tr>
						<th><p>Password Confirmation</p></th>
					</tr>
					<tr>
						<td id="verify-password-confirm">
							<input type="password" name="verify-password"></input>
							<p>matches password</p>
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
