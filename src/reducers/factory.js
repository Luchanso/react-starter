import { handleActions } from 'redux-actions';

/**
 * Default object additive factory
 */
export const objectData = (initialState, actions, otherActions) => handleActions({
  [actions.REQUEST]: state => ({
    ...state,
    loading: true,
    error: false,
    done: false,
  }),
  [actions.SUCCESS]: (state, action) => ({
    ...state,
    loading: false,
    error: false,
    done: true,
    data: { ...action.payload },
  }),
  [actions.ERROR]: state => ({
    ...state,
    loading: false,
    error: true,
    done: false,
  }),
  ...otherActions,
}, initialState);

/**
 * Default list additive factory
 */
export const listData = (initialState, actions, otherActions) => handleActions({
  [actions.REQUEST]: state => ({
    ...state,
    done: false,
    error: false,
    loading: true,
  }),
  [actions.SUCCESS]: (state, action) => ({
    ...state,
    loading: false,
    error: false,
    done: true,
    maxSize: action.maxSize,
    list: [...action.payload],
  }),
  [actions.ERROR]: state => ({
    ...state,
    loading: false,
    done: false,
    error: true,
  }),
  ...otherActions,
}, initialState);
