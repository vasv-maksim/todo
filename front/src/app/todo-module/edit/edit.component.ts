import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { EditDialogComponent } from './edit-dialog/edit-dialog.component';
import { Task } from '../store/todo.models';

@Component({
  selector: 'todo-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  @Input() task: Task;

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  editTask() {
    this.dialog.open(EditDialogComponent, {
      width: '450px',
      data: this.task,
    });
  }
}
