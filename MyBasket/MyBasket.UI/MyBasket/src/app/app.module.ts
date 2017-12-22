import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UserLoginComponentComponent } from './user-login-component/user-login-component.component';


@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
