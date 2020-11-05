import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { AddDialogComponent } from './add-dialog/add-dialog.component';

@Component({
  selector: 'todo-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  addTask() {
    this.dialog.open(AddDialogComponent, {
      width: '450px',
    });
  }
}
