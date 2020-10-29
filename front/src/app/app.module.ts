import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';

import { TodoModule } from './todo-module/todo.module';

import { AppComponent } from './app.component';
import { appReducer } from './store/app.reducer';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TodoModule,
    StoreModule.forRoot(appReducer),
    environment.production ? [] : StoreDevtoolsModule.instrument({}),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
