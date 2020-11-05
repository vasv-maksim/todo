import { Component, OnInit, Inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { deleteTaskAction } from '../../store/todo.action';
import { Task } from '../../store/todo.models';

@Component({
  selector: 'todo-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.scss'],
})
export class DeleteDialogComponent implements OnInit {
  taskName: string = 'Новая задача';

  constructor(
    private store: Store,
    private dialogRef: MatDialogRef<DeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Task,
  ) {}

  ngOnInit(): void {}

  deleteTask() {
    this.store.dispatch(deleteTaskAction(this.data));
    this.dialogRef.close();
  }

  cancel() {
    this.dialogRef.close();
  }
}
