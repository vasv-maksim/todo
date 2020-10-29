import { createSelector } from '@ngrx/store';

import { App } from '../../store/models';
import { Task } from './models';

const selectFeature = (state: App): App => state;

export const selectTodo = createSelector(
  selectFeature,
  (state: App): Task[] => state.todo,
);
