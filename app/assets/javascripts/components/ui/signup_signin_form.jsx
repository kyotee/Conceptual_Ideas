window.Post = createReactClass({
	render: function() {
		return <h1>{this.props.title}</h1>
	}
})


window.SignupSigninForm = createReactClass({
	render: function () {
		return (
			<div id="signup-table-rails">
				<table id="signup-table">
					<tbody>
					<tr>
						<th><p>User Name</p></th>
					</tr>
					<tr>
						<td id="verify-name">
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


