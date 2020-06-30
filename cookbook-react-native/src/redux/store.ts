import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import Reactotron from 'reactotron-react-native';
import thunk from 'redux-thunk';
import { fetchMiddleware, configureMergeState } from 'redux-recompose';
import { ImmutableObject } from 'seamless-immutable';
import { State } from '@interfaces/reduxInterfaces';
import auth from '@screensRecipes/login/redux/auth/reducer';

configureMergeState((state: ImmutableObject<State>, diff: State) => state.merge(diff));

const reducers = combineReducers({
  auth
});

const middlewares = [];
const enhancers = [];

/* ------------- Thunk Middleware ------------- */
middlewares.push(thunk);

/* ------------- Redux-Recompose Middleware ------------- */
middlewares.push(fetchMiddleware);

/* ------------- Assemble Middleware ------------- */
enhancers.push(applyMiddleware(...middlewares));

if (__DEV__ && Reactotron.createEnhancer) enhancers.push(Reactotron.createEnhancer(true));

// In DEV mode, we'll create the store through Reactotron
const store = createStore(reducers, compose(...enhancers));

if (__DEV__ && Reactotron.setReduxStore) Reactotron.setReduxStore(store);

export default store;
