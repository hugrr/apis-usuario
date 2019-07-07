import React from "react";
import ModalUser from "./modal.js";
//create your first component
export class Home extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			info: []
		};
	}

	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then(resp => {
				return resp.json();
			})
			.then(data => {
				this.setState({ info: data });
			});
	}

	render() {
		let datos1 = this.state.info.map((item, i) => {
			return (
				<div key={i}>
					<a
						href=""
						className="list-group-item list-group-item-action "
						data-toggle="modal"
						data-target={"#exampleModalLong" + item.id}>
						{item.company.name}
					</a>
					<ModalUser user={item} />
				</div>
			);
		});
		return (
			<div className="container ">
				<div>{datos1}</div>
			</div>
		);
	}
}
