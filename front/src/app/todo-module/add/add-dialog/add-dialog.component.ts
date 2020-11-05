import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MatDialogRef } from '@angular/material/dialog';
import { v4 as uuid } from 'uuid';

import { addTaskAction } from '../../store/todo.action';
import { Task } from '../../store/todo.models';

@Component({
  selector: 'todo-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.scss'],
})
export class AddDialogComponent implements OnInit {
  taskName: string = 'Новая задача';

  constructor(
    private store: Store,
    private dialogRef: MatDialogRef<AddDialogComponent>,
  ) {}

  ngOnInit(): void {}

  addTask() {
    const task: Task = { id: uuid(), name: this.taskName, done: false };
    this.store.dispatch(addTaskAction(task));
    this.dialogRef.close();
  }

  cancel() {
    this.dialogRef.close();
  }
}
