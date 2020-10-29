import { createSelector } from '@ngrx/store';

import { Task } from './models';

const selectFeature = (state) => state;

export const selectTodo = createSelector(
  selectFeature,
  (state): Task[] => state.todo,
);
