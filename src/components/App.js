import React from 'react';
import FluxDemo from '../examples/FluxDemo.jsx';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return(
			<div>
				<FluxDemo />
      		</div>
		);
	}
}

export default App;