// import { createStore, combineReducers } from 'redux';

// const rootReducer = combineReducers({});
// const store = createStore(rootReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// export default store;



// import { createStore, combineReducers } from 'redux';

// import tasksReducer from './tasks/tasksReducer';

// const rootReducer = combineReducers({ tasks: tasksReducer });
// const store = createStore(rootReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// export default store;





import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './tasks/tasksReducer';

const store = configureStore({
  reducer: {
    tasks: tasksReducer
  }
});

export default store;