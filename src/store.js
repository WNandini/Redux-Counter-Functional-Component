import { legacy_createStore as createStore } from 'redux';
import rootReduce from './reducer';

const store = createStore(rootReduce);

export default store;