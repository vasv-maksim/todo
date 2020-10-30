import { createSelector } from '@ngrx/store';

import { Task } from './todo.models';

const selectFeature = state => state;

export const selectTodo = createSelector(
  selectFeature,
  (state): Task[] => state.todo,
);
