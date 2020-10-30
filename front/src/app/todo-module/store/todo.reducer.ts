import { createReducer, on, Action } from '@ngrx/store';
import produce from 'immer';

import {
  addTaskAction,
  dropTaskAction,
  deleteTaskAction,
  editTaskAction,
  toggleDoneAction,
} from './todo.action';
import { Task, SwapIndexes } from './todo.models';

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
  on(editTaskAction, (state: Task[], task: Task) => {
    const nextState = produce(state, draftState => {
      draftState.forEach(x => {
        if (x.id === task.id) {
          x.name = task.name;
        }
      });
    });
    return nextState;
  }),
  on(toggleDoneAction, (state: Task[], task: Task) => {
    const nextState = produce(state, draftState => {
      draftState.forEach(x => {
        if (x.id === task.id) {
          x.done = !x.done;
        }
      });
    });
    return nextState;
  }),
  on(deleteTaskAction, (state: Task[], task: Task) => [
    ...state.filter((x: Task) => x.id !== task.id),
  ]),
  on(dropTaskAction, (state: Task[], swap: SwapIndexes) => {
    const { previous, current } = swap;
    const clamp = (value: number, max: number): number =>
      Math.max(0, Math.min(max, value));
    const from = clamp(previous, state.length - 1);
    const to = clamp(current, state.length - 1);

    if (from === to) {
      return;
    }

    const target = state[from];
    const delta = to < from ? -1 : 1;
    const nextState = [...state];

    for (let i = from; i !== to; i += delta) {
      nextState[i] = nextState[i + delta];
    }

    nextState[to] = target;

    return nextState;
  }),
);

export function reducer(state, action: Action) {
  return todoReducer(state, action);
}
