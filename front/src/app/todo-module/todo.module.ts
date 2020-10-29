import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';

import { MaterialModule } from '../material-module/material.module';
import { SharedModule } from '../shared-module/shared.module';

import { TodoComponent } from './todo/todo.component';
import { TasksComponent } from './tasks/tasks.component';
import { reducer } from './store/todo.reducer';
import { AddComponent } from './add/add.component';

const routes: Routes = [
  { path: '', component: TodoComponent },
  { path: 'todo', component: TodoComponent },
];

@NgModule({
  declarations: [TodoComponent, TasksComponent, AddComponent],
  imports: [
    MaterialModule,
    SharedModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('todo', reducer),
  ],
  exports: [TodoComponent],
})
export class TodoModule {}
