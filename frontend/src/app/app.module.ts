import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpModule } from "@angular/http";
import {
  MatButtonModule,
  MatCheckboxModule,
  MatCardModule,
  MatInputModule,
  MatSnackBarModule,
  MatToolbarModule

} from '@angular/material';

import {WebService} from './web.service';


import { AppComponent } from './app.component';
import { MessagesComponent } from './messages/messages.component';
import { NewMessageComponent } from './new-message/new-message.component';


@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    NewMessageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
      MatButtonModule,
      MatCheckboxModule,
      MatCardModule, 
      MatInputModule,
      MatSnackBarModule,
      MatToolbarModule
    
  ],
  providers: [WebService],
  bootstrap: [AppComponent]
})
export class AppModule { }
