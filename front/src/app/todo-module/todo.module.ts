import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaterialModule } from '../material-module/material.module';
import { SharedModule } from '../shared-module/shared.module';

import { TodoComponent } from './todo/todo.component';
import { TasksComponent } from './tasks/tasks.component';

const routes: Routes = [
  { path: '', component: TodoComponent },
  { path: 'todo', component: TodoComponent },
];

@NgModule({
  declarations: [TodoComponent, TasksComponent],
  imports: [MaterialModule, SharedModule, RouterModule.forChild(routes)],
  exports: [TodoComponent],
})
export class TodoModule {}
