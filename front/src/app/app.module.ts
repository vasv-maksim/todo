import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { MaterialModule } from './material-module/material.module';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { TasksComponent } from './tasks/tasks.component';

@NgModule({
  declarations: [AppComponent, TodoComponent, TasksComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
