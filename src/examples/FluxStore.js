import { EventEmitter } from 'events';
import FluxDispatcher from './FluxDispatcher';
import FluxConstants from './FluxConstants';

let data = "[default]";

// store 构造
const store = Object.assign({}, EventEmitter.prototype, {
	getData: function() {
		return data;
	},

	emitChange: function() {
		this.emit('change');
	},

	addChangeListener: function(callback) {
		this.on('change', callback);
	},

	removeChangeListener: function(callback) {
		this.removeListener('change', callback);
	}
});

// Dispatcher 注册
FluxDispatcher.register((action) => {
	switch(action.type) {
		case FluxConstants.NEW:
			data = action.value + "+ 数据操作所需的逻辑处理...";
			store.emitChange();
			break;
		case FluxConstants.UPDATE:
			data = action.value + "+ 数据操作所需的逻辑处理...";
			store.emitChange();
			break;
		default:
			break
	}

});
export default store;