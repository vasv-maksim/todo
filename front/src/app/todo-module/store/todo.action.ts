import { createAction, props } from '@ngrx/store';

import { Task } from './models';

export const addTaskAction = createAction('[TODO ADD] ADD', props<Task>());
