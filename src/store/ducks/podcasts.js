import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/**
 * Action Types & Creators
 */
// STUDY_NOTE: actionType is created automatically with pattern: function name in uppercase separated by underline. Eg: loadRequest = LOAD_REQUEST
const { Types, Creators } = createActions({
  loadRequest: null,
  loadSuccess: ['data'], // STUDY_NOTE: 'data' is the action's parameter
  loadFailure: null,
});

/**
 * STUDY_NOTES:
 *
 * What we have in Types const?
 * Types: { LOAD_REQUEST, LOAD_SUCCESS, LOAD_FAILURE }
 *
 * What we have in Creators const?
 * Creators:
 *  loadRequest: () => ({ type: 'LOAD_REQUEST' })
 *  loadSuccess: ( data ) => ({ type: 'LOAD_SUCCESS', data })
 *  loadFailure: () => ({ type: 'LOAD_SUCCESS' })
 *
 * Note that 'data' parameter of loadSuccess isn't sent in 'payload' arg.
 */

export const PodcastsTypes = Types;
export default Creators;

/**
 * Initial state
 */
export const INITIAL_STATE = Immutable({
  data: [],
});
// STUDY_NOTE: Immutable is used to avoid INITIAL_STATE.data be setted with some value

/**
 * Reducer
 */
export const reducer = createReducer(INITIAL_STATE, {
  // [Types.LOAD_SUCCESS]: (state, action) => ({ ...state, data: action.data }), // Without Seamless-Immutable
  [Types.LOAD_SUCCESS]: (state, action) => state.merge({ data: action.data }), // With Seamless-Immutable
});
/**
 * Example of old reducer implementation:
 *
 * function reducer(state = INITIAL_STATE, action){
 *  switch(action.type) {
 *      case 'LOAD_REQUEST':
 *          return { ...state, loading: true };
 *  }
 * }
 */
