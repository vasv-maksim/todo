import { createReducer, on, Action } from '@ngrx/store';

import { addTaskAction } from './todo.action';
import { Task } from './models';

export const initialState: Task[] = [
  {
    id: 'id1',
    name: 'Найти ананас',
    done: true,
  },
  {
    id: 'id2',
    name: 'Выбрать ананас',
    done: true,
  },
  {
    id: 'id3',
    name: 'Купить ананас',
    done: true,
  },
  {
    id: 'id4',
    name: 'Донести ананас',
    done: false,
  },
  {
    id: 'id5',
    name: 'Положить ананас в холодильник',
    done: false,
  },
  {
    id: 'id6',
    name: 'Достать ананас из холодильника',
    done: false,
  },
  {
    id: 'id7',
    name: 'Почистить ананас',
    done: false,
  },
  {
    id: 'id8',
    name: 'Разрезать ананас',
    done: false,
  },
  {
    id: 'id9',
    name: 'Съесть ананас',
    done: false,
  },
];

const todoReducer = createReducer(
  initialState,
  on(addTaskAction, (state: Task[], task: Task) => [...state, task]),
);

export function reducer(state, action: Action) {
  return todoReducer(state, action);
}
