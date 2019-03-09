import React, { Component } from 'react';

class MonitoringUsers extends Component {
	componentDidMount() {

	}
	tableType(list, users) {
		if (list == true) {
			users.sort(function(a,b) {return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0);} );
			var rows = [];

			for (var i = 0; i < users.length; i++) {
				rows.push(
					<tr>
						<td>{users[i].name}</td>
						<td>{users[i].email}</td>
						<td><a className="monitor-link" href={"/user_monitoring_profile/"+users[i].id}>activty</a></td>
						<td><a className="monitor-link" href={"/user_monitoring_delete/"+users[i].id} data-method="delete">delete</a></td>
					</tr>
				);		
			}
			return (
				<div>
					<table id="user-info">
						<tbody>			
							<tr>
								<th>User</th>
								<th>E-mail</th>
								<th></th>
								<th></th>
							</tr>
							{rows}
						</tbody>
					</table>
				</div>
			)
		} else {
			var logArr = this.props.logs;
			var rows = [];

			for (var i = 0; i < logArr.length; i++) {
				rows.push(
					<tr>
						<td>{logArr[i].controller}</td>
						<td>{logArr[i].action}</td>
						<td>{logArr[i].ip_address}</td>
						<td>{logArr[i].created_at}</td>					
					</tr>
				);		
			}
			return (
				<div>
					<p id="monitor-name">{users.name}</p>

					<table id="user-info">
						<tbody>			
							<tr>
								<th>Controller</th>
								<th>Action</th>
								<th>IP Address</th>
								<th>Time</th>
							</tr>
							{rows}
						</tbody>
					</table>
				</div>
			)
		}

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
				<br/>

				{this.tableType(this.props.list, this.props.users)}
			</div>
		)
	}
}

MonitoringUsers.propTypes = {
	users: PropTypes.array,
	list: PropTypes.bool,
	logs: PropTypes.array
};

export default MonitoringUsers;
