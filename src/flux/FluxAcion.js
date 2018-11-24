import FluxConstants from './FluxConstants';
import FluxDispatcher from './FluxDispatcher';

const FluxAcion = {
	newData(data) {
		// Dispatcher 触发
		FluxDispatcher.dispatch({
			type: FluxConstants.NEW,
			value: data
		});
	},
	updateData(data) {
		// Dispatcher 触发
		FluxDispatcher.dispatch({
			type: FluxConstants.UPDATE,
			value: data
		});
	}
}

export default FluxAcion;