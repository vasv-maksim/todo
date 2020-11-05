import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { Task } from '../store/todo.models';

@Component({
  selector: 'todo-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss'],
})
export class DeleteComponent implements OnInit {
  @Input() task: Task;

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  deleteTask() {
    this.dialog.open(DeleteDialogComponent, {
      width: '450px',
      data: this.task,
    });
  }
}
