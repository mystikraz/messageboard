import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


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
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';


const routes = [
  {
  path: '',
  component: HomeComponent
  },
  {
  path: 'messages',
  component: MessagesComponent
  },
  {
  path: 'messages/:name',
  component: MessagesComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    NewMessageComponent,
    NavComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
      MatButtonModule,
      MatCheckboxModule,
      MatCardModule,
      MatInputModule,
      MatSnackBarModule,
      MatToolbarModule,
    RouterModule.forRoot(routes)
  ],
  providers: [WebService],
  bootstrap: [AppComponent]
})
export class AppModule { }
