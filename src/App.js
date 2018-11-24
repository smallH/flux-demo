import React from 'react';
import FluxDemo from './flux/FluxDemo.jsx';

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