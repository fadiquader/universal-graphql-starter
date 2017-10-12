import { combineReducers } from 'redux';
import runtime from './runtime';

export default function createRootReducer({ apolloClient }) {
  return combineReducers({
    apollo: apolloClient.reducer(),
    runtime,
  });
}
