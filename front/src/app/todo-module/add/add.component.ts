import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { addTaskAction } from '../store/todo.action';

@Component({
  selector: 'todo-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {}

  addTask() {
    this.store.dispatch(
      addTaskAction({ id: 'd3wdwd', name: 'dwqd', done: false }),
    );
  }
}
