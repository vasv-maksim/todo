import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { selectTodo } from '../store/todo.selectors';
import { dropTaskAction } from '../store/todo.action';
import { Task, SwapIndexes } from '../store/todo.models';

@Component({
  selector: 'todo-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit, OnDestroy {
  tasks: Task[];

  taskSub: Subscription;

  constructor(private store: Store) {}

  ngOnInit() {
    this.initValues();
  }

  initValues(): void {
    this.taskSub = this.store
      .select(selectTodo)
      .subscribe((tasks: Task[]) => (this.tasks = tasks));
  }

  drop(event): void {
    const swapIndexes: SwapIndexes = {
      previous: event.previousIndex,
      current: event.currentIndex,
    };
    this.store.dispatch(dropTaskAction(swapIndexes));
  }

  ngOnDestroy() {
    if (this.taskSub) {
      this.taskSub.unsubscribe();
    }
  }
}
