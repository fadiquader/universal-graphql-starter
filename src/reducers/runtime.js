// import { SET_RUNTIME_VARIABLE } from '../constants';

export default function runtime(state = { name: 'fadiqua' }, action) {
  switch (action.type) {
    case 'SET_RUNTIME_VARIABLE':
      return {
        ...state,
        name: action.payload,
      };
    default:
      return state;
  }
}
