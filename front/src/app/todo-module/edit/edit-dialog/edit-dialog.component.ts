import { Component, OnInit, Inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { editTaskAction } from '../../store/todo.action';
import { Task } from '../../store/todo.models';

@Component({
  selector: 'todo-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss'],
})
export class EditDialogComponent implements OnInit {
  taskName: string;

  constructor(
    private store: Store,
    private dialogRef: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Task,
  ) {}

  ngOnInit(): void {
    this.taskName = this.data.name;
  }

  deleteTask() {
    const task: Task = { ...this.data, name: this.taskName };
    this.store.dispatch(editTaskAction(task));
    this.dialogRef.close();
  }

  cancel() {
    this.dialogRef.close();
  }
}
