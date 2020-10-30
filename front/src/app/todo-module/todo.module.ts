import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { MaterialModule } from '../material-module/material.module';
import { SharedModule } from '../shared-module/shared.module';

import { TodoComponent } from './todo/todo.component';
import { TasksComponent } from './tasks/tasks.component';
import { reducer } from './store/todo.reducer';
import { AddComponent } from './add/add.component';
import { AddDialogComponent } from './add-dialog/add-dialog.component';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { DeleteComponent } from './delete/delete.component';
import { EditComponent } from './edit/edit.component';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';

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
    DeleteDialogComponent,
    DeleteComponent,
    EditComponent,
    EditDialogComponent,
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
