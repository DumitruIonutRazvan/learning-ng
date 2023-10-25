import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputListComponent } from './input-list/input-list.component';
import { TestListComponent } from './test-list/test-list.component';

@NgModule({
  declarations: [AppComponent, InputListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TestListComponent
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
