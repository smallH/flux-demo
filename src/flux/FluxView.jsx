import React from 'react';
import FluxAcion from './FluxAcion';

class FluxView extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.newHandle = this.newHandle.bind(this);
		this.updateHandle = this.updateHandle.bind(this);
	}

	newHandle() {
		FluxAcion.newData("[new action]");
	}

	updateHandle() {
		FluxAcion.updateData("[update action]");
	}

	render() {
		return(
			<div>
				current data is ======= {this.props.data}
				<div>
					<button onClick={this.newHandle}>execute action [New] </button>
					<button onClick={this.updateHandle}>execute action [Update] </button>
					<button>...</button>
				</div>
      		</div>
		);
	}
}

export default FluxView;