import { Component, OnDestroy, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { selectTodo } from '../store/selectors';
import { Task } from '../store/models';

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

  drop(event: CdkDragDrop<Task[]>): void {
    moveItemInArray(this.tasks, event.previousIndex, event.currentIndex);
  }

  ngOnDestroy() {
    if (this.taskSub) {
      this.taskSub.unsubscribe();
    }
  }
}
