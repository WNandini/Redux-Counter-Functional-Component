import { legacy_createStore as createStore} from 'redux';
import rootReduce from './reducer';

const store = createStore(
    rootReduce, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;