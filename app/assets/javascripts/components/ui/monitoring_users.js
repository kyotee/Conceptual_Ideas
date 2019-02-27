import React, { Component } from 'react';

class MonitoringUsers extends Component {
	componentDidMount() {

	}
	render() {
		return (
			<div>
				<div class="app-title-space">
					<div class="app-titles">
						<div id="idea-icon-title"></div>
						<p class="app-title">User Monitoring</p>
					</div>
				</div>

				<table id="user-info">
					<tbody>			
						<tr>
							<th>Controller</th>
							<th>Action</th>
							<th>Time</th>
							<th>Approximate Duration</th>
						</tr>
						<tr>
							<td>User</td>
							<td>Index</td>
							<td>September 12, 2019</td>
							<td>12 minutes</td>
						</tr>
						<tr>
							<td>User</td>
							<td>Index</td>
							<td>September 18, 2019</td>
							<td>10 minutes</td>
						</tr>
					</tbody>
				</table>
			</div>
		)
	}
}

MonitoringUsers.propTypes = {
	users: PropTypes.array
};

export default MonitoringUsers;
