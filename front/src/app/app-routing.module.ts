import { NgModule } from '@angular/core';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Routes, RouterModule } from '@angular/router';

import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  { path: '', component: TodoComponent },
  { path: 'todo', component: TodoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
