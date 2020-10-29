import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';

import { MaterialModule } from '../material-module/material.module';
import { SharedModule } from '../shared-module/shared.module';

import { TodoComponent } from './todo/todo.component';
import { TasksComponent } from './tasks/tasks.component';
import { todoReducer } from './store/todo.reducer';

const routes: Routes = [
  { path: '', component: TodoComponent },
  { path: 'todo', component: TodoComponent },
];

@NgModule({
  declarations: [TodoComponent, TasksComponent],
  imports: [
    MaterialModule,
    SharedModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('todo', todoReducer),
  ],
  exports: [TodoComponent],
})
export class TodoModule {}
