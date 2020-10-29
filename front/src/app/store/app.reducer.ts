import { createReducer } from '@ngrx/store';

import { App } from './models';

export const initialState: App = {
  todo: [],
};

const _appReducer = createReducer(initialState);

export function appReducer(state, action) {
  return _appReducer(state, action);
}
