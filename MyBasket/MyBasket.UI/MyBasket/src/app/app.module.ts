import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { LoginModule } from './modules/login/login.module';
import { AppRoutingModule } from './shared/app-routing/app-routing.module';
import { SharedModule } from './shared/shared.module';
import { MainPageModule} from './modules/main-page/main-page.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    HttpModule,
    BrowserModule,
    LoginModule,
    AppRoutingModule,
    SharedModule,
    MainPageModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
