import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {CoreModule} from './core/core.module';
import {MainModule} from './main/main.module';
import {MainService} from './services/main.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    MainModule
  ],
  providers: [MainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
