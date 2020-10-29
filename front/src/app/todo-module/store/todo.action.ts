import { createAction, props } from '@ngrx/store';

import { Task, SwapIndexes } from './models';

export const addTaskAction = createAction('[TODO ADD] ADD', props<Task>());
export const dropTaskAction = createAction(
  '[TODO Task] DROP',
  props<SwapIndexes>(),
);
