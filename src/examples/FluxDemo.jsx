import React from 'react';
import FluxView from './FluxView.jsx';
import FluxStore from './FluxStore.js';

class FluxDemo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: FluxStore.getData()
		};
		this.onChange = this.onChange.bind(this);
	}

	componentDidMount() {
		FluxStore.addChangeListener(this.onChange);
	}

	componentWillUnmount() {
		FluxStore.removeChangeListener(this.onChange);
	}

	onChange() {
		const newData = FluxStore.getData();
		this.setState({
			data: newData
		});
	}

	render() {
		return(
			<div>
				<FluxView data={this.state.data}/>
      		</div>
		);
	}
}

export default FluxDemo;