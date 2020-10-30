import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import { toggleDoneAction } from '../store/todo.action';
import { Task } from '../store/todo.models';

@Component({
  selector: 'todo-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.scss'],
})
export class DoneComponent implements OnInit {
  @Input() task: Task;

  constructor(private store: Store) {}

  ngOnInit(): void {}

  doneTask() {
    this.store.dispatch(toggleDoneAction(this.task));
  }
}
