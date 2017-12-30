import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { LoginModule } from './modules/login/login.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    LoginModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
