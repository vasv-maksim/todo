import { createReducer, on } from '@ngrx/store';

// import { test } from './todo.action';
import { Task } from './models';

export const initialState: Task[] = [
  {
    id: 1,
    name: 'Найти ананас',
    done: true,
  },
  {
    id: 2,
    name: 'Выбрать ананас',
    done: true,
  },
  {
    id: 3,
    name: 'Купить ананас',
    done: true,
  },
  {
    id: 4,
    name: 'Донести ананас',
    done: false,
  },
  {
    id: 5,
    name: 'Положить ананас в холодильник',
    done: false,
  },
  {
    id: 6,
    name: 'Достать ананас из холодильника',
    done: false,
  },
  {
    id: 7,
    name: 'Почистить ананас',
    done: false,
  },
  {
    id: 8,
    name: 'Разрезать ананас',
    done: false,
  },
  {
    id: 9,
    name: 'Съесть ананас',
    done: false,
  },
];

const _todoReducer = createReducer(
  initialState,
  // on(test, (state) => state),
);

export function todoReducer(state, action) {
  return _todoReducer(state, action);
}
