import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { MaterialModule } from '@material/material.module';
import { SharedModule } from '@shared/shared.module';

import { TodoComponent } from '@todo/todo/todo.component';
import { TasksComponent } from '@todo/tasks/tasks.component';
import { reducer } from '@todo/store/todo.reducer';
import { AddComponent } from '@todo/add/add.component';
import { AddDialogComponent } from '@todo/add/add-dialog/add-dialog.component';
import { DeleteComponent } from '@todo/delete/delete.component';
import { DeleteDialogComponent } from '@todo/delete/delete-dialog/delete-dialog.component';
import { EditComponent } from '@todo/edit/edit.component';
import { EditDialogComponent } from '@todo/edit/edit-dialog/edit-dialog.component';
import { DoneComponent } from '@todo/done/done.component';

const routes: Routes = [
  { path: '', component: TodoComponent },
  { path: 'todo', component: TodoComponent },
];

@NgModule({
  declarations: [
    TodoComponent,
    TasksComponent,
    AddComponent,
    AddDialogComponent,
    DeleteComponent,
    DeleteDialogComponent,
    EditComponent,
    EditDialogComponent,
    DoneComponent,
  ],
  imports: [
    MaterialModule,
    SharedModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('todo', reducer),
    EffectsModule.forFeature([]),
  ],
  exports: [TodoComponent],
})
export class TodoModule {}
